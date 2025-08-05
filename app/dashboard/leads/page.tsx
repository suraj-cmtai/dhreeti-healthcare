"use client";

import { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Calendar, 
  MoreHorizontal, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare,
  CheckCircle2,
  XCircle,
  Clock,
  UserRound,
  Edit,
  Trash2,
  AlertCircle,
  ArrowUpDown,
  ClipboardList,
  ArrowLeft
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Link from 'next/link';
import { fetchLeads, selectLeads, selectLoading, selectError, setLeads, updateLead, deleteLead, Lead } from '@/lib/features/leadSlice';
import { AppDispatch } from '@/lib/store';
import { useDispatch, useSelector } from 'react-redux';

type LeadStatus = 'new' | 'contacted' | 'interested' | 'not_interested' | 'converted';

const LeadsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const leadsData = useSelector(selectLeads);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  
  // Ensure leads is always an array with proper fallback
  const leads = Array.isArray(leadsData) ? leadsData : [];
  
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<LeadStatus | 'all'>('all');
  const [dateFilter, setDateFilter] = useState('');
  const [serviceFilter, setServiceFilter] = useState<string>('all');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [isEditStatusDialogOpen, setIsEditStatusDialogOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState<{ key: keyof Lead, direction: 'asc' | 'desc' } | null>(null);

  useEffect(() => {
    dispatch(fetchLeads());
  }, [dispatch]);

  // Debug logging
  console.log('Leads data:', leadsData);
  console.log('Leads array:', leads);
  console.log('Loading:', loading);
  console.log('Error:', error);

  // Filter leads based on search and filters
  const filteredLeads = leads.filter(lead => {
    // Search filter
    const searchMatch = 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm) ||
      lead.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Status filter
    const statusMatch = statusFilter === 'all' || lead.status === statusFilter;
    
    // Date filter
    const dateMatch = !dateFilter || lead.date === dateFilter;
    
    // Service filter
    const serviceMatch = serviceFilter === 'all' || lead.service === serviceFilter;
    
    return searchMatch && statusMatch && dateMatch && serviceMatch;
  });

  // Sort leads
  const sortedLeads = sortConfig 
    ? [...filteredLeads].sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        if (aValue && bValue) {
          if (aValue < bValue) {
            return sortConfig.direction === 'asc' ? -1 : 1;
          }
          if (aValue > bValue) {
            return sortConfig.direction === 'asc' ? 1 : -1;
          }
        }
        return 0;
      })
    : filteredLeads;

  // Get unique services for filter dropdown
  const uniqueServices = [...new Set(leads.map(lead => lead.service).filter((service): service is string => Boolean(service)))];

  // Update lead status
  const updateLeadStatus = (id: string, status: LeadStatus, reason: string): void => {
    if (selectedLead) {
      dispatch(updateLead({ ...selectedLead, status, reason }));
    }
    setIsEditStatusDialogOpen(false);
  };

  // Handle view lead details
  const handleViewDetails = (lead: Lead): void => {
    setSelectedLead(lead);
    setIsDetailsDialogOpen(true);
  };

  // Handle edit status
  const handleEditStatus = (lead: Lead): void => {
    setSelectedLead(lead);
    setIsEditStatusDialogOpen(true);
  };

  // Handle delete lead
  const handleDelete = (id: string): void => {
    if (confirm("Are you sure you want to delete this lead?")) {
      dispatch(deleteLead(id));
    }
  };

  // Handle sorting
  const requestSort = (key: keyof Lead) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Status badge component
  const StatusBadge = ({ status }: { status: LeadStatus }) => {
    const statusStyles = {
      new: "bg-blue-100 text-blue-800 hover:bg-blue-200",
      contacted: "bg-purple-100 text-purple-800 hover:bg-purple-200",
      interested: "bg-green-100 text-green-800 hover:bg-green-200",
      not_interested: "bg-red-100 text-red-800 hover:bg-red-200",
      converted: "bg-teal-100 text-teal-800 hover:bg-teal-200"
    };

    const statusIcons = {
      new: <Clock className="w-3 h-3 mr-1" />,
      contacted: <Phone className="w-3 h-3 mr-1" />,
      interested: <CheckCircle2 className="w-3 h-3 mr-1" />,
      not_interested: <XCircle className="w-3 h-3 mr-1" />,
      converted: <UserRound className="w-3 h-3 mr-1" />
    };

    const statusLabels = {
      new: "New",
      contacted: "Contacted",
      interested: "Interested",
      not_interested: "Not Interested",
      converted: "Converted"
    };

    return (
      <Badge className={`flex items-center ${statusStyles[status]} capitalize`}>
        {statusIcons[status]}
        {statusLabels[status]}
      </Badge>
    );
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <Link href="/dashboard">
            <Button variant="outline" size="icon" className="mr-4">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">Leads Management</h1>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="text-center py-8">
          <div className="text-gray-500">Loading leads...</div>
        </div>
      )}

      {/* Content - only render when not loading and leads is an array */}
      {!loading && Array.isArray(leads) && (
        <>
          {/* Lead Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Leads</p>
                  <p className="text-2xl font-bold">{leads.length}</p>
                </div>
                <div className="bg-gray-100 p-2 rounded-lg">
                  <ClipboardList className="w-6 h-6 text-gray-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">New</p>
                  <p className="text-2xl font-bold">{leads.filter(l => l.status === 'new').length}</p>
                </div>
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Interested</p>
                  <p className="text-2xl font-bold">{leads.filter(l => l.status === 'interested').length}</p>
                </div>
                <div className="bg-green-100 p-2 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Not Interested</p>
                  <p className="text-2xl font-bold">{leads.filter(l => l.status === 'not_interested').length}</p>
                </div>
                <div className="bg-red-100 p-2 rounded-lg">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Converted</p>
                  <p className="text-2xl font-bold">{leads.filter(l => l.status === 'converted').length}</p>
                </div>
                <div className="bg-teal-100 p-2 rounded-lg">
                  <UserRound className="w-6 h-6 text-teal-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search by name, email, phone..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Status Filter */}
              <div>
                <Select 
                  value={statusFilter} 
                  onValueChange={(value: LeadStatus | 'all') => setStatusFilter(value)}
                >
                  <SelectTrigger className="w-full">
                    <div className="flex items-center">
                      <Filter className="w-4 h-4 mr-2 text-gray-500" />
                      <SelectValue placeholder="Filter by status" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="interested">Interested</SelectItem>
                    <SelectItem value="not_interested">Not Interested</SelectItem>
                    <SelectItem value="converted">Converted</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date Filter */}
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="date"
                  className="pl-10"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                />
              </div>

              {/* Service Filter */}
              <div>
                <Select 
                  value={serviceFilter} 
                  onValueChange={(value: string) => setServiceFilter(value)}
                >
                  <SelectTrigger className="w-full">
                    <div className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2 text-gray-500" />
                      <SelectValue placeholder="Filter by service" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Services</SelectItem>
                    {uniqueServices.map((service) => (
                      <SelectItem key={service} value={service}>{service}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Leads Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th 
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => requestSort('date')}
                    >
                      <div className="flex items-center">
                        Date
                        <ArrowUpDown className="ml-1 h-3 w-3" />
                      </div>
                    </th>
                    <th 
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => requestSort('name')}
                    >
                      <div className="flex items-center">
                        Name
                        <ArrowUpDown className="ml-1 h-3 w-3" />
                      </div>
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                    <th 
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => requestSort('status')}
                    >
                      <div className="flex items-center">
                        Status
                        <ArrowUpDown className="ml-1 h-3 w-3" />
                      </div>
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sortedLeads.length > 0 ? (
                    sortedLeads.map((lead) => (
                      <tr key={lead._id} className="hover:bg-gray-50">
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(lead.date || '').toLocaleDateString('en-IN')}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                          <div className="text-xs text-gray-500">{lead.location || '-'}</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-xs text-gray-500 flex items-center">
                            <Phone className="w-3 h-3 mr-1" /> {lead.phone}
                          </div>
                          <div className="text-xs text-gray-500 flex items-center mt-1">
                            <Mail className="w-3 h-3 mr-1" /> {lead.email}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{lead.service || '-'}</td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <StatusBadge status={lead.status} />
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 max-w-[200px] truncate">
                          {lead.reason || '-'}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center space-x-2">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => handleViewDetails(lead)}>
                                  <MessageSquare className="mr-2 h-4 w-4" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleEditStatus(lead)}>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Update Status
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => handleDelete(lead._id || '')} className="text-red-600">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                        No leads found matching your filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Lead Details Dialog */}
      {selectedLead && (
        <Dialog open={isDetailsDialogOpen} onOpenChange={setIsDetailsDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Lead Details</DialogTitle>
              <DialogDescription>
                Complete information about this lead.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium">{selectedLead.name}</h3>
                  <p className="text-sm text-gray-500 flex items-center mt-1">
                    <MapPin className="w-3 h-3 mr-1" /> {selectedLead.location || '-'}
                  </p>
                </div>
                <StatusBadge status={selectedLead.status} />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <p className="text-sm font-medium text-gray-500">Contact Information</p>
                  <p className="text-sm flex items-center mt-2">
                    <Phone className="w-4 h-4 mr-2 text-gray-400" /> {selectedLead.phone}
                  </p>
                  <p className="text-sm flex items-center mt-2">
                    <Mail className="w-4 h-4 mr-2 text-gray-400" /> {selectedLead.email}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Lead Information</p>
                  <p className="text-sm flex items-center mt-2">
                    <Calendar className="w-4 h-4 mr-2 text-gray-400" /> {new Date(selectedLead.date || '').toLocaleDateString('en-IN')}
                  </p>
                  <p className="text-sm flex items-center mt-2">
                    <MessageSquare className="w-4 h-4 mr-2 text-gray-400" /> {selectedLead.service || '-'}
                  </p>
                </div>
              </div>

              <div className="mt-2">
                <p className="text-sm font-medium text-gray-500">Message</p>
                <div className="mt-2 p-3 bg-gray-50 rounded-md text-sm">
                  {selectedLead.message}
                </div>
              </div>

              {selectedLead.reason && (
                <div className="mt-2">
                  <p className="text-sm font-medium text-gray-500">Status Reason/Notes</p>
                  <div className="mt-2 p-3 bg-gray-50 rounded-md text-sm">
                    {selectedLead.reason}
                  </div>
                </div>
              )}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDetailsDialogOpen(false)}>Close</Button>
              <Button onClick={() => {
                setIsDetailsDialogOpen(false);
                handleEditStatus(selectedLead);
              }}>Update Status</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Edit Status Dialog */}
      {selectedLead && (
        <Dialog open={isEditStatusDialogOpen} onOpenChange={setIsEditStatusDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Update Lead Status</DialogTitle>
              <DialogDescription>
                Change the status and add notes for {selectedLead.name}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Current Status</label>
                <div className="flex items-center">
                  <StatusBadge status={selectedLead.status} />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Update Status</label>
                <Select 
                  defaultValue={selectedLead.status}
                  onValueChange={(value: LeadStatus) => {
                    setSelectedLead({
                      ...selectedLead,
                      status: value
                    });
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="interested">Interested</SelectItem>
                    <SelectItem value="not_interested">Not Interested</SelectItem>
                    <SelectItem value="converted">Converted</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Reason / Notes</label>
                <Textarea 
                  placeholder="Add reason for status change or any follow-up notes"
                  value={selectedLead.reason || ''}
                  onChange={(e) => {
                    setSelectedLead({
                      ...selectedLead,
                      reason: e.target.value
                    });
                  }}
                  className="min-h-[100px]"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEditStatusDialogOpen(false)}>Cancel</Button>
              <Button onClick={() => updateLeadStatus(selectedLead._id || '', selectedLead.status, selectedLead.reason || '')}>
                Save Changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default LeadsPage;

    
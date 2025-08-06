"use client";

import { useState, useEffect } from 'react';
import { 
  Search, 
  Calendar, 
  MoreHorizontal, 
  Plus,
  Edit,
  Trash2,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  ArrowLeft,
  Users,
  MapPin,
  Phone,
  Mail
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
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents, selectEvents, selectLoading, selectError, updateEvent, addEvent, deleteEvent, Event } from "@/lib/features/eventSlice";
import { AppDispatch } from "@/lib/store";  

const EventsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const eventsData = useSelector(selectEvents);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  // Ensure events is always an array
  const events = Array.isArray(eventsData) ? eventsData : [];

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  
  const [formData, setFormData] = useState<Omit<Event, '_id' | 'createdAt'>>({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    type: 'upcoming',
    category: 'Health Camp',
    attendees: 0,
    status: 'registration-open',
    highlights: [''],
    image: '',
    contactInfo: {
      phone: '',
      email: ''
    }
  });

  // Fetch events
  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const filteredEvents = events.filter(event => {
    const searchMatch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const statusMatch = statusFilter === 'all' || event.status === statusFilter;
    const typeMatch = typeFilter === 'all' || event.type === typeFilter;
    return searchMatch && statusMatch && typeMatch;
  });

  const StatusBadge = ({ status }: { status: string }) => {
    const styles = {
      'registration-open': "bg-green-100 text-green-800",
      'registration-closed': "bg-yellow-100 text-yellow-800",
      'completed': "bg-blue-100 text-blue-800"
    };
    return (
      <Badge className={`${styles[status as keyof typeof styles]} capitalize`}>
        {status.replace('-', ' ')}
      </Badge>
    );
  };

  const TypeBadge = ({ type }: { type: string }) => {
    const styles = type === 'upcoming' ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800";
    return (
      <Badge className={`${styles} capitalize`}>
        {type}
      </Badge>
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedEvent) {
      dispatch(updateEvent({ ...formData, _id: selectedEvent._id }));
      setIsEditDialogOpen(false);
    } else {
      const newEvent: Event = {
        ...formData,
        _id: Date.now().toString()
      };
      dispatch(addEvent(newEvent));
      setIsCreateDialogOpen(false);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      type: 'upcoming',
      category: 'Health Camp',
      attendees: 0,
      status: 'registration-open',
      highlights: [''],
      image: '',
      contactInfo: { phone: '', email: '' }
    });
    setSelectedEvent(null);
  };

  const handleEdit = (event: Event) => {
    setSelectedEvent(event);
    setFormData({
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time,
      location: event.location,
      type: event.type,
      category: event.category,
      attendees: event.attendees,
      status: event.status,
      highlights: event.highlights,
      image: event.image,
      contactInfo: event.contactInfo
    });
    setIsEditDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteEvent(id));
    setIsDeleteDialogOpen(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN');
  };

  // Add highlight field
  const addHighlight = () => {
    setFormData(prev => ({
      ...prev,
      highlights: [...prev.highlights, '']
    }));
  };

  // Remove highlight field
  const removeHighlight = (index: number) => {
    setFormData(prev => ({
      ...prev,
      highlights: prev.highlights.filter((_, i) => i !== index)
    }));
  };

  // Update highlight
  const updateHighlight = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      highlights: prev.highlights.map((highlight, i) => i === index ? value : highlight)
    }));
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
          <h1 className="text-2xl font-bold text-gray-800">Events Management</h1>
        </div>
        <Button 
          onClick={() => setIsCreateDialogOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Event
        </Button>
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {loading && (
        <div className="text-center py-8">
          <div className="text-gray-500">Loading events...</div>
        </div>
      )}

      {!loading && (
        <>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">Total Events</p>
                <p className="text-2xl font-bold">{events.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">Upcoming</p>
                <p className="text-2xl font-bold">{events.filter(e => e.type === 'upcoming').length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">Past Events</p>
                <p className="text-2xl font-bold">{events.filter(e => e.type === 'past').length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">Registration Open</p>
                <p className="text-2xl font-bold">{events.filter(e => e.status === 'registration-open').length}</p>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search events..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="registration-open">Registration Open</SelectItem>
                  <SelectItem value="registration-closed">Registration Closed</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="past">Past</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Events Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Event</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event) => (
                    <tr key={event._id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-500">
                        {formatDate(event.date)}
                      </td>
                      <td className="px-4 py-4">
                        <div className="text-sm font-medium text-gray-900">{event.title}</div>
                        <div className="text-xs text-gray-500">{event.location}</div>
                      </td>
                      <td className="px-4 py-4">
                        <Badge className="bg-blue-100 text-blue-800">{event.category}</Badge>
                      </td>
                      <td className="px-4 py-4">
                        <TypeBadge type={event.type} />
                      </td>
                      <td className="px-4 py-4">
                        <StatusBadge status={event.status} />
                      </td>
                      <td className="px-4 py-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => {
                              setSelectedEvent(event);
                              setIsDetailsDialogOpen(true);
                            }}>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleEdit(event)}>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Event
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem 
                              onClick={() => {
                                setSelectedEvent(event);
                                setIsDeleteDialogOpen(true);
                              }} 
                              className="text-red-600"
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                      No events found matching your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Event Details Dialog */}
      {selectedEvent && (
        <Dialog open={isDetailsDialogOpen} onOpenChange={setIsDetailsDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Event Details</DialogTitle>
              <DialogDescription>
                Complete information about this event.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium">{selectedEvent.title}</h3>
                  <p className="text-sm text-gray-500 flex items-center mt-1">
                    <MapPin className="w-3 h-3 mr-1" /> {selectedEvent.location}
                  </p>
                </div>
                <div className="flex gap-2">
                  <TypeBadge type={selectedEvent.type} />
                  <StatusBadge status={selectedEvent.status} />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <p className="text-sm font-medium text-gray-500">Event Information</p>
                  <p className="text-sm flex items-center mt-2">
                    <Calendar className="w-4 h-4 mr-2 text-gray-400" /> {formatDate(selectedEvent.date)}
                  </p>
                  <p className="text-sm flex items-center mt-2">
                    <Clock className="w-4 h-4 mr-2 text-gray-400" /> {selectedEvent.time}
                  </p>
                  <p className="text-sm flex items-center mt-2">
                    <Users className="w-4 h-4 mr-2 text-gray-400" /> {selectedEvent.attendees} attendees
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Contact Information</p>
                  <p className="text-sm flex items-center mt-2">
                    <Phone className="w-4 h-4 mr-2 text-gray-400" /> {selectedEvent.contactInfo.phone}
                  </p>
                  <p className="text-sm flex items-center mt-2">
                    <Mail className="w-4 h-4 mr-2 text-gray-400" /> {selectedEvent.contactInfo.email}
                  </p>
                </div>
              </div>

              <div className="mt-2">
                <p className="text-sm font-medium text-gray-500">Description</p>
                <div className="mt-2 p-3 bg-gray-50 rounded-md text-sm">
                  {selectedEvent.description}
                </div>
              </div>

              <div className="mt-2">
                <p className="text-sm font-medium text-gray-500">Highlights</p>
                <div className="mt-2 space-y-1">
                  {selectedEvent.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDetailsDialogOpen(false)}>Close</Button>
              <Button onClick={() => {
                setIsDetailsDialogOpen(false);
                handleEdit(selectedEvent);
              }}>Edit Event</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Create/Edit Dialog */}
      <Dialog open={isCreateDialogOpen || isEditDialogOpen} onOpenChange={(open) => {
        if (!open) {
          setIsCreateDialogOpen(false);
          setIsEditDialogOpen(false);
          resetForm();
        }
      }}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedEvent ? 'Edit Event' : 'Create Event'}</DialogTitle>
            <DialogDescription>
              {selectedEvent ? 'Update event information' : 'Add a new event to the system'}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Event Title</label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="Enter event title"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Category</label>
                <Select 
                  value={formData.category} 
                  onValueChange={(value: string) => setFormData({...formData, category: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Health Camp">Health Camp</SelectItem>
                    <SelectItem value="Workshop">Workshop</SelectItem>
                    <SelectItem value="Seminar">Seminar</SelectItem>
                    <SelectItem value="Vaccination Drive">Vaccination Drive</SelectItem>
                    <SelectItem value="Awareness Program">Awareness Program</SelectItem>
                    <SelectItem value="Awareness Session">Awareness Session</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Description</label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Enter event description"
                required
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Date</label>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Time</label>
                <Input
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  placeholder="e.g., 9:00 AM - 5:00 PM"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Location</label>
              <Input
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                placeholder="Enter event location"
                required
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium">Type</label>
                <Select 
                  value={formData.type} 
                  onValueChange={(value: 'upcoming' | 'past') => setFormData({...formData, type: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="past">Past</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">Status</label>
                <Select 
                  value={formData.status} 
                  onValueChange={(value: any) => setFormData({...formData, status: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="registration-open">Registration Open</SelectItem>
                    <SelectItem value="registration-closed">Registration Closed</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">Expected Attendees</label>
                <Input
                  type="number"
                  value={formData.attendees}
                  onChange={(e) => setFormData({...formData, attendees: parseInt(e.target.value) || 0})}
                  placeholder="0"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Contact Phone</label>
                <Input
                  value={formData.contactInfo.phone}
                  onChange={(e) => setFormData({
                    ...formData, 
                    contactInfo: {...formData.contactInfo, phone: e.target.value}
                  })}
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Contact Email</label>
                <Input
                  type="email"
                  value={formData.contactInfo.email}
                  onChange={(e) => setFormData({
                    ...formData, 
                    contactInfo: {...formData.contactInfo, email: e.target.value}
                  })}
                  placeholder="Enter email address"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Highlights</label>
              <div className="space-y-2">
                {formData.highlights.map((highlight, index) => (
                  <div key={index} className="flex space-x-2">
                    <Input
                      value={highlight}
                      onChange={(e) => updateHighlight(index, e.target.value)}
                      placeholder={`Highlight ${index + 1}`}
                    />
                    {formData.highlights.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeHighlight(index)}
                      >
                        <XCircle className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addHighlight}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Highlight
                </Button>
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => {
                setIsCreateDialogOpen(false);
                setIsEditDialogOpen(false);
                resetForm();
              }}>
                Cancel
              </Button>
              <Button type="submit">
                {selectedEvent ? 'Update Event' : 'Create Event'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Delete Event</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{selectedEvent?.title}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={() => selectedEvent && handleDelete(selectedEvent._id || '')}
            >
              Delete Event
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
        </div>
    );
};

export default EventsPage;
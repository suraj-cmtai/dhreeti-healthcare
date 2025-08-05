"use client";

import { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  Filter,
  Search,
  CheckCircle,
  XCircle,
  AlertCircle,
  MoreHorizontal,
  CalendarClock,
  UserCheck,
  Phone,
  Mail,
  Edit,
  Trash2,
  Stethoscope,
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
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAppointments, updateAppointment, deleteAppointment, selectAppointments, selectLoading, selectError, setAppointments, Appointment } from '@/lib/features/appointmentSlice';
import { AppDispatch } from '@/lib/store';

type AppointmentStatus = 'confirmed' | 'pending' | 'completed' | 'cancelled';


const AppointmentsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const appointmentsData = useSelector(selectAppointments);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  
  // Ensure appointments is always an array with proper fallback
  const appointments = Array.isArray(appointmentsData) ? appointmentsData : [];

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<AppointmentStatus | 'all'>('all');
  const [dateFilter, setDateFilter] = useState('');
  const [serviceFilter, setServiceFilter] = useState<string>('all');
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  // Filter appointments based on search and filters
  const filteredAppointments = appointments.filter(appointment => {
    // Search filter
    const searchMatch =
      (appointment.patientName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (appointment.patientPhone || '').includes(searchTerm) ||
      (appointment.patientEmail || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (appointment._id || '').toLowerCase().includes(searchTerm.toLowerCase());

    // Status filter
    const statusMatch = statusFilter === 'all' || appointment.status === statusFilter;

    // Date filter
    const dateMatch = !dateFilter || appointment.date === dateFilter;

    // Service filter
    const serviceMatch = serviceFilter === 'all' || appointment.service === serviceFilter;

    return searchMatch && statusMatch && dateMatch && serviceMatch;
  });

  // Get unique services for filter dropdown
  const uniqueServices = [...new Set(appointments.map(apt => apt.service).filter(Boolean))];

  // Update appointment status
  const updateStatus = (id: string, newStatus: AppointmentStatus): void => {
    const appointment = appointments.find(apt => apt._id === id);
    if (appointment) {
      dispatch(updateAppointment({ ...appointment, status: newStatus }));
    }
  };

  // Handle edit appointment
  const handleEdit = (appointment: Appointment): void => {
    setSelectedAppointment(appointment);
    setIsEditDialogOpen(true);
  };

  // Handle save edited appointment
  const handleSaveEdit = (updatedAppointment: Appointment): void => {
    dispatch(updateAppointment(updatedAppointment));
    setIsEditDialogOpen(false);
  };

  // Handle delete appointment
  const handleDelete = (id: string): void => {
    if (confirm("Are you sure you want to delete this appointment?")) {
      dispatch(deleteAppointment(id));
    }
  };

  // Status badge component
  const StatusBadge = ({ status }: { status: string }) => {
    const statusStyles = {
      confirmed: "bg-green-100 text-green-800 hover:bg-green-200",
      pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
      completed: "bg-blue-100 text-blue-800 hover:bg-blue-200",
      cancelled: "bg-red-100 text-red-800 hover:bg-red-200"
    };

    const statusIcons = {
      confirmed: <CheckCircle className="w-3 h-3 mr-1" />,
      pending: <AlertCircle className="w-3 h-3 mr-1" />,
      completed: <UserCheck className="w-3 h-3 mr-1" />,
      cancelled: <XCircle className="w-3 h-3 mr-1" />
    };

    return (
      <Badge className={`flex items-center ${statusStyles[status as keyof typeof statusStyles] || 'bg-gray-100 text-gray-800'} capitalize`}>
        {statusIcons[status as keyof typeof statusIcons] || <AlertCircle className="w-3 h-3 mr-1" />}
        {status}
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
          <h1 className="text-2xl font-bold text-gray-800">Appointment Management</h1>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Calendar className="w-4 h-4 mr-2" />
          New Appointment
        </Button>
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
          <div className="text-gray-500">Loading appointments...</div>
        </div>
      )}

      {/* Content - only render when not loading and appointments is an array */}
      {!loading && Array.isArray(appointments) && (
        <>
          {/* Appointment Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Appointments</p>
                  <p className="text-2xl font-bold">{appointments.length}</p>
                </div>
                <div className="bg-blue-100 p-2 rounded-lg">
                  <CalendarClock className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Confirmed</p>
                  <p className="text-2xl font-bold">{appointments.filter(a => a.status === 'confirmed').length}</p>
                </div>
                <div className="bg-green-100 p-2 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Completed</p>
                  <p className="text-2xl font-bold">{appointments.filter(a => a.status === 'completed').length}</p>
                </div>
                <div className="bg-blue-100 p-2 rounded-lg">
                  <UserCheck className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Cancelled</p>
                  <p className="text-2xl font-bold">{appointments.filter(a => a.status === 'cancelled').length}</p>
                </div>
                <div className="bg-red-100 p-2 rounded-lg">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search by name, phone, email..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Status Filter */}
              <div>
                <Select 
                  value={statusFilter} 
                  onValueChange={(value: AppointmentStatus | 'all') => setStatusFilter(value)}
                >
                  <SelectTrigger className="w-full">
                    <div className="flex items-center">
                      <Filter className="w-4 h-4 mr-2 text-gray-500" />
                      <SelectValue placeholder="Filter by status" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
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
                <Select value={serviceFilter} onValueChange={setServiceFilter}>
                  <SelectTrigger className="w-full">
                    <div className="flex items-center">
                      <Stethoscope className="w-4 h-4 mr-2 text-gray-500" />
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

          {/* Appointments Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredAppointments.length > 0 ? (
                    filteredAppointments.map((appointment) => (
                      <tr key={appointment._id} className="hover:bg-gray-50">
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{appointment._id}</td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{appointment.patientName || '-'}</div>
                          <div className="text-xs text-gray-500 flex items-center mt-1">
                            <Phone className="w-3 h-3 mr-1" /> {appointment.patientPhone || '-'}
                          </div>
                          <div className="text-xs text-gray-500 flex items-center mt-1">
                            <Mail className="w-3 h-3 mr-1" /> {appointment.patientEmail || '-'}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.service || '-'}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.doctor || '-'}</td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 flex items-center">
                            <Calendar className="w-3 h-3 mr-1 text-blue-500" />
                            {appointment.date ? new Date(appointment.date).toLocaleDateString('en-IN') : '-'}
                          </div>
                          <div className="text-xs text-gray-500 flex items-center mt-1">
                            <Clock className="w-3 h-3 mr-1 text-blue-500" />
                            {appointment.time || '-'}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <StatusBadge status={appointment.status || 'pending'} />
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
                                <DropdownMenuItem onClick={() => handleEdit(appointment)}>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit Details
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => updateStatus(appointment._id || '', 'confirmed')}>
                                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                                  Mark as Confirmed
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => updateStatus(appointment._id || '', 'completed')}>
                                  <UserCheck className="mr-2 h-4 w-4 text-blue-500" />
                                  Mark as Completed
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => updateStatus(appointment._id || '', 'cancelled')}>
                                  <XCircle className="mr-2 h-4 w-4 text-red-500" />
                                  Cancel Appointment
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => handleDelete(appointment._id || '')} className="text-red-600">
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
                        No appointments found matching your filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Edit Appointment Dialog */}
      {selectedAppointment && (
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>Edit Appointment</DialogTitle>
              <DialogDescription>
                Update the appointment details. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Patient Name</label>
                  <Input
                    value={selectedAppointment.patientName || ''}
                    onChange={(e) => setSelectedAppointment({
                      ...selectedAppointment,
                      patientName: e.target.value
                    })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone</label>
                  <Input
                    value={selectedAppointment.patientPhone || ''}
                    onChange={(e) => setSelectedAppointment({
                      ...selectedAppointment,
                      patientPhone: e.target.value
                    })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  value={selectedAppointment.patientEmail || ''}
                  onChange={(e) => setSelectedAppointment({
                    ...selectedAppointment,
                    patientEmail: e.target.value
                  })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Service</label>
                  <Select
                    value={selectedAppointment.service || ''}
                    onValueChange={(value) => setSelectedAppointment({
                      ...selectedAppointment,
                      service: value
                    })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      {uniqueServices.map((service) => (
                        <SelectItem key={service} value={service}>{service}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Doctor</label>
                  <Select
                    value={selectedAppointment.doctor || ''}
                    onValueChange={(value) => setSelectedAppointment({
                      ...selectedAppointment,
                      doctor: value
                    })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Dr. Ganesh Pandey">Dr. Ganesh Pandey</SelectItem>
                      <SelectItem value="Dr. Pragya Pandey">Dr. Pragya Pandey</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date</label>
                  <Input
                    type="date"
                    value={selectedAppointment.date || ''}
                    onChange={(e) => setSelectedAppointment({
                      ...selectedAppointment,
                      date: e.target.value
                    })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Time</label>
                  <Input
                    type="time"
                    value={(selectedAppointment.time || '').replace(/\s?(AM|PM)$/i, '')}
                    onChange={(e) => {
                      const time = e.target.value;
                      const hours = parseInt(time.split(':')[0]);
                      const minutes = time.split(':')[1];
                      const period = hours >= 12 ? 'PM' : 'AM';
                      const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
                      const formattedTime = `${displayHours}:${minutes} ${period}`;

                      setSelectedAppointment({
                        ...selectedAppointment,
                        time: formattedTime
                      });
                    }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select 
                  value={selectedAppointment.status || 'pending'}
                  onValueChange={(value: AppointmentStatus) => setSelectedAppointment({
                    ...selectedAppointment,
                    status: value
                  })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Notes</label>
                <Textarea
                  value={selectedAppointment.notes || ''}
                  onChange={(e) => setSelectedAppointment({
                    ...selectedAppointment,
                    notes: e.target.value
                  })}
                  placeholder="Add any notes about this appointment"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
              <Button onClick={() => handleSaveEdit(selectedAppointment)}>Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default AppointmentsPage;

    
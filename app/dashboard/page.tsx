"use client";

import { useState, useEffect } from 'react';
import { 
  Users, 
  CalendarClock, 
  TrendingUp, 
  Activity, 
  ArrowRight, 
  CheckCircle, 
  XCircle, 
  Clock, 
  UserRound,
  Phone,
  Calendar,
  MessageSquare,
  ChevronRight,
  AlertCircle,
  UserCheck
} from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/lib/store';
import { fetchAppointments, selectAppointments, selectLoading as selectAppointmentsLoading } from '@/lib/features/appointmentSlice';
import { fetchLeads, selectLeads, selectLoading as selectLeadsLoading } from '@/lib/features/leadSlice';

// Define types
type AppointmentStatus = 'confirmed' | 'pending' | 'completed' | 'cancelled';
type LeadStatus = 'new' | 'contacted' | 'interested' | 'not_interested' | 'converted';

const DashboardPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  // Fetch data from Redux
  const appointmentsData = useSelector(selectAppointments);
  const leadsData = useSelector(selectLeads);
  const appointmentsLoading = useSelector(selectAppointmentsLoading);
  const leadsLoading = useSelector(selectLeadsLoading);
  
  // Ensure data is arrays
  const appointments = Array.isArray(appointmentsData) ? appointmentsData : [];
  const leads = Array.isArray(leadsData) ? leadsData : [];

  useEffect(() => {
    dispatch(fetchAppointments());
    dispatch(fetchLeads());
  }, [dispatch]);

  // Calculate real statistics
  const today = new Date().toISOString().split('T')[0];
  
  const dashboardStats = {
    totalPatients: appointments.length, // Unique patients would be better but using total appointments for now
    totalAppointments: appointments.length,
    totalLeads: leads.length,
    conversionRate: leads.length > 0 ? Math.round((leads.filter(lead => lead.status === 'converted').length / leads.length) * 100) : 0,
    appointmentsToday: appointments.filter(apt => apt.date === today).length,
    newLeadsToday: leads.filter(lead => lead.date === today).length
  };

  // Get recent appointments (last 5)
  const recentAppointments = [...appointments]
    .sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    })
    .slice(0, 5);

  // Get recent leads (last 5)
  const recentLeads = [...leads]
    .sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    })
    .slice(0, 5);

  // Status badge component for appointments
  const AppointmentStatusBadge = ({ status }: { status: string }) => {
    const statusStyles = {
      confirmed: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      completed: "bg-blue-100 text-blue-800",
      cancelled: "bg-red-100 text-red-800"
    };

    const statusIcons = {
      confirmed: <CheckCircle className="w-3 h-3 mr-1" />,
      pending: <AlertCircle className="w-3 h-3 mr-1" />,
      completed: <UserCheck className="w-3 h-3 mr-1" />,
      cancelled: <XCircle className="w-3 h-3 mr-1" />
    };

    const statusLabel = status.charAt(0).toUpperCase() + status.slice(1);

    return (
      <Badge className={`flex items-center ${statusStyles[status as keyof typeof statusStyles] || "bg-gray-100 text-gray-800"} capitalize`}>
        {statusIcons[status as keyof typeof statusIcons] || <Clock className="w-3 h-3 mr-1" />}
        {statusLabel}
      </Badge>
    );
  };

  // Status badge component for leads
  const LeadStatusBadge = ({ status }: { status: LeadStatus }) => {
    const statusStyles = {
      new: "bg-blue-100 text-blue-800",
      contacted: "bg-purple-100 text-purple-800",
      interested: "bg-green-100 text-green-800",
      not_interested: "bg-red-100 text-red-800",
      converted: "bg-teal-100 text-teal-800"
    };

    const statusIcons = {
      new: <Clock className="w-3 h-3 mr-1" />,
      contacted: <Phone className="w-3 h-3 mr-1" />,
      interested: <CheckCircle className="w-3 h-3 mr-1" />,
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

  // Loading state
  if (appointmentsLoading || leadsLoading) {
    return (
      <div className="p-6">
        <div className="text-center py-8">
          <div className="text-gray-500">Loading dashboard data...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <div className="flex gap-2">
          <Link href="/dashboard/appointments">
            <Button variant="outline" className="flex items-center gap-2">
              <CalendarClock className="w-4 h-4" />
              Appointments
            </Button>
          </Link>
          <Link href="/dashboard/leads">
            <Button variant="outline" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Leads
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <Card>
          <CardContent className="p-4 flex flex-col justify-between h-full">
            <div className="text-sm text-gray-500">Total Patients</div>
            <div className="flex items-center justify-between mt-2">
              <div className="text-2xl font-bold">{dashboardStats.totalPatients}</div>
              <Users className="w-8 h-8 text-blue-500 opacity-80" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 flex flex-col justify-between h-full">
            <div className="text-sm text-gray-500">Total Appointments</div>
            <div className="flex items-center justify-between mt-2">
              <div className="text-2xl font-bold">{dashboardStats.totalAppointments}</div>
              <CalendarClock className="w-8 h-8 text-green-500 opacity-80" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 flex flex-col justify-between h-full">
            <div className="text-sm text-gray-500">Total Leads</div>
            <div className="flex items-center justify-between mt-2">
              <div className="text-2xl font-bold">{dashboardStats.totalLeads}</div>
              <MessageSquare className="w-8 h-8 text-purple-500 opacity-80" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 flex flex-col justify-between h-full">
            <div className="text-sm text-gray-500">Conversion Rate</div>
            <div className="flex items-center justify-between mt-2">
              <div className="text-2xl font-bold">{dashboardStats.conversionRate}%</div>
              <TrendingUp className="w-8 h-8 text-teal-500 opacity-80" />
            </div>
            <div className="w-full bg-gray-200 h-1 mt-2 rounded-full overflow-hidden">
              <div 
                className="bg-teal-500 h-1" 
                style={{ width: `${dashboardStats.conversionRate}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 flex flex-col justify-between h-full">
            <div className="text-sm text-gray-500">Today's Appointments</div>
            <div className="flex items-center justify-between mt-2">
              <div className="text-2xl font-bold">{dashboardStats.appointmentsToday}</div>
              <Calendar className="w-8 h-8 text-amber-500 opacity-80" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 flex flex-col justify-between h-full">
            <div className="text-sm text-gray-500">New Leads Today</div>
            <div className="flex items-center justify-between mt-2">
              <div className="text-2xl font-bold">{dashboardStats.newLeadsToday}</div>
              <Activity className="w-8 h-8 text-red-500 opacity-80" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="overflow-hidden">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl flex items-center">
                <CalendarClock className="mr-2 h-5 w-5" />
                Appointment Management
              </CardTitle>
            </div>
            <CardDescription className="text-blue-500">
              View and manage all patient appointments
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500">Today's Appointments</p>
                <p className="text-2xl font-bold">{dashboardStats.appointmentsToday}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total</p>
                <p className="text-2xl font-bold">{dashboardStats.totalAppointments}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Completed</p>
                <p className="text-2xl font-bold">{appointments.filter(apt => apt.status === 'completed').length}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50 px-6 py-3">
            <Link href="/dashboard/appointments" className="w-full">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Manage Appointments
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Lead Management
              </CardTitle>
            </div>
            <CardDescription className="text-purple-500">
              Track and convert leads from website inquiries
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500">New Leads</p>
                <p className="text-2xl font-bold">{dashboardStats.newLeadsToday}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total</p>
                <p className="text-2xl font-bold">{dashboardStats.totalLeads}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Converted</p>
                <p className="text-2xl font-bold">{leads.filter(lead => lead.status === 'converted').length}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50 px-6 py-3">
            <Link href="/dashboard/leads" className="w-full">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Manage Leads
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Appointments */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Recent Appointments</CardTitle>
              <Link href="/dashboard/appointments">
                <Button variant="ghost" size="sm" className="flex items-center text-blue-600">
                  View All
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <CardDescription>Latest patient appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAppointments.length > 0 ? (
                recentAppointments.map((appointment) => (
                  <div key={appointment._id} className="flex items-start justify-between border-b pb-3">
                    <div>
                      <div className="font-medium">{appointment.patientName}</div>
                      <div className="text-sm text-gray-500 flex items-center mt-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(appointment.date).toLocaleDateString('en-IN')} at {appointment.time}
                      </div>
                      <div className="text-sm text-gray-500">{appointment.service} • {appointment.doctor}</div>
                    </div>
                    <div>
                      <AppointmentStatusBadge status={appointment.status} />
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-gray-500">
                  No appointments found
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Leads */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Recent Leads</CardTitle>
              <Link href="/dashboard/leads">
                <Button variant="ghost" size="sm" className="flex items-center text-purple-600">
                  View All
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <CardDescription>Latest inquiries from website</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentLeads.length > 0 ? (
                recentLeads.map((lead) => (
                  <div key={lead._id} className="flex items-start justify-between border-b pb-3">
                    <div>
                      <div className="font-medium">{lead.name}</div>
                      <div className="text-sm text-gray-500 flex items-center mt-1">
                        <Phone className="w-3 h-3 mr-1" />
                        {lead.phone}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center mt-1">
                        <MessageSquare className="w-3 h-3 mr-1" />
                        {lead.service || 'General Inquiry'}
                      </div>
                    </div>
                    <div>
                      <LeadStatusBadge status={lead.status} />
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-gray-500">
                  No leads found
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;


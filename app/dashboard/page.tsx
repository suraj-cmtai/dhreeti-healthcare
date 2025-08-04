"use client";

import { useState } from 'react';
import { 
  Users, 
  CalendarClock, 
  TrendingUp, 
  BarChart3, 
  Activity, 
  ArrowRight, 
  CheckCircle, 
  XCircle, 
  Clock, 
  UserRound,
  Phone,
  Mail,
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

// Define types
type AppointmentStatus = 'confirmed' | 'pending' | 'completed' | 'cancelled';
type LeadStatus = 'new' | 'contacted' | 'interested' | 'not_interested' | 'converted';

// Mock data for dashboard
const dashboardStats = {
  totalPatients: 1248,
  totalAppointments: 567,
  totalLeads: 128,
  conversionRate: 42,
  appointmentsToday: 12,
  newLeadsToday: 5
};

// Mock data for recent appointments
interface Appointment {
  id: string;
  patientName: string;
  patientPhone: string;
  service: string;
  doctor: string;
  date: string;
  time: string;
  status: AppointmentStatus;
}

const recentAppointments: Appointment[] = [
  {
    id: 'APT-001',
    patientName: 'Rahul Sharma',
    patientPhone: '+91 98765 43210',
    service: 'General Medicine',
    doctor: 'Dr. Ganesh Pandey',
    date: '2023-11-15',
    time: '10:30 AM',
    status: 'confirmed'
  },
  {
    id: 'APT-002',
    patientName: 'Priya Patel',
    patientPhone: '+91 87654 32109',
    service: 'Obstetrics & Gynaecology',
    doctor: 'Dr. Pragya Pandey',
    date: '2023-11-15',
    time: '11:00 AM',
    status: 'pending'
  },
  {
    id: 'APT-003',
    patientName: 'Amit Kumar',
    patientPhone: '+91 76543 21098',
    service: 'Pathology Services',
    doctor: 'Dr. Ganesh Pandey',
    date: '2023-11-16',
    time: '09:30 AM',
    status: 'completed'
  }
];

// Mock data for recent leads
interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  status: LeadStatus;
  date: string;
}

const recentLeads: Lead[] = [
  {
    id: 'LD-001',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@gmail.com',
    phone: '+91 98765 43210',
    service: 'General Medicine',
    status: 'new',
    date: '2023-11-15'
  },
  {
    id: 'LD-002',
    name: 'Priya Patel',
    email: 'priya.patel@gmail.com',
    phone: '+91 87654 32109',
    service: 'Obstetrics & Gynaecology',
    status: 'contacted',
    date: '2023-11-14'
  },
  {
    id: 'LD-003',
    name: 'Amit Kumar',
    email: 'amit.kumar@gmail.com',
    phone: '+91 76543 21098',
    service: 'Pathology Services',
    status: 'interested',
    date: '2023-11-13'
  }
];

const DashboardPage = () => {
  // Status badge component for appointments
  const AppointmentStatusBadge = ({ status }: { status: AppointmentStatus }) => {
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

    return (
      <Badge className={`flex items-center ${statusStyles[status]} capitalize`}>
        {statusIcons[status]}
        {status}
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
                <p className="text-2xl font-bold">324</p>
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
                <p className="text-2xl font-bold">54</p>
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
              {recentAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-start justify-between border-b pb-3">
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
              ))}
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
              {recentLeads.map((lead) => (
                <div key={lead.id} className="flex items-start justify-between border-b pb-3">
                  <div>
                    <div className="font-medium">{lead.name}</div>
                    <div className="text-sm text-gray-500 flex items-center mt-1">
                      <Phone className="w-3 h-3 mr-1" />
                      {lead.phone}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center mt-1">
                      <MessageSquare className="w-3 h-3 mr-1" />
                      {lead.service}
                    </div>
                  </div>
                  <div>
                    <LeadStatusBadge status={lead.status} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;


"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeroSection from "@/components/all/hero-section";
import CTA from "@/components/all/cta-section";
import { AppDispatch } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents, selectEvents, selectLoading, selectError } from "@/lib/features/eventSlice";
import SchemeSection from "@/components/home/scheme-section";
import { useLanguage } from "@/lib/language-context";

// Define the event type based on what's coming from the API
interface EventContactInfo {
  phone: string;
  email: string;
}

interface Event {
  _id: string;
  type: string;
  status: string;
  category: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  highlights: string[];
  contactInfo: EventContactInfo;
}

export default function Events() {
  const dispatch = useDispatch<AppDispatch>();
  const eventsData = useSelector(selectEvents);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const { t, language } = useLanguage();

  // Ensure events is always an array
  const events = Array.isArray(eventsData) ? eventsData : [];

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  // Filter events by type
  const upcomingEvents = events.filter(event => event.type === 'upcoming');
  const pastEvents = events.filter(event => event.type === 'past');

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      'registration-open': "bg-green-100 text-green-800",
      'registration-closed': "bg-yellow-100 text-yellow-800",
      'completed': "bg-blue-100 text-blue-800"
    };

    const statusLabels: Record<string, string> = {
      'registration-open': t('eventsPage.status.registrationOpen'),
      'registration-closed': t('eventsPage.status.registrationClosed'),
      'completed': t('eventsPage.status.completed')
    };

    return (
      <Badge className={`${statusStyles[status as keyof typeof statusStyles]} capitalize`}>
        {statusLabels[status] || status}
      </Badge>
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    // Use the current language for date formatting
    const locale = language === 'hi' ? 'hi-IN' : 'en-IN';
    return date.toLocaleDateString(locale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-500">{t('eventsPage.loading')}</div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Banner Section */}
      <HeroSection 
        title={t('eventsPage.pageTitle')} 
        description={t('eventsPage.pageDescription')} 
      />

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('eventsPage.upcomingEvents.title.prefix')}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {t('eventsPage.upcomingEvents.title.highlighted')}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('eventsPage.upcomingEvents.description')}
            </p>
          </motion.div>

          {upcomingEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-3">
                        <Badge className="bg-blue-100 text-blue-800">
                          {event.category}
                        </Badge>
                        {getStatusBadge(event.status)}
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {event.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {event.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-blue-600" />
                          <span className="text-gray-700 font-medium">{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-teal-600" />
                          <span className="text-gray-700">{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-green-600" />
                          <span className="text-gray-700 text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Users className="w-5 h-5 text-purple-600" />
                          <span className="text-gray-700">{t('eventsPage.attendees').replace('{count}', event.attendees.toString())}</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <h4 className="font-semibold text-gray-900 mb-3">{t('eventsPage.highlights')}:</h4>
                        <div className="space-y-2">
                          {event.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-gray-600">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="pt-4 border-t border-gray-100">
                      <div className="w-full space-y-3">
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white">
                          {t('eventsPage.registerNow')}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Phone className="w-4 h-4" />
                            <span>{event.contactInfo.phone}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Mail className="w-4 h-4" />
                            <span>{event.contactInfo.email}</span>
                          </div>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-12"
            >
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <AlertTriangle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{t('eventsPage.upcomingEvents.noEvents.title')}</h3>
                <p className="text-gray-500 mb-4">
                  {t('eventsPage.upcomingEvents.noEvents.description')}
                </p>
                <Button 
                  variant="outline" 
                  className="border-blue-200 text-blue-600 hover:bg-blue-50"
                  onClick={() => window.location.href = '/contact'}
                >
                  {t('eventsPage.contactUs')}
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <SchemeSection />

      {/* Past Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('eventsPage.pastEvents.title.prefix')}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {t('eventsPage.pastEvents.title.highlighted')}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('eventsPage.pastEvents.description')}
            </p>
          </motion.div>

          {pastEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-gray-50">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-3">
                        <Badge className="bg-gray-100 text-gray-800">
                          {event.category}
                        </Badge>
                        {getStatusBadge(event.status)}
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {event.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {event.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-blue-600" />
                          <span className="text-gray-700 font-medium">{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-teal-600" />
                          <span className="text-gray-700">{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-green-600" />
                          <span className="text-gray-700 text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Users className="w-5 h-5 text-purple-600" />
                          <span className="text-gray-700">{t('eventsPage.attendees').replace('{count}', event.attendees.toString())}</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-3">{t('eventsPage.highlights')}:</h4>
                        <div className="space-y-2">
                          {event.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-gray-600">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="pt-4 border-t border-gray-200">
                      <div className="w-full">
                        <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                          <Star className="mr-2 h-4 w-4" />
                          {t('eventsPage.eventCompleted')}
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-12"
            >
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-100">
                <Star className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{t('eventsPage.pastEvents.noEvents.title')}</h3>
                <p className="text-gray-500">
                  {t('eventsPage.pastEvents.noEvents.description')}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <CTA />
    </>
  );
}
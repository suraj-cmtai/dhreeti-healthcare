import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";


export default function CTA() {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-6">Ready to Experience Quality Healthcare?</h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Join thousands of patients who trust us with their healthcare needs. Contact us today to schedule your appointment.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                            <Phone className="w-5 h-5" />
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                            <Mail className="w-5 h-5" />
                            <span>info@dhreeti.com</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                            <MapPin className="w-5 h-5" />
                            <span>Arrah, Bihar</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
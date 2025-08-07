import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function CTA() {
    const { t } = useLanguage();
    
    return (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-6">{t('globalCta.title')}</h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        {t('globalCta.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                            <Phone className="w-5 h-5" />
                            <span>{t('contact.phone1')}</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                            <Mail className="w-5 h-5" />
                            <span>{t('globalCta.email')}</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                            <MapPin className="w-5 h-5" />
                            <span>{t('globalCta.location')}</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ContactDetails from '@/components/contact/ContactDetails';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactUsClient() {
    return (
        <main className="bg-[#f8faff] relative selection:bg-[#0033e7] selection:text-white">
            {/* Custom Premium Hero (Light Theme) */}
            <section className="bg-gradient-to-b from-[#f4f7ff] to-[#f8faff] pt-32 pb-16 md:pt-40 md:pb-24 text-center px-4 relative overflow-hidden">
                {/* Glowing Orbs */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] right-[15%] w-[600px] h-[600px] bg-[#0033e7]/10 rounded-full blur-[120px] mix-blend-multiply"></div>
                    <div className="absolute bottom-[-20%] left-[5%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] mix-blend-multiply"></div>
                    {/* Minimal Grid Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,51,231,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,51,231,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                </div>
                
                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-[#0033e7] font-bold uppercase text-[11px] tracking-[3px] mb-8 px-5 py-2 rounded-full shadow-sm">
                            <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse shadow-[0_0_10px_rgba(0,51,231,0.5)]"></span>
                            Contact Us
                        </div>
                        <h1 className="text-4xl md:text-[3.5rem] lg:text-[4rem] font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                            Speak With Our Experts
                        </h1>
                        <p className="text-[17px] md:text-[19px] text-slate-600 font-medium leading-[1.7] max-w-2xl mx-auto">
                            Have questions about our services or need a customized quote? Join our network of successful providers by getting in touch today.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Wrapper */}
            <div 
                className="relative bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col pt-10 pb-24 border-t border-blue-50/50"
                style={{ backgroundImage: 'url("/background%20image.webp")' }}
            >
                {/* Smooth blend from light hero to bright content */}
                <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#f8faff] to-transparent z-0 pointer-events-none"></div>

                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f8faff]/95 via-white/85 to-blue-50/70 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10 py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto items-start">
                        <ContactDetails />
                        <ContactForm />
                    </div>
                </div>
            </div>
        </main>
    );
}

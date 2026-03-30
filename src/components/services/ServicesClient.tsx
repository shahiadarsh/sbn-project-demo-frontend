'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { servicesList } from '@/data/services';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

export default function ServicesClient() {
    return (
        <main 
            className="relative selection:bg-[#0033e7] selection:text-white bg-cover bg-center bg-fixed"
            style={{ backgroundImage: 'url("/background%20image.webp")' }}
        >
            <div className="absolute inset-0 bg-white/20 z-0 pointer-events-none"></div>

            {/* Custom Premium Hero (Light Theme) */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 text-center px-4 relative overflow-hidden z-10">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] right-[15%] w-[600px] h-[600px] bg-[#0033e7]/10 rounded-full blur-[120px] mix-blend-multiply"></div>
                    <div className="absolute bottom-[-20%] left-[5%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] mix-blend-multiply"></div>
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
                            High-Octane RCM
                        </div>
                        <h1 className="text-4xl md:text-[3.5rem] lg:text-[4rem] font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                            Service Portfolio
                        </h1>
                        <p className="text-[17px] md:text-[19px] text-slate-600 font-medium leading-[1.7] max-w-2xl mx-auto">
                            We don't just process claims; we optimize your entire financial lifecycle. Explore our specialized solutions designed for enterprise healthcare growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Wrapper */}
            <div className="relative flex flex-col pt-10 pb-0 border-t border-white/50 z-10">
                <div className="container mx-auto px-4 relative z-10 pb-24">
                    <div className="flex items-center gap-4 mb-16 max-w-7xl mx-auto">
                        <div className="h-px bg-slate-200/50 flex-grow"></div>
                        <h2 className="text-[11px] font-extrabold text-[#0033e7] uppercase tracking-[5px] bg-white/60 backdrop-blur-md px-6 py-2 rounded-full shadow-sm border border-white">Core RCM Solutions</h2>
                        <div className="h-px bg-slate-200/50 flex-grow"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {servicesList.map((service, index) => (
                            <motion.div
                                key={service.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="group bg-white/80 backdrop-blur-xl rounded-2xl p-10 border border-white shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,51,231,0.12)] hover:-translate-y-2 transition-all duration-500 flex flex-col no-underline text-inherit h-full relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50/50 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                                    <div className="mb-8 relative z-20">
                                        <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-[#0033e7] border border-slate-100 shadow-sm group-hover:bg-[#0033e7] group-hover:text-white transition-all duration-500 mb-6 group-hover:shadow-[0_10px_20px_rgba(0,51,231,0.2)] flex-shrink-0">
                                            <FaCheckCircle size={24} />
                                        </div>
                                        <h3 className="text-[22px] font-extrabold text-slate-900 mb-4 tracking-tight group-hover:text-[#0033e7] transition-colors leading-[1.3]">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-600 font-medium leading-[1.7] text-[15px]">
                                            {service.description}
                                        </p>
                                    </div>
                                    <div className="mt-auto pt-8 border-t border-slate-200 flex items-center justify-between text-[#0033e7] font-extrabold text-[12px] uppercase tracking-[2px]">
                                        View Solution <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Specialties Section */}
                <section className="py-24 relative z-10 mt-auto overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url("/background%20image.webp")' }}>
                    <div className="absolute inset-0 bg-[#0B1F33]/85 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0033e7]/20 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none"></div>

                    <div className="container mx-auto px-4 text-center relative z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-16"
                        >
                            <span className="text-teal-400 font-bold uppercase text-[11px] tracking-[5px] mb-4 block">Tailored Expertise</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Industry-Specific Specialties</h2>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {['Behavioral Health', 'DME / Orthopedics', 'Urgent Care & Telehealth', 'Small–Mid Practices'].map((spec, index) => (
                                <motion.div 
                                    key={spec} 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="p-8 rounded-2xl bg-white/5 border border-white/10 text-white font-extrabold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,51,231,0.2)] backdrop-blur-md"
                                >
                                    {spec}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

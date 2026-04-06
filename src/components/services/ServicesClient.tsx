'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { servicesList, specialtiesList } from '@/data/services';
import { FaArrowRight, FaCheckCircle, FaHospital, FaStethoscope, FaClock, FaUserMd } from 'react-icons/fa';

const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function ServicesClient() {
    return (
        <main 
            className="relative selection:bg-[#0033e7] selection:text-white bg-cover bg-center bg-fixed"
            style={{ backgroundImage: 'url("/background%20image.webp")' }}
        >
            <div className="absolute inset-0 bg-white/40 z-0 pointer-events-none"></div>

            {/* Custom Premium Hero */}
            <section className="pt-32 pb-16 md:pt-44 md:pb-28 text-center px-4 relative overflow-hidden z-10">
                <div className="container mx-auto max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/80 border border-blue-200 text-[#0033e7] font-bold uppercase text-[11px] tracking-[4px] mb-8 px-6 py-2.5 rounded-full shadow-sm backdrop-blur-md">
                            <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse"></span>
                            Full-Scale RCM Ecosystem
                        </div>
                        <h1 className="text-4xl md:text-[4rem] lg:text-[4.5rem] font-black text-slate-900 leading-[1] mb-8 tracking-tighter">
                            Solutions & <span className="text-[#0033e7]">Specialties</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 font-semibold leading-relaxed max-w-3xl mx-auto">
                            We don't just process claims; we optimize your entire financial lifecycle. Explore our specialized solutions designed for high-performance healthcare growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Services Section */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="flex items-center gap-6 mb-16">
                        <div className="h-[2px] bg-gradient-to-r from-[#0033e7] to-transparent flex-grow"></div>
                        <h2 className="text-[12px] font-black text-slate-900 uppercase tracking-[6px] px-2">Core Solutions</h2>
                        <div className="h-[2px] bg-gradient-to-l from-[#0033e7] to-transparent flex-grow"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                        {servicesList.map((service, index) => (
                            <motion.div
                                key={service.slug}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                            >
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="group bg-white/90 backdrop-blur-2xl rounded-[2.5rem] p-10 md:p-14 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_40px_80px_rgba(0,51,231,0.15)] hover:-translate-y-2 transition-all duration-500 flex flex-col md:flex-row gap-10 no-underline text-inherit h-full items-center relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-1000 pointer-events-none"></div>
                                    
                                    <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-[#0033e7] border border-slate-100 shadow-sm group-hover:bg-[#0033e7] group-hover:text-white transition-all duration-500 group-hover:shadow-[0_15px_30px_rgba(0,51,231,0.2)] flex-shrink-0">
                                        <FaCheckCircle size={32} />
                                    </div>
                                    
                                    <div className="flex-grow">
                                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-[#0033e7] transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-600 font-bold leading-relaxed text-[16px] mb-8">
                                            {service.description}
                                        </p>
                                        <div className="inline-flex items-center gap-3 text-[#0033e7] font-black text-[13px] uppercase tracking-[2px] border-b-2 border-transparent group-hover:border-[#0033e7] transition-all pb-1">
                                            Explore Solution <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialties Section */}
            <section className="py-24 relative z-10 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/95 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0033e7]/20 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none"></div>
                
                <div className="container mx-auto px-4 max-w-7xl relative z-20">
                    <div className="text-center mb-20">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <span className="text-teal-400 font-black uppercase text-[12px] tracking-[6px] mb-4 block">Industry Expertise</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">Built for Your Specialty</h2>
                            <p className="text-slate-400 font-bold text-lg max-w-2xl mx-auto">
                                Specialized RCM workflows designed to handle the unique complexities of your specific practice domain.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {specialtiesList.map((spec, index) => (
                            <motion.div 
                                key={spec.slug} 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95 },
                                    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: index * 0.1 } }
                                } as any}
                            >
                                <Link 
                                    href={`/specialties/${spec.slug}`}
                                    className="p-10 md:p-14 rounded-[2.5rem] bg-white/5 border border-white/10 text-white flex flex-col md:flex-row items-center gap-10 hover:bg-white/10 hover:border-[#0033e7]/50 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-md group h-full no-underline"
                                >
                                    <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center text-teal-400 group-hover:bg-teal-400 group-hover:text-slate-900 transition-all duration-500">
                                        {index === 0 && <FaHospital size={30} />}
                                        {index === 1 && <FaStethoscope size={30} />}
                                        {index === 2 && <FaClock size={30} />}
                                        {index === 3 && <FaUserMd size={30} />}
                                    </div>
                                    <div className="flex-grow text-center md:text-left">
                                        <h3 className="text-2xl md:text-3xl font-black mb-3 tracking-tight group-hover:text-teal-400 transition-colors">{spec.title}</h3>
                                        <p className="text-slate-400 font-bold text-[15px] leading-relaxed mb-6 group-hover:text-white transition-colors">{spec.description}</p>
                                        <div className="flex items-center justify-center md:justify-start gap-2 text-teal-400 font-black text-[12px] uppercase tracking-[3px]">
                                            View Domain <FaArrowRight size={12} className="group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

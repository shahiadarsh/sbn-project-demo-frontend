'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { servicesList, specialtiesList } from '@/data/services';
import { FaArrowRight, FaCheckCircle, FaProjectDiagram, FaShieldAlt, FaChartLine, FaRegCheckCircle, FaClock } from 'react-icons/fa';

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
            <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-blue-50/80 to-white/95 z-0 pointer-events-none"></div>

            {/* Custom Premium Hero */}
            <section className="pt-32 pb-16 md:pt-44 md:pb-28 text-center px-4 relative overflow-hidden z-10">
                <div className="container mx-auto max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-[#0033e7] font-bold uppercase text-[11px] tracking-[4px] mb-8 px-6 py-2.5 rounded-full shadow-sm">
                            <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse shadow-[0_0_10px_rgba(0,51,231,0.5)]"></span>
                            Primary Keywords - More Solutions
                        </div>
                        <h1 className="text-4xl md:text-[4rem] lg:text-[4.5rem] font-black text-slate-900 leading-[1] mb-8 tracking-tighter">
                            More Solutions for Complete <br className="hidden md:block" />
                            <span className="text-[#0033e7]">Revenue Cycle Management</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 font-semibold leading-relaxed max-w-3xl mx-auto tracking-tight">
                            Today, healthcare providers need more solutions than just basic billing. A simple system is not enough. If your process is not connected, it can cause delays, errors, and lost revenue.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Intro Content Section */}
            <section className="pb-20 relative z-10">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="bg-white/80 backdrop-blur-2xl rounded-3xl p-10 md:p-16 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
                    >
                        <p className="text-lg md:text-xl text-slate-700 leading-[1.8] font-bold tracking-tight mb-8">
                            Our approach is easy to understand and easy to use. We manage the full revenue cycle from start to finish. From patient entry to final payment, every step is handled in a clear and simple way. This is how we provide more solutions to sticky problems in billing.
                        </p>
                        <p className="text-slate-600 font-medium leading-[1.8]">
                            Some people look for answers like <em className="text-blue-600 font-bold italic">"can you suggest more solutions for managing remote work productivity?"</em> In healthcare, the real need is different. You need systems that connect your team, reduce mistakes, and improve income. That is where our <span className="text-[#0033e7] font-bold">more health solutions</span> approach helps.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[#0033e7] font-black uppercase text-[12px] tracking-[6px] mb-4 block">Our Process</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">What We Do</h2>
                        <p className="text-slate-600 font-bold mt-4 text-lg">We take care of your complete billing process</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Eligibility & Benefits', desc: 'We check eligibility and benefits before services' },
                            { title: 'Medical Coding', desc: 'We use correct medical coding (ICD-10 and CPT)' },
                            { title: 'Charge Capture', desc: 'We capture charges and submit claims quickly' },
                            { title: 'Denial Management', desc: 'We follow up on denied claims' },
                            { title: 'Payment Posting', desc: 'We post payments and match records' },
                            { title: 'Connected Workflow', desc: 'Everything is connected, so nothing gets missed.' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-white shadow-sm flex items-center gap-6 group hover:border-[#0033e7]/30 transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0033e7] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0033e7] group-hover:text-white transition-all">
                                    <FaRegCheckCircle size={20} />
                                </div>
                                <div>
                                    <h4 className="text-[17px] font-black text-slate-900 tracking-tight group-hover:text-[#0033e7] transition-colors">{item.title}</h4>
                                    <p className="text-slate-600 text-[14px] font-bold">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Solutions Grid */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex items-center gap-6 mb-16">
                        <div className="h-[2px] bg-gradient-to-r from-[#0033e7] to-transparent flex-grow"></div>
                        <h2 className="text-[12px] font-black text-slate-900 uppercase tracking-[6px] px-2 text-center">Specific Solutions</h2>
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
                                    className="group bg-white/80 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,51,231,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col md:flex-row gap-10 no-underline text-inherit h-full items-center relative overflow-hidden"
                                >
                                    <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0033e7] border border-blue-100 group-hover:bg-[#0033e7] group-hover:text-white transition-all duration-500 flex-shrink-0">
                                        <FaCheckCircle size={24} />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter group-hover:text-[#0033e7] transition-colors">{service.title}</h3>
                                        <p className="text-slate-600 font-bold leading-relaxed text-[15px] mb-6 tracking-tight line-clamp-2">{service.description}</p>
                                        <div className="inline-flex items-center gap-3 text-[#0033e7] font-black text-[12px] uppercase tracking-[2px]">
                                            Deep Dive <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Content Section */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <span className="text-[#0033e7] font-black uppercase text-[12px] tracking-[6px] mb-4 block">The SBN Advantage</span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8 italic">Why This Matters</h2>
                            <p className="text-xl text-slate-600 font-bold leading-relaxed mb-10 tracking-tight">
                                A simple and connected system makes a big difference. It saves time and improves results.
                            </p>
                            <div className="space-y-4">
                                {['Reduce billing errors', 'Avoid revenue loss', 'Understand your finances clearly', 'Keep your workflow smooth'].map((point, i) => (
                                    <div key={i} className="flex items-center gap-4 text-slate-900 font-black tracking-tight">
                                        <div className="w-6 h-6 rounded-full bg-[#0033e7]/10 text-[#0033e7] flex items-center justify-center flex-shrink-0">
                                            <FaCheckCircle size={12} />
                                        </div>
                                        {point}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }} 
                            whileInView={{ opacity: 1, scale: 1 }} 
                            viewport={{ once: true }}
                            className="bg-white/40 p-12 rounded-[3.5rem] border-8 border-white shadow-2xl relative"
                        >
                            <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-8">What You Get</h3>
                            <p className="text-slate-600 font-bold mb-8 italic">Our system helps your practice run better every day. You will get:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: 'Faster Payments', icon: FaChartLine },
                                    { title: 'Fewer Delays', icon: FaClock },
                                    { title: 'Financial Control', icon: FaShieldAlt },
                                    { title: 'Stable Cash Flow', icon: FaProjectDiagram }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group hover:border-[#0033e7] transition-all">
                                        <item.icon className="text-[#0033e7] mb-4" size={24} />
                                        <div className="font-black text-slate-900 text-[15px] uppercase tracking-wide">{item.title}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12 pt-8 border-t border-slate-100 text-center font-black text-[#0033e7] uppercase tracking-[2px] leading-relaxed">
                                In the end, our more solutions approach <br/> keeps your billing simple, clear, and effective
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}

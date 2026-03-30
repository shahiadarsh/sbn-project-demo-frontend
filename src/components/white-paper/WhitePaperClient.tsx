'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function WhitePaperClient() {
    return (
        <main className="bg-[#f8faff] relative selection:bg-[#0033e7] selection:text-white">
            {/* Custom Clean Header (No Image, Smaller Text) */}
            <section className="bg-gradient-to-b from-[#f0f4ff] to-[#f8faff] pt-32 pb-8 md:pt-40 md:pb-16 text-center px-4 relative overflow-hidden">
                {/* Soft glow effects without any heavy images */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[100px] mix-blend-multiply"></div>
                    <div className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px] mix-blend-multiply"></div>
                </div>
                
                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/60 border border-blue-100 text-[#0033e7] font-bold uppercase text-[11px] tracking-[3px] mb-8 px-5 py-2 rounded-full shadow-sm backdrop-blur-md">
                            <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse shadow-[0_0_10px_rgba(0,51,231,0.5)]"></span>
                            Industry Intelligence
                        </div>
                        <h1 className="text-3xl md:text-[3.25rem] font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                            Insights & Analytics
                        </h1>
                        <p className="text-[17px] md:text-[19px] text-slate-600 font-medium leading-[1.7] max-w-2xl mx-auto">
                            The business of healthcare is changing, and you need a partner that takes your business forward. Find insights and perspectives on the latest trends in healthcare revenue cycle management.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Wrapper */}
            <div 
                className="relative bg-cover bg-center bg-no-repeat overflow-hidden pt-8 pb-20 lg:pt-12 lg:pb-32"
                style={{ backgroundImage: 'url("/background%20image.webp")' }}
            >
                {/* Smooth blend top gradient from the solid hero into the image background */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#f8faff] to-transparent z-0 pointer-events-none"></div>

                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f8faff]/95 via-[#f8faff]/85 to-blue-50/70 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                        
                        {/* LEFT COLUMN: Content */}
                        <div className="flex-[2.2] min-w-0">
                            
                            {/* Featured Resource Block */}
                            <motion.div 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={fadeUp}
                                className="bg-white rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-slate-100 hover:shadow-[0_30px_70px_rgba(0,51,231,0.1)] transition-all duration-500 mb-16 group"
                            >
                                <div className="flex-[1.2]">
                                    <div className="inline-flex items-center gap-2 bg-[#0033e7]/10 text-[#0033e7] font-extrabold uppercase text-[10px] tracking-[2px] mb-5 px-3 py-1.5 rounded-md">
                                        Featured Guide
                                    </div>
                                    <h2 className="text-2xl md:text-[28px] font-extrabold mb-6 text-slate-900 leading-[1.25] tracking-tight group-hover:text-[#0033e7] transition-colors duration-300">
                                        What To Look For In A Medical Billing Company
                                    </h2>
                                    <p className="text-[16px] leading-[1.7] text-slate-600 mb-5 font-medium">
                                        Download our free whitepaper and see what any smart physician will take into account when interviewing potential billing company partners.
                                    </p>
                                    <p className="text-[16px] leading-[1.7] text-slate-600 font-medium">
                                        "What To Look For In A Medical Billing Company" will give you an insider's view of...well...what to look for in a medical billing company! This is insight you won't want to leave out of your deliberations.
                                    </p>
                                </div>
                                <div className="flex-1 w-full relative">
                                    <div className="relative rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.12)]">
                                        <img src="/img/white-paper.jpg" alt="White Paper Guide" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-2xl pointer-events-none"></div>
                                    </div>
                                    {/* Offset shadow decoration */}
                                    <div className="absolute inset-0 bg-blue-100 rounded-2xl -z-10 translate-x-4 translate-y-4 opacity-50 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                                </div>
                            </motion.div>

                            {/* Additional Resources Grid */}
                            <div>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    variants={fadeUp}
                                    className="mb-10 flex items-center justify-between"
                                >
                                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
                                        Latest Resources
                                    </h3>
                                    <div className="h-[2px] flex-grow bg-gradient-to-r from-slate-200 to-transparent ml-6"></div>
                                </motion.div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        {
                                            img: '/img/white-paper2.jpg',
                                            title: 'Patient Centric Billing in a Post-Pandemic World',
                                            desc: 'Even before the onset of the Covid-19 pandemic, the healthcare sector was being tested to its limits.'
                                        },
                                        {
                                            img: '/img/white-paper3.jpg',
                                            title: 'The Growth of Medical Billing in Telemedicine',
                                            desc: 'The need for better access to medical care has contributed significantly to the radical changes.'
                                        },
                                        {
                                            img: '/img/white-paper1.jpg',
                                            title: 'Healthcare in 2021: Optimal Revenue Cycle',
                                            desc: 'The Covid-19 pandemic tested the mettle of the healthcare sector like no other development in history.'
                                        }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, margin: "-50px" }}
                                            variants={{
                                                hidden: { opacity: 0, y: 30 },
                                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.15 } }
                                            } as any}
                                            className="bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,51,231,0.12)] border border-slate-100 flex flex-col group h-full shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                                        >
                                            <div className="h-[220px] overflow-hidden relative p-3 pb-0">
                                                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                    <div className="absolute inset-0 bg-[#0033e7]/0 group-hover:bg-[#0033e7]/10 transition-colors duration-500 pointer-events-none"></div>
                                                </div>
                                            </div>
                                            <div className="p-8 flex-1 flex flex-col relative">
                                                <h4 className="text-[18px] font-extrabold text-slate-900 mb-3 leading-[1.4] transition-colors group-hover:text-[#0033e7]">
                                                    {item.title}
                                                </h4>
                                                <p className="text-[15px] text-slate-500 mb-8 flex-grow leading-[1.6]">
                                                    {item.desc}
                                                </p>
                                                <div className="mt-auto">
                                                    <a href="#" className="inline-flex items-center justify-start gap-2 text-[#0033e7] font-bold text-[14px] uppercase tracking-[1px] no-underline transition-all duration-300 group-hover:gap-4">
                                                        Download PDF
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Sidebar Form */}
                        <aside className="hidden lg:block flex-1 min-w-[380px] w-full mt-2 sticky top-[100px]">
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="bg-white rounded-[2rem] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group hover:shadow-[0_40px_80px_rgba(0,51,231,0.1)] transition-shadow duration-500"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-[2rem] -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150 group-hover:rotate-12 pointer-events-none"></div>
                                
                                <div className="relative z-10">
                                    <div className="w-12 h-1.5 bg-[#0033e7] rounded-full mb-8"></div>
                                    <h3 className="text-[22px] font-extrabold text-slate-900 mb-3 tracking-tight">
                                        Download Free Guide
                                    </h3>
                                    <p className="text-[15px] text-slate-500 mb-8 font-medium leading-relaxed">
                                        Fill out the form below to access our premium healthcare content.
                                    </p>
                                    
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <input type="text" placeholder="First Name*" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl text-[14px] font-medium transition-all duration-300 focus:border-[#0033e7] focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,51,231,0.1)] outline-none placeholder:text-slate-400" required />
                                            </div>
                                            <div>
                                                <input type="text" placeholder="Last Name*" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl text-[14px] font-medium transition-all duration-300 focus:border-[#0033e7] focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,51,231,0.1)] outline-none placeholder:text-slate-400" required />
                                            </div>
                                        </div>
                                        <div>
                                            <input type="email" placeholder="Work Email*" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl text-[14px] font-medium transition-all duration-300 focus:border-[#0033e7] focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,51,231,0.1)] outline-none placeholder:text-slate-400" required />
                                        </div>
                                        <div>
                                            <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl text-[14px] font-medium transition-all duration-300 focus:border-[#0033e7] focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,51,231,0.1)] outline-none placeholder:text-slate-400" />
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Organization" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl text-[14px] font-medium transition-all duration-300 focus:border-[#0033e7] focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,51,231,0.1)] outline-none placeholder:text-slate-400" />
                                        </div>
                                        <button type="submit" className="w-full bg-[#0033e7] text-white border-none py-4 px-6 mt-4 font-bold rounded-xl cursor-pointer text-[14px] uppercase tracking-[2px] shadow-[0_8px_20px_rgba(0,51,231,0.25)] transition-all duration-300 hover:bg-[#0026b3] hover:shadow-[0_12px_25px_rgba(0,51,231,0.35)] hover:-translate-y-1 flex justify-center items-center gap-2 group/btn">
                                            Access Content
                                            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </motion.div>
                        </aside>

                    </div>
                </div>
            </div>
        </main>
    );
}

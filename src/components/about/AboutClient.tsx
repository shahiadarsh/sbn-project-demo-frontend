'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaHandHoldingUsd, FaUserMd } from 'react-icons/fa';

const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function AboutClient() {
    return (
        <main className="bg-white relative">
            {/* Banner Section */}
            <div
                className="relative bg-cover bg-center py-[120px] text-center overflow-hidden"
                style={{ backgroundImage: "url('/img/bg1.jpg')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0033e7]/90 to-[#0B1F33]/90 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold uppercase text-[11px] tracking-[4px] mb-6 px-5 py-2 rounded-full backdrop-blur-md"
                    >
                        <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.5)]"></span>
                        Our Company
                    </motion.div>
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1, ease: "easeOut" } }
                        } as any}
                        className="text-5xl md:text-[4rem] font-extrabold m-0 text-white drop-shadow-lg tracking-tight"
                    >
                        About Us
                    </motion.h1>
                </div>
            </div>

            {/* Main Content Wrapper with Background Image */}
            <div
                className="relative bg-cover bg-center bg-no-repeat overflow-hidden"
                style={{ backgroundImage: 'url("/background%20image.webp")' }}
            >
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/85 to-blue-100/70 pointer-events-none"></div>

                {/* Introduction Section */}
                <section className="py-24 md:py-32 relative z-10">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                            {/* Text Column */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={fadeUp}
                                className="flex-1"
                            >
                                <span className="text-[#0033e7] font-black uppercase text-[11px] tracking-[4px] mb-4 block">Who We Are</span>
                                <h2 className="text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 mb-8 leading-[1.2] tracking-tight">
                                    Pioneering Excellence in Healthcare Revenue
                                </h2>
                                <div className="space-y-6 text-[18px] text-slate-600 font-medium leading-[1.8]">
                                    <p>
                                        We have more than 11+ years of experience in Medical Billing Services. The major benefit of outsourcing billing with SBN Healthcare Solution is an unprecedented improvement in your financial performance.
                                    </p>
                                    <p>
                                        With our experienced staff, you can meet and exceed your business goals while saving more time and money than you would be trying to take care of your patient and other admin work. We function as an extension of your practice, ensuring seamless operations.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Image Column */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                } as any}
                                className="flex-1 w-full max-w-xl lg:max-w-none relative"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#0033e7] to-teal-400 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
                                <div className="relative rounded-2xl shadow-[0_20px_50px_rgba(0,51,231,0.15)] border-8 border-white overflow-hidden group bg-white">
                                    <img
                                        src="/about2.png"
                                        alt="About SBN Healthcare"
                                        className="w-full h-[400px] lg:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0033e7]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                                        <div className="p-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                            <p className="text-white font-bold text-xl drop-shadow-md">11+ Years of RCM Excellence</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-24 md:py-32 relative z-10 border-t border-slate-200/50">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
                            {/* Text Column */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={fadeUp}
                                className="flex-1"
                            >
                                <span className="text-[#0033e7] font-black uppercase text-[11px] tracking-[4px] mb-4 block">The SBN Advantage</span>
                                <h2 className="text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 mb-6 leading-[1.2] tracking-tight">
                                    Why Choose Us?
                                </h2>
                                <p className="text-slate-600 leading-[1.8] text-[18px] mb-10 font-medium">
                                    In the complex world of medical billing, precision and reliability are paramount. Here is how we deliver value to your practice:
                                </p>
                                <ul className="list-none p-0 space-y-6">
                                    {[
                                        { icon: FaChartLine, strong: "Revenue Improved", text: "We consistently help our clients increase their revenue by 20% or more through accurate coding and timely follow-ups." },
                                        { icon: FaHandHoldingUsd, strong: "Costs Reduced", text: "Outsourcing significantly lowers your administrative overhead by up to 40%, eliminating the need for in-house billing." },
                                        { icon: FaUserMd, strong: "Patient Experience", text: "By handing over the billing burden to us, we allow you to focus entirely on patient care." }
                                    ].map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={{
                                                hidden: { opacity: 0, x: -30 },
                                                visible: { opacity: 1, x: 0, transition: { delay: idx * 0.15, duration: 0.5 } }
                                            } as any}
                                            className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white shadow-[0_5px_15px_rgba(0,0,0,0.03)] flex items-start gap-6 hover:shadow-[0_20px_40px_rgba(0,51,231,0.12)] hover:-translate-y-2 transition-all duration-300 group"
                                        >
                                            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-blue-50 text-[#0033e7] flex items-center justify-center text-xl border border-blue-100 group-hover:bg-[#0033e7] group-hover:text-white transition-colors duration-300">
                                                <item.icon />
                                            </div>
                                            <div>
                                                <strong className="block text-slate-900 font-extrabold text-[19px] mb-2 tracking-tight group-hover:text-[#0033e7] transition-colors">{item.strong}</strong>
                                                <span className="text-slate-600 text-[16px] font-medium leading-relaxed block">{item.text}</span>
                                            </div>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Image Column */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{
                                    hidden: { opacity: 0, x: -50 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                } as any}
                                className="flex-1 w-full max-w-xl lg:max-w-none relative"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-l from-[#0033e7] to-teal-400 rounded-2xl blur-2xl opacity-10 animate-pulse"></div>
                                <div className="relative rounded-2xl shadow-[0_20px_50px_rgba(0,51,231,0.15)] border-8 border-white overflow-hidden group bg-white">
                                    <img
                                        src="/about1.png"
                                        alt="Why Choose Us"
                                        className="w-full h-[450px] lg:h-[650px] object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0033e7]/80 via-[#0033e7]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-24 relative z-10 mb-16">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeUp}
                            className="bg-cover bg-center rounded-2xl p-16 md:p-24 text-center max-w-5xl mx-auto relative overflow-hidden shadow-[0_40px_80px_rgba(0,51,231,0.25)] border border-white/20"
                            style={{ backgroundImage: "url('/background%20image.webp')" }}
                        >
                            {/* Deep rich overlay for text readability */}
                            <div className="absolute inset-0 bg-[#0B1F33]/90 z-0"></div>

                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0033e7]/40 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none z-0 mix-blend-screen"></div>
                            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-500/20 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none z-0 mix-blend-screen"></div>

                            <span className="text-teal-400 font-bold uppercase text-[12px] tracking-[5px] mb-6 block relative z-10">Our Purpose</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 relative z-10 tracking-tight">
                                Our Mission
                            </h2>
                            <p className="text-2xl md:text-[2rem] font-medium text-white/90 leading-[1.6] relative z-10 tracking-tight max-w-4xl mx-auto italic">
                                "To provide comprehensive, efficient, and transparent billing solutions that empower healthcare providers to focus on what they do best: &nbsp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-300">caring for patients.</span>"
                            </p>
                        </motion.div>
                    </div>
                </section>
            </div>
        </main>
    );
}

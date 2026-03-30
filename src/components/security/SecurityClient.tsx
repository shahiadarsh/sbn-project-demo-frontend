'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function SecurityClient() {
    return (
        <main className="bg-[#f8faff] relative selection:bg-[#0033e7] selection:text-white">
            {/* Custom Premium Security Hero (Light Theme) */}
            <section className="bg-gradient-to-b from-[#f4f7ff] to-[#f8faff] pt-32 pb-16 md:pt-40 md:pb-24 text-center px-4 relative overflow-hidden">
                {/* Security Glowing Orbs */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] right-[15%] w-[600px] h-[600px] bg-[#0033e7]/20 rounded-full blur-[120px] mix-blend-multiply"></div>
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
                            Vigilant Stewardship
                        </div>
                        <h1 className="text-4xl md:text-[3.5rem] lg:text-[4rem] font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                            Security & Compliance
                        </h1>
                        <p className="text-[17px] md:text-[19px] text-slate-600 font-medium leading-[1.7] max-w-2xl mx-auto">
                            An innovation-driven governance framework designed to protect the integrity of healthcare data through proactive risk mitigation and audit-ready infrastructure.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Wrapper */}
            <div 
                className="relative bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col"
                style={{ backgroundImage: 'url("/background%20image.webp")' }}
            >
                {/* Smooth blend from light hero to bright content */}
                <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#f8faff] to-transparent z-0 pointer-events-none"></div>

                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f8faff]/95 via-white/85 to-blue-50/70 pointer-events-none"></div>

                {/* HIPAA Leadership Statement */}
                <section className="py-20 lg:py-28 relative z-10">
                    <div className="container mx-auto px-4">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeUp}
                            className="bg-white/80 backdrop-blur-xl border border-white p-10 md:p-16 rounded-2xl shadow-[0_20px_60px_rgba(0,51,231,0.06)] max-w-[1000px] mx-auto text-center relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150 pointer-events-none"></div>
                            
                            <span className="text-[#0033e7] font-extrabold uppercase text-xs tracking-[3px] mb-5 block relative z-10">
                                Governance Standards
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.15] mb-10 tracking-tight relative z-10">
                                HIPAA Compliance & Data Sovereignty
                            </h2>
                            <div className="max-w-[800px] mx-auto relative z-10">
                                <p className="text-[1.1rem] md:text-[1.25rem] leading-[1.8] text-slate-700 font-medium italic mb-10 border-l-4 border-[#0033e7] pl-8 inline-block text-left relative z-10 bg-slate-50/50 p-6 rounded-r-xl border-white/50 shadow-sm backdrop-blur-sm">
                                    "Compliance is not just a requirement; it is the cornerstone of our accountability partner relationship with providers."
                                    <span className="absolute -top-4 -left-3 text-6xl text-[#0033e7] opacity-20 font-serif">"</span>
                                </p>
                                <p className="text-[16px] md:text-[18px] leading-[1.8] text-slate-600 font-medium text-left md:text-center">
                                    At SBN Healthcare, our HIPAA compliance strategy is built on the rigorous physical, administrative, and technical safeguards necessary to protect Protected Health Information (PHI). We leverage a multi-layered security architecture that exceeds government standards, ensuring that every transaction and data point is handled with absolute confidentiality.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Defense in Depth */}
                <section className="py-20 relative z-10">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <motion.span 
                                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                                className="bg-white/80 backdrop-blur-md border border-white px-5 py-2 rounded-full text-[11px] font-extrabold text-[#0033e7] uppercase tracking-[3px] mb-6 inline-block shadow-sm"
                            >
                                Security Architecture
                            </motion.span>
                            <motion.h2 
                                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                                className="text-4xl md:text-[3.5rem] font-black text-slate-900 tracking-tight"
                            >
                                Defense in Depth
                            </motion.h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Card 1: Physical Layer */}
                            <motion.div 
                                initial="hidden" whileInView="visible" viewport={{ once: true }}
                                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } } as any}
                                className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-white relative group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,51,231,0.08)]"
                            >
                                <div className="w-16 h-16 bg-blue-50/80 text-blue-600 rounded-xl flex items-center justify-center mb-8 border border-blue-100 group-hover:bg-[#0033e7] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-[0_10px_20px_rgba(0,51,231,0.2)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">Physical Layer</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">
                                    Hardened data centers with biometric authentication, 24/7 surveillance, and multi-factor physical access protocols.
                                </p>
                                <div className="mt-8 flex gap-2">
                                    <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full uppercase tracking-widest border border-slate-200">Biometric Access</span>
                                    <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full uppercase tracking-widest border border-slate-200">Tier-4 DC</span>
                                </div>
                            </motion.div>

                            {/* Card 2: Digital Perimeter */}
                            <motion.div 
                                initial="hidden" whileInView="visible" viewport={{ once: true }}
                                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } } as any}
                                className="bg-white p-10 rounded-2xl shadow-[0_30px_70px_rgba(0,51,231,0.12)] border border-[#0033e7]/20 relative group transition-all duration-500 hover:-translate-y-3 z-20 md:scale-105 ring-4 ring-[#0033e7]/5"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                                <div className="w-16 h-16 bg-[#0033e7]/10 text-[#0033e7] rounded-xl flex items-center justify-center mb-8 border border-[#0033e7]/20 group-hover:bg-[#0033e7] group-hover:text-white transition-all duration-500 group-hover:shadow-[0_10px_20px_rgba(0,51,231,0.25)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">Digital Perimeter</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">
                                    AI-driven firewalls, real-time intrusion detection systems, and automated threat prioritization engines.
                                </p>
                                <div className="mt-8 flex gap-2">
                                    <span className="text-[10px] font-bold bg-[#0033e7]/10 text-[#0033e7] px-3 py-1 rounded-full uppercase tracking-widest border border-[#0033e7]/20">AI Firewalls</span>
                                    <span className="text-[10px] font-bold bg-[#0033e7]/10 text-[#0033e7] px-3 py-1 rounded-full uppercase tracking-widest border border-[#0033e7]/20">DDoS Shield</span>
                                </div>
                            </motion.div>

                            {/* Card 3: Data Core */}
                            <motion.div 
                                initial="hidden" whileInView="visible" viewport={{ once: true }}
                                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } } } as any}
                                className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-white relative group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(147,51,234,0.08)]"
                            >
                                <div className="w-16 h-16 bg-purple-50/80 text-purple-600 rounded-xl flex items-center justify-center mb-8 border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-[0_10px_20px_rgba(147,51,234,0.2)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">Data Core</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">
                                    Enterprise-grade encryption at rest and in transit, with Zero-Trust identity governance.
                                </p>
                                <div className="mt-8 flex gap-2">
                                    <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full uppercase tracking-widest border border-slate-200">AES-256</span>
                                    <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full uppercase tracking-widest border border-slate-200">Zero Trust</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Proactive Integrity Grid */}
                <section className="py-20 lg:py-28 relative z-10">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <motion.div 
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                        >
                            <div className="max-w-[700px]">
                                <span className="text-[#0033e7] font-extrabold uppercase text-[11px] tracking-[3px] mb-4 block">Real-time Safety</span>
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Proactive Integrity Grid</h2>
                            </div>
                            <div className="pb-2">
                                <span className="px-5 py-2 bg-white/60 backdrop-blur-md border border-white rounded-xl text-slate-700 font-bold text-xs uppercase tracking-[2px] shadow-sm">
                                    Always-On Oversight
                                </span>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Card 1: 24/7 Monitoring */}
                            <motion.div 
                                initial="hidden" whileInView="visible" viewport={{ once: true }}
                                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } } as any}
                                className="group p-10 bg-white/95 backdrop-blur-md rounded-2xl border border-white shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(0,51,231,0.08)] transition-all duration-500 overflow-hidden relative"
                            >
                                <div className="relative z-10">
                                    <div className="flex items-center gap-5 mb-8">
                                        <div className="w-14 h-14 bg-[#0033e7] text-white rounded-xl flex items-center justify-center shadow-lg shadow-[#0033e7]/30 transform group-hover:scale-110 transition-transform duration-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                        </div>
                                        <h4 className="text-[22px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">24/7<br/>Monitoring</h4>
                                    </div>
                                    <p className="text-[16px] text-slate-600 leading-relaxed font-medium mb-0">
                                        Real-time hawk-eye oversight across every operational tier. Continuous scanning for vulnerabilities and unannounced compliance stress tests to ensure 24/7 vigilance.
                                    </p>
                                </div>
                                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-blue-50 rounded-full group-hover:bg-[#0033e7]/5 group-hover:scale-150 transition-all duration-700 pointer-events-none"></div>
                            </motion.div>

                            {/* Card 2: Audit-Ready Architecture */}
                            <motion.div 
                                initial="hidden" whileInView="visible" viewport={{ once: true }}
                                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } } as any}
                                className="group p-10 bg-[#0B1F33] rounded-2xl border border-[#1a365d] shadow-[0_20px_50px_rgba(11,31,51,0.2)] hover:shadow-[0_30px_70px_rgba(0,51,231,0.3)] transition-all duration-500 overflow-hidden relative text-white"
                            >
                                <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-5 mix-blend-overlay"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-5 mb-8">
                                        <div className="w-14 h-14 bg-white text-[#0B1F33] rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
                                        </div>
                                        <h4 className="text-[22px] font-extrabold text-white tracking-tight leading-[1.2]">Audit-Ready<br/>Systems</h4>
                                    </div>
                                    <p className="text-[16px] text-slate-300 leading-relaxed font-medium mb-0 opacity-90">
                                        Immutable data trails and instant compliance reporting. Every byte captured with audit-ready transparency to eliminate administrative friction during regulatory reviews.
                                    </p>
                                </div>
                                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/5 rounded-full group-hover:bg-white/10 group-hover:scale-150 transition-all duration-700 pointer-events-none"></div>
                            </motion.div>

                            {/* Card 3: Clinical Sovereignty */}
                            <motion.div 
                                initial="hidden" whileInView="visible" viewport={{ once: true }}
                                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } } } as any}
                                className="group p-10 bg-white/95 backdrop-blur-md rounded-2xl border border-white shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(20,184,166,0.15)] transition-all duration-500 overflow-hidden relative"
                            >
                                <div className="relative z-10">
                                    <div className="flex items-center gap-5 mb-8">
                                        <div className="w-14 h-14 bg-teal-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/30 transform group-hover:scale-110 transition-transform duration-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="22" y1="11" x2="16" y2="11"></line></svg>
                                        </div>
                                        <h4 className="text-[22px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">Clinical<br/>Sovereignty</h4>
                                    </div>
                                    <p className="text-[16px] text-slate-600 leading-relaxed font-medium mb-0">
                                        Granular provider-level data controls and Zero-Trust identity management. Ensuring clinical integrity by restricting data exposure only to authorized care stakeholders.
                                    </p>
                                </div>
                                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-teal-50 rounded-full group-hover:bg-teal-500/5 group-hover:scale-150 transition-all duration-700 pointer-events-none"></div>
                            </motion.div>

                            {/* Card 4: Innovation Guardrails */}
                            <motion.div 
                                initial="hidden" whileInView="visible" viewport={{ once: true }}
                                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } } } as any}
                                className="group p-10 bg-indigo-50/80 backdrop-blur-md rounded-2xl border border-white shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(79,70,229,0.15)] transition-all duration-500 overflow-hidden relative"
                            >
                                <div className="relative z-10">
                                    <div className="flex items-center gap-5 mb-8">
                                        <div className="w-14 h-14 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/30 transform group-hover:scale-110 transition-transform duration-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
                                        </div>
                                        <h4 className="text-[22px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">Innovation<br/>Guardrails</h4>
                                    </div>
                                    <p className="text-[16px] text-slate-600 leading-relaxed font-medium mb-0">
                                        AI-powered security governance that evolves with emerging threats. Proactive risk mitigation engine that anticipates architectural gaps before they appear.
                                    </p>
                                </div>
                                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white rounded-full group-hover:bg-indigo-600/5 group-hover:scale-150 transition-all duration-700 pointer-events-none"></div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { pricingModels } from '@/data/pricing';

export default function PricingPageClient() {
    return (
        <main className="bg-[#f8faff] relative selection:bg-[#0033e7] selection:text-white">
            {/* Custom Premium Hero (Light Theme) */}
            <section className="bg-gradient-to-b from-[#f4f7ff] to-[#f8faff] pt-32 pb-16 md:pt-40 md:pb-24 text-center px-4 relative overflow-hidden">
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
                            Investment Models
                        </div>
                        <h1 className="text-4xl md:text-[3.5rem] lg:text-[4rem] font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                            Smart Pricing. Fast ROI.
                        </h1>
                        <p className="text-[17px] md:text-[19px] text-slate-600 font-medium leading-[1.7] max-w-2xl mx-auto">
                            Choose the best pricing model that fits your practice's needs. We offer flexible plans to ensure you get the best value, reducing your costs while minimizing risk.
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

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {pricingModels.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`group bg-white/90 backdrop-blur-xl rounded-2xl overflow-hidden relative transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,51,231,0.12)] border border-white flex flex-col
                                    ${item.theme === 'red' ? 'border-t-[6px] border-t-red-500' : 'border-t-[6px] border-t-[#0033e7]'}`
                                }
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 + (index * 0.15) }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50/50 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                                <div className="p-10 flex-1 flex flex-col relative z-20">
                                    <h3 className="text-[22px] font-extrabold mb-6 pb-6 border-b border-slate-100 min-h-[80px] flex items-center text-slate-900 tracking-tight leading-[1.3] group-hover:text-[#0033e7] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-[16px] leading-[1.7] text-slate-600 mb-10 flex-grow font-medium">
                                        {item.description}
                                    </p>
                                    <div className="mt-auto pt-2">
                                        <Link 
                                            href="/contact-us" 
                                            className="flex items-center justify-center gap-2 w-full text-center bg-[#0033e7] hover:bg-blue-800 text-white transform hover:-translate-y-1 transition-all duration-300 font-bold uppercase text-[12px] tracking-[2px] py-4 rounded-xl shadow-[0_10px_20px_rgba(0,51,231,0.2)] hover:shadow-[0_15px_30px_rgba(0,51,231,0.3)] no-underline group/btn"
                                        >
                                            Get Quotation
                                            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-20 text-center"
                    >
                        <p className="text-slate-500 font-medium text-[15px] bg-white/60 backdrop-blur-md inline-block px-8 py-3 rounded-full border border-white shadow-sm transition-all hover:bg-white/90">
                            Need a custom enterprise solution? <Link href="/contact-us" className="text-[#0033e7] font-extrabold hover:underline">Contact our sales team</Link>.
                        </p>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import RCMCalculator from '@/components/tools/RCMCalculator';

const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function RCMCalculatorPageClient() {
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
                            Financial Intelligence
                        </div>
                        <h1 className="text-4xl md:text-[3.5rem] lg:text-[4rem] font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                            Denial & ROI Calculator
                        </h1>
                        <p className="text-[17px] md:text-[19px] text-slate-600 font-medium leading-[1.7] max-w-2xl mx-auto">
                            Quantify your revenue leakage. Our interactive calculator uses industry benchmarks to visualize your recovery potential and the impact of optimized billing.
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

                <section className="py-20 lg:py-28 relative z-10">
                    <div className="container mx-auto px-4">
                        <motion.div 
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className="text-center mb-16 max-w-[800px] mx-auto"
                        >
                            <span className="bg-white/60 backdrop-blur-md border border-white px-5 py-2 rounded-full text-[11px] font-extrabold text-[#0033e7] uppercase tracking-[3px] mb-6 inline-block shadow-sm">
                                Interactive Tool
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
                                Visualize Your Revenue Potential
                            </h2>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                Adjust the sliders below based on your current practice metrics. Our algorithm will instantly project the financial impact of improved denial management.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="max-w-[1100px] mx-auto relative z-10"
                        >
                            <RCMCalculator />
                        </motion.div>

                        {/* Disclaimer / Note */}
                        <motion.div 
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className="mt-16 max-w-[800px] mx-auto text-center relative z-10"
                        >
                            <div className="p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-[0_15px_40px_rgba(0,0,0,0.04)] inline-block relative overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,51,231,0.08)]">
                                <p className="text-[15px] text-slate-600 font-medium leading-relaxed relative z-10">
                                    <span className="text-[#0033e7] font-extrabold block mb-3 uppercase tracking-[1.5px] text-[12px]">Calculation Methodology</span>
                                    These results are estimates based on average healthcare billing benchmarks and historical performance data.
                                    Actual recovery amounts depend on payer mix, specialty, and data quality. For a precise clinical audit,
                                    please speak with an SBN analyst.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </main>
    );
}

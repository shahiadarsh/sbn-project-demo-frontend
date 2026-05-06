'use client';

import React from 'react';
import { statsData } from '@/data/home';

const Counter = ({ value }: { value: string }) => {
    return (
        <span className="text-4xl md:text-5xl font-extrabold mb-2 text-[#0033e7] leading-none">
            {value}
        </span>
    );
};

const Stats = () => {
    const statContext: Record<string, string> = {
        "Revenue Improved": "Average lift for our client network",
        "Costs Reduced": "Operational savings via automation",
        "Patient Experience Transformed": "Patient satisfaction score increase",
        "Years of Experience": "Dedicated healthcare expertise",
        "Millions Processed": "Annually managed revenue volume",
        "Clean Claims Ratio": "First-pass acceptance standard"
    };

    return (
        <section className="relative py-24 md:py-32 overflow-hidden border-t border-slate-100 bg-slate-50/50">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-200 text-[#0033e7] font-semibold uppercase text-xs tracking-[2px] mb-6 px-5 py-2 rounded-full backdrop-blur-sm">
                        <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse"></span>
                        Network Performance
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.2] mb-8">
                        Data-driven outcomes that <br className="hidden md:block" /> define industry leadership.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {statsData.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/80 backdrop-blur-md p-10 rounded-2xl border border-white transition-all duration-500 hover:shadow-[0_25px_50px_rgba(0,51,231,0.15)] hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Decorative Corner Element updated to primary color */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0033e7]/5 rounded-bl-full translate-x-16 -translate-y-16 transition-transform group-hover:scale-[1.8] duration-700"></div>

                            <div className="relative z-10">
                                <div className="mb-0 flex items-baseline gap-1">
                                    <Counter value={stat.value} />
                                </div>
                                <h3 className="text-[11px] font-black text-gray-900 mb-4 uppercase tracking-[2px] mt-6">
                                    {stat.label}
                                </h3>
                                <div className="w-8 h-1 bg-[#0033e7] mb-6 rounded-full transition-all group-hover:w-16 duration-500 opacity-80"></div>
                                <p className="text-[14px] text-gray-600 font-medium leading-relaxed">
                                    {statContext[stat.label] || "Accelerated financial results through intelligent automation."}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

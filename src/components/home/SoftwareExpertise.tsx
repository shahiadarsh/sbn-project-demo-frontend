'use client';

import React from 'react';
import Image from 'next/image';

const softwareList = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    logo: `/img/software/software${i + 1}.webp`
}));

// Duplicate to create seamless loop
const row1 = [...softwareList.slice(0, 8), ...softwareList.slice(0, 8)];
const row2 = [...softwareList.slice(8, 16), ...softwareList.slice(8, 16)];

const SoftwareExpertise = () => {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden border-t border-slate-100 bg-slate-50/50">
            <div className="container mx-auto px-4 mb-16 relative z-10">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-200 text-[#0033e7] font-semibold uppercase text-xs tracking-[2px] mb-6 px-5 py-2 rounded-full backdrop-blur-sm">
                        <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse"></span>
                        Integrations
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.2]">
                        Software we Expertise
                    </h2>
                </div>
            </div>

            {/* Row 1 — scrolls left */}
            <div className="relative w-full mb-6 overflow-hidden z-10">
                <div className="flex gap-6 animate-marquee-left">
                    {row1.map((sw, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-[140px] h-[80px] bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-sm flex items-center justify-center p-3 hover:shadow-[0_15px_30px_rgba(0,51,231,0.15)] hover:-translate-y-1 transition-all duration-300 relative"
                        >
                            <Image
                                src={sw.logo}
                                alt={`Software ${sw.id}`}
                                fill
                                className="object-contain p-3 filter grayscale-0 hover:grayscale-0 transition-all duration-300"
                                sizes="140px"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 2 — scrolls right */}
            <div className="relative w-full overflow-hidden z-10">
                <div className="flex gap-6 animate-marquee-right">
                    {row2.map((sw, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-[140px] h-[80px] bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-sm flex items-center justify-center p-3 hover:shadow-[0_15px_30px_rgba(0,51,231,0.15)] hover:-translate-y-1 transition-all duration-300 relative"
                        >
                            <Image
                                src={sw.logo}
                                alt={`Software ${sw.id}`}
                                fill
                                className="object-contain p-3 filter grayscale-0 hover:grayscale-0 transition-all duration-300"
                                sizes="140px"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <p className="text-center text-gray-500 font-bold uppercase tracking-[2px] text-[10px] mt-12 relative z-10">
                Seamless integration with 50+ EMR/EHR platforms
            </p>
        </section>
    );
};

export default SoftwareExpertise;

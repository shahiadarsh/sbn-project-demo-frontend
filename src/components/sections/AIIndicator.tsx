'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaUserShield, FaBolt } from 'react-icons/fa';

interface AIIndicatorProps {
    stage: string;
    description: string;
    impact: string;
}

const AIIndicator: React.FC<AIIndicatorProps> = ({ stage, description, impact }) => {
    return (
        <div 
            className="py-20 overflow-hidden relative rounded-3xl mx-4 lg:mx-auto max-w-7xl my-16 shadow-[0_30px_60px_rgba(0,0,0,0.15)] group bg-cover bg-center"
            style={{ backgroundImage: 'url("/background%20image.webp")' }}
        >
            <div className="absolute inset-0 bg-[#0B1F33]/85 z-0 pointer-events-none"></div>
            {/* Background Animation */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0033e7]/20 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none"></div>
            
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center hover:bg-white/10 transition-colors duration-500">
                    <div className="flex-shrink-0">
                        <div className="w-24 h-24 bg-[#0033e7] rounded-full flex items-center justify-center relative shadow-[0_0_50px_rgba(0,51,231,0.3)]">
                            <FaRobot size={40} className="text-white" />
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-[#0033e7] rounded-full opacity-20"
                            ></motion.div>
                        </div>
                    </div>

                    <div className="flex-grow text-center md:text-left">
                        <div className="inline-flex items-center gap-2 bg-[#0033e7]/20 border border-[#0033e7]/30 text-[#60a5fa] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[2px] mb-6">
                            <FaBolt /> AI-Assisted Output
                        </div>
                        <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight leading-[1.2]">
                            {stage}
                        </h3>
                        <p className="text-slate-400 text-[17px] font-medium leading-[1.7] mb-8">
                            {description}
                        </p>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="bg-black/30 rounded-2xl p-6 border border-white/5 flex-1 shadow-inner">
                                <span className="text-[10px] font-bold uppercase text-slate-500 tracking-[2px] block mb-2">Efficiency Gain</span>
                                <span className="text-[22px] font-black text-[#60a5fa]">{impact}</span>
                            </div>
                            <div className="bg-black/30 rounded-2xl p-6 border border-white/5 flex flex-1 items-center gap-4 shadow-inner">
                                <FaUserShield className="text-[#60a5fa] flex-shrink-0" size={24} />
                                <div className="text-left">
                                    <span className="text-[10px] font-bold uppercase text-slate-500 tracking-[2px] block mb-1">Quality Guard</span>
                                    <span className="text-xs font-bold text-white uppercase tracking-wide">Human Oversight Required</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIIndicator;

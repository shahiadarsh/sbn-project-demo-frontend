'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaExpand } from 'react-icons/fa';

// Fade-up style identical to AOS
const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const OfficeOperations = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleFullscreen = () => {
        if (videoRef.current) {
            videoRef.current.requestFullscreen();
        }
    };

    return (
        <section 
            className="py-24 md:py-32 bg-cover bg-center bg-no-repeat overflow-hidden relative border-t border-slate-100"
            style={{ backgroundImage: 'url("/background%20image.webp")' }}
        >
            {/* Overlay gradient identical to Hero section to maintain high readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-blue-100/60 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-200 text-[#0033e7] font-semibold uppercase text-xs tracking-[2px] mb-6 px-5 py-2 rounded-full backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse"></span>
                        Behind The Scenes
                    </motion.div>
                    
                    <motion.h2 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-8 leading-[1.2]"
                    >
                        Sovereign Operations Center
                    </motion.h2>
                    
                    <motion.p 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="text-lg text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed"
                    >
                        A look inside our state-of-the-art infrastructure where precision meets performance. Our expert analysts work around the clock to ensure your revenue cycles remain friction-less.
                    </motion.p>
                </div>

                {/* Video Player */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.95, y: 40 },
                        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
                    } as any}
                    className="max-w-5xl mx-auto"
                >
                    <div className="relative rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-[0_40px_80px_rgba(0,51,231,0.15)] border border-white group">
                        <video
                            ref={videoRef}
                            src="/img/workflow.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full aspect-video object-cover"
                        />

                        {/* Gradient Overlay bottom for controls readability */}
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-70" />

                        {/* Controls */}
                        <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="flex items-center gap-4 md:gap-6">
                                <button
                                    onClick={togglePlay}
                                    className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-[#0033e7] rounded-2xl flex items-center justify-center border border-white/40 transition-all duration-300 transform hover:scale-105"
                                >
                                    {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} className="ml-0.5" />}
                                </button>
                                <span className="text-white text-[9px] md:text-[11px] font-black uppercase tracking-[3px] opacity-90 drop-shadow-md">
                                    SBN Global Center
                                </span>
                            </div>
                            <button
                                onClick={handleFullscreen}
                                className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-[#0033e7] rounded-xl md:rounded-2xl flex items-center justify-center border border-white/40 transition-all duration-300 transform hover:scale-105"
                            >
                                <FaExpand size={14} />
                            </button>
                        </div>

                        {/* SBN Watermark */}
                        <div className="absolute top-6 left-6 md:top-8 md:left-8 pointer-events-none">
                            <span className="text-[8px] md:text-[10px] font-black text-white/50 uppercase tracking-[4px] drop-shadow-md">SBN System</span>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Below Video */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    {[
                        { value: '200+', label: 'Billing Specialists' },
                        { value: '24/7/365', label: 'Operations Coverage' },
                        { value: '11+ Yrs', label: 'Market Leadership' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: i * 0.15 } }
                            } as any}
                            className="relative py-6 md:py-0"
                        >
                            <div className="text-4xl md:text-5xl font-black text-[#0033e7] tracking-tighter mb-3">{stat.value}</div>
                            <div className="text-gray-500 font-bold uppercase text-[11px] tracking-[3px]">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfficeOperations;

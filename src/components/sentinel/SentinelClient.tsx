'use client';

import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import Link from 'next/link';

const SentinelClient = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <PageHeader 
                title="SBN Sentinel" 
                subtitle="A clearer view of healthcare operations"
            />
            
            <section className="py-20 relative">
                <div className="w-full px-6 lg:px-12 2xl:px-20 max-w-4xl relative z-10">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200/60 relative overflow-hidden">
                        
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>

                        <div className="relative z-10 prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#0033e7] prose-a:no-underline hover:prose-a:underline">
                            
                            <p className="text-slate-600 leading-relaxed text-xl font-medium mt-0">
                                SBN Sentinel is a healthcare operational intelligence product from SBN Healthcare Solution LLC. It helps healthcare practice teams review operational information, identify issues needing attention, and support informed follow-up.
                            </p>
                            
                            <p className="text-slate-600 leading-relaxed">
                                Built for practice administrators, operations managers, and revenue teams, Sentinel supports operational review while authorised healthcare professionals and practice staff remain responsible for decisions.
                            </p>

                            <h3 className="text-xl text-slate-900 mt-10">Integration and availability</h3>
                            <p className="text-slate-600 leading-relaxed">
                                The proposed integration is intended to retrieve practice-authorised information for Sentinel's defined functions without modifying EHR records.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Integration availability depends on applicable approvals, practice authorisation, and technical validation. Contact SBN to discuss availability and suitability for your practice.
                            </p>

                            <h3 className="text-xl text-slate-900 mt-10">Data use and privacy</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Please review the Sentinel Data Use and Privacy Notice for information about application data handling.
                            </p>
                            
                            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200/50 my-6">
                                <p className="text-amber-900 m-0 font-medium">
                                    Do not submit patient records, medical information, passwords or access credentials through ordinary website enquiry forms or general enquiry emails.
                                </p>
                            </div>

                            <div className="mt-12 bg-[#010614] rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0033e7] rounded-full blur-[60px] opacity-50 -mr-10 -mt-10 pointer-events-none"></div>
                                <h3 className="text-xl !text-white mt-0 mb-4 font-bold tracking-tight">
                                    Contact SBN
                                </h3>
                                <p className="!text-slate-300 mb-6 text-sm">
                                    For product information, integration enquiries or privacy questions:
                                </p>
                                <div className="space-y-2 text-sm font-medium mb-8">
                                    <p className="m-0 !text-white font-bold">SBN Healthcare Solution LLC</p>
                                    <p className="m-0 !text-slate-300">Email: <a href="mailto:info@sbnhealthcaresolution.com" className="!text-blue-400 hover:!text-white transition-colors no-underline">info@sbnhealthcaresolution.com</a></p>
                                </div>
                                <Link 
                                    href="/contact-us?subject=Sentinel+enquiry"
                                    className="inline-block bg-[#0033e7] hover:bg-blue-600 !text-white font-bold py-3 px-8 rounded-xl transition-colors no-underline"
                                >
                                    Enquire About Sentinel
                                </Link>
                            </div>

                            <div className="mt-12 pt-8 border-t border-slate-100">
                                <h3 className="text-lg text-slate-900 mt-0 mb-4">
                                    Related information:
                                </h3>
                                <ul className="flex flex-wrap gap-4 text-sm text-slate-600 list-none p-0 m-0">
                                    <li className="m-0 p-0 before:hidden"><Link href="/sentinel/privacy">Sentinel Data Use and Privacy</Link></li>
                                    <li className="m-0 p-0 before:hidden text-slate-300">•</li>
                                    <li className="m-0 p-0 before:hidden"><Link href="/security">Security Overview</Link></li>
                                    <li className="m-0 p-0 before:hidden text-slate-300">•</li>
                                    <li className="m-0 p-0 before:hidden"><Link href="/terms">Terms of Service</Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SentinelClient;

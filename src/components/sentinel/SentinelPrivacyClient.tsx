'use client';

import React from 'react';
import PageHeader from '@/components/layout/PageHeader';

const SentinelPrivacyClient = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <PageHeader 
                title="Sentinel Data Use and Privacy Notice" 
                subtitle="Information about how SBN Sentinel handles your data."
            />
            
            <section className="py-20 relative">
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200/60 relative overflow-hidden">
                        <div className="relative z-10 prose prose-lg prose-slate max-w-none">
                            <p className="text-slate-600 leading-relaxed font-medium">
                                This notice describes the data flow and handling for the SBN Sentinel application.
                            </p>
                            
                            <h3 className="text-xl text-slate-900 mt-10">Data Categories and Sources</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Sentinel retrieves practice-authorized data solely for operational reporting. It does not modify source records in Practice Fusion or other EHR systems. Data accessed includes operational metrics, billing statuses, and relevant performance indicators.
                            </p>
                            
                            <h3 className="text-xl text-slate-900 mt-10">Local Processing and Storage</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Data is processed to generate operational intelligence reports. Storage of live data, logs, cache, and backups is protected by encryption and restricted to authorized personnel. Sentinel does not permanently store patient medical records.
                            </p>
                            
                            <h3 className="text-xl text-slate-900 mt-10">Access and Retention</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Access to the application is restricted to authorized practice administrators and operations managers. Data is retained only as long as necessary to provide the operational intelligence services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SentinelPrivacyClient;

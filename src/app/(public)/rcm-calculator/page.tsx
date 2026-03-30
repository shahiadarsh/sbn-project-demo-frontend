import React from 'react';
import type { Metadata } from 'next';
import { getDynamicMetadata } from '@/utils/seo';
import RCMCalculatorPageClient from '@/components/tools/RCMCalculatorPageClient';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('rcm-calculator');
    return {
        title: dynamic?.title || 'RCM Calculator - SBN Healthcare Solution',
        description: dynamic?.description || 'Calculate your potential savings and revenue increase with our RCM tools.',
    };
}

export default function RCMCalculatorPage() {
    return <RCMCalculatorPageClient />;
}

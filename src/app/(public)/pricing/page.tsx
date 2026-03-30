import React from 'react';
import type { Metadata } from 'next';
import { getDynamicMetadata } from '@/utils/seo';
import PricingPageClient from '@/components/pricing/PricingPageClient';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('pricing');
    return {
        title: dynamic?.title || 'Pricing Plans - SBN Healthcare Solution',
        description: dynamic?.description || 'Transparent and competitive pricing for medical billing services.',
    };
}

export default function PricingPage() {
    return <PricingPageClient />;
}

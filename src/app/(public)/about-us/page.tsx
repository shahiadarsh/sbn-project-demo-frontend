import React from 'react';
import type { Metadata } from 'next';
import { getDynamicMetadata } from '@/utils/seo';
import AboutClient from '@/components/about/AboutClient';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('about-us');
    return {
        title: dynamic?.title || 'About Us - SBN Healthcare Solution',
        description: dynamic?.description || 'Learn more about SBN Healthcare Solution and our 11+ years of experience in Medical Billing Services.',
    };
}

export default function AboutUs() {
    return <AboutClient />;
}

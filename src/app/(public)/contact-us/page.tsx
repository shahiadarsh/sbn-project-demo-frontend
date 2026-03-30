import React from 'react';
import type { Metadata } from 'next';
import { getDynamicMetadata } from '@/utils/seo';
import ContactUsClient from '@/components/contact/ContactUsClient';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('contact-us');
    return {
        title: dynamic?.title || 'Contact Us - SBN Healthcare Solution',
        description: dynamic?.description || 'Get in touch with SBN Healthcare Solution for your medical billing needs.',
    };
}

export default function ContactUs() {
    return <ContactUsClient />;
}

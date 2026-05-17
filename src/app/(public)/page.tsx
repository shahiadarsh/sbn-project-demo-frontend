


import type { Metadata } from 'next';
import { getDynamicMetadata, constructMetadata } from '@/utils/seo';
import Hero from '@/components/home/Hero';
import dynamic from 'next/dynamic';

const Stats = dynamic(() => import('@/components/home/Stats'), { ssr: true });
const ProcessFlow = dynamic(() => import('@/components/home/ProcessFlow'), { ssr: true });
const WhatWeDo = dynamic(() => import('@/components/home/WhatWeDo'), { ssr: true });
const OfficeOperations = dynamic(() => import('@/components/home/OfficeOperations'), { ssr: true });
const Pricing = dynamic(() => import('@/components/home/Pricing'), { ssr: true });
const Testimonials = dynamic(() => import('@/components/home/Testimonials'), { ssr: true });
const FAQ = dynamic(() => import('@/components/home/FAQ'), { ssr: true });

export async function generateMetadata(): Promise<Metadata> {
  const dynamic = await getDynamicMetadata('home');
  return constructMetadata(dynamic, {
    title: 'Medical Billing Services | SBN Healthcare Solution',
    description: 'Struggling with claim denials? SBN expert medical billing services help USA practices recover more revenue reduce AR days and get paid faster. Free consultation!',
    keywords: 'Medical Billing Services',
    slug: ''
  });
}

export default function Home() {
  return (
    <>
      <Hero />
      <ProcessFlow />
      <WhatWeDo />
      <OfficeOperations />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
    </>
  );
}

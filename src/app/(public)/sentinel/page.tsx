import type { Metadata } from 'next';
import SentinelClient from '@/components/sentinel/SentinelClient';
import { constructMetadata } from '@/utils/seo';

export const metadata: Metadata = constructMetadata({
  title: 'SBN Sentinel | SBN Healthcare Solution LLC',
  description: 'SBN Sentinel is a healthcare operational intelligence product from SBN Healthcare Solution LLC.',
  keywords: 'SBN Sentinel, healthcare operations, operational intelligence, EHR integration',
  slug: 'sentinel'
});

export default function SentinelPage() {
  return <SentinelClient />;
}

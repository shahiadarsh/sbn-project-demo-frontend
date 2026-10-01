import type { Metadata } from 'next';
import SentinelPrivacyClient from '@/components/sentinel/SentinelPrivacyClient';
import { constructMetadata } from '@/utils/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Sentinel Data Use and Privacy | SBN Healthcare Solution LLC',
  description: 'Sentinel Data Use and Privacy Notice for SBN Healthcare Solution LLC.',
  keywords: 'Sentinel privacy, data use, SBN Sentinel',
  slug: 'sentinel/privacy'
});

export default function SentinelPrivacyPage() {
  return <SentinelPrivacyClient />;
}

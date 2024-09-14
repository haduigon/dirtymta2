import React from 'react';
import PagePattern from '@/components/PagePattern';
import { aboutText } from '@/data/pages';

export default function Home() {
  return (
    <PagePattern content={aboutText} name='Who we are'/>
  );
}
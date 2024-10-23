import React from 'react';
import PagePattern from '@/components/PagePattern';
import { aboutText2 } from '@/data/pages';

export default function Home() {
  return (
    <PagePattern content={aboutText2} name='Who we are'/>
  );
}
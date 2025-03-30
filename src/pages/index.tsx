import React from 'react';
import PagePattern from '@/components/PagePattern';
import { indexText } from '@/assets/text/text';

export default function Home() {
  return (
    <PagePattern content={indexText} name='Who we are'/>
  );
}
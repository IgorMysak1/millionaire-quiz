'use client';
import { redirect } from 'next/navigation';

import { PageWrapper } from '@/components';

export default function HomePage() {
  return (
    <PageWrapper>
      <button onClick={() => redirect('/games/millionaire-quiz')}>REDIRECT BUTTON</button>
      HOME
    </PageWrapper>
  );
}

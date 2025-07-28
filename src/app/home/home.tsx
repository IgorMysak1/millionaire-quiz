'use client';

import { InformationPage } from '@/components';

import { redirect } from 'next/navigation';

import styles from './home-page.module.css';

export function Home() {
  return (
    <div className={styles.containerWithTriangle}>
      <InformationPage
        header={'Who wants to be a millionaire'}
        actionButton={{ children: 'Start', onCLick: () => redirect('/games/millionaire-quiz') }}
      />
    </div>
  );
}

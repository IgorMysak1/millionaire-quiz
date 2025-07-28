'use client';

import { redirect } from 'next/navigation';

import { InformationPage } from '@/components';
import { formatMoney } from '@/utils';

export default function GameOverPage() {
  const earnedMoney = 8000; // There must be BE request to get data about the whole game (spend time, level of question, earned money, etc) using params.id

  return (
    <InformationPage
      header={`${formatMoney(earnedMoney)} earned`}
      actionButton={{ children: 'Retry', onCLick: () => redirect('/games/millionaire-quiz') }}
    />
  );
}

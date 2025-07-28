import { redirect } from 'next/navigation';

// This page is not used right now but could be a good place to track progress, some competitions, statistic etc.
export default async function MillionaireQuizPage() {
  return redirect('/games/millionaire-quiz/start');
}

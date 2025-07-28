import { redirect } from 'next/navigation';

export default async function MillionaireQuizPage() {
  return redirect('/games/millionaire-quiz/start');
}

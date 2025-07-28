import { notFound } from 'next/navigation';

import { PageWrapper } from '@/components';

import { QuizPrizes } from './components/quiz-prizes/quiz-prizes';
import { QuizQuestions } from './components/quiz-questions/quiz-questions';
import { getQuestion } from './api/getQuestion';

import styles from './page.module.css';

export default async function QuestionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const question = await getQuestion(id ?? '');

  if (!question) {
    notFound();
  }

  return (
    <PageWrapper disablePadding>
      <div className={styles.container}>
        <QuizQuestions question={question} />
        <QuizPrizes question={question} className={styles.prizeSteps} />
      </div>
    </PageWrapper>
  );
}

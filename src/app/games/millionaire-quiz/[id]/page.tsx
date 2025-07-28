import { PageWrapper } from '@/components';
import { Question } from '@/types';

import { QuizPrizes } from './components/quiz-prizes/quiz-prizes';
import { QuizQuestions } from './components/quiz-questions/quiz-questions';

import styles from './page.module.css';

const data: Question = {
  question: 'How old your elder brother was 10 years before you was born, mate?',
  options: [
    { id: '1', option: '10 years' },
    { id: '2', option: '11 years' },
    { id: '3', option: '12 years' },
    { id: '4', option: '13 years' },
  ],
  amountOfCorrectOptions: 1,
  prizes: [
    500, 1_000, 2_000, 4_000, 8_000, 16_000, 32_000, 64_000, 125_000, 250_000, 500_000, 1_000_000,
  ],
  currentPrize: 2_000,
};

export default async function QuestionPage() {
  return (
    <PageWrapper disablePadding>
      <div className={styles.container}>
        <QuizQuestions data={data} />
        <QuizPrizes data={data} className={styles.prizeSteps} />
      </div>
    </PageWrapper>
  );
}

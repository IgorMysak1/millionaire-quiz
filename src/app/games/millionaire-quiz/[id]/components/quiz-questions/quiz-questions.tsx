import { Question } from '@/types';

import { QuizAnswer } from '../quiz-answers/quiz-answer';
import { Header } from '../header/header';

import styles from './quiz-questions.module.css';

export function QuizQuestions({ data }: { data: Question }) {
  return (
    <div className={styles.container}>
      <Header data={data} />
      <h1 className={styles.question}>
        How old your elder brother was 10 years before you was born, mate?
      </h1>
      <QuizAnswer />
    </div>
  );
}

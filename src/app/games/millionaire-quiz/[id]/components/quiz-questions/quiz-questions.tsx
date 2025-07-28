import { Question } from '@/types';

import { QuizAnswer } from '../quiz-answers/quiz-answer';
import { Header } from '../header/header';

import styles from './quiz-questions.module.css';

export function QuizQuestions({ question }: { question: Question }) {
  return (
    <div className={styles.container}>
      <Header question={question} />
      <h1 className={styles.question}>{question.question}</h1>
      <QuizAnswer question={question} />
    </div>
  );
}

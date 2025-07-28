'use client';

import { Button, ResponsiveText } from '@/components';
import { Question } from '@/types';

import styles from './quiz-answer.module.css';
import { alphabet } from './utils';
import { useAction } from './hook';

export function QuizAnswer({ question }: { question: Question }) {
  const { answers, onAnswerClick } = useAction({ question });

  return (
    <div className={styles.container}>
      {answers.map(({ id, option, state }, index) => (
        <Button
          key={id}
          className={styles.option}
          variant={'secondary'}
          letter={alphabet[index]}
          onClick={() => onAnswerClick(id)}
          state={state}
        >
          <ResponsiveText text={option} />
        </Button>
      ))}
    </div>
  );
}

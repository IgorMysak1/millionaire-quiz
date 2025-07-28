import { Button } from '@/components';
import { formatMoney } from '@/utils';
import { Question } from '@/types';

import styles from './quiz-prizes.module.css';

interface Props {
  className: string;
  question: Question;
}

export function QuizPrizes({ question, className }: Props) {
  return (
    <div className={`${styles.container} ${className}`}>
      {[...question.prizes].reverse().map((prize) => (
        <Button
          key={prize}
          variant="secondary"
          className={styles.prize}
          state={prize === question.currentPrize ? 'active' : undefined}
        >
          {formatMoney(prize)}
        </Button>
      ))}
    </div>
  );
}

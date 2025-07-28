import { Button } from '@/components';
import { formatMoney } from '@/utils';
import { Question } from '@/types';

import styles from './quiz-prizes.module.css';

interface Props {
  className: string;
  data: Question;
}

export function QuizPrizes({ data, className }: Props) {
  return (
    <div className={`${styles.container} ${className}`}>
      {[...data.prizes].reverse().map((prize) => (
        <Button key={prize} variant="secondary" className={styles.prize}>
          {formatMoney(prize)}
        </Button>
      ))}
    </div>
  );
}

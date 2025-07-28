import { Button, ResponsiveText } from '@/components';

import styles from './quiz-answer.module.css';

const answears = ['10 years 111111 ssd dsdsd sd s df df ', '11 years', '12 years', '14 years'];

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];

export function QuizAnswer() {
  return (
    <div className={styles.container}>
      {answears.map((answer, index) => (
        <Button
          key={answer}
          className={styles.option}
          variant={'secondary'}
          letter={alphabet[index]}
        >
          <ResponsiveText text={answer} />
        </Button>
      ))}
    </div>
  );
}

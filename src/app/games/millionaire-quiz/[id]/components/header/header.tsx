import { Question } from '@/types';

import { QuizPrizes } from '../quiz-prizes/quiz-prizes';
import styles from './header.module.css';

const INPUT_ID = 'menu-checkbox';

export function Header({ data }: { data: Question }) {
  return (
    <nav className={styles.container}>
      <input id={INPUT_ID} className={styles.input} type="checkbox" />
      <label className={styles.label} htmlFor={INPUT_ID}>
        <span className={styles.line} />
      </label>

      <QuizPrizes data={data} className={styles.content} />
    </nav>
  );
}

'use client';

import Image from 'next/image';
import { redirect } from 'next/navigation';

import { Button, PageWrapper } from '@/components';

import ThumbImage from '../../../public/thumb.svg';
import styles from './home-page.module.css';

export function Home() {
  return (
    <div className={styles.containerWithTriangle}>
      <PageWrapper transparentBackground>
        <div className={styles.content}>
          <Image
            src={ThumbImage}
            alt="Thumbs Up"
            width={450}
            height={350}
            className={styles.image}
          />

          <div className={styles.actionBlock}>
            <h1 className={styles.header}>Who wants to be a millionaire?</h1>

            <Button className={styles.button} onClick={() => redirect('/games/millionaire-quiz')}>
              Start
            </Button>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}

import Image from 'next/image';

import { Button, PageWrapper } from '@/components';

import ThumbImage from '../../../public/thumb.svg';

import styles from './information-page.module.css';

interface Props {
  header: string;
  actionButton: {
    children: React.ReactNode;
    onCLick: () => void;
  };
}

export function InformationPage({ header, actionButton }: Props) {
  return (
    <PageWrapper transparentBackground>
      <div className={styles.content}>
        <Image src={ThumbImage} alt="Thumbs Up" width={450} height={350} className={styles.image} />

        <div className={styles.actionBlock}>
          <h1 className={styles.header}>{header}</h1>

          <Button variant={'primary'} className={styles.button} onClick={actionButton.onCLick}>
            {actionButton.children}
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
}

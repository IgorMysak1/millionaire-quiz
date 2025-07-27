import { PropsWithChildren } from 'react';

import styles from './page-wrapper.module.css';

export function PageWrapper({ children }: PropsWithChildren) {
  return <div className={styles.wrapper}>{children}</div>;
}

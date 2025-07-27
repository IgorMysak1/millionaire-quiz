import { PropsWithChildren } from 'react';

import styles from './page-wrapper.module.css';

interface Props {
  transparentBackground?: boolean;
}

export function PageWrapper({ children, transparentBackground }: PropsWithChildren<Props>) {
  const classNames = [styles.wrapper, transparentBackground ? '' : styles.background]
    .filter(Boolean)
    .join(' ');

  return <div className={classNames}>{children}</div>;
}

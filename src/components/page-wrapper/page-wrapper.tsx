import { PropsWithChildren } from 'react';

import styles from './page-wrapper.module.css';

interface Props {
  transparentBackground?: boolean;
  disablePadding?: boolean;
}

export function PageWrapper({
  children,
  disablePadding,
  transparentBackground,
}: PropsWithChildren<Props>) {
  const classNames = [
    styles.wrapper,
    transparentBackground ? '' : styles.background,
    disablePadding ? styles.disablePadding : '',
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classNames}>{children}</div>;
}

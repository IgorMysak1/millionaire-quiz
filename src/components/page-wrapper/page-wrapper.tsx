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
  // Should be a utility to manage it better (it's a quick solution only for test task)
  const classNames = [
    styles.wrapper,
    transparentBackground ? '' : styles.background,
    disablePadding ? styles.disablePadding : '',
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classNames}>{children}</div>;
}

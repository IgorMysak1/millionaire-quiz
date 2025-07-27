import { PropsWithChildren } from 'react';

import styles from './button.module.css';

interface ButtonProps {
  onClick?: VoidFunction;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export function Button({
  children,
  variant = 'primary',
  className,
  onClick,
}: PropsWithChildren<ButtonProps>) {
  const classNames = [
    variant === 'primary' ? styles.primary : '',
    variant === 'secondary' ? styles.secondary : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
}

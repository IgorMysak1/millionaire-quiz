import { PropsWithChildren } from 'react';

import styles from './button.module.css';

type ButtonProps =
  | {
      variant: 'primary';
      onClick?: VoidFunction;
      className?: string;
    }
  | {
      variant: 'secondary';
      onClick?: VoidFunction;
      className?: string;
      letter?: string;
    };

export function Button(props: PropsWithChildren<ButtonProps>) {
  const { children, className, onClick } = props;

  if (props.variant === 'secondary') {
    return (
      <button onClick={onClick} className={`${styles.secondary} ${className}`}>
        {props.letter && <span className={styles.letter}>{props.letter}</span>}
        {children}
      </button>
    );
  }

  return (
    <button onClick={onClick} className={`${styles.primary} ${className}`}>
      {children}
    </button>
  );
}

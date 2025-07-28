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
      state?: 'success' | 'error' | 'active';
    };

// I love to have one button with different variants, states, etc. It's what all UI frameworks proposes (like MUI, etc)
export function Button(props: PropsWithChildren<ButtonProps>) {
  const { children, className, onClick } = props;

  if (props.variant === 'secondary') {
    // Should be a utility to manage it better (it's a quick solution only for test task)
    const stateClass = [
      props.state === 'success' ? styles.success : '',
      props.state === 'error' ? styles.error : '',
      props.state === 'active' ? styles.active : '',
    ].filter(Boolean);

    return (
      <button onClick={onClick} className={`${styles.secondary} ${className} ${stateClass}`}>
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

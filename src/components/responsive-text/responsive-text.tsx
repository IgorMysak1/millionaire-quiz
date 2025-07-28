import styles from './responsive-text.module.css';

// This component should also have Tooltip to show the full text when it's truncated

export function ResponsiveText({ text }: { text: string }) {
  return <p className={styles.text}>{text}</p>;
}

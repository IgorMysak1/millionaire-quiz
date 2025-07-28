import styles from './responsive-text.module.css';

export function ResponsiveText({ text }: { text: string }) {
  return <p className={styles.text}>{text}</p>;
}

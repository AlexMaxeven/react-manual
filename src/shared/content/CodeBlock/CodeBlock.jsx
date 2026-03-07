import styles from './CodeBlock.module.css';

const CodeBlock = ({ children }) => {
  return (
    <pre className={styles.root}>
      <code className={styles.code}>{children}</code>
    </pre>
  );
};

export default CodeBlock;
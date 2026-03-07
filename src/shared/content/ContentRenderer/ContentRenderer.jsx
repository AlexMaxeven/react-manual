import { CodeBlock } from "@/shared/content";
import styles from "./ContentRenderer.module.css";

const ContentRenderer = ({ blocks }) => {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "text":
            return (
              <p key={index} className={styles.text}>
                {block.content}
              </p>
            );

          case "code":
            return <CodeBlock key={index}>{block.content}</CodeBlock>;

          case "list":
            return (
              <ul key={index} className={styles.list}>
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            );

          case "note":
            return (
              <div key={index} className={styles.note}>
                <div className={styles.noteTitle}>
                  {block.label || "Порада"}
                </div>
                <div className={styles.noteContent}>{block.content}</div>
              </div>
            );

          case "warning":
            return (
              <div key={index} className={styles.warning}>
                <div className={styles.warningTitle}>
                  {block.label || "Увага"}
                </div>
                <div className={styles.warningContent}>{block.content}</div>
              </div>
            );

          case "tip":
            return (
              <div key={index} className={styles.tip}>
                <div className={styles.tipTitle}>
                  {block.label || "Лайфхак"}
                </div>
                <div className={styles.tipContent}>{block.content}</div>
              </div>
            );

          case "subtitle":
            return (
              <h4 key={index} className={styles.subtitle}>
                {block.content}
              </h4>
            );

          default:
            return null;
        }
      })}
    </>
  );
};

export default ContentRenderer;
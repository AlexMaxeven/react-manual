import {useState, useEffect} from 'react';

import styles from './InfoBlock.module.css';

const InfoBlock = (props) => {
    const { title, children, className = '', ...rest } = props;
  
    return (
      <section className={`${styles.root} ${className}`} {...rest}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.content}>{children}</div>
      </section>
    );
  };

export default InfoBlock;
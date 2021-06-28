import Link from 'next/link'

import styles from './button.module.scss'

export default function Button(props) {
  return (
    <Link href={props.route}>
      <button className={styles.button}>{props.text}</button>
    </Link>
  );
}

import Link from 'next/link'
import styles from '../styles/foo.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Index</h1>

      <div className={styles.grid}>
        <Link href='/bar'>
          <a className={styles.card}>
            <h3>Broken</h3>
          </a>
        </Link>
      </div>
    </div>
  )
}

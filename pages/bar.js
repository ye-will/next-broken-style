import Link from 'next/link'
import styles from '../styles/home.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
          Broken <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <Link href='/'>
            <a className={styles.card}>
              <h3>index</h3>
            </a>
          </Link>
        </div>
    </div>
  )
}

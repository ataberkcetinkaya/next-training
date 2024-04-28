import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Made by
          <br></br>
          <span>Ataberk Çetinkaya</span>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="/bitcoin"
          className={styles.card}
          //target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Bitcoin <span>-&gt;</span>
          </h2>
          <p>See Bitcoin Live Price.</p>
        </a>

        <a
          href="/ethereum"
          className={styles.card}
          //target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Ethereum <span>-&gt;</span>
          </h2>
          <p>See Ethereum Live Price.</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Polkadot <span>-&gt;</span>
          </h2>
          <p>See Polkadot Live Price.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            About <span>-&gt;</span>
          </h2>
          <p>
            About this project.
          </p>
        </a>
      </div>
    </main>
  )
}

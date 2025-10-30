import Image from 'next/image'
import styles from './page.module.css'
import InstagramIcon from './Icons/InstagramIcon'

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
          href="/search"
          className={styles.card}
          //target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Search <span>-&gt;</span>
          </h2>
          <p>
            Search any cryptocurreny you want.
          </p>
        </a>

        <a
          href="https://www.instagram.com/ataberkctnky/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Follow me<span>-&gt;</span>
          </h2>
          <p style={{ display: "flex", alignItems: "center", gap: "8px", margin: 0 }}>
            <InstagramIcon width={32} height={32} fill="white" />
            ataberkctnky
          </p>
        </a>
      </div>
    </main>
  )
}

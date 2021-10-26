import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quisquam eaque neque tempora quam repellat sapiente nesciunt necessitatibus. Aperiam aut pariatur in porro et, ut adipisci fugit! Veniam, rem ipsa.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quisquam eaque neque tempora quam repellat sapiente nesciunt necessitatibus. Aperiam aut pariatur in porro et, ut adipisci fugit! Veniam, rem ipsa.</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
    </>
  )
}

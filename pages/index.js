import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello world - and hello Ralf!</h1>
      <h2>This is weird!</h2>
      <p>Keep on fighting...</p>
    </div>
  )
}

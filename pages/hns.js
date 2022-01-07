import Head from 'next/head'
import styles from '../styles/Hns.module.css'
import Nft from "../components/Nft/Nft";
import Countdown from "../components/Countdown/Countdown"

export default function Home() {

  const nfts = [
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
    {name: "Name", src: "/images/placeholder.jpg"},
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Hide and Seek</title>
        <meta name="description" content="Hide and Seek" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.heading}>hide and seek</h1>
      <Countdown />
      
      <img className={styles.nft1} src="/images/nft1.png" alt="NFT" />
      <img className={styles.nft2} src="/images/nft2.png" alt="NFT" />
      <img className={styles.nft3} src="/images/nft3.png" alt="NFT" />

      <img className={styles.nft4} src="/images/nft4.png" alt="NFT" />
      <img className={styles.nft5} src="/images/nft1.png" alt="NFT" />
      <img className={styles.nft6} src="/images/nft2.png" alt="NFT" />

      <div className={styles.nftContainer}>
        <div className={styles.extraContainer}>
          {
            nfts.map((data) => {
              return (
                <Nft name={`${data.name}`} key={6 * Math.random(99999) + Math.random(99999)} src={`${data.src}`} />
              )
            })
          }
        </div>
        <img className={styles.all} src="/images/all.png" alt="All NFTs" />
      </div>

      
    </div>
  )
}

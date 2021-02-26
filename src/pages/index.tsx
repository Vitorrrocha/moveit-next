import Head from 'next/head';
import {ExperienceBar} from '../Components/ExperienceBar';
import { Profile } from '../Components/Profile';
import { CompleteChallenges } from '../Components/CompletedChallenges';
import { Countdown } from '../Components/Countdown';
import { ChallengeBox } from '../Components/ChallengeBox';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Start | movei.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompleteChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}

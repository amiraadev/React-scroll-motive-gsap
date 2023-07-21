"use client"
import Image from 'next/image'
import {useEffect} from 'react'
import styles from './page.module.css'
import Intro from '../components/intro'
import Description from '../components/Description'
import Projects from '../components/Projects'
export default function Home() {


  useEffect(() => {

  async () => {
    const LocomotivScroll = (await import('locomotive-scroll')).default;
    const locomotivScroll = new LocomotivScroll();
  }
  }, [])


  return (
   <main className={styles.main}>
    <Intro  />
    <Description  />
    <Projects  />
   
   </main>
  )
}

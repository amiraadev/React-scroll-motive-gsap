import React, { useLayoutEffect ,useRef } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const index = () => {
    const backgroundImage = useRef(null)
    const introImage = useRef(null)

    useLayoutEffect(() => {
       gsap.registerPlugin(ScrollTrigger);
       const timeline = gsap.timeline({
           scrollTrigger:{
            trigger:document.documentElement,
            start:"top",
            end:"+=500px",
            scrub:true,
            markers:true
           }
       })

       timeline
          .from(backgroundImage.current,{clipPath:"inset(15%)"})
          .to(introImage.current,{height:"200px"},0)
    }, [])

  return (

    <div className={styles.intro}>

            <div ref={backgroundImage} className={styles.backgroundImage}>
                <Image 
                src={'/images/image1.jpg'}
                fill={true}
                alt="background image"
                />
            </div>

            <div className={styles.introContainer}>
                    <div ref={introImage} data-scroll data-scroll-speed="0.3" className={styles.introImage}>
                        <Image 
                        src={'/images/image2.jpg'}
                        fill={true}
                        alt="intro image"
                        />
                    </div>
                    <h1 data-scroll data-scroll-speed="0.7"> Scroll Image</h1>
            </div>

    </div>


  )
}

export default index

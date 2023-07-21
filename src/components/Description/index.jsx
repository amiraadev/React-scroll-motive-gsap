import React, { useLayoutEffect ,useRef } from 'react'
import styles from './styles.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const index = () => {
    const phrases = ["Timeless echoes, ancient Carthage, Tunis","Azure coast, dreams awaken, Hammamet","Spice-filled souks, hearts enchanted, Bizerte","Desert's dance, nature's symphony, Djerba"]
   

   
   
    return (
    <div className={styles.description}>
        {
            phrases.map((phrase,index) => {
                return(<AnimatedText key={index}>{phrase} </AnimatedText>)


            })
        }
    </div>
  )
}


function AnimatedText({children}) {
    const text = useRef(null)
    useLayoutEffect(() => {
            gsap.registerPlugin(ScrollTrigger);
          
            gsap.from(text.current,{
                scrollTrigger:{
                    trigger:text.current,
                    start:"0px bottom",
                    end:"bottom+=400px bottom",
                    scrub:true,
                },
                left:"-200px",
                opacity:0
            }
            )
        }, [])
   
    return(
        <p ref={text}>{children}</p>
    )
    
}
export default index

import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './styles.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
    {
        title: "Djerba",
        src: "image20.jpg"
    },
    {
        title: "Hammamet",
        src: "image12.jpg"
    },
    {
        title: "Nabeul",
        src: "image24.jpg"
    },
    {
        title: "Sousse",
        src: "image23.jpg"
    },
]

export default function Index() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
        })

        console.log(`/images/${projects[selectedProject].src}`);
    }, [])

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image 
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p >Djerba, a pearl in the Mediterranean, enchants with its pristine beaches and tranquil charm. Its golden sunsets and ancient allure make it a haven for seekers of beauty and serenity.</p>
                </div>
                <div className={styles.column}>
                    <p>
Bizerte, a coastal gem nestled by azure waters, captivates with its historic charm. Explore its winding alleys, azure bay, and rich heritage, and immerse yourself in a world of beauty and culture.</p>
                </div>
            </div>

            <div className={styles.projectList}>
                {
                    projects.map( (project, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
                            <h2>{project.title}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

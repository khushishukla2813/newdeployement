import styles from '../../styles/About.module.css'
import Image from 'next/image'
import Animation from "./Animation"

function About() {
    return (
        <div id="about" className={styles.about}>
            <h1>About Me</h1>
            <div className={styles.about_section}>
                <p>
                Hey I'm Software developer with 1 year of experience in Google Cloud and back-end development. Proficient in GCP services and building scalable applications. Skilled in front-end (HTML/CSS/JavaScript/react) and back-end (Django/Python) development, with Agile teamwork experience.
                    <br />
                    <br />I am also highly into Open Source and like to contribute to different projects.More information about my Open Source profile is available at <a href="https://github.com/vaibhavc13" target="_blank" without rel="noreferrer"> GitHub |Vaibhav C</a>.
                    <br />
                    {/* <br />Apart from coding, I love to write technical blogs on the latest and emerging technologies.All of my blogs are available on <a href="https://medium.com/@khushi28132004" target="_blank" without rel="noreferrer">Medium | Khushi Shukla</a>, where I post articles frequently. */}
                    {/* <br /> */}
                    <br />I like to work on my problem solving skills by participating in contests and solving questions based on Data Structures and Algorithms. These problem-solving skills help me to optimize the applications that I develop. My Hackerrank profile <a href="https://www.hackerrank.com/profile/v599568" target="_blank" without rel="noreferrer">Hackerrank | Vaibhav C</a> shows my problem-solving ability.
                </p>
                {/* <Animation></Animation> */}
            </div>
        </div>
    )
}

export default About

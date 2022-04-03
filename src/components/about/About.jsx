import React from 'react'
import "./about.css"
import Laptop_NoteBook from "../../imgs/pexels-negative-space-34088.jpg"

function About() {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                    src={Laptop_NoteBook}
                    alt="laptop-notebook-img"
                    className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                    <h1 className="a-about-me">About Me</h1>
                    <p className="a-desc">
                    I have a strong passion for innovative design and
                    engineering solutions. I have the ability to complete
                    projects in an expeditious manner without
                    compromising high quality or design. I am
                    confident working alone however I also excel
                    and work best with a team, truly believing in
                    the agile methodology. I thrive under the pressure
                    on challenging tasks such as complex projects,
                    particularly those which require me to develop new
                    skill sets beyond my current knowledge.
                    </p>
                    <h1 className="a-education">Education</h1>
                    <h4>App Academy</h4>
                    <p className="a-education-subtitles">Certification, Full Stack Software Engineering Bootcamp</p>
                    <h4>Udemy - Online Courses</h4>
                    <p className="a-education-subtitles">Computer Software Engineering</p>
                    <h4>The Art Institutes</h4>
                    <p className="a-education-subtitles">Bachelor of Science in Motion Design, Minor in Computer Science</p>
            </div>
        </div>
    )
}

export default About

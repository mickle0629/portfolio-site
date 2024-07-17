import { useState } from 'react';
import './App.css';

function App() {
  return ( 
    <main className='main-container'>
      <section className='about'>
        <h1 className='about__about-me'>About me</h1>
        <div className='about__name-spec-portrait'>
          <img className='about__portrait' src={require('./assets/digital-passport.jpg')} alt='portrait' />
          <div className='about__name-spec'>
            <div className='about__name-plate'>
              <h2 className='about__name'>I'm An Dang</h2>
              <p className='about__text'>Front-end Developer</p>
            </div>
            <div className='about__tech-specialization'>
              <h3 className='about__spec-title'>Specializes in:</h3>
              <p className='about__specializations'>React, with CSS & Tailwind</p>
            </div>
          </div>
        </div>
      </section>
      <EducationPanel />
      <ProjectsPanel />
    </main>
  );
}

export default App;

function EducationPanel() {
  const [showCourses, setShowCourses] = useState(false);
  const courses = [
    "Software Engineering",
    "Operating Systems",
    "Computer Architecture",
    "Hacking and Cybersecurity",
    "Human-Computer Interaction"
  ]
  function handleClickShowCourses() {
    setShowCourses(!showCourses)
    console.log(showCourses);
  }

  return (
    <section className='education'>
        <h1>Education</h1>
        <img className='education__whitworth-logo' src={require('./assets/whitworth-logo-horizontal-reverse-rgb.png')} alt='whitworth logo'/>
        <p>B.S Computer Science, Class of 2024</p>
        {/* <button className='education__show-courses-btn'>Show relevant courses</button> */}
        <a className='education__show-courses-btn' onClick={handleClickShowCourses}>Show relevant courses</a>
        <div className='education__courses'>
          {showCourses && courses.map(course => (
            <p className='education__course'>{course}</p>
          ))}
        </div>
    </section>
  )
}

function ProjectsPanel() {
  const data = [
    {
      title: "Basic Weather App",
      date: "July 2024",
      description: "A simple React app that provides weather forecast from WeatherAPI",
      bulletPoints: [
        "An exercise in using external APIs",
        "Prototype quickly devised using Figma",
        "Extensively practiced Promise syntax",
        "Focus on React practice, leaves styling very simple"
      ],
      repoLink: "https://github.com/mickle0629/weather-react"
    },
    {
      title: "Calculator App in React",
      date: "July 2024",
      description: "A simple calculator in React",
      bulletPoints: [
        "Followed a tutorial by Web Dev Simplified",
        "Extensive practice with the useReducer() hook as means of state management",
        "Despite following the tutorial, made effort to figure out latter half"
      ],
      repoLink: "https://github.com/mickle0629/calculator-react"
    }
  ]

  return (
    <section className='projects'>
      <h1 className='projects__title'>Projects</h1>
      {
        data.map(project => (
          <article className='projects__entry'>
            <h2 className='entry__title'>{project.title}</h2>
            <p className='entry__description'>{project.description}</p>
            <ul className='entry__bullet-points'>
              {project.bulletPoints.map(bullet => (
                <li className='entry__bp'>{bullet}</li>
              ))}
            </ul>
            <a className='entry__repo-link' href={project.repoLink} target='_blank'>GitHub</a>
          </article>
        ))
      }
    </section>
  )
}
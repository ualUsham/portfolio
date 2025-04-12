import Head from './myComponents/Head.js';
import Home from './myComponents/Home.js';
import Education from './myComponents/Education.js';
import Contact from './myComponents/Contact.js';
import Footer from './myComponents/Footer.js';
import Resume from './myComponents/resume.js';
import Project from './myComponents/Project.js';
import './app.css'

function App() {
  return (
    <>
       <Head />
      <section id="home"><Home /></section>
      <section id="education"><Education /></section>  
      <section id="resume"><Resume /></section> 
      <section id='project'><Project /></section> 
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  );
}

export default App;

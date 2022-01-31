import './App.css';
import Navbar from './components/navbar/Navbar';
import Intro from "./components/intro/Intro";
import Education from "./components/education/Education"; 
import Projects from "./components/projects/Projects";
import Career from "./components/career/Career";
import Skills from './components/skills/Skills';
import More from './components/more/More';

function App() {
  return (
    <div>
      <Navbar />
      <Intro id="intro" />
      <Education id="education" />
      <Projects id="projects" />
      <Career id="career" />
      <Skills id="skills" />
      <More id="more" />
    </div>
  );
}

export default App;

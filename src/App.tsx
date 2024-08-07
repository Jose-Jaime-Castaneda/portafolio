import Contact from "./components/Contact"
import Documents from "./components/Documents"
import Expertise from "./components/Expertise"
import Intro from "./components/Intro"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"

function App() {

  return (
    <>
      <NavBar />

      <main className="flex justify-center" id="home">
        <Intro />
      </main>

      <section className="flex justify-center" id="expertise">
        <Expertise />
      </section>

      <section className="flex justify-center" id="projects">
        <Projects />
      </section>

      <section className="flex justify-center" id="documents">
        <Documents />
      </section>

      <section className="flex justify-center" id="Contact">
        <Contact />
      </section>
    </>
  )
}

export default App

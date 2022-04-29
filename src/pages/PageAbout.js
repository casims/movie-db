import { useEffect } from "react"
import { appTitle } from "../globals/globals";

const PageAbout = () => {

    useEffect(() => {
        document.title = `${appTitle} - About`;
    }, []);

  return (
    <section id="about-card" className="info-card">
      <h2>About</h2>
      <p>The “Movie Database” is an application that allows users to easily search, favorite, and find other valuable information about movies around the world. This application uses the TMDb API. This application was created for educational purposes only.</p>
    </section>
  )
}
export default PageAbout;
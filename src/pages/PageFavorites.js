import { useEffect } from "react"
import { appTitle } from "../globals/globals";

const PageFavorites = () => {

    useEffect(() => {
        document.title = `${appTitle} - Favorites`;
    }, []);

  return (
    <section id="favorites-card" className="info-card">
      <p>Sorry, but you have no favorite movies right now. Return to the home screen and tap the "star" icon on a movie to favorite it.</p>
    </section>
  )
}
export default PageFavorites;
import { useEffect } from "react"
import { appTitle } from "../globals/globals";

const PageAbout = () => {

    useEffect(() => {
        document.title = `${appTitle} - About`;
    }, []);

  return (
    <section>

    </section>
  )
}
export default PageAbout;
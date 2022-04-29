import { useEffect } from "react";
import { appTitle } from "../globals/globals";

const PageHome = () => {
  useEffect(() => {
    document.title = `${appTitle} - Home`;
  }, []);

  return (
    <section>
      <p>page home test</p>
    </section>
  );
};
export default PageHome;

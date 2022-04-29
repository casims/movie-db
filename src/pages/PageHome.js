import { useEffect } from "react";
import { appTitle } from "../globals/globals";

const PageHome = () => {
  useEffect(() => {
    document.title = `${appTitle} - Home`;
  }, []);

  return (
    <section>
      <p>Home PageHome</p>
    </section>
  );
};
export default PageHome;

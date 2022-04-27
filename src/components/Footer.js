import { getYear } from "../utilities/dates";

function Footer(title, copyright, author) {
  return (
    <footer>
      <p>
        &copy; {title} by {author} {copyright}
      </p>
    </footer>
  );
}

Footer.defaultProps = {
  copyright: getYear(),
};
export default Footer;

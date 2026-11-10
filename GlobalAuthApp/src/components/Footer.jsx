import { ThemeContext } from "../context/ThemeContext";

function Footer() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <footer>
          <p>Current Theme: {theme}</p>
          <p>Global Auth App © 2026</p>
        </footer>
      )}
    </ThemeContext.Consumer>
  );
}

export default Footer;
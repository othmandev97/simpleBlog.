import Link from "next/link";

export const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar">
        <Link href="/">
          <a className="logo">simple blog.</a>
        </Link>
        <a
          href="https://www.linkedin.com/in/elkarkoubiothman/"
          target="_blank"
          rel="noopener noreferrer"
          className="buttonContact"
        >
          contact
        </a>
      </nav>

      <main className="main">{children}</main>

      <footer className="footer">
        <a href="#" target="_blank" rel="noopener noreferrer">
          Created by <span>&nbsp; othmane el karkoubi</span>
        </a>
      </footer>
    </>
  );
};

import Link from "next/link";

function Navbar() {
  return (
    <div>
      <nav className="header">
        <h1 className="logo">
          <a href="#">NextAuth</a>
        </h1>
        <ul className={`main-nav`}>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="/">SignIn</Link>
          </li>
          <li>
            <Link href="/">SignOut</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

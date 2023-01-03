import Link from "next/link";
function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Product</Link>
    </>
  );
}

export default Home;

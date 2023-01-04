import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const handleClick = (e) => {
    router.push("/product");
    /* router.replace("product") */
  };
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Product</Link>
      <button onClick={handleClick}>Navigate To Product</button>
    </>
  );
}

export default Home;

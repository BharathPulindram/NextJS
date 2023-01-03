import Link from "next/link";
import { useRouter } from "next/router";
function ProductList() {
  const { productId } = useRouter().query;
  return (
    <>
      <Link href="/">Home</Link>
      <Link href={`/product/${productId}`}>
        <h2>Product {productId}</h2>
      </Link>
      <Link href="/product/1">
        <h2>Product 1</h2>
      </Link>
      <Link href="/product/2">
        <h2>Product 2</h2>
      </Link>
      <Link href="/product/3" replace>
        <h2>Product 3 with replace</h2>
      </Link>
    </>
  );
}

export default ProductList;

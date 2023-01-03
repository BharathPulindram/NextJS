import { useRouter } from "next/router";
function DynamicProductId() {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <>
      <h1>Product - {productId}</h1>
    </>
  );
}
export default DynamicProductId;

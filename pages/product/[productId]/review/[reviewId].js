import { useRouter } from "next/router";
function ReviewId() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <>
      <h1>
        ProductId - {productId} ReviewId - {reviewId}
      </h1>
    </>
  );
}
export default ReviewId;

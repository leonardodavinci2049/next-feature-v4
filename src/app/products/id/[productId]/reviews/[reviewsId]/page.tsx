import React from "react";

type ProductReviewPageProps = {
  params: Promise<{
    productId: string;
    reviewsId: string;
  }>;
};

const ProductReviewPage = async ({ params }: ProductReviewPageProps) => {
  const { productId, reviewsId } = await params;
  return (
    <div>
      <div>Product ID: {productId}</div>
      <div>Review ID: {reviewsId}</div>
    </div>
  );
};

export default ProductReviewPage;

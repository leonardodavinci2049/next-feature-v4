import React from "react";


type PropParams = {
  params: Promise<{
    productId: string;
  }>;
};

export const generateMetadata = async ({ params }: PropParams) => {
  const { productId } = await params;
  return {
    title: `Product ${productId}`,
    description: `Details about product ${productId}`,
  };
}

const ProductByIdPage = async ({ params }: PropParams) => {
  const { productId } = await params;
  return <div>Product ID {productId}</div>;
};

export default ProductByIdPage;

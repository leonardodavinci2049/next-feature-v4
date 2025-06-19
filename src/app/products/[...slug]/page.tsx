import { notFound } from "next/navigation";

import React from "react";

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { slug } = await params;

  return {
    title: `Product ${slug}`,
    description: `Details about product ${slug}`,
  };
};

const ProductPage = async ({ params }: Props) => {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    return <div>Product not found</div>;
  }

  if (slug[0] === "0") {
    return <div>Product not found</div>;
  }

  const vlParams: number = parseInt(slug[0], 0);

  if (vlParams > 1000) {
    notFound();
  }

  return (
    <div>
      Product Page slung {slug[0]} and {slug[1]}
    </div>
  );
};

export default ProductPage;

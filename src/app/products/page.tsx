import React from 'react'


export const metadata = {
  title: 'Products',
  description: 'List of products available in the store',
};

const ProductsPage = () => {
  const randomNumber = Math.floor(Math.random() * 2);
  if (randomNumber === 0) {
    console.error('Failed to load products');
    throw new Error('Error loading products');
  }
  console.log('Products loaded successfully');
  return (
    <div>Products Page</div>
  )
}

export default ProductsPage
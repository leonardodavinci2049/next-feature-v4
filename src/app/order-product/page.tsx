"use client";

import { Button } from "@/components/ui/button";

import React from "react";

const OrderProductPage = () => {
 // const router = useRouter();

  const handleOrderPlacement = () => {
    // Simulate an order placement
    console.log("Order placed successfully!");
    //router.push("/products"); // Redirect to products page after order placement
    //  router.replace("/products");
   // notFound(); // Simulate a not found error
  };
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1>Order Product Page</h1>
      <Button variant={"destructive"} onClick={handleOrderPlacement}>
        Finalizar Pedido
      </Button>
    </div>
  );
};

export default OrderProductPage;

"use client";

import { useRouter } from "next/navigation";



export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing your order");
        router.push("/");
        // router.replace("/"); // this behavior is similar to setting the replace prop to true on Link property 
        // router.back();
        // router.forward();
    }
    return (
        <>
            <h1>Order product</h1>
            <button onClick={handleClick}>Place order</button>
        </>
    
    );
}
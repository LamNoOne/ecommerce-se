import React from "react"
import ProductSlide from "./components/ProductSlide"
import ProductInfo from "./components/ProductInfo"

const SingleProduct = () => {
    return (
        <section className="my-8 flex flex-row items-center gap-10">
            <div className="h-[600px] flex flex-row-reverse relative gap-x-8 gap-y-4 justify-end">
                <ProductSlide />
            </div>
            <div className="">
                <ProductInfo />
            </div>
        </section>
    )
}

export default SingleProduct

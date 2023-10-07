import React from "react"
import { Advertisement, CardProduct, Category } from "~/components"
import { category } from "~/components/category/data"
import { advertisement } from "~/components/advertisement/data"
import style from "~/style"
import { products } from "./components/productSilde/data"
import ProductSlide from "./components/productSilde"

const Home = () => {
    return (
        <>
            <section className="top-home flex pt-10">
                <div className="flex-1 category-menu">
                    <Category category={category} />
                </div>
                <div className={`ms-[56px] ${style.advertisememtStyle}`}>
                    <Advertisement advertisement={advertisement} />
                </div>
            </section>
            <section className="mt-[140px]">
                <ProductSlide products={products}/>
            </section>
        </>
    )
}

export default Home

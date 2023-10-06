import React from "react"
import { Category } from "~/components"
import { category } from "~/components/category/data"

const Home = () => {
    return (
        <section className="top-home">
            <div className="w-[217px] pt-10 category-menu">
                <Category category={category} />
            </div>
        </section>
    )
}

export default Home

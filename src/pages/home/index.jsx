import {
    Advertisement,
    Button,
    CardProduct,
    Category,
    CategoryButton,
    Line,
} from "~/components"
import { advertisement } from "~/components/variables/advertisement"
import { category } from "~/components/variables/category"
import style from "~/style"
// Get data
import { categoryBrowse } from "~/components/variables/categoryBrowse"
import CategoryList from "./components/categoryList"
import CategorySlide from "./components/categorySlide"
import Event from "./components/event"
import Timer from "./components/timer"
import { products } from "./components/variables/data"

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
            <section className="mt-[60px]">
                <CategorySlide
                    CategoryModule={CardProduct}
                    Line={Line}
                    Button={Button}
                    Timer={Timer}
                    items={products}
                    titleCategory="Today's"
                    titleEvent="Flash Sales"
                    numberOfCard={4}
                />
            </section>
            <section className="mt-[60px]">
                <CategorySlide
                    CategoryModule={CategoryButton}
                    Line={Line}
                    items={categoryBrowse}
                    titleCategory="Category"
                    titleEvent="Browse By Category"
                    numberOfCard={6}
                />
            </section>
            <section className="mt-[60px]">
                <CategoryList
                    items={products}
                    titleCategory="This Month"
                    titleEvent="Best Sellings Products"
                />
            </section>
            <section className="mt-32">
                <Event />
            </section>
            <section className="mt-32">
                <CategoryList
                    items={products}
                    titleCategory="Our Products"
                    titleEvent="Explore Our Products"
                    buttonBottom
                />
            </section>
        </>
    )
}

export default Home

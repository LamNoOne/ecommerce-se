import {
    Advertisement,
    Button,
    CardProduct,
    Category,
    CategoryButton,
    Line,
} from "~/components"

import { advertisement, category, categoryBrowse } from "~/components/variables"

import style from "~/style"
import {
    CategoryList,
    CategorySlide,
    Event,
    Feature,
    Timer,
} from "./components"
import { products } from "./components/variables/data"

const Home = () => {
    return (
        <div className="flex flex-col gap-16">
            <section>
                <div className="top-home flex pt-10">
                    <div className="flex-1 category-menu">
                        <Category category={category} />
                    </div>
                    <div className={`ms-[56px] ${style.advertisememtStyle}`}>
                        <Advertisement advertisement={advertisement} />
                    </div>
                </div>
            </section>
            <section>
                <CategorySlide
                    CategoryModule={CardProduct}
                    // Line={Line}
                    // Button={Button}
                    Timer={Timer}
                    items={products}
                    titleCategory="Today's"
                    titleEvent="Flash Sales"
                    numberOfCard={5}
                />
            </section>
            <section>
                <CategorySlide
                    CategoryModule={CategoryButton}
                    // Line={Line}
                    items={categoryBrowse}
                    titleCategory="Category"
                    titleEvent="Browse By Category"
                    numberOfCard={6}
                />
            </section>
            <section>
                <CategoryList
                    items={products}
                    titleCategory="This Month"
                    titleEvent="Best Sellings Products"
                />
            </section>
            <section>
                <Event />
            </section>
            <section>
                <CategoryList
                    items={products}
                    titleCategory="Our Products"
                    titleEvent="Explore Our Products"
                    buttonBottom
                />
            </section>
            <section>
                <Feature />
            </section>
        </div>
    )
}

export default Home

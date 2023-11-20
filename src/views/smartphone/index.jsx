import { Advertisement, Category, Button, CardProduct } from "~/components"
import { advertisement, category } from "~/components/variables"
import style from "~/style"
import {
    FaSortAmountDown,
    FaSortAmountDownAlt,
    FaPercent,
    FaEye,
} from "react-icons/fa"
import { useState, useEffect } from "react"
import {products} from './data'

const SmartPhone = () => {
    // useSelector to get product state
    const [sortActive, setSortActive] = useState("")
    console.log(sortActive)

    const sort = {
        increment: [FaSortAmountDown, "Price High-Low"],
        decrement: [FaSortAmountDownAlt, "Price Low-High"],
        promotion: [FaPercent, "Hot Promotion"],
        view: [FaEye, "Most View"],
    }

    useEffect(() => {
        // dispatch to get sort product // getAPI
    }, [sortActive, sort])

    return (
        <div className="flex flex-col gap-16 mb-8">
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
                <div className="sort">
                    <h1 className="sort-title mb-4">Sort by:</h1>
                    <div className="btn-sort flex gap-4">
                        {Object.entries(sort).map(([key, [Icon, title]]) => (
                            <button onClick={() => setSortActive(key)} key={key} className={`sort-decrement flex items-center justify-around gap-3 px-2 rounded bg-[#f3f4f6] border ${key === sortActive ? 'border-[#ff0000]' : 'border-[#e5e7eb]'} h-[34px]`}>
                                <Icon color={`${key === sortActive ? 'red' : ''}`}/>
                                <p className={`text-xs ${key === sortActive ? 'text-[#ff0000]' : 'text-[black]'}`}>{title}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </section>
            <div className="grid grid-cols-5 gap-x-[10px] gap-y-[10px]">
                {products.map((item, index) => (
                    <CardProduct key={index} {...item} />
                ))}
            </div>
        </div>
    )
}

export default SmartPhone

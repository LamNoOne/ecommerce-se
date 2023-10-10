import PropsType from "prop-types"
import { Link } from "react-router-dom"

const Category = (props) => {
    const { category } = props
    return (
        <div className="category flex flex-col items-start">
            {category.map((item, index) => {
                return (
                    <Link className="category__link w-full py-2 ps-2 ms-[-8px] rounded hover:bg-slate-100 flex" key={index}>
                        <span className="text-center leading-6 font-[Poppins] text-sm text-black">{item.title}</span>
                    </Link>
                )
            })}
        </div>
    )
}

Category.propsType = {
    category: PropsType.array.isRequired,
}

export default Category

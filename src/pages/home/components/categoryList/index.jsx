import PropsType from "prop-types"
import { Button, CardProduct } from "~/components"
import CategoryRectangle from "~/components/icon/CategoryRectangle"

const CategoryList = (props) => {
    const { titleCategory, titleEvent, items, buttonBottom = false } = props

    return (
        <div className="product-list relative">
            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-5 mb-10">
                    <div className="category-rectagle flex items-center gap-4">
                        <CategoryRectangle />
                        <h3 className="text-base leading-5 font-semibold font-[Poppins] text-[#DB4444]">
                            {titleCategory}
                        </h3>
                    </div>
                    <div className="event flex items-end">
                        <h1 className="text-[32px] leading-[30px] font-semibold tracking-[1.44px] font-[Inter] text-black me-[87px]">
                            {titleEvent}
                        </h1>
                    </div>
                </div>
                {!buttonBottom && (
                    <div className="flex justify-center items-center mb-10">
                        <Button primary large>
                            View All
                        </Button>
                    </div>
                )}
            </div>
            <div className="grid grid-cols-4 gap-x-4 gap-y-12">
                {items.map((item, index) => (
                    <CardProduct key={index} {...item} />
                ))}
            </div>
            {buttonBottom && (
                <div className="flex justify-center items-center mb-[60px]">
                    <Button primary large>
                        View All Products
                    </Button>
                </div>
            )}
        </div>
    )
}

CategoryList.propsType = {
    CategoryModule: PropsType.element.isRequired,
    Line: PropsType.element,
    Button: PropsType.element,
    Timer: PropsType.element,
    items: PropsType.array.isRequired,
    titleCategory: PropsType.string.isRequired,
    titleEvent: PropsType.string.isRequired,
}

export default CategoryList

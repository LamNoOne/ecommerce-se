import React from "react"
import PropsType from "prop-types"
import CircleIcon from "../icon/CircleIcon"
import { HeartIcon, ViewIcon } from "../icon"

const CardProduct = (props) => {
    const { _id, title, price, old_price, quantity, sale, image, totalRating } = props
    return (
        <section className="w-[270px] h-[350px] flex flex-col me-5">
            <div className="product-img-container pb-[35px] pt-[25px] px-[40px] bg-[#F5F5F5] relative">
                <div className="product-img">
                    <img src={image} alt="product" className="w-full object-contain" />
                </div>
                <div className="absolute top-3 left-3 w-auto h-auto">
                    <div className="bg-[#DB4444] py-1 px-3 flex items-center rounded">
                        <span className="text-xs text-center leading-[18px] font-[Poppins] text-[#FAFAFA]">{`-${sale}%`}</span>
                    </div>
                </div>
                <div className="absolute top-3 right-3">
                    <div className="flex flex-col gap-2 relative">
                        <div className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center">
                            <HeartIcon />
                        </div>
                        <div className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center">
                            <ViewIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-info pt-4">
                <div className="flex flex-col gap-2">
                    <h1 className="text-base font-medium font-[Poppins] text-black">{title}</h1>
                    <div className="flex items-center justify-start gap-3">
                        <span className="text-base font-medium font-[Poppins] text-[#DB4444]">{`$${price}`}</span>
                        <span className="text-base font-medium font-[Poppins] line-through text-[#000] opacity-50">{`$${old_price}`}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

CardProduct.propsType = {
    _id: PropsType.oneOfType([PropsType.string, PropsType.number]).isRequired,
    title: PropsType.string.isRequired,
    price: PropsType.oneOfType([PropsType.string, PropsType.number]).isRequired,
    old_price: PropsType.oneOfType([PropsType.string, PropsType.number]),
    quantity: PropsType.oneOfType([PropsType.string, PropsType.number]),
    sale: PropsType.oneOfType([PropsType.string, PropsType.number]),
    image: PropsType.string.isRequired,
    totalRating: PropsType.oneOfType([PropsType.string, PropsType.number]),
}

export default CardProduct

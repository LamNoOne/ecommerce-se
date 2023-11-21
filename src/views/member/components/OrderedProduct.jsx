import React from "react"
import { Link } from "react-router-dom"
const OrderedProduct = (props) => {
    const {
        _id,
        img,
        title,
        vatStatus,
        orderStatus,
        price
    } = props
    return (
        <div className="border rounded-lg shadow-md px-4 pt-4 pb-2">
            <div className="flex flex-row items-center">
                <div className="w-[110px] h-[110px] object-contain">
                    <img src={img} />
                </div>
                <div className="order-short-info flex flex-col ps-4 gap-2 items-start">
                    <h2 className="name-product-order">
                        {title}
                    </h2>
                    <span className="vat-fee w-[120px] text-xs px-1 py-1 rounded text-[#ff0000] bg-[#fff1f0]">{vatStatus}</span>
                    <span className="status-order w-[120px] text-sm px-1 py-1 rounded text-green-700 bg-[#ebf8f2]">{orderStatus}</span>
                    <span className="price-order text-base text-[#ff0000]">{price}</span>
                </div>
            </div>
            <div className="flex justify-end gap-4">
                <Link to={`${_id}`} className="flex items-center justify-center rounded text-sm px-2 py-1 border border-[#ff0000] text-[#ff0000]">
                    Watch Bill
                </Link>
                <Link to={`${_id}`} className="flex items-center justify-center rounded text-sm px-2 py-1 border border-[#ff0000] text-[#ff0000]">
                    Go Detail
                </Link>
            </div>
        </div>
    )
}

export default OrderedProduct

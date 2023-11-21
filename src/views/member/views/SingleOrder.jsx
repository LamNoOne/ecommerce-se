import React from "react"
import SideBar from "../components/SideBar"
import { FaAngleDoubleLeft } from "react-icons/fa"
import { useNavigate, useParams } from "react-router-dom"
import { BsFillBoxSeamFill } from "react-icons/bs"
import { GiConfirmed } from "react-icons/gi"
import { TbTruckDelivery } from "react-icons/tb"
import { FaBoxOpen } from "react-icons/fa"
import { AiOutlineDash } from "react-icons/ai"
import PaymentBox from "../components/PaymentBox"
import MemberInfo from "../components/MemberInfo"
import SupportInfo from "../components/SupportInfo"


const SingleOrder = (props) => {
    let { id: orderId } = useParams()

    const navigate = useNavigate()
    return (
        <section className="my-4 flex">
            <div className="min-w-[260px]">
                <SideBar />
            </div>
            <div className="flex flex-col gap-6 ms-6 w-full">
                <div className="flex items-center header-order-detail">
                    <button
                        className="back"
                        onClick={() => navigate("/member/order")}
                    >
                        <FaAngleDoubleLeft size={32} />
                    </button>
                    <h1 className="text-2xl text-center font-semibold ms-[45%]">
                        Order Detail
                    </h1>
                </div>
                <div className="order-status flex flex-col">
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-sm">
                            Product Code:
                            <span className="font-semibold">
                                &nbsp;WN0301425802
                            </span>
                        </p>
                        <span className="status-order text-center w-[120px] text-sm px-1 py-1 rounded text-green-700 bg-[#ebf8f2]">
                            Delivered
                        </span>
                    </div>
                    <p className="date-order text-sm">1/11/2023 14:24</p>
                </div>
                <div className="border rounded-lg shadow-md px-4 pt-4 pb-2">
                    <div className="flex flex-row items-center">
                        <div className="w-[110px] h-[110px] object-contain">
                            <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/m/x/mx-keys-mini-1.png" />
                        </div>
                        <div className="order-short-info flex flex-col gap-2 items-start ps-4 w-full">
                            <h2 onClick={() => navigate(`/product/${orderId}`)} className="name-product-order hover:text-[#ff0000] cursor-pointer">
                                Bàn phím không dây Logitech MX Keys mini-Xám đen
                            </h2>
                            <div className="quantity-container flex flex-row justify-between w-full">
                                <span className="color flex justify-center w-[80px] text-xs px-1 py-1 border rounded text-[rgba(0,0,0,0.7)]">
                                    Xám đen
                                </span>
                                <span className="price-order text-base">
                                    Quantity:
                                    <span className="text-[#ff0000]">
                                        &nbsp;1
                                    </span>
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="price-order font-medium text-base text-[#ff0000]">
                                    2.350.000đ
                                </span>
                                <span className="price-order line-through font-medium text-sm text-zinc-600">
                                    2.690.000đ
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end gap-4">
                        <button
                            onClick={() => navigate(`/product/${orderId}`)}
                            to={`${orderId}`}
                            className="flex items-center justify-center rounded text-sm px-2 py-1 border border-[#ff0000] text-[#ff0000]"
                        >
                            Rate
                        </button>
                        <button
                            onClick={() => navigate(`/product/${orderId}`)}
                            to={`${orderId}`}
                            className="flex items-center justify-center rounded text-sm px-2 py-1 border border-[#ff0000] text-[#ff0000]"
                        >
                            Repurchase
                        </button>
                    </div>
                </div>
                <div className="status-cotainer flex justify-center gap-4">
                    <div className="flex flex-col items-center justify-center">
                        <BsFillBoxSeamFill size={35} color="red" />
                        <h5 className="flex text-center text-xs mt-2 text-[#ff0000]">Đặt hàng <br />thành công</h5>
                    </div>
                    <AiOutlineDash size={35} color="red"/>
                    <div className="flex flex-col items-center justify-center">
                        <GiConfirmed size={35} color="red" />
                        <h5 className="flex text-center text-xs mt-2 text-[#ff0000]">Đã <br/>xác nhận</h5>
                    </div>
                    <AiOutlineDash size={35} color="red"/>
                    <div className="flex flex-col items-center justify-center">
                        <TbTruckDelivery size={35} color="red" />
                        <h5 className="flex text-center text-xs mt-2 text-[#ff0000]">Đang <br/>vận chuyển</h5>
                    </div>
                    <AiOutlineDash size={35} color="red"/>
                    <div className="flex flex-col items-center justify-center">
                        <FaBoxOpen size={35} color="red" />
                        <h5 className="flex text-center text-xs mt-2 text-[#ff0000]">Đã <br/>giao hàng</h5>
                    </div>
                </div>
                <PaymentBox />
                <MemberInfo />
                <SupportInfo />
            </div>
        </section>
    )
}

export default SingleOrder

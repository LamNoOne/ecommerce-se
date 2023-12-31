import React from "react"
import SideBar from "../components/SideBar"
import images from "~/assets/images"
import { useState } from "react"
import CalendarDropDown from "../components/CalendarDropDown"
import OrderedProduct from "../components/OrderedProduct"

// Try import data
import { data } from '../data/data'

const Order = () => {
    // useSelector to get the state => display ordered items
    const [active, setActive] = useState('')
    const filterOrder = {
        getAll: 'All Order',
        waitForComfirm: 'Wait For Comfirm',
        confirmOrder: 'Confirm Order',
        transporting: 'Transporting',
        canceled: 'Canceled'
    }

    const handleOnClickFilter = (key, title) => {
        // set active,
        // dispatch action to get new state
        setActive(title)
    } 

    return (
        <section className="my-4 flex">
            <div className="min-w-[260px]">
                <SideBar />
            </div>
            <div className="flex flex-col gap-4 ms-6 w-full">
                <div className="customer-info flex items-center gap-4 h-[100px]">
                    <div className="w-[70px] h-[70px] rounded-full bg-[#f4f6f8]">
                        <img src={images.presentor} />
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <h1 className="name text-lg font-medium">
                            Henrry William
                        </h1>
                        <div className="w-[67px] h-[21px] flex items-center justify-center text-xs text-[#ff0000] border border-[#ff0000] rounded">
                            SNew
                        </div>
                    </div>
                </div>
                <div className="relative flex items-center justify-evenly h-[100px] bg-[#f4f6f8]">
                    <div className="order-number flex flex-col items-center">
                        <h1 className="text-2xl font-semibold">4</h1>
                        <p className="text-xs">orders</p>
                    </div>
                    <div className="absolute left-[50%] w-[1px] bg-black py-10"></div>
                    <div className="acumulation-number flex flex-col items-center">
                        <h1 className="text-2xl font-semibold">4M</h1>
                        <p className="text-xs">Total Acumulation</p>
                    </div>
                </div>

                <div className=""><CalendarDropDown /></div>
                <div className="flex items-center justify-around">
                    {Object.entries(filterOrder).map(([key, title]) => (
                            <button 
                                key={key}  
                                className={`flex items-center justify-center px-4 py-2 border rounded ${active === title ? 'bg-[#ff0000]' : ''}`}
                                onClick={() => handleOnClickFilter(key, title)}
                            >
                                <span className={`text-base ${active === title ? 'text-white' : ''}`}>{title}</span>
                            </button>
                    ))}
                </div>
                <div className="flex flex-col gap-4">
                    {data.map(item => (
                        <OrderedProduct {...item}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Order

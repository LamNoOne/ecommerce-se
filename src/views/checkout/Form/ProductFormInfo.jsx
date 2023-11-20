import React from "react"
import images from "~/assets/images"
//props or useSelector to get the state

const ProductFormInfo = () => {
    return (
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-6">
                <img className="w-[54px] h-[54px] p-1" src={images.game_1} />
                <h3 className="text-base">LCD Monitor</h3>
            </div>
            <p className="text-base">$650</p>
        </div>
    )
}

export default ProductFormInfo

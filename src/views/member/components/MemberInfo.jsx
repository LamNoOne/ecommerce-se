import React from "react"
import images from "~/assets/images"
import { CiUser } from "react-icons/ci"
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci"

const MemberInfo = () => {
    return (
        <div className="payment-box-container shadow-md border rounded-lg px-4 py-5">
            <div className="payment-header flex items-center justify-start gap-4 mb-4">
                <div className="w-[35px] h-[35px]">
                    <img src={images.presentor} className="object-contain" />
                </div>
                <h3 className="text-lg font-medium">Member Information</h3>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-start gap-6">
                    <CiUser size={24} color="#4a4a4a" />
                    <p className="text-sm text-[#4a4a4a]">Henry William</p>
                </div>
                <div className="flex items-center justify-start gap-6">
                    <BsTelephone size={22} color="#4a4a4a" />
                    <p className="text-sm text-[#4a4a4a]">0123456789</p>
                </div>
                <div className="flex items-center justify-start gap-6">
                    <CiLocationOn size={24} color="#4a4a4a" />
                    <p className="text-sm text-[#4a4a4a]">
                        Tecco Green Nest 1, 287, Phan Văn Hớn, Phường Tân Thới
                        Nhất, Quận 12, Hồ Chí Minh
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MemberInfo

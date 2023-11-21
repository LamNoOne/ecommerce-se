import axios from "axios"
import React, { useRef, useState } from "react"
import SideBar from "../components/SideBar"
import RadioButton from "../components/RadioButton"
import { useNavigate } from "react-router-dom"
import { maskEmail, maskPhoneNumber } from "~/config/MaskSecure"
import { Line } from "~/components"
import style from "~/style"
import { CiUser } from "react-icons/ci"

const Account = () => {
    // Set initial name before from user's state
    const inputRef = useRef(null)
    const navigate = useNavigate()
    const onButtonClick = () => {
        inputRef.current.click()
    }
    const [name, setName] = useState("Henry William")
    const [gender, setGender] = useState("Male")
    const [selectedFile, setSelectedFile] = useState(null)

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeGender = (e) => {
        setGender(e.target.value)
    }

    const isChecked = (value) => gender === value

    const fileSelectedHandler = (e) => {
        setSelectedFile(e.target.files[0])
    }

    const fileUploadHandler = (e) => {
        const formData = new FormData()
        formData.append("file", selectedFile)
        formData.append("upload_preset", "a5ymyhyp")

        axios
            .post(
                "https://api.cloudinary.com/v1_1/dmnzkqysq/image/upload",
                formData
            )
            .then((response) => {
                console.log(response)
            })
    }

    return (
        <div className="my-4 flex">
            <div className="min-w-[260px]">
                <SideBar />
            </div>
            <div className="flex flex-col w-full">
                <div className="flex flex-row w-full">
                    <div className="pb-8 px-8 flex flex-1 flex-col">
                        <h1 className="text-lg font-medium">
                            Account Information
                        </h1>
                        <div className="my-6">
                            <Line style={style.lineStyleCart} />
                        </div>
                        <div className="account-info-edit flex flex-col gap-8 border-r border-[rgba(0,0,0,0.4)]">
                            <div className="flex flex-row items-center gap-6 px-4 py-2">
                                <h1 className="text-sm">Login name:</h1>
                                <p className="text-sm">henrywilliam</p>
                            </div>
                            <div className="flex flex-row items-center gap-6 px-4 py-2">
                                <h1 className="text-sm">Name:</h1>
                                <input
                                    className="text-sm w-full p-2 outline-none border border-[#ccc]"
                                    type="text"
                                    value={name}
                                    onChange={handleChangeName}
                                />
                            </div>
                            <div className="flex flex-row items-center gap-6 px-4 py-2">
                                <h1 className="text-sm">Email:</h1>
                                <p className="text-sm">
                                    {maskEmail("henrywilliam@gmail.com")}
                                </p>
                                <span
                                    className="text-xs underline text-blue-700 cursor-pointer"
                                    onClick={() =>
                                        navigate("/member/verify/email")
                                    }
                                >
                                    Change
                                </span>
                            </div>
                            <div className="flex flex-row items-center gap-6 px-4 py-2">
                                <h1 className="text-sm">Phone number:</h1>
                                <p className="text-sm">
                                    {maskPhoneNumber("0123456789")}
                                </p>
                                <span
                                    className="text-xs underline text-blue-700 cursor-pointer"
                                    onClick={() =>
                                        navigate("/member/verify/phone")
                                    }
                                >
                                    Change
                                </span>
                            </div>
                            <div className="flex flex-row items-center gap-6 px-4 py-2">
                                <h1 className="text-sm">Gender:</h1>
                                <form className="flex items-center gap-4">
                                    <RadioButton
                                        id="male"
                                        name="male"
                                        value="male"
                                        text="Male"
                                        onChange={handleChangeGender}
                                        checked={isChecked("male")}
                                    />
                                    <RadioButton
                                        id="female"
                                        name="female"
                                        value="female"
                                        text="Female"
                                        onChange={handleChangeGender}
                                        checked={isChecked("female")}
                                    />
                                    <RadioButton
                                        id="other"
                                        name="other"
                                        value="other"
                                        text="Other"
                                        onChange={handleChangeGender}
                                        checked={isChecked("other")}
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="upload flex flex-col-reverse items-center justify-center w-[250px]">
                        <input
                            type="file"
                            ref={inputRef}
                            style={{ display: "none" }}
                            onChange={fileSelectedHandler}
                        />
                        <button
                            className="px-4 py-2 border mt-2"
                            onClick={onButtonClick}
                        >
                            Pick file
                        </button>
                        <div className="w-[100px] h-[100px] flex justify-center items-center rounded-full overflow-hidden bg-gray-200">
                            {selectedFile ? (
                                <img
                                    src={URL.createObjectURL(selectedFile)}
                                    alt="Thumb"
                                />
                            ) : (
                                <CiUser size={50} />
                            )}
                        </div>
                    </div>
                </div>
                <div className="button-submit">
                    <button
                        type="submit"
                        className="px-4 py-2 border mt-2"
                        onClick={fileUploadHandler}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Account

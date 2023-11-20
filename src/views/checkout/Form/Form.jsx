import * as Yup from "yup"
import { ErrorMessage, Field, Form, Formik } from "formik"
import InputForm from "./InputForm"
import classNames from "classnames/bind"
import { Link } from "react-router-dom"
import ProductFormInfo from "./ProductFormInfo"
import { Line, Button } from "~/components"
import images from "~/assets/images"
import { useState } from "react"
import styles from "./Form.module.scss"
import { useNavigate } from "react-router-dom"
const cx = classNames.bind(styles)

const checkOutForm = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Firstname is required"),

    companyName: Yup.string().nullable().optional(),

    streetAdrress: Yup.string()
        .min(2, "Too Short!")
        .max(100, "Too Long!")
        .required("Address should be added to determine where to deliver"),

    apartment: Yup.string().nullable().optional(),

    city: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("City should be added to determine where to deliver"),

    phoneNumber: Yup.string()
        .required("Phone number should be added to contact with you")
        .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, "Invalid phone number"),

    email: Yup.string()
        .email("Invalid email address")
        .required("Email should be added to contact with you"),

    couponCode: Yup.string().nullable().optional(),
})

const fieldNames = {
    firstName: ["First Name", true],
    companyName: ["Company Name", false],
    streetAdrress: ["Street Address", true],
    apartment: ["Apartment, floor, etc. (optional)", false],
    city: ["Town/City", true],
    phoneNumber: ["Phone Number", true],
    email: ["Email Address", true],
}

// let initialValues = { ...fieldNames }
// initialValues = Object.keys(initialValues).forEach(
//     (item) => (initialValues[item] = "")
// )

const initialValues = {
    firstName: "",
    companyName: "",
    streetAdrress: "",
    apartment: "",
    city: "",
    phoneNumber: "",
    email: "",
    payment: "",
    couponCode: "",
}

const requiredFields = Object.keys(fieldNames).filter(
    (key) => fieldNames[key][1]
)

const CheckOutForm = () => {
    const navigate = useNavigate()
    const [couponCode, setCouponCode] = useState("")
    const handleApplyCoupon = (couponCode) => {
        console.log(couponCode)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={checkOutForm}
            onSubmit={(values) => {
                console.log(values)
                navigate('/user/order')
            }}
        >
            {(formik) => {
                const { errors, touched, isValid, dirty, values } = formik
                return (
                    <div className={cx("container")}>
                        <Form>
                            <div className="flex flex-row items-start gap-44">
                                <div className="form-input-container min-w-[470px]">
                                    {Object.entries(fieldNames).map(
                                        ([field, name], index) => (
                                            <InputForm
                                                key={index}
                                                name={name}
                                                field={field}
                                                errors={errors}
                                                touched={touched}
                                                requiredFields={requiredFields}
                                            />
                                        )
                                    )}
                                </div>
                                <div className="w-full flex flex-col px-10">
                                    <div className="flex flex-col gap-4">
                                        <ProductFormInfo />
                                        <ProductFormInfo />
                                    </div>
                                    <div className="flex flex-col mt-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="subtotal">
                                                Subtotal:
                                            </h3>
                                            <p className="">$1750</p>
                                        </div>
                                        <div className="w-full my-4">
                                            <Line style="w-full h-[1px] bg-black opacity-[0.4]" />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <h3 className="shippinh">
                                                Shipping:
                                            </h3>
                                            <p className="">Free</p>
                                        </div>
                                        <div className="w-full my-4">
                                            <Line style="w-full h-[1px] bg-black opacity-[0.4]" />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <h3 className="shippinh">Total:</h3>
                                            <p className="">$1750</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-4 gap-8">
                                        <div
                                            role="group"
                                            aria-labelledby="my-radio-group"
                                            className="flex flex-col"
                                        >
                                            <label className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <Field
                                                        className="w-4 h-4 me-4"
                                                        type="radio"
                                                        name="payment"
                                                        value="Bank"
                                                    />
                                                    <span className="text-base">
                                                        Bank
                                                    </span>
                                                </div>
                                                <div className="flex flex-row gap-2">
                                                    <img
                                                        className="w-[42px] h-[28px] object-contain"
                                                        src={images.pay_1}
                                                    />
                                                    <img
                                                        className="w-[42px] h-[28px] object-contain"
                                                        src={images.pay_2}
                                                    />
                                                    <img
                                                        className="w-[42px] h-[28px] object-contain"
                                                        src={images.pay_3}
                                                    />
                                                    <img
                                                        className="w-[42px] h-[28px] object-contain"
                                                        src={images.pay_4}
                                                    />
                                                </div>
                                            </label>
                                            <label className="flex items-center">
                                                <Field
                                                    className="w-4 h-4 me-4"
                                                    type="radio"
                                                    name="payment"
                                                    value="CashOnDelivery"
                                                />
                                                <span className="text-base">
                                                    Cash on delivery
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-9">
                                        <input
                                            type="text"
                                            value={couponCode}
                                            onChange={(e) =>
                                                setCouponCode(e.target.value)
                                            }
                                            placeholder="Coupon Code"
                                            className="w-[300px] border border-black rounded ps-6 py-4 focus:outline-none text-base"
                                        />
                                        <Button
                                            onClick={() =>
                                                handleApplyCoupon(couponCode)
                                            }
                                            primary
                                            large
                                        >
                                            Apply Coupon
                                        </Button>
                                    </div>
                                    <div className="flex justify-start w-[150px] mt-4">
                                        <Button
                                            type="submit"
                                            className={
                                                !(dirty && isValid)
                                                    ? cx("disabled-btn")
                                                    : ""
                                            }
                                            disabled={!(dirty && isValid)}
                                        >
                                            Place Order
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                )
            }}
        </Formik>
    )
}

export default CheckOutForm

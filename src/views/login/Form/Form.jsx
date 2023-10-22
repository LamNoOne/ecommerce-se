import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup"

import classNames from "classnames/bind"
import { Link } from "react-router-dom"
import styles from "./Form.module.scss"
const cx = classNames.bind(styles)

const logInSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
        .required("Password is required")
        .min(4, "Password is too short - should be 4 chars min"),
})

const initialValues = {
    email: "",
    password: "",
}

const LoginForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={logInSchema}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            {(formik) => {
                const { errors, touched, isValid, dirty } = formik
                return (
                    <div className={cx("container")}>
                        <h1>Log in to Exclusive</h1>
                        <p>Enter your details below</p>
                        <Form>
                            <div className={cx("form-row")}>
                                <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className={
                                        errors.email && touched.email
                                            ? cx("input-error")
                                            : null
                                    }
                                />
                                <ErrorMessage
                                    name="email"
                                    component="span"
                                    className={cx("error")}
                                />
                            </div>

                            <div className={cx("form-row")}>
                                <Field
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    className={
                                        errors.password && touched.password
                                            ? "input-error"
                                            : null
                                    }
                                />
                                <ErrorMessage
                                    name="password"
                                    component="span"
                                    className={cx("error")}
                                />
                            </div>

                            <div className={cx('forgot-password-container')}>
                                <button
                                    type="submit"
                                    className={
                                        !(dirty && isValid)
                                            ? cx("disabled-btn")
                                            : ""
                                    }
                                    disabled={!(dirty && isValid)}
                                >
                                    Login
                                </button>
                                <div className={cx("forgot-password")}>
                                    <Link to="/login">
                                        <span
                                            className={cx(
                                                "forgot-password-link"
                                            )}
                                        >
                                            Forgot Password?
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </Form>
                    </div>
                )
            }}
        </Formik>
    )
}

export default LoginForm

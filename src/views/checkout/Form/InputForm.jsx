import { ErrorMessage, Field } from "formik"
import classNames from "classnames/bind"
import styles from "./Form.module.scss"
const cx = classNames.bind(styles)

const InputForm = ({ field, requiredFields, name, errors, touched }) => {
    return (
        <div className={cx("form-row")}>
            <label className={cx('label')} htmlFor={field}>
                {name}
                {requiredFields.includes(field) ? <span className={cx("required-field")}>*</span> : ''}
                </label>
            <Field
                name={field}
                id={field}
                className={
                    errors.streetAdrress && touched.streetAdrress
                        ? cx("input-error")
                        : null
                }
            />
            <ErrorMessage
                name={field}
                component="span"
                className={cx("error")}
            />
        </div>
    )
}

export default InputForm

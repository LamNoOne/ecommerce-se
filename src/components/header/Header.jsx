import { Link } from "react-router-dom"
import { Line } from "~/components"
import { CartIcon, SearchIcon, WishlistIcon } from "~/components/icon"
import style from "~/style"
import UserIcon from "../icon/UserIcon"

const Header = (props) => {
    const { title } = props
    return (
        <section
            className={`fixed w-[100%] top-0 ${
                title ? "h-[142px]" : "h-[94px]"
            } bg-slate-100 z-[9999]`}
        >
            {title && (
                <div className="flex h-[48px] w-[100%] top-0 justify-center items-center bg-top-header">
                    <div className="flex items-center justify-center">
                        <h3 className="text-[color:var(--text-color-white)] text-xs not-italic font-normal leading-[21px] me-2">
                            {title}
                        </h3>
                        <Link to="#">
                            <span className="text-xs font-semibold text-[color:var(--text-color-white)] leading-6 underline">
                                ShopNow
                            </span>
                        </Link>
                    </div>
                </div>
            )}
            <div
                className={`${style.boxWidth} h-[38px] flex justify-between items-center m-auto mt-[40px] mb-4`}
            >
                <div className="flex-1 exclusive text-black font-['Inter'] text-2xl font-bold leading-6">
                    Exclusive
                </div>
                <div className="flex-2 h-[24px] me-[148px]">
                    <ul className="header-menu w-[100%] flex justify-between items-center gap-12">
                        <li>
                            <Link className="flex-1 header-menu__link" to="/#">
                                <span className="header-menu__item">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="flex-1 header-menu__link" to="/#">
                                <span className="header-menu__item">
                                    Contact
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link className="flex-1 header-menu__link" to="/#">
                                <span className="header-menu__item">About</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="flex-1 header-menu__link"
                                to="/signup"
                            >
                                <span className="header-menu__item">
                                    Sign Up
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 h-[100%] flex items-center">
                    <form
                        className="search-form-header h-[100%] w-[243px] flex ps-5 pe-3 py-[7px] justify-center items-center rounded gap-2"
                        action=""
                    >
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            name="search"
                            className="flex-1 h-[100%] bg-transparent focus:outline-none text-xs"
                        />
                        <button type="submit" className="flex items-center">
                            <SearchIcon />
                        </button>
                    </form>
                    <Link to="/#" className="ms-6 flex items-center">
                        <WishlistIcon />
                    </Link>
                    <Link to="/#" className="ms-6 flex items-center">
                        <CartIcon />
                    </Link>
                    {/* Check if user login or not, then, switch icon as well as its function */}
                    <Link to="/login" className="ms-6 flex items-center">
                        <UserIcon />
                    </Link>
                    {/* <div className="ms-6 mt-1"><AccountDropdown /></div> */}
                </div>
            </div>
            <Line style={style.lineStyleMain} />
        </section>
    )
}

export default Header

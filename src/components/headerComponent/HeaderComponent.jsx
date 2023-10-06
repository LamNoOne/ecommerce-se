import React from "react"
import { Link } from "react-router-dom"
import { Line } from "~/components"
import style from "~/style"
import { SearchIcon, CartIcon, WishlistIcon } from "~/components/icon"

const HeaderComponent = (props) => {
    const { title } = props
    return (
        <section className="fixed w-[100%] top-0 h-[142px] bg-slate-100 z-[9999]">
            <div className="flex h-[48px] w-[100%] top-0 justify-center items-center bg-top-header">
                <div className="flex items-center justify-center">
                    <h3 className="text-[color:var(--text-color-white)] text-sm not-italic font-normal leading-[21px] me-2">
                        {title}
                    </h3>
                    <Link to="#">
                        <span className="text-sm font-semibold text-[color:var(--text-color-white)] leading-6 underline">
                            ShopNow
                        </span>
                    </Link>
                </div>
            </div>
            <div className="xl:max-w-[1280px] w-full h-[38px] flex justify-between items-center m-auto mt-[40px] mb-4">
                <div className="exclusive text-black font-['Inter'] text-2xl font-bold leading-6 me-[190px]">
                    Exclusive
                </div>
                <div className="w-[367px] h-[24px] me-[148px]">
                    <ul className="header-menu w-[100%] flex justify-between items-center">
                        <li>
                            <Link className="header-menu__link" to="/#">
                                <span className="header-menu__item">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="header-menu__link" to="/#">
                                <span className="header-menu__item">Contact</span>
                                
                            </Link>
                        </li>
                        <li>
                            <Link className="header-menu__link" to="/#">
                                <span className="header-menu__item">About</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="header-menu__link" to="/#">
                                <span className="header-menu__item">Sign Up</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="h-[100%] flex items-center">
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
                    <Link to="/#" className="ms-4 flex items-center">
                        <CartIcon />
                    </Link>
                </div>
            </div>
            <Line style={style.lineStyleMain} />
        </section>
    )
}

export default HeaderComponent

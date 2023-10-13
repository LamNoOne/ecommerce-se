import images from "~/assets/images"
import CategoryRectangle from "~/components/icon/CategoryRectangle"

const Feature = (props) => {
    const { items } = props

    return (
        <div className="product-list relative">
            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-5 mb-10">
                    <div className="category-rectagle flex items-center gap-4">
                        <CategoryRectangle />
                        <h3 className="text-base leading-5 font-semibold font-[Poppins] text-[#DB4444]">
                            Featured
                        </h3>
                    </div>
                    <div className="event flex items-end">
                        <h1 className="text-[32px] leading-[30px] font-semibold tracking-[1.44px] font-[Inter] text-black me-[87px]">
                            New Arrival
                        </h1>
                    </div>
                </div>
            </div>
            {/* Grid items */}
            <div className="grid grid-cols-2 grid-flow-row gap-[30px]">
                <div
                    className="playstation"
                    style={{
                        backgroundImage: `url(${images.ps_5})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div className="grid grid-rows-2 grid-flow-col gap-8">
                    <div className="wm-collection"></div>
                    <div className="grid grid-cols-2 grid-flow-row gap-[30px]"></div>
                </div>
            </div>
        </div>
    )
}

export default Feature

import { Outlet } from "react-router-dom"
import { Container, FooterComponent, HeaderComponent } from "~/components"

const DefaultLayout = () => {
    return (
        <section className="w-full h-full pt-[142px]">
            <HeaderComponent
                title={
                    "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
                }
            />
            <Container>
                <Outlet />
            </Container>
            <FooterComponent />
        </section>
    )
}

export default DefaultLayout

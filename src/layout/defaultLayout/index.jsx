import React from "react"
import { Container, HeaderComponent, FooterComponent } from "~/components"
import { Outlet } from "react-router-dom"

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
                <div className="h-[500px]"></div>
            </Container>
            <FooterComponent />
        </section>
    )
}

export default DefaultLayout

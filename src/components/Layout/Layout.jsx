import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "components/Header/Header";
import { Container } from "./Layout.styled";

const Layout = () => {
    return(
        <>
        <Container>
            <Header />
        </Container>
        <Suspense>
            <Outlet />
        </Suspense>
        </>
    )
}

export default Layout;
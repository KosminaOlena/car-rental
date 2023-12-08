import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "components/Header/Header";
import { Container, Content } from "./Layout.styled";

const Layout = () => {
    return(
        <>
        <Container>
            <Header />
        </Container>
        <Content>
        <Suspense>
            <Outlet />
        </Suspense>
        </Content>
        </>
    )
}

export default Layout;
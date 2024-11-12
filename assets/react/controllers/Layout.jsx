import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";
import Footer from "./Footer.jsx";

export default function () {
    const path = location.pathname.replace('/', '');
    return (
        <>
            <Header path={path} />
            {path === '' && <MainContent path={path} /> }
            <Footer path={path} />
        </>
    );
}
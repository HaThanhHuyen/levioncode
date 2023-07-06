import Footer from "../../pages/Footer/Footer";
import HeaderProfile from "../../pages/Header/HeaderProfile";

export default function LayoutWithHeader ({children}) {
    // var email = window.localStorage.getItem("email");
    return(
        <div>
            <HeaderProfile loggedInEmail />
            {children}
            <Footer />
        </div>
    )
}
import Navbar from "./navbar";

export default function Layout({children}) {
    return(
        <>
            {/* navbar */}
            <Navbar/>
            {children}
            {/* footer */}
        </>
    );
}
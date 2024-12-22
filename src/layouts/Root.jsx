import { Outlet } from "react-router-dom";
import Navber from "../shared/Navber";
import Footer from "../shared/Footer";


const Root = () => {
    return (
        <div>
           <header className="mb-6">
           <Navber/>
           </header>
           <main className="min-h-screen">
           <Outlet/>
           </main>
            <footer>
                <Footer/>
            </footer>
            
        </div>
    );
};

export default Root;
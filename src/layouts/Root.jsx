import { Outlet } from "react-router-dom";
import Navber from "../shared/Navber";
import Footer from "../shared/Footer";
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
        <div>
           <header className="mb-6">
           <Navber/>
           </header>
           <main className="min-h-screen">
           <Outlet/>
           <Toaster
           toastOptions={{
            
            error: {
              style: {
                color: 'red',
              },
            },
          }} />
           </main>
            <footer>
                <Footer/>
            </footer>
            
        </div>
    );
};

export default Root;
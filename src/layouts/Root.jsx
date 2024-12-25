import { Outlet } from "react-router-dom";
import Navber from "../shared/Navber";
import Footer from "../shared/Footer";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";


const Root = () => {
    return (
        <div className="dark:bg-gray-800">
             <HelmetProvider>
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
            </HelmetProvider>
        </div>
    );
};

export default Root;
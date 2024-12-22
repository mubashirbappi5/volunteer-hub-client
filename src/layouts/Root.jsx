import { Outlet } from "react-router-dom";
import Navber from "../shared/Navber";


const Root = () => {
    return (
        <div>
           <header className="mb-6">
           <Navber/>
           </header>
            <Outlet/>
            
        </div>
    );
};

export default Root;
import { useContext } from "react";
import Banner from "../Components/Home components/Banner";
import { Authcontext } from "../Context/AuthContext/AuthProvider";


const Home = () => {
    const {name} = useContext(Authcontext)
    return (
        <div>
           <Banner></Banner>

           
            
        </div>
    );
};

export default Home;
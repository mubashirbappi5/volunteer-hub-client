import { useContext } from "react";
import Banner from "../Components/Home components/Banner";
import { Authcontext } from "../Context/AuthContext/AuthProvider";
import VolunteerTestimonial from "../Components/Home components/VolunteerTestimonial";
import Faq from "../Components/Home components/Faq";


const Home = () => {
    const {name} = useContext(Authcontext)
    return (
        <div>
           <Banner></Banner>
           <VolunteerTestimonial/>
           <Faq/>

           
            
        </div>
    );
};

export default Home;
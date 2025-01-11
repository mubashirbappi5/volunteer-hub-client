import { useContext } from "react";
import Banner from "../Components/Home components/Banner";
import { Authcontext } from "../Context/AuthContext/AuthProvider";
import VolunteerTestimonial from "../Components/Home components/VolunteerTestimonial";
import Faq from "../Components/Home components/Faq";
import VolunteerNeedNow from "../Components/Home components/VolunteerNeedNow";
import Partners from "../Components/Home components/Partners";
import Progress from "../Components/Home components/Progress";


const Home = () => {
    const {name} = useContext(Authcontext)
    return (
        <div className="space-y-10">
          <div>
          <Banner></Banner>
          <div>
            <Progress/>
          </div>
          </div>
         
           <div>
           <VolunteerNeedNow/>
           </div>
         <div>
         <VolunteerTestimonial/>
         </div>
           <div>
           <Faq/>
           </div>

           <div>
            <Partners/>
           </div>
            
        </div>
    );
};

export default Home;
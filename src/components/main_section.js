import "./main_section.css"
import React ,{useEffect} from "react"
import builds from "../components/images/1.jpg"
import Aos from "aos";
import "aos/dist/aos.css";
function MainSection({imgStart, Heading, Discription, Image,}){
    useEffect(()=>{
        Aos.init({duration:1000});
    },[]);
 return(
     <div>
         <div className="main-section-container">
                <div  className="main-section-container-wrapper">
                    <div className="row" style={{display:'flex', flexDirection: imgStart === "start" ? "row-reverse":"row" }}>
                    <div className="col">
                            <div data-aos="fade-right" className="image-wrapper">
                                <img src={builds} alt="image" className="img-info"/>
                            </div>
                        </div>
                        <div className="col">
                            <div  data-aos="zoom-in-up" data-aos-delay="1000" className="text-wrapper">
                                <h1 className="heading">{Heading}</h1>
                                <p className="discription">
                                    {Discription}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     </div>
 )
}
export default MainSection
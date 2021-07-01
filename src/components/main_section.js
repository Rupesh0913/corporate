import "./main_section.css"
import React from "react"
import builds from "../components/images/1.jpg"
function MainSection({imgStart, Heading, Discription, Image}){
 return(
     <div>
            <dvi className="main-section-container">
                <div className="main-section-container-wrapper">
                    <div className="row" style={{display:'flex', flexDirection: imgStart === "start" ? "row-reverse":"row" }}>
                    <div className="col">
                            <div className="image-wrapper">
                                <img src={builds} alt="image" className="img-info"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="text-wrapper">
                                <h1 className="heading">{Heading}</h1>
                                <p className="discription">
                                    {Discription}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </dvi>
     </div>
 )
}
export default MainSection
import React from 'react'
import img from './img/img.png';
import "./Banner.css"
import { Tab, Tabs } from 'react-bootstrap'
import Action from './Links/action';


function Banner() {

 /*  const [showModal, setShowModal] = useState(false)


  const openModal = () => {
    setShowModal(prev => !prev)
  } */

  return (
    <div>
      <div className="Banner">
        <div className="banner-wrapper">
          <img src={img} alt="buildings" className="img-section" />
        </div>
        <div className="tab__section">
          <div className="tab__section__wrapper">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" classname>
              <Tab eventKey="home" title="Home">
               {/* <Action/> */}
              </Tab>
              <Tab eventKey="profile" title="Profile">
              {/*   <Sonnet /> */}
              </Tab>
              <Tab eventKey="contact" title="Contact">
            {/*     <Sonnet /> */}
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

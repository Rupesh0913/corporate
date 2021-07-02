import React from 'react'
import  img  from './img/img.png';
import "./Banner.css"
import { Dropdown,DropdownButton, ButtonGroup } from 'react-bootstrap'

function Banner() {
    return (
        <div>
            <div className="Banner">
                <div className="banner-wrapper">
                    <img src={img} alt="buildings" className="img-section"/>
                </div>
                <div className="Dropdown__section">
                <>
  {['Primary', 'Secondary', 'Success', 'Info', 'Warning'].map(
    (variant) => (
      <DropdownButton
        as={ButtonGroup}
        key={variant}
        id={`dropdown-variants-${variant}`}
        variant={variant.toLowerCase()}
        title={variant}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Active Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
    ),
  )}
</>
                </div>
            </div>
        </div>
    )
}

export default Banner

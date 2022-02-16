import React from 'react'
import employeeData from '../data/employeeData'

const AboutUs = () => {
  return (
    <div className="aboutus">

        <div className="aboutusbox">
            <a name="aboutref"></a>
            <div className="abouttext1">
                Nasi specjaliści
            </div>
            {employeeData.map(({id, name, surname, position, description, img}) => 
                <div className="employee" key={id}>
                    <div className="circle"><img src={img} className="imgcircle"/></div>
                    <div className="abouttext2">
                        <div><p><b>{name} {surname} {position}</b></p><p></p>
                        <p>{description}</p></div>
                    </div>
                </div>
            )}
        </div>

    </div>
  )
}

export default AboutUs
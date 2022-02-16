import React from 'react'
import offerData from './../data/offerData'


const Offer = () => {
  return (
    <div className="ofertabackground">
      <a name="ofertaref"></a>
      <div className="ofertatext">
        Czym zajmuje się nasza firma?
      </div>

      <div className="parentbox">
        {offerData.map(({ name, isNew, id }) => 
          <div key={id}>
            <div className="childbox">
              {name} {isNew ? <div className="boxdot"></div> : ""} {isNew ? <p className="box1textsmall">(nowość)</p>: ""}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Offer
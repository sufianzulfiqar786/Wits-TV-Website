import React from 'react'
import sampleImg1 from '../assets/images/PlayerScreen/myPic.jpg'
import '../assets/css/style.scss'
const Host = () => {
  return (
   <>
   
   <div className="row" style={{ width: "100%" }}>

              <div className="col-12 d-flex justify-content-center">
                <img className="leader-board-host-pic" src={sampleImg1} alt="" />
              </div>
              <div className="col-12 d-flex justify-content-center host-name">
                <p>Host Sufian</p>
              </div>

            </div>
   
   </>
  )
}

export default Host
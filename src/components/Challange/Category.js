import React from 'react'
import '../../assets/css/style.scss'
import '../../assets/css/challange.scss'
import Football from '../../assets/images/Challange/Football.svg'
import sampleImg1 from '../../assets/images/PlayerScreen/myPic.jpg'
import Host from '../Host'


const Category = () => {
  return (
    <>
    
    <div className="row challange-congra-background" >

<div className="col-12 my-4 text-light category-center-start d-flex justify-content-center ">

<p >CATEGORY</p>

</div>

<div className="col-12  d-flex justify-content-center ">

<img style={{width:"10.5vw"}} src={Football} alt="" />

</div>

<div className="col-12 category-center-text d-flex justify-content-center">

<p >FOOTBALL</p>

</div>

<div className="col-12  text-light" >



</div>



<div className="col-12 position-absolute text-light" style={{ top: "84.5%", left: "52.88%", transform: "translate(-50%, -50%)"  }}>

                    <Host />

                </div>

    </div>
    
    </>
  )
}

export default Category
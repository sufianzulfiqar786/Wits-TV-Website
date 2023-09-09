import React from 'react'
import Trophy from "../..//assets/images/TodayPrizeScreen/trophy.svg"
import '../../assets/css/style.scss'

export default function Announcement({title}) {

    const jsonString = localStorage.getItem("Language");

    // Parse JSON data back into a JavaScript object
    const Language = JSON.parse(jsonString);

    return (
        <div className='row d-flex justify-content-between align-items-center announcement  mt-2'>
            <div className='ml-2 '>
                <img height={25} src={Trophy} />
                <span className=' float-right  text-light d-flex align-items-center'><span  className='announcement-text1'>{title}</span></span>
            </div>
            <div className='float-right mr-2 mb-2 announcement-heading2 d-flex align-items-center'><span className='announcement-text2'> {Language.translation.view_all? Language.translation.view_all: "View All" }   </span></div>

        </div>
    )
}

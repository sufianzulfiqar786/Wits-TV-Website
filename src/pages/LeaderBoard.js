import React from 'react'
import withAuth from '../components/Auth'
import LeaderBoardSub from '../components/LeaderBoardSub'

const LeaderBoard = () => {
  return (
    <>
    
    <LeaderBoardSub/>
    
    </>
  )
}

export default  withAuth(LeaderBoard)
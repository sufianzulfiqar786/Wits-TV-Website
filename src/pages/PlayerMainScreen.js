import React from 'react'
import withAuth from '../components/Auth'
import PlayerSubScreen from '../components/PlayerSubScreen'

const PlayerMainScreen = () => {
  return (
    <>
    
    <PlayerSubScreen/>
    </>
  )
}

export default withAuth(PlayerMainScreen) ;
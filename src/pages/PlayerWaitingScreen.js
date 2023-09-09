import React from 'react'
import withAuth from '../components/Auth'
import PlayerSubWaitingScreen from '../components/PlayerSubWaitingScreen'

const PlayerWaitingScreen = () => {
  return (
    <>
    <PlayerSubWaitingScreen/>
    </>
  )
}

export default withAuth(PlayerWaitingScreen);
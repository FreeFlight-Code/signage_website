import React from 'react';
import Home from './Pages/HomePage'
import UpperPage from './Pages/UpperPage'
import LowerPage from './Pages/LowerPage'

function App (){
  if(window.location.pathname === '/')
  return < Home />
  if(window.location.pathname === '/upper')
  return < UpperPage />
  if(window.location.pathname === '/lower')
  return < LowerPage />
}

export default App;

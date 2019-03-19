import React from 'react';
import Home from './Pages/HomePage'
import UpperPage from './Pages/UpperPage'

function App (){
  if(window.location.pathname === '/')
  return < Home />
  else return < UpperPage />
}

export default App;

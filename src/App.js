import React, { Component } from 'react'
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Profile from "./Components/Profile";

import { BrowserRouter,Route,Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={ <SignIn />} />
      <Route path='/signup' element={ <SignUp />} />
       <Route path='profile' element={<Profile />} />
      </Routes>
      </BrowserRouter>
      </>
    )
  }
}

import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'

class App extends React.Component{
    render(){
        return ( 
            <BrowserRouter>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>

                <Route path = "/" exact={true} component={HomeScreen} />
                <Route path = "/about" exact={true} component={AboutScreen} />
            </BrowserRouter>
        )
    }
}

export default App
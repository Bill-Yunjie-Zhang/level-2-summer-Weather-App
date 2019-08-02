import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Input, Menu, Segment, Container } from 'semantic-ui-react'


import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import AboutMe from './screens/AboutMe'


class App extends React.Component{
    render(){
        const navButtonStyle = {
            fontSize : 20
        }

        return ( 
            <BrowserRouter>
                <Segment inverted>
                    <Menu inverted secondary widths={3}>
                        <Menu.Item style={navButtonStyle} to="/home" as={Link} name='home'/>
                        <Menu.Item style={navButtonStyle} to="/weather" as={Link} name='weather'/>
                        <Menu.Item style={navButtonStyle} to="/about" as={Link} name='about'/>
                    </Menu>
                </Segment>

                <Route path = "/home" exact={true} component={AboutMe} />
                <Route path = "/weather" exact={true} component={HomeScreen} />
                <Route path = "/about" exact={true} component={AboutScreen} />
                
            </BrowserRouter>
        )
        
    }
}

export default App
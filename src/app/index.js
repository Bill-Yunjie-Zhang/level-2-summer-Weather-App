import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Menu, Segment, Container } from 'semantic-ui-react'


import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import AboutMe from './screens/AboutMe'
import MyWebSites from './screens/MyWebSites'
import FormScreen from './screens/FormScreen'
import IceAndFire from './screens/IceAndFire'


class App extends React.Component{
    render(){
        const navButtonStyle = {
            fontSize : 20
        }

        return ( 
            <BrowserRouter>
                <Segment inverted>
                    <Menu inverted secondary widths={6}>
                        <Menu.Item style={navButtonStyle} to="/home" as={Link} name='home'/>
                        <Menu.Item style={navButtonStyle} to="/weather" as={Link} name='weather'/>
                        <Menu.Item style={navButtonStyle} to="/about" as={Link} name='about'/>
                        <Menu.Item style={navButtonStyle} to="/myWebSites" as={Link} name='more websites'/>
                        <Menu.Item style={navButtonStyle} to="/formScreen" as={Link} name='FormScreen'/>
                        <Menu.Item style={navButtonStyle} to="/IceAndFire" as={Link} name='IceAndFire'/>
                    </Menu>
                </Segment>

                <Container>
                    <Route path = "/home" exact={true} component={AboutMe} />
                    <Route path = "/weather" exact={true} component={HomeScreen} />
                    <Route path = "/about" exact={true} component={AboutScreen} />
                    <Route path = "/myWebSites" exact={true} component={MyWebSites} />
                    <Route path = "/formScreen" exact={true} component={FormScreen} />
                    <Route path = "/IceAndFire" exact={true} component={IceAndFire} />
                </Container>
                
                
            </BrowserRouter>
        )
        
    }
}

export default App
import React from 'react'
import axios from 'axios'
import { Card, CardMeta } from 'semantic-ui-react'


class HomeScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            response : {}
        }
    }

    componentDidMount(){
        this.getWeatherData('boston', 'metric')
    }

    getWeatherData(city, unit){
        const thisComponent = this
        axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ city + '&APPID=eda439d629165a345559e6e9043cf085&units=' + unit)
        .then(function(res){
            const data = res.data
            thisComponent.setState({
                response: data
            })
        })
        .catch(function(err){
            console.log(err)
        })
    }

    render(){
        var responseData = this.state.response || {}
        var city = responseData.name
        var cityId = responseData.id

        var main = responseData.main || {}
        var temp = main.temp

        var weatherData = responseData.weater || []
        var weatherDataObject = weatherData[0] || {}
        var description = weatherDataObject.description

        var sysData = responseData.sys || {}
        var country = sysData.country

        var coordData = responseData.coord || {}
        var lon = coordData.lon
        var lat = coordData.lat

         
        
        console.log(responseData)
        return (
            // <BrowserRouter>
            // <Link to="/about">About</Link>

            <Card.Group>
                <Card>
                    <Card.Content>
                        <Card.Header>Hi, Bill!!!</Card.Header>
                        <Card.Header>Welcome to {city}</Card.Header>
                        <Card.Header>temperature: {temp}℃</Card.Header>
                        <Card.Meta>city ID: {cityId}</Card.Meta>
                        <Card.Meta>{description}</Card.Meta>
                        <Card.Description>this is a city in {country}, with a longitude of {lon} and latitude of {lat}.</Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
            // </BrowserRouter>

        )
    }
}

export default HomeScreen
import React from 'react'
import axios from 'axios'
import { Card, Icon, Input } from 'semantic-ui-react'
class HomeScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            response : {},
            city: ""
        }
        this.handleCity = this.handleCity.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // componentDidMount(){
    //     this.getWeatherData('boston', 'metric')
    // }


    getWeatherData(city, unit){
        const thisComponent = this
        axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ city + '&APPID=eda439d629165a345559e6e9043cf085&units=' + unit)
        .then(function(res){
            const data = res.data
            console.log(res)
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
        var cityName = responseData.name
        var cityId = responseData.id

        var main = responseData.main || {}
        var temp = main.temp

        var weatherData = responseData.weather || []
        var weatherDataObject = weatherData[0] || {}
        var description = weatherDataObject.description
        console.log(description)

        var sysData = responseData.sys || {}
        var country = sysData.country

        var coordData = responseData.coord || {}
        var lon = coordData.lon
        var lat = coordData.lat
        console.log(responseData)

        var state = this.state
        var city = state.city


        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* <label>type the city you want to check! </label> */}
                    <Input size='big' icon={<Icon name='search' inverted circular link />} placeholder='City you are in...' id = "city" value={city} onChange={this.handleCity}/>
                    {/* <div>
                        <input id = "city" value={city} onChange={this.handleCity}/>
                        <button> Submit </button>
                    </div> */}
                </form>

                <Card.Group>
                    <Card>
                        <Card.Content>
                            <Card.Header>Hi, Bill!!!</Card.Header>
                            <Card.Header>Welcome to {cityName}</Card.Header>
                            <Card.Meta>city ID: {cityId}</Card.Meta>
                            <Card.Header>temperature: {temp}℃</Card.Header>
                            <Card.Header>weather: {description}</Card.Header>
                            <Card.Description>a city in: {country}</Card.Description>
                            <Card.Description>longitude: {lon} </Card.Description>
                            <Card.Description>latitude: {lat}.</Card.Description>
                        </Card.Content>
                    </Card>
                </Card.Group>

            </div>
        )
    }

    handleCity(ev){
        this.setState({
            city: ev.target.value
        })
    }

    handleSubmit(ev){
        ev.preventDefault();
        console.log(this.state.city)
        this.getWeatherData(this.state.city, 'metric')
    }
}

export default HomeScreen
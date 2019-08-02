import React from 'react'

class FormScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            i1: "",
            i2: "",
            name: "",
            city: ""
        }
        this.handleI1 = this.handleI1.bind(this)
        this.handleI2 = this.handleI2.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleCity = this.handleCity.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    render(){
        var state = this.state
        var i1 = state.i1
        var i2 = state.i2
        var name = state.name
        var city = state.city

        return <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Input 1: </label>
                    <input id = "i1" value={i1} onChange={this.handleI1}/>
                </div>
                <div>
                    <label>Input 2: </label>
                    <input id = "i2" value={i2} onChange={this.handleI2}/> 
                </div>
                <div>
                    <label>Input name: </label>
                    <input id = "name" value={name} onChange={this.handleName}/> 
                </div>
                <div>
                    <label>Input city: </label>
                    <input id = "city" value={city} onChange={this.handleCity}/> 
                </div>
                <button> Submit </button>
            </form>           
        </div>
    }

    handleI1(ev){
        console.log("i1: ", ev.target.value)
        this.setState({
            i1: ev.target.value
        })
    }

    handleI2(ev){
        console.log("i2: ", ev.target.value)
        this.setState({
            i2: ev.target.value
        })
    }

    handleName(ev){
        console.log("name: ", ev.target.value)
        this.setState({
            name: ev.target.value
        })
    }

    handleCity(ev){
        console.log("city: ", ev.target.value)
        this.setState({
            city: ev.target.value
        })
    }

    handleSubmit(ev){
        ev.preventDefault();
        console.log(this.state)
    }
}

export default FormScreen
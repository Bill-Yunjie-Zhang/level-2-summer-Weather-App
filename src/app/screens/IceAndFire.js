import React from 'react'
import axios from 'axios'
import IndividualCard1 from '../components/IndividualCard1'
import {Card} from 'semantic-ui-react'

class HomeScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            response : [],
        }
    }

    componentWillMount(){
        const that = this
        axios.get('https://anapioficeandfire.com/api/books/')
        .then(function(res){
            var data = res.data
            console.log(data)
            that.setState({
                response: data
            })
        }) 
    }

    render() {
        const response = this.state.response || []
        return (
            <Card.Group itemsPerRow={5}>
                {response.map(function(item){
                    const bookName = item.name
                    const bookPage = item.numberOfPages
                    const author = "J.R.R Martin"
                    return (
                        <IndividualCard1 
                            bookName = {bookName}
                            bookPage = {bookPage}
                            author = {author}
                        />
                    )
                })}
            </Card.Group>
        )
    }
}

export default HomeScreen
import React from 'react'
import { Card } from 'semantic-ui-react'

class IndividualCard1 extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const bookName = this.props.bookName
        const bookPage = this.props.bookPage
        const author = this.props.author
        return (
            <Card>
                <Card.Content>
                    <Card.Header>{bookName}</Card.Header>
                    <Card.Meta>~~~~ by {author}</Card.Meta>
                    <Card.Meta>number of pages: {bookPage}</Card.Meta>
                </Card.Content>
            </Card>
        )
    }
}
export default IndividualCard1 
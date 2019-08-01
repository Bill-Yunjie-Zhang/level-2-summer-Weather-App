import React from 'react'
import { Card } from 'semantic-ui-react'

class Card1 extends React.Component{
    render(props){
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Matthew Harris</Card.Header>
                    <Card.Meta>Co-Worker</Card.Meta>
                    <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
                </Card.Content>
            </Card>
        )
    }
}

export default Card1
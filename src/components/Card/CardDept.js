import {Card, CardTitle, CardText} from 'reactstrap'

const CardDept = ({name, numOfStaff}) => {

    return(
        
        <Card body>
      <CardTitle tag="h5">
        {name}
      </CardTitle>
      <CardText>
        NumOfMember: {numOfStaff}
      </CardText>
    </Card>
    
    )
}

export default CardDept
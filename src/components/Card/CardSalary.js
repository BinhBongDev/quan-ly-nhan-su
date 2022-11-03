import {Card, CardTitle, CardText, CardBody, CardFooter} from 'reactstrap'

const CardSalary = () => {

    return(
        
        <Card
        className="my-2"
        style={{
          width: '18rem'
        }}
      >
        <CardBody>
          <CardTitle tag="h5">
            Hoang Van Binh
          </CardTitle>
          <CardText>
            Phong ban: IT
          </CardText>
          <CardText>
            Ngay vao cong ty: 01/01/2023
          </CardText>
          <CardText>
            Ngay sinh: 17/06/1996
          </CardText>
          <CardText>
            He so luong: 1.1
          </CardText>
          <CardText>
            So ngay nghi con lai: 7
          </CardText>
          
        </CardBody>
        <CardFooter>
          Luong:
        </CardFooter>
      </Card>
    
    )
}

export default CardSalary
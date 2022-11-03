import {Card, CardBody, CardImg, CardTitle} from 'reactstrap'

const CardStaff = () => {

    return(
        <Card>
          <CardImg src='https://picsum.photos/300/200' alt='ten' />
          <CardBody>
            <CardTitle tag="h5" className='text-center'>
              Nguyen Van F
            </CardTitle>
          </CardBody>
        </Card>
    )
}

export default CardStaff
import {Card, CardBody, CardTitle} from 'reactstrap'

const CardStaff = () => {

    return(
        <Card
  style={{
    width: '15rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
    className='img-card'
  />
  <CardBody>
    <CardTitle tag="h5" className='text-center'>
      Nguyen Van F
    </CardTitle>
  </CardBody>
</Card>
    )
}

export default CardStaff
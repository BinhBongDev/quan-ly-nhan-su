import {Card, CardBody, CardImg, CardTitle} from 'reactstrap'

const CardStaff = ({name, image }) => {
  const isImage = image ? true : false

    return(
        <Card>
          <CardImg src={isImage && 'https://cdn1.vectorstock.com/i/1000x1000/13/05/office-staff-vector-17721305.jpg'} alt={name}/>
          <CardBody>
            <CardTitle tag="h5" className='text-center'>
              {name}
            </CardTitle>
          </CardBody>
        </Card>
    )
}

export default CardStaff
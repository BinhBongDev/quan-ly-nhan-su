import {Card, CardBody, CardImg, CardTitle} from 'reactstrap'

const CardStaff = ({name, image }) => {

    return(
        <Card>
          <CardImg src={image ? 'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg' : ''} alt={name}/>
          <CardBody>
            <CardTitle tag="h5" className='text-center'>
              {name}
            </CardTitle>
          </CardBody>
        </Card>
    )
}

export default CardStaff
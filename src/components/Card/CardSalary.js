import {Card, CardTitle, CardText, CardBody, CardFooter} from 'reactstrap'
import dateFormat from 'dateformat'

import { idToDept } from '../../utils/configDept'

const CardSalary = ({name, doB, deptId, startDate, salary, salaryScale, overTime}) => {
  const formatDob = dateFormat(doB, 'mm/dd/yyyy')
  const formatStartDate = dateFormat(startDate, 'mm/dd/yyyy')
    return(
        
        <Card
        className="my-2"
      >
        <CardBody>
          <CardTitle tag="h5">
            {name}
          </CardTitle>
          <CardText>
            Dept: {idToDept(deptId)}
          </CardText>
          <CardText>
            Start-date: {formatStartDate}
          </CardText>
          <CardText>
          Birthday: {formatDob}
          </CardText>
          <CardText>
            salary-scale: {salaryScale}
          </CardText>
          <CardText>
            Annua-leave: {overTime}
          </CardText>
          
        </CardBody>
        <CardFooter>
          Sum-salary: {salary}
        </CardFooter>
      </Card>
    
    )
}

export default CardSalary
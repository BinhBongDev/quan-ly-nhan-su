import {Card, CardTitle, CardText, CardBody, CardFooter} from 'reactstrap'


const CardSalary = ({name, doB, deptId, startDate, salary, salaryScale, overTime, annualLeave}) => {
  
    return(
        
        <Card
        className="my-2"
      >
        <CardBody>
          <CardTitle tag="h5">
            {name}
          </CardTitle>
          <CardText>
            Dept: {deptId}
          </CardText>
          <CardText>
            Start-date: {startDate}
          </CardText>
          <CardText>
          Birthday: {doB}
          </CardText>
          <CardText>
            Salary-scale: {salaryScale}
          </CardText>
          <CardText>
            Annual-leave: {annualLeave}
          </CardText>
          <CardText>
            Over-time: {overTime}
          </CardText>
          
        </CardBody>
        <CardFooter>
          Sum-salary: {salary}
        </CardFooter>
      </Card>
    
    )
}

export default CardSalary
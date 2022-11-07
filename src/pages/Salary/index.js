import { Link } from "react-router-dom"
import { Breadcrumb, BreadcrumbItem } from "reactstrap"
import CardSalary from "../../components/Card/CardSalary"
import { Loading } from "../../components/Loading"
import { idToDept } from "../../utils/configDept"
import { formatToNorma } from "../../utils/formatDate"


const Salary = ({salary, errMess, isLoading}) => {

    if(isLoading) {
        return <Loading />
    }
    if(errMess) {
        return(
                <div className="text-center mt-5">
                <h4>
                    {errMess.error.message}
                </h4>
                <p>Back later !!!</p>
                </div>
            )
    }
    return (
        <div className="container-fluid mt-3">
            <div className="breakCum">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to={'/'}>
                        Staffs
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Salary
                </BreadcrumbItem>
            </Breadcrumb>
            </div>
            <div className="row">
                {salary.map((sal, index) => {
                    return(
                        <div key={index} className="col-12 col-md-3 col-sm-4 mb-3">
                            <CardSalary
                            name = {sal.name}
                            doB = {formatToNorma(sal.doB)}
                            deptId = {idToDept(sal.departmentId)}
                            overTime = {sal.overTime}
                            salaryScale = {sal.salaryScale}
                            salary ={sal.salary}
                            startDate = {formatToNorma(sal.startDate)}
                            annualLeave={sal.annualLeave}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
    }
    
    export default Salary
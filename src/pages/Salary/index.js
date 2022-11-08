import { useState } from "react"
import { Link } from "react-router-dom"
import { Breadcrumb, BreadcrumbItem } from "reactstrap"
import _ from 'lodash'
import CardSalary from "../../components/Card/CardSalary"
import { Loading } from "../../components/Loading"
import Sort from "../../components/Sort"
import { idToDept } from "../../utils/configDept"
import { formatToNorma } from "../../utils/formatDate"


const Salary = ({salary:salaryRen , errMess, isLoading}) => {
    const [sortStaff, setSortStaff] = useState(1)

    if(sortStaff === 1) {
        salaryRen = _.orderBy(salaryRen, ['name'], ['asc'])
    }

    if(sortStaff === 3) {
        salaryRen = _.sortBy(salaryRen, [function(o) {
            return o.salary
        }])
    }

    if(sortStaff === 2) {
        salaryRen = _.orderBy(salaryRen, ['name'], ['desc'])
    }

    if(sortStaff === 4) {
        salaryRen = _.orderBy(salaryRen, ['salary'], ['desc'])
    }
    

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
            <div className="sort mb-3">
                <Sort setSortStaff = {setSortStaff} />
            </div>
            <div className="row">
                {salaryRen.map((sal, index) => {
                    return(
                        <div key={index} className="col-12 col-md-4 col-sm-6 col-lg-3 mb-3">
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
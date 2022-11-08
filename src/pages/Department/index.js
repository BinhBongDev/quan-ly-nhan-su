import { Breadcrumb, BreadcrumbItem } from "reactstrap"
import { Link } from "react-router-dom"
import CardDept from "../../components/Card/CardDept"
import { Loading } from "../../components/Loading"

import { idToDept } from "../../utils/configDept"

const Department = ({isLoading, errMess, depts}) => {

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
                    <Link to={'/staffs'}>
                        Staffs
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Department
                </BreadcrumbItem>
            </Breadcrumb>
            </div>
            <div className="row">
                {depts.map(dept => {
                    return <div key={dept.id} className="col-12 col-sm-6 col-md-3 mb-3">
                    <Link to={`/departments/${idToDept(dept.id)}`}>
                        <CardDept name = {dept.name} numOfStaff = {dept.numberOfStaff} />
                    </Link>
                </div>
                })}
            </div>
        </div>
    )
    }
    
    export default Department
import { Link } from "react-router-dom"
import { Breadcrumb, BreadcrumbItem } from "reactstrap"
import CardSalary from "../../components/Card/CardSalary"

const Salary = () => {
    const arr = [1,2,3,4,5,6,7,8,9,10]
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
                {arr.map((sal, index) => {
                    return(
                        <div key={index} className="col-md-3">
                            <CardSalary />
                        </div>
                    )
                })}
            </div>
        </div>
    )
    }
    
    export default Salary
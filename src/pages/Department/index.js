import { Breadcrumb, BreadcrumbItem } from "reactstrap"
import { Link } from "react-router-dom"
import CardDept from "../../components/Card/CardDept"

const Department = () => {
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
                    Department
                </BreadcrumbItem>
            </Breadcrumb>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 col-md-3">
                    <CardDept />
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <Link to={'/dept/hr'}>
                        <CardDept />
                    </Link>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <CardDept />
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <CardDept />
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <CardDept />
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <CardDept />
                </div>
                <div className="col-12 col-sm-6 col-md-3 mb-3">
                    <CardDept />
                </div>
            </div>
        </div>
    )
    }
    
    export default Department
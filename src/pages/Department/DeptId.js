import { Link } from "react-router-dom"
import { Breadcrumb, BreadcrumbItem } from "reactstrap"
import CardStaff from "../../components/Card/CardStaff"

const DeptId = () => {

    return(
        <div className="container-fluid mt-3">
            <div className="breakCum">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to={'/'}>
                        Staffs
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link to={'/dept'}>
                        Department
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    HR
                </BreadcrumbItem>
            </Breadcrumb>
            </div>
            <div className="row">
                <div className="col-12 col-sm-4 col-md-2">
                <Link to={`/staffs/${1}`}>
                    <CardStaff />
                </Link>
                </div>
                <div className="col-12 col-sm-4 col-md-2">
                    <CardStaff />
                </div>
                <div className="col-12 col-sm-4 col-md-2">
                    <CardStaff />
                </div>
            </div>
        </div>
    )
}

export default DeptId
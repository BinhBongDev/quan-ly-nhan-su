import { Link } from "react-router-dom"
import CardStaff from "../../components/Card/CardStaff"

const DeptId = () => {

    return(
        <div className="container-fluid mt-3">
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
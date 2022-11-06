import { Link, useParams } from "react-router-dom"
import { Breadcrumb, BreadcrumbItem } from "reactstrap"
import CardStaff from "../../components/Card/CardStaff"
import { deptToId } from "../../utils/configDept"
import { fetchDept } from "./deptSlice"
import {fetchDeptsSelector} from '../../redux/selector'
import {Loading} from '../../components/Loading'

import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from "react"

const DeptId = () => {
    const dispatch = useDispatch()
    const {deptId} = useParams()
    const idConfig = deptToId(deptId)
    const {isLoading, errMess, dept} = useSelector(fetchDeptsSelector)
    useEffect(() => {
        dispatch(fetchDept(idConfig))
        // eslint-disable-next-line
    }, [])

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
    return(
        <div className="container-fluid mt-3 mb-3">
            <div className="breakCum">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to={'/'}>
                        Staffs
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link to={'/departments'}>
                        Departments
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    {deptId}
                </BreadcrumbItem>
            </Breadcrumb>
            </div>
            <div className="row">
                {dept.map(dep => {
                    return (
                        <div key={dep.id} className="col-12 col-sm-4 col-md-3 mb-3">
                            <Link to={`/staffs/${dep.id}`}>
                                <CardStaff name={dep.name} image={dep.image}/>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DeptId
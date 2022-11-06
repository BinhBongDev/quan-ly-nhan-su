import './style.css'

import { useDispatch,useSelector } from 'react-redux'
import { fetchStaffsSelector } from '../../redux/selector'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap"
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Loading } from '../../components/Loading'
import {formatToNorma} from '../../utils/formatDate'
import { idToDept } from '../../utils/configDept'
import { deleteStaff } from './staffsSlice'
import ModalForm from '../../components/ModalForm'
import { Fragment, useState } from 'react'

const Staff = () => {
    const [showModal, setShowModal] = useState(false)
    const {staffs, isLoading} = useSelector(fetchStaffsSelector)
    const {id} = useParams()
    const staffId = staffs.filter(sta => {
        return sta.id.toString() === id.toString()
    })[0]

    const dispatch = useDispatch()
    let navigate = useNavigate()
    const handelDeleteStaff = () => {
        if(window.confirm('Do you want delete this staff ?')) {
            dispatch(deleteStaff(staffId.id))
            navigate('/')
        } else {
            console.log('Delete err!!')
        }
    }

    const handleEditStaff = () => {
        setShowModal(!showModal)
    }

    if(isLoading) {
        return <Loading />
    }
    if(staffId === undefined) {
        return(
            <div className='text-center'>
                <h5>Not found staff with id: {id}</h5>
                <p><a href='/'>Back to home</a></p>
            </div>
        )
    }

    return(
        <Fragment>
            <div className="container-fluid mt-3 mb-3">
                <div className="breakCum">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to={'/'}>
                            Staffs
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {staffId.name}
                    </BreadcrumbItem>
                </Breadcrumb>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-5">
                        <Card>
                            <CardImg 
                                src={staffId.image ? 'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg' : ''}
                                alt="leftSide" 
                            />
                            <div className="mt-5 mb-3 text-center">
                                <button className="btn btn-warning me-3"
                                onClick={handleEditStaff}
                                >Edit</button>
                                <button className="btn btn-danger"
                                onClick={handelDeleteStaff}
                                >Delete</button>
                            </div>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-md-7">
                        <Card>
                            <CardBody>
                            <CardTitle tag={'h5'}>{staffId.name}</CardTitle>
                                <CardText>Birthday: {formatToNorma(staffId.doB)}</CardText>
                                <CardText>Date-start: {formatToNorma(staffId.startDate)}</CardText>
                                <CardText>Departement: {idToDept(staffId.departmentId)}</CardText>
                                <CardText>Salary-scale: {staffId.salaryScale}</CardText>
                                <CardText>Over-time: {staffId.overTime}</CardText>
                                <CardText>Annua-leave: {staffId.annualLeave}</CardText>
                            </CardBody>
                        </Card>
                        

                    </div>
                    

                </div>
            </div>
            {showModal && <ModalForm toggleModal={setShowModal} idStaff = {staffId} />}
        </Fragment>
    )
}

export default Staff
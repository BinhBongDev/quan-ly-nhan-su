import { Fragment, useState } from "react"
import './style.css'

import { Link } from "react-router-dom"

import CardStaff from "../../components/Card/CardStaff"
import { Loading } from "../../components/Loading";
import ModalForm from "../../components/ModalForm";

const Staffs = ({isLoading, staffs, errMess}) => {
 
    const [column, setColumn] = useState(2)
    const [search, setSearch] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [searchStaff, setSearchStaff] = useState('')

    const takeColumn = (e) => {
        setColumn(e.target.value)
    }

    const handleChangInputSearch = (e) => {
        setSearch(e.target.value)
    }
    
    // Search Staff
    if(searchStaff.length > 0) {
        staffs = staffs.filter(staff => {
            let lowerStaffName = staff.name.toLowerCase()
            let lowerSearchStaff = searchStaff.toLowerCase()
            return lowerStaffName.includes(lowerSearchStaff)
        })
    } 
    const takeInputSearch = (e) => {
        e.preventDefault()
        setSearchStaff(search)
    }

    if(isLoading) {
        return(
            <Loading />
        )
    } else if(errMess) {
        return(
            <div className="text-center mt-5">
            <h4>
                {errMess.error.message}
            </h4>
            <p>Back later !!!</p>

            </div>
        )
    } else {
        if(staffs === undefined) {
             return <div></div>
        } else {
            return (
                <Fragment>
                    <div className="container-fluid mt-3">
                        <div className="title-staffs">
                            <h2>List staffs</h2>
                            <span onClick={() => setShowModal(!showModal)}>
                                <i className="fa fa-plus" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className="line"></div>
                        <div className="colum-search">
                        <div className="show-colume">
                                <label htmlFor="showCol">
                                    Show colum: {' '}
                                    <select id="showCol" onClick={takeColumn}>
                                        <option value={2}>6</option>
                                        <option value={3}>4</option>
                                        <option value={4}>3</option>
                
                                    </select>
                                </label>
                        </div>
                        <div className="search">
                                <form onSubmit={takeInputSearch}>
                                    <input type={'text'} placeholder='Search by name' name="search"
                                    className="me-3 mb-2"
                                    value={search}
                                    onChange={handleChangInputSearch}
                                    />
                                    <button
                                    type={'submit'}
                                    className="btn-search"
                                    >Search</button>
                                </form>
                        </div>
                        </div>
                        {(staffs.length > 0) ? <>
                            <div className="row">
                            {(staffs).map((staff, index) => {
                                return(
                                    <div key={index} className={`col-6 col-sm-3 col-md-${column} mb-5`}>
                                        <Link to={`/staffs/${staff.id}`}>
                                        
                                            <CardStaff name = {staff.name} image = {staff.image}  />
                                        </Link>
                                    </div>
                                )
                            })}
                
                        </div>
                        <p>Click to show more detail a staff !!</p>
                        </>
                        : 
                        <>
                        <div>
                            <h3>No found staff with key search !!</h3>
                        </div>
                        </>}
                        
                        
                    </div>
                    {showModal && <ModalForm toggleModal = {setShowModal}/>}
                </Fragment>
            )

        }
    }
}

export default Staffs
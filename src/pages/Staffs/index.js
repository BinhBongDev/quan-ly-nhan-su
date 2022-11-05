import { useState } from "react"

import { Link } from "react-router-dom"

import CardStaff from "../../components/Card/CardStaff"
import { Loading } from "../../components/Loading";

const Staffs = ({isLoading, staffs, errMess}) => {
 
    const [column, setColumn] = useState(2)
    const [search, setSearch] = useState('')

    const takeColumn = (e) => {
        setColumn(e.target.value)
    }

    const handleChangInputSearch = (e) => {
        setSearch(e.target.value)
    }

    const takeInputSearch = (e) => {
        e.preventDefault()
        console.log(search)
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
                <div className="container-fluid mt-3">
                    <div>
                        <h2>List staffs</h2>
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
                                value={search}
                                onChange={handleChangInputSearch}
                                />
                                <button
                                type={'submit'}
                                >Search</button>
                            </form>
                       </div>
                    </div>
                    
                    <div className="row">
                        {staffs.map((staff, index) => {
                            return(
                                <div key={index} className={`col-6 col-sm-4 col-md-${column} mb-5`}>
                                    <Link to={`/staffs/${staff.id}`}>
                                    
                                        <CardStaff name = {staff.name} image = {staff.image}  />
                                    </Link>
                                </div>
                            )
                        })}
            
                    </div>
                    <p>Click to show more detail a staff !!</p>
                </div>
            )

        }
    }
}

export default Staffs
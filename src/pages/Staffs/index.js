import { useState } from "react"

import CardStaff from "../../components/Card/CardStaff"

const Staffs = () => {
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

    const arr = [1,2,3,4,5,6,7,8,9,10]
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
                        <option value={3}>4</option>
                        <option value={4}>3</option>
                        <option value={2}>6</option>

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
            {arr.map((staff, index) => {
                return(
                    <div key={index} className={`col-6 col-sm-4 col-md-${column} mb-5`}>
                        <CardStaff />
                    </div>
                )
            })}

        </div>
        <p>Click to show more detail a staff !!</p>
    </div>
)
}

export default Staffs
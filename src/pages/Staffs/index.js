import CardStaff from "../../components/Card/CardStaff"

const Staffs = () => {
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
                    <select id="showCol">
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={6}>6</option>

                    </select>
                </label>
           </div>
           <div className="search">
                <input type={'text'} placeholder='Search by name' />
                <button>Search</button>
           </div>
        </div>
        
        <div className="row">
            {arr.map((staff, index) => {
                return(
                    <div key={index} className=" col-6 col-md-3 mb-5">
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
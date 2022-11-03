import CardSalary from "../../components/Card/CardSalary"

const Salary = () => {
    const arr = [1,2,3,4,5,6,7,8,9,10]
    return (
        <div className="container-fluid">
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
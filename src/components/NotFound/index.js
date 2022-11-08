import { Link } from "react-router-dom"

const NotFound = () => {


    return(
        <div className="container notFound">
            <div className="image-notFound mb-3">
                <img alt="notFound-img" src="https://d2rwo0jua2i0o0.cloudfront.net/wp-content/uploads/2022/09/loi-404-not-found-wordpress-la-gi.jpg"
                style={{width: "100%"}}
                />
            </div>
            <h3 className=""><Link to={'/staffs'}>Back to Home. </Link></h3>

        </div>
    )
}


export default NotFound
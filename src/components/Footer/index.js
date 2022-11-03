import { Fragment } from "react"
import { Link } from "react-router-dom"


const Footer = () => {


    return  (
    <Fragment>
            
    <footer className="text-center text-lg-start bg-light">
    
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
        <div className="me-5 d-none d-lg-block">
        <span>Connec me on social networks:</span>
        </div>
    
        <div>
        <a href="/#" className="me-4 text-reset">
            <i className="fa fa-facebook"></i>
        </a>
        <a href="/#" className="me-4 text-reset">
            <i className="fa fa-twitter"></i>
        </a>
        <a href="/#" className="me-4 text-reset">
            <i className="fa fa-google"></i>
        </a>
        <a href="/#" className="me-4 text-reset">
            <i className="fa fa-instagram"></i>
        </a>
        <a href="/#" className="me-4 text-reset">
            <i className="fa fa-linkedin"></i>
        </a>
        <a href="/#" className="me-4 text-reset">
            <i className="fa fa-github"></i>
        </a>
        </div>
    
    </section>
    
    <section className="">
        <div className="container text-center text-md-start mt-5">
        
        <div className="row mt-3">
            
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold mb-4">
                <i className="fa fa-gem me-3"></i>Manage staffs
            </h6>
            <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
            </p>
            </div>
            
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold mb-4">
                My skills
            </h6>
            <p>
                <a href="#!" className="text-reset">HTML/CSS</a>
            </p>
            <p>
                <a href="#!" className="text-reset">Javascript</a>
            </p>
            <p>
                <a href="#!" className="text-reset">ReactJS/NodeJs</a>
            </p>
            </div>
            
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold mb-4">
                Useful links
            </h6>
            <p>
                <Link to="/" className="text-reset">Staffs</Link>
            </p>
            <p>
                <Link to="/dept" className="text-reset">Department</Link>
            </p>
            <p>
                <Link to="/salary" className="text-reset">Salary</Link>
            </p>
            
            </div>
        
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i className="fa fa-home me-3"></i> District 2, HCM City</p>
            <p>
                <i className="fa fa-envelope me-3"></i>
                <a href="mailto:hoangvanbinht37@gmai.com">hoangvanbinht37@gmail.com</a>
            </p>
            <p><i className="fa fa-phone me-3"></i> <a href="tel:0388149657">0388149657</a></p>
            </div>
        
        </div>
        
        </div>
    </section>
    
    <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="mailto:hoangvanbinht37@gmai.com"> hoangvanbinht37@gmail.com</a>
    </div>
    
    </footer>


    </Fragment>
    )
}

export default Footer
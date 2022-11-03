import { Col, Row } from "reactstrap"
import CardDept from "../../components/Card/CardDept"

const Department = () => {
    return (
        <div className="container-fluid mt-3">
            <Row>
                <Col sm='3'>
                    <CardDept />
                </Col>
                <Col sm='3'>
                    <CardDept />
                </Col>
                <Col sm='3'>
                    <CardDept />
                </Col>
                <Col sm='3'>
                    <CardDept />
                </Col>
                <Col sm='3'>
                    <CardDept />
                </Col>
                <Col sm='3'>
                    <CardDept />
                </Col>
                <Col sm='3'>
                    <CardDept />
                </Col>
            </Row>
        </div>
    )
    }
    
    export default Department
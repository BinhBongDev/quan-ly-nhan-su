import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, FormGroup, Label, Input, Col } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';

function ModalForm({toggleModal}) {
  const [modal, setModal] = useState(true);
  const initStaff = {
    id: uuidv4(),
    name: '',
    doB:'',
    startDate:'',
    image: "/assets/images/alberto.png",
    overTime: 1,
    annualLeave: 1,
    salaryScale: 1.2,
    departmentId: 'Dept01'
  }
  const [staff, setStaff] = useState(initStaff)

  const toggle = () => {
    setModal(!modal)
    toggleModal(false)

  };
  const handleChangeValue = (e) => {
    const name = e.target.name
    const value = e.target.value
    const newStaff = {
        ...staff,
        [name]: value
    }

    setStaff(newStaff)
  }

  const submitForm = (e) => {
    e.preventDefault()
    console.log(staff)
    toggle()
  }
  const {name, doB, startDate, salaryScale, annualLeave, overTime} = staff
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Staff</ModalHeader>
        <Form onSubmit={submitForm}>
            <ModalBody>
                <FormGroup>
                    <Label for="name">
                        Name
                    </Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={handleChangeValue}
                        />
                </FormGroup>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="doB">
                                Birthday
                            </Label>
                            <Input
                                id="doB"
                                name="doB"
                                type="date"
                                value={doB}
                                onChange={handleChangeValue}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="startDate">
                            Start Date
                            </Label>
                            <Input
                            id="startDate"
                            name="startDate"
                            type="date"
                            value={startDate}
                            onChange={handleChangeValue}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label
                    for="departmentId"
                    sm={2}
                    >
                    Departments
                    </Label>
                    <Col>
                    <Input
                        id="departmentId"
                        name="departmentId"
                        type="select"
                        onChange={handleChangeValue}
                    >
                        <option value={'Dept01'}>
                        Sale
                        </option>
                        <option value={'Dept02'}>
                        HR
                        </option>
                        <option value={'Dept03'}>
                        Marketing
                        </option>
                        <option value={'Dept04'}>
                        IT
                        </option>
                        <option value={'Dept05'}>
                        Finance
                        </option>
                    </Input>
                    </Col>
                </FormGroup>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="overTime">
                            Over Time
                            </Label>
                            <Input
                            id="overTime"
                            name="overTime"
                            placeholder="examp: 1, 1.5, ..."
                            type='number'
                            value={overTime}
                            onChange={handleChangeValue}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="salaryScale">
                            salary Scale
                            </Label>
                            <Input
                            id="salaryScale"
                            name="salaryScale"
                            placeholder="examp: 1, 1.5, ..."
                            type='number'
                            value={salaryScale}
                            onChange={handleChangeValue}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                            <FormGroup>
                                <Label for="annualLeave">
                                Annual Leave
                                </Label>
                                <Input
                                id="annualLeave"
                                name="annualLeave"
                                placeholder=""
                                type='number'
                                value={annualLeave}
                                onChange={handleChangeValue}
                                />
                            </FormGroup>
                    </Col>
                </Row>
            <ModalFooter>
            <Button type='submit' color="primary">
                Create
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
                Cancel
            </Button>
            </ModalFooter>
            </ModalBody>
        </Form>
      </Modal>
    </div>
  );
}

export default ModalForm;
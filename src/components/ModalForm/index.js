import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';
import {useDispatch} from 'react-redux'

import {postStaff, editStaff} from '../../pages/Staffs/staffsSlice'
import { idToDept } from '../../utils/configDept';
import dateFormat from 'dateformat';

function ModalForm({toggleModal, idStaff}) {
    const initStaff = {
      id:idStaff?.id || uuidv4(),
      name:idStaff?.name || '',
      doB: (idStaff && dateFormat(idStaff?.doB, "yyyy-mm-dd")) || '',
      startDate: (idStaff && dateFormat(idStaff.startDate, "yyyy-mm-dd")) || '',
      image: "/assets/images/alberto.png",
      overTime: idStaff?.overTime || 1,
      annualLeave: idStaff?.annualLeave || 1,
      salaryScale: idStaff?.salaryScale     || 1.2,
      departmentId: idStaff?.departmentId || 'Dept01'
    }
    const touched = {
        name: false,
        doB: false,
        startDate: false,
        annualLeave: false,
        salaryScale: false,
        overTime: false
    }
    const [focus, setFocus] = useState(touched)
    const [modal, setModal] = useState(true);
    const [staff, setStaff] = useState(initStaff)
    const [fullInput, setFullInput] = useState(false)

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

  const dispatch = useDispatch()

  const submitForm = async(e) => {
    e.preventDefault()
    if(name.length < 3 || name.length > 20 || !doB || !startDate || !overTime || !annualLeave || !salaryScale) {
       return setFullInput(true)
    } else {
        if(idStaff) {
            dispatch(editStaff(staff))
            
        } else {
            dispatch(postStaff(staff))
        }
        toggle()

    }
  }

  const handleBlur = (field) => {
    setFocus({
        ...focus,
        [field]: true
    })
  }
  
//   validate 
  const validate = (name, doB, startDate, overTime, salaryScale, annualLeave) => {
    const errors = {
        name: '',
        doB: '',
        startDate: '',
        overTime: '',
        salaryScale: '',
        annualLeave: ''
    }

   
    if(focus.name && name.length < 3)
        errors.name = 'Min leng is > 3 characters.'
    else if(focus.name && name.length > 20)
        errors.name = "Max leng is <= 20 characters."
    else if(fullInput & !name) {
        errors.name = 'Fill input'
    }

    if (focus.doB && !doB)
        errors.doB = 'input required. '
    else if(fullInput && !doB) {
        errors.doB = 'Fill input'
    }

    if (focus.startDate && !startDate)
        errors.startDate = 'input required. '
    else if(fullInput && !startDate) {
        errors.startDate = 'Fill input'
    }

    if (focus.overTime && !overTime)
        errors.overTime = 'input required. '
    
    if (focus.salaryScale && !salaryScale)
        errors.salaryScale = 'input required. '

    if (focus.annualLeave && !annualLeave)
        errors.annualLeave = 'input required. '


    return errors
  }

  const {name, doB, startDate, salaryScale, annualLeave, overTime, departmentId} = staff
//   erros
  const errors = validate(name, doB, startDate, overTime, salaryScale, annualLeave)
  
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{idStaff ? 'Edit Staff' : 'Add Staff'}</ModalHeader>
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
                        onBlur={() =>handleBlur('name')}
                        valid = {errors.name === ''}
                        invalid = {errors.name !== ''}
                        />
                        <FormFeedback>
                            {errors.name}
                        </FormFeedback>
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
                                onBlur={() => handleBlur('doB')}
                                valid = {errors.doB === ''}
                                invalid = {errors.doB !== ''}
                                />
                                <FormFeedback>
                                    {errors.doB}
                                </FormFeedback>
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
                            onBlur={() => handleBlur('startDate')}
                            valid = {errors.startDate === ''}
                            invalid = {errors.startDate !== ''}
                            />
                            <FormFeedback>
                                {errors.startDate}
                            </FormFeedback>
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
                        {idStaff?.id && <option value={departmentId}>{idToDept(departmentId)}</option>}
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
                            step={0.5}
                            value={overTime}
                            onChange={handleChangeValue}
                            onBlur={() => handleBlur('overTime')}
                            valid = {errors.overTime === ''}
                            invalid = {errors.overTime !== ''}
                            />
                            <FormFeedback>
                                {errors.overTime}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="salaryScale">
                            Salary Scale
                            </Label>
                            <Input
                            id="salaryScale"
                            name="salaryScale"
                            placeholder="examp: 1, 1.5, ..."
                            type='number'
                            value={salaryScale}
                            step={0.01}
                            onChange={handleChangeValue}
                            onBlur={() => handleBlur('salaryScale')}
                            valid = {errors.salaryScale === ''}
                            invalid = {errors.salaryScale !== ''}
                            />
                            <FormFeedback>
                                {errors.salaryScale}
                            </FormFeedback>
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
                                min={1}
                                max={12}
                                step={0.5}
                                onChange={handleChangeValue}
                                onBlur={() => handleBlur('annualLeave')}
                                valid = {errors.annualLeave === ''}
                                invalid = {errors.annualLeave !== ''}
                                />
                                <FormFeedback>
                                    {errors.annualLeave}
                                </FormFeedback>
                            </FormGroup>
                    </Col>
                </Row>
            <ModalFooter>
            <Button type='submit' color={idStaff ? "warning" :"primary"}>
                {idStaff ? "Save" : 'Create'}
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
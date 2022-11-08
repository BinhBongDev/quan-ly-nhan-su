import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';


function Sort({setSortStaff}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sort, setSort] = useState('Sort')


  const handleValue = (sortFiled) => {

    let nameSort = sortFiled === 1 ? "Name A-Z" : sortFiled === 2 ? 'Name Z-A'
    : sortFiled === 3 ? 'Salary A-Z' : 'Salary Z-A'

    setSort(nameSort)
    setSortStaff(sortFiled)
  }

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>{sort}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => handleValue(1)}>Name A-Z</DropdownItem>
          <DropdownItem onClick={() => handleValue(2)}>Name Z-A</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={() => handleValue(3)}>Salary A-Z</DropdownItem>
          <DropdownItem onClick={() => handleValue(4)}>Salary Z-A</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default Sort;
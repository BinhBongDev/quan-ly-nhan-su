export const idToDept = (idDept) => {
    let nameOfDept = idDept === 'Dept01' ? 'Sale'
    :idDept === 'Dept02' ? 'HR'
    :idDept === 'Dept03' ? 'Marketing'
    :idDept === 'Dept04' ? 'IT' : 'Finance'

    return nameOfDept
}

export const deptToId = (deptId) => {
    let deptToId = deptId === 'Sale' ? 'Dept01'
    :deptId === 'HR' ? 'Dept02'
    :deptId === 'Marketing' ? 'Dept03'
    :deptId === 'IT' ? 'Dept04' : 'Dept05'

    return deptToId
}
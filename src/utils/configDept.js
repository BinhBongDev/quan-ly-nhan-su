export const idToDept = (idDept) => {
    let nameOfDept = idDept === 'Dept01' ? 'sale'
    :idDept === 'Dept02' ? 'hr'
    :idDept === 'Dept03' ? 'marketing'
    :idDept === 'Dept04' ? 'it' : 'finance'

    return nameOfDept
}

export const deptToId = (deptId) => {
    let deptToId = deptId === 'Sale' ? 'Dept01'
    :deptId === 'Dept02' ? 'hr'
    :deptId === 'Dept03' ? 'marketing'
    :deptId === 'Dept04' ? 'it' : 'finance'

    return deptToId
}
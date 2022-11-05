export const idToDept = (idDept) => {
    let nameOfDept = idDept === 'Dept01' ? 'sale'
    :idDept === 'Dept02' ? 'hr'
    :idDept === 'Dept03' ? 'marketing'
    :idDept === 'Dept04' ? 'it' : 'finance'

    return nameOfDept
}
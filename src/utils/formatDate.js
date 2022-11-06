import dateFormat from 'dateformat'

export const formatToNorma = (date) => {
    const formatDateToNormal = dateFormat(date, 'dd/mm/yyyy')
    return formatDateToNormal
}
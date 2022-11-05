import dateFormat from 'dateformat'

export const formatToNorma = (date) => {
    const formatDateToNormal = dateFormat(date, 'mm/dd/yyyy')
    return formatDateToNormal
}
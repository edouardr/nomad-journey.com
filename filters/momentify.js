import moment from 'moment'

export const momentify = (date, format, locale) => {
  moment.locale(locale)
  return moment(date).format(format || 'DD MMM YYYY')
}

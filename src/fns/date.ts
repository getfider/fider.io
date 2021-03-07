const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const weekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const getMonthName = (date: Date): string => {
  return monthNames[date.getMonth()]
}

export const formatDate = (date: Date, format: 'short' | 'full' = 'short'): string => {
  if (format === 'short') {
    return `${getMonthName(date).substring(0, 3)} ${date.getDate()}, ${date.getFullYear()}`
  }

  return `${weekNames[date.getDay()]}, ${getMonthName(date)} ${date.getDate()}, ${date.getFullYear()}`
}

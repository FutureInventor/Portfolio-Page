export function getDate() {
  const date = new Date()
  const year = String(date.getFullYear())
  let month = String(date.getMonth() + 1)
  let day = String(date.getDate())

  if(day.length === 1)
    day = '0'+ day

  if(month.length === 1)
    month = '0'+ month

  return `${day}.${month}.${year}`
}
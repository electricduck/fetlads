export const random = (items) => {
  return items[Math.floor((Math.random()*Math.random()) * items.length)]
}
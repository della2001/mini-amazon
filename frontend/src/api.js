import axios from 'axios'

// const isDev = false

// export const getRealData = () => {
//   // const url = "http://localhost:5000/registration"
//   const allitemsurl = "http://localhost:5000/items"

//   return axios.get(allitemsurl).then(response => response.json())
// }

// export const getFakeData = () => new Promise((resolve, reject) => {
//   resolve([
//     {
//       quote: "Chase Your Dreams",
//       max: 100,
//       min: 0,
//       count: 50,
//     },
//   ])
// })

// export default isDev ? getFakeData : getRealData

export default axios.create({ baseUrl: 'http://localhost:5000' })

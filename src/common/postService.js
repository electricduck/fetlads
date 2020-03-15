import axios from "axios"

export const getPost = async (id, slug) => {
  let posts = await getPosts()
  
  return new Promise((resolve, reject) => {
    var idAsInt = Number(id)
    var post = posts.find(p => p.id == idAsInt)

    if (post !== undefined) {
      if (slug === post.slug) {
        resolve(post)
      } else {
        reject('Incorrect slug')
      }
    } else {
      reject('Not found')
    }
  })
}

export const getPosts = async (amount, page) => {
  amount = amount || 0
  page = page || 0

  return axios.get("/data/posts.min.json")
    .then((response) => {
      if(amount === 0 && page === 0) {
        return response.data
      }
    }).catch((err) => {
      throw err
    })
}
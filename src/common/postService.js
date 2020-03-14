import axios from "axios"

export const getPost = async (id, slug) => {
  await getPosts().then((response) => {
    return new Promise(resolve => {
      var posts = response.data
      
      var idAsInt = Number(id)
      var post = posts.find(p => p.id === idAsInt)

      if (post !== undefined) {
        if (slug === post.slug) {
          resolve(post)
        } else {
          throw "Incorrect slug"
        }
      } else {
        throw "Not found"
      }
    })
  })
}

export const getPosts = async () => {
  return axios.get("/data/posts.json")
    .then((response) => {
      return response
    }).catch((err) => {
      console.log(err)
    })
}
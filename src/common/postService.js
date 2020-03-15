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

export const getPosts = async (page, amount, sortByDate) => {
  amount = amount || 0
  page = page || 0
  sortByDate = sortByDate || false

  return axios.get("/data/posts.min.json")
    .then((response) => {
      var result

      if (sortByDate) {
        result = response.data.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        });
      }

      if (amount === 0 && page === 0) {
        return result
      } else {
        var start = 0 + (amount * page)
        var end = start + amount
        console.log(result.slice(start, end))
        return result.slice(start, end)
      }
    }).catch((err) => {
      throw err
    })
}
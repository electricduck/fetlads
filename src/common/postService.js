import axios from "axios"

export const getPost = async (id, slug, useCache) => {
  let posts = await getPosts(0, 0, !useCache)

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

export const getPosts = async (page, amount, updateCache, sortByDate) => {
  amount = amount || 0
  page = page || 0
  sortByDate = sortByDate || false
  updateCache = updateCache || false

  var postsCache = sessionStorage.getItem('fetlads:cache:posts')
  var result

  if(updateCache || postsCache == null) {
    await axios.get("/data/posts.min.json")
      .then((response) => {
        result = response.data
        sessionStorage.setItem('fetlads:cache:posts', JSON.stringify(result))
      }).catch((err) => {
        throw err
      })
  } else {
    result = JSON.parse(sessionStorage.getItem('fetlads:cache:posts'))
  }

  if(sortByDate) {
    result = result.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date)
    })
  }

  if (!(amount === 0 && page === 0)) {
    var start = 0 + (amount * page)
    var end = start + amount
    result = result.slice(start, end)
  }

  return result
}

export const getRandomPost = async () => {
  let posts = await getPosts()
  var randomPost = posts[Math.floor(Math.random() * posts.length)]
  return randomPost
}

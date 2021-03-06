import axios from "axios"
import { random } from "@/common/utilities"

export const getPost = async (id, slug, useCache, populateNeighbourItems) => {
  let posts = await getPosts('posts', !useCache, 0, 0, true)

  return new Promise((resolve, reject) => {
    var idAsInt = Number(id)
    var post = posts.find(p => p.id == idAsInt)

    if (populateNeighbourItems) {
      var currentPostIndex = posts.indexOf(post)
      var nextPostIndex = (currentPostIndex + 1) % posts.length
      var previousPostIndex = (currentPostIndex - 1) % posts.length

      window.nextPost = (nextPostIndex !== -1) ? posts[(currentPostIndex + 1) % posts.length] : null
      window.previousPost = (previousPostIndex !== -1) ? posts[(currentPostIndex - 1) % posts.length] : null
    }

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

export const getPosts = async (key, updateCache, page, amount, sortByDate) => {
  amount = amount || 0
  page = page || 0
  sortByDate = sortByDate || false
  updateCache = updateCache || false

  var postsCache = sessionStorage.getItem(`fetlads:cache:${key}`)
  var result

  if (updateCache || postsCache == null) {
    await axios.get(`/data/${key}.min.json`)
      .then((response) => {
        result = response.data
        sessionStorage.setItem(`fetlads:cache:${key}`, JSON.stringify(result))
      }).catch((err) => {
        throw err
      })
  } else {
    result = JSON.parse(sessionStorage.getItem(`fetlads:cache:${key}`))
  }

  if (sortByDate) {
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
  let posts = await getPosts('posts')
  var randomPost = random(posts)
  return randomPost
}

export const resetPosts = (key) => {
  sessionStorage.removeItem(`fetlads:cache:${key}`)
}
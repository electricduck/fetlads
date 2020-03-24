import { getPosts } from "@/common/postService"
import { random } from "@/common/utilities"

export const getRandomGif = async (useCache) => {
  let gifs = await getPosts('gif', !useCache)
  var randomGif = random(gifs)
  return randomGif
}
const router = require("express").Router()
const Post = require("../posts")

router.post("/", async function(req, res, next) {
  const { title, content } = req.body
  try {
    const newPost = await Post.create({ title, content })
    res.json(newPost)
  } catch (err) {
    next(err)
  }
})

//update /edit post
router.put("/:postId", function(req, res, next) {
  /* etc */
})
//delete post
router.delete("/:postId", function(req, res, next) {
  /* etc */
})

module.exports = router

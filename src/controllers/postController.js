const postModel = require("../models/postModel")

const postController = {
    index: (req, res) => {
        const posts = postModel.getAllPosts()
        res.render("index", { posts })
    },
    create: (req, res) => {
        res.render("create")
    },
    save: (req, res) => {

        let { title, content } = req.body

        const post = postModel.createPosts(title, content)
        postModel.savePost(post)
        res.redirect("/")
    },
    edit: (req, res) => {
        const posts = postModel.getAllPosts()
        const post = posts.find((item) => item.id === item.id)
        res.render("edit", { post })
    },
    update: (req, res) => {
        const id = req.params.id
        const { title, content } = req.body
        const newProp = { title, content }
        postModel.updatePost(id, newProp)
        res.redirect("/")
    },
    delete: (req, res) => {
        const id = req.params.id
        postModel.deletePost(id)
        res.redirect("/")
    }
}

module.exports = postController
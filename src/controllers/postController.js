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
        const id = req.params.id
        const post = postModel.getPostById(id)
        res.render("edit", { post })
    },
    update: (req, res) => {
        const id = req.params.id
        const { title, content } = req.body
        postModel.updatePost(id, { title, content })
        res.redirect("/")
    },
    delete: (req, res) => {
        const id = req.params.id
        postModel.deletePost(id)
        res.redirect("/")
    }
}

module.exports = postController
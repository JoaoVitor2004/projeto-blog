let posts = []

const postModel = {
    getAllPosts: () => {
        return posts
    },
    createPosts: (title, content) => {
        const post = {
            id: String(Math.random() * 999),
            title: title,
            content: content,
            createdAt: new Date().toDateString()
        }

        return post
    },
    updatePost: (id, update) => {
        const findIndex = posts.findIndex((item) => item.id === id)
        posts[findIndex] = { ...posts[findIndex], ...update }
    },
    savePost: (post) => {
        posts.push(post)
    },
    deletePost: (id) => {
        posts = posts.filter((item) => item.id !== id)
    }
}

module.exports = postModel
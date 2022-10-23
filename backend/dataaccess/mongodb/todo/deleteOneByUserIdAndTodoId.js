const TodoModel = require('../../../database/mongodb/schemas/todoSchema')

const deleteOneByUserIdAndTodoId = async (credentials) => {
    try {
        const result = await TodoModel.deleteOne({
            _id: credentials.todoId,
            userId: credentials.userId,
        })
        return Promise.resolve(result)
    } catch(er) {
        return Promise.reject(er)
    }
}

module.exports = deleteOneByUserIdAndTodoId
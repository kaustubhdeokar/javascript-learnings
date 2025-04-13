const zod = require('zod');

const createTodoSchema = zod.object({
    title: zod.string(),
    description: zod.string()
})

const idTodoSchema = zod.object({
    id: zod.string()
})

const updateTodoSchema = zod.object({
    id: zod.string(),
    title: zod.string(),
    description: zod.string(),
    completed: zod.boolean()
})

const completeTodoSchema = zod.object({
    id: zod.string(),
    completed: zod.string()
})

module.exports = {
    createTodoSchema: createTodoSchema,
    idTodoSchema: idTodoSchema,
    updateTodoSchema: updateTodoSchema,
    completeTodoSchema: completeTodoSchema
}
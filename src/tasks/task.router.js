const router = require("express").Router()
const {getAll,getByd,getCreateTask,getdeletetask,getPutTask } = require("./task.http")

router.route("/tasks")
.get(getAll)
.post(getCreateTask)

router.route("/tasks/:id")
.get(getByd)
.delete(getdeletetask)
.put(getPutTask)

module.exports={
   router
}
const express = require('express');
const app = express();
const cors = require('cors');
const TodosController = require('./src/controllers/todos.controller.js');


app.use(express.json());
app.use(cors());

// TODOS ROUTES

app.get('/todos', TodosController.getTodos);

app.get('/todos/:id', TodosController.getTodo);

app.post('/todos', TodosController.createTodo);

app.get('/check', TodosController.check);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

_todos = [
    { 
      id: 1, 
      title: 'Vindo do BE', 
      description: 'Testando uma integracao frontend x backend', 
      completed: false 
    },
    { 
        id: 2, 
        title: 'Vindo do BE 2', 
        description: 'aaaaaaaaaa', 
        completed: true 
      },
      { 
        id: 3, 
        title: 'Outro nome', 
        description: 'Outro tipo de nome', 
        completed: true 
      }
];

class TodosController {

    static getTodos = async (req, res) => {
        res.send(_todos);
    }

    static getTodo = async (req, res) => {
        const id = req.params.id;
        res.send(_todos.filter(t => t.id == id));
    }

    static createTodo = async (req, res) => {
        _todos.push({
            ...req.body,
            id: _todos.length + 1,
        });

        res.status(201).send();
    }

    static check = async (req, res) => {
        res.status(201).send();
    }
}

module.exports = TodosController;
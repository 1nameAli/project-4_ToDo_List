import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoTasks = await inquirer.prompt([
        {
            name: "task1",
            type: "list",
            message: "What do you want to do with your todo list ?",
            choices: ["Add a todo", "pop a todo", "Finish"],
        },
    ]);
    if (todoTasks.task1 === "Add a todo") {
        let todoTasks2 = await inquirer.prompt([
            {
                name: "task2",
                type: "input",
                message: "Enter a todo :",
            },
        ]);
        todos.push(todoTasks2.task2);
    }
    else if (todoTasks.task1 === "pop a todo") {
        if (todos.length === 0) {
            console.log("There is no todo to pop from the list");
        }
        else {
            let taskIndexed = await inquirer.prompt([
                {
                    name: "taskIndex",
                    type: "number",
                    message: "Enter the index number you want to pop from the list :",
                    validate: (input) => {
                        return input >= 0 && input < todos.length
                            ? true
                            : "Enter a valid index !";
                    },
                },
            ]);
            let poppedTodo = todos.splice(taskIndexed.taskIndex, 1);
            console.log(`Removed index ${poppedTodo[0]}`);
        }
    }
    else if (todoTasks.task1 === "Finish") {
        break;
    }
    console.log("Your todo list");
    console.log(todos);
}

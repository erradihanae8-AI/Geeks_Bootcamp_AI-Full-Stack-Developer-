
import { TodoList } from "./todo.js";

// Create an instance
const myTodoList = new TodoList();

// Add tasks
myTodoList.addTask("Learn JavaScript");
myTodoList.addTask("Practice Node.js");
myTodoList.addTask("Build a Todo App");
myTodoList.addTask("Learn React");

// Mark tasks as complete
myTodoList.markComplete("Learn JavaScript");
myTodoList.markComplete("Build a Todo App");

// Display all tasks
myTodoList.listTasks();

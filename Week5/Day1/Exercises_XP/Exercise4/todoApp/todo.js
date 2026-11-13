
export class TodoList {

    constructor() {
        this.tasks = [];
    }

    // Add a new task
    addTask(task) {
        this.tasks.push({
            name: task,
            completed: false
        });

        console.log(`Task "${task}" added successfully!`);
    }

    // Mark a task as complete
    markComplete(taskName) {
        const task = this.tasks.find(
            task => task.name === taskName
        );

        if (task) {
            task.completed = true;
            console.log(`Task "${taskName}" completed!`);
        } else {
            console.log("Task not found!");
        }
    }

    // Display all tasks
    listTasks() {
        console.log("\n--- MY TODO LIST ---");

        this.tasks.forEach((task, index) => {
            const status = task.completed ? "Completed" : "Pending";

            console.log(`${index + 1}. ${task.name} - ${status}`);
        });
    }
}

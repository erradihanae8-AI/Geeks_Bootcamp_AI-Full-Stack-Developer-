
const express = require("express");
const app = express();


app.use(express.json());


const todosRouter = require("./routes/todos");


app.use("/todos", todosRouter);

// Start server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const customerRoutes = require("./routes/customer");
const projectRoutes = require("./routes/project");

app.use(express.json());

app.use(cors());

app.use("/customers", customerRoutes);
app.use("/projects", projectRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

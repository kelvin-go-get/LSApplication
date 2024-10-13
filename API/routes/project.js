const express = require("express");
const router = express.Router();
const Project = require("../models/project");

// Create project
router.post("/createProject", async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all projects
router.get("/getProjects", async (req, res) => {
  const projects = await Project.findAll();
  res.json(projects);
});

module.exports = router;

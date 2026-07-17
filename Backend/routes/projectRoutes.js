const express = require("express");

const router = express.Router();

const {
  getAllProjects,
  createProject,
  getProjectBySlug,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

const protectAdmin = require("../middleware/protectAdmin");

const upload = require("../middleware/upload");



router.get("/", getAllProjects);

router.get("/:slug", getProjectBySlug);

router.post(
  "/",
  protectAdmin,
  upload.single("image"),
  createProject
);

router.put(
  "/:id",
  protectAdmin,
  upload.single("image"),
  updateProject
);

router.delete("/:id", protectAdmin, deleteProject);

module.exports = router;
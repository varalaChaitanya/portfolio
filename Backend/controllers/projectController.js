const Project = require("../models/Project");
const cloudinary = require("../config/cloudinary");
/*
    GET /api/projects
*/

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find()
      .sort({
        displayOrder: 1,
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};




/*
    POST /api/projects
*/

const createProject = async (req, res) => {
  try {
    const {
      title,
      slug,
      description,
      technologies,
      githubUrl,
      liveUrl,
      displayOrder,
      featured,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Project image is required.",
      });
    }

    const newProject = await Project.create({
      title,
      slug,
      description,
      technologies,
      githubUrl,
      liveUrl,
      image: {
           url: req.file.path,
           publicId: req.file.filename,
        },
      displayOrder,
      featured,
    });

    return res.status(201).json({
      success: true,
      message: "Project created successfully.",
      data: newProject,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


/*
    GET /api/projects/:slug
*/

const getProjectBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const project = await Project.findOne({ slug });

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


/*
    PUT /api/projects/:id
*/

const updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found.",
      });
    }

    // New image uploaded
    if (req.file) {
      // Delete old Cloudinary image
      await cloudinary.uploader.destroy(
        project.image.publicId
      );

      req.body.image = {
        url: req.file.path,
        publicId: req.file.filename,
      };
    }

    const updatedProject =
      await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    return res.status(200).json({
      success: true,
      message: "Project updated successfully.",
      data: updatedProject,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
    DELETE /api/projects/:id
*/

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found.",
      });
    }

    await cloudinary.uploader.destroy(
  project.image.publicId
);

await project.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Project deleted successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllProjects,
  createProject,
  getProjectBySlug,
  updateProject,
  deleteProject,
};


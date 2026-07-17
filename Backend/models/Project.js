const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
    },

    slug: {
  type: String,
  required: true,
  unique: true,
  lowercase: true,
  trim: true,
  index: true,
},

    description: {
      type: String,
      required: [true, "Project description is required"],
      trim: true,
    },

    technologies: {
      type: [String],
      required: true,
      default: [],
    },

    githubUrl: {
      type: String,
      required: true,
      trim: true,
    },

    liveUrl: {
      type: String,
      default: "",
      trim: true,
    },

      image: {
    url: {
      type: String,
      required: true,
    },
    publicId: {
      type: String,
      required: true,
    },
  },
    displayOrder: {
    type: Number,
    default: 0,
   },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
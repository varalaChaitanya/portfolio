import { useState } from "react";

const ProjectForm = ({
  initialValues,
  onSubmit,
  loading,
}) => {
  const [formData, setFormData] = useState(
    initialValues
  );

  const [technology, setTechnology] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : value,
    }));
  };

  const handleImage = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const addTechnology = () => {
    if (!technology.trim()) return;

    if (
      formData.technologies.includes(
        technology.trim()
      )
    )
      return;

    setFormData((prev) => ({
      ...prev,
      technologies: [
        ...prev.technologies,
        technology.trim(),
      ],
    }));

    setTechnology("");
  };

  const removeTechnology = (tech) => {
    setFormData((prev) => ({
      ...prev,
      technologies:
        prev.technologies.filter(
          (item) => item !== tech
        ),
    }));
  };

  const submitHandler = (e) => {
  e.preventDefault();

  const data = new FormData();

  data.append("title", formData.title);
  data.append("slug", formData.slug);
  data.append("description", formData.description);
  data.append("githubUrl", formData.githubUrl);
  data.append("liveUrl", formData.liveUrl);
  data.append("displayOrder", formData.displayOrder);
  data.append("featured", formData.featured);

  formData.technologies.forEach((tech) => {
    data.append("technologies", tech);
  });

  if (formData.image instanceof File) {
    data.append("image", formData.image);
  }

  onSubmit(data);
};

  return (
    <form
      onSubmit={submitHandler}
      className="space-y-6"
    >
     
      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
        className="w-full"
      />

      <input
        type="text"
        name="title"
        placeholder="Project Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full rounded-xl border p-4"
      />

      <input
        type="text"
        name="slug"
        placeholder="Slug"
        value={formData.slug}
        onChange={handleChange}
        className="w-full rounded-xl border p-4"
      />

      <textarea
        rows="4"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full rounded-xl border p-4"
      />

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Technology"
          value={technology}
          onChange={(e) =>
            setTechnology(e.target.value)
          }
          className="flex-1 rounded-xl border p-4"
        />

        <button
          type="button"
          onClick={addTechnology}
          className="
            rounded-xl
            bg-blue-600
            px-6
            text-white
          "
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        {formData.technologies.map((tech) => (
          <button
            key={tech}
            type="button"
            onClick={() =>
              removeTechnology(tech)
            }
            className="
              rounded-full
              bg-blue-100
              px-4
              py-2
              text-blue-700
            "
          >
            {tech} ✕
          </button>
        ))}
      </div>

      <input
        type="url"
        name="githubUrl"
        placeholder="GitHub URL"
        value={formData.githubUrl}
        onChange={handleChange}
        className="w-full rounded-xl border p-4"
      />

      <input
        type="url"
        name="liveUrl"
        placeholder="Live Demo URL"
        value={formData.liveUrl}
        onChange={handleChange}
        className="w-full rounded-xl border p-4"
      />

      <input
        type="number"
        name="displayOrder"
        placeholder="Display Order"
        value={formData.displayOrder}
        onChange={handleChange}
        className="w-full rounded-xl border p-4"
      />

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          name="featured"
          checked={formData.featured}
          onChange={handleChange}
        />

        Featured Project
      </label>

      <button
        disabled={loading}
        className="
          w-full
          rounded-xl
          bg-blue-600
          py-4
          font-semibold
          text-white
        "
      >
        {loading
          ? "Saving..."
          : "Save Project"}
      </button>
    </form>
  );
};

export default ProjectForm;

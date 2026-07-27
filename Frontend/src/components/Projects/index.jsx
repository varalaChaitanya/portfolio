import { useState } from "react";
import { Element } from "react-scroll";

import useProjects from "../../hooks/useProjects";

import ProjectHeader from "./ProjectHeader";
import ProjectGrid from "./ProjectGrid";
import ProjectSkeleton from "./ProjectSkeleton";
import EmptyProjects from "./EmptyProjects";
import ProjectModal from "./ProjectModal";

import {
  LoginModal,
  AdminToolbar,
  AddProjectModal,
} from "../Admin";

import { useAdmin } from "../../context/AdminContext";

const Projects = () => {
  const {
    projects,
    loading,
    error,
    refreshProjects,
  } = useProjects();

  const { isAdmin } = useAdmin();

  const [showLogin, setShowLogin] = useState(false);

  const [showAddModal, setShowAddModal] =
    useState(false);

    const [showProjectModal, setShowProjectModal] =
  useState(false);

  const [selectedProject, setSelectedProject] = useState(null);


  const handleProjectClick = (project) => {
  setSelectedProject(project);

  setShowProjectModal(true);
};

  return (
    <Element name="projects">
      <section
        className="
          mx-auto
          max-w-7xl
          px-6
          py-28
        "
      >
        <ProjectHeader />

        {/* Admin Controls */}

        {isAdmin ? (
          <AdminToolbar
            onAdd={() => setShowAddModal(true)}
          />
        ) : (
          <div className="mb-10 flex justify-end">
            <button
              onClick={() => setShowLogin(true)}
              className="
                rounded-full
                bg-blue-600
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-blue-700
              "
            >
              🔒 Admin Access
            </button>
          </div>
        )}

        {/* Loading */}

        {loading && (
  <div
    className="
      grid
      gap-10

      md:grid-cols-2

      xl:grid-cols-3
    "
  >
    {[1, 2, 3].map((item) => (
      <ProjectSkeleton key={item} />
    ))}
  </div>
)}
        {/* Error */}

        {error && (
          <h2 className="text-center text-red-500">
            {error}
          </h2>
        )}

        {/* Projects */}

        {!loading &&
          !error &&
          projects.length > 0 && (
            <ProjectGrid
  projects={projects}

  onView={handleProjectClick}
/>
          )}

        {/* Empty */}

        {!loading &&
          !error &&
          projects.length === 0 && (
            <EmptyProjects />
          )}

        {/* Login Modal */}

        <LoginModal
          isOpen={showLogin}
          onClose={() => setShowLogin(false)}
        />

        {/* Add Project Modal */}

        <AddProjectModal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          refreshProjects={refreshProjects}
        />
        <ProjectModal
  isOpen={showProjectModal}
  onClose={() => setShowProjectModal(false)}
  project={selectedProject}
/>
      </section>
    </Element>
  );
};

export default Projects;

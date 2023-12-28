import React from 'react';

const ProjectCard = ({ title, description, technologies, githubLink, demoLink, imageUrl }) => {
  return (
    <div className="max-w-3x mx-auto bg-white rounded-xl overflow-hidden shadow-lg p-6 mb-8">
      <img
        src={imageUrl}
        alt={`${title} Thumbnail`}
        className="object-cover w-full h-48 mb-4 rounded-md"
      />
      <h2 className="text-3xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-gray-700 mb-2">
        <strong>Technologies:</strong> {technologies}
      </p>
      <div className="flex space-x-4 mb-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

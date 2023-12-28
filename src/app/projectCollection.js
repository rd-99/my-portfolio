import React from 'react';
import ProjectCard from './projectCard';
const MyProjects = () => {
    const devBookURL = "dev_book.png"
  const projects = [
    {
      title: 'Dev-Book',
      description: 'Online JavaScript bundler and compiler',
      technologies: 'React,TypeScript,',
      githubLink: 'https://github.com/rd-99/dev__book',
      demoLink: 'https://rd-99.github.io/dev__book/',
      imageUrl : devBookURL
    },
    {
      title: '',
      description: 'Description of Project 1.',
      technologies: 'React, Tailwind CSS',
      githubLink: 'https://github.com/yourusername/project1',
      demoLink: 'https://demo.project1.com',
      imageUrl : devBookURL
    },
    {
      title: 'Project 1',
      description: 'Description of Project 1.',
      technologies: 'React, Tailwind CSS',
      githubLink: 'https://github.com/yourusername/project1',
      demoLink: 'https://demo.project1.com',
      imageUrl : devBookURL
    },
    {
      title: 'Project 1',
      description: 'Description of Project 1.',
      technologies: 'React, Tailwind CSS',
      githubLink: 'https://github.com/yourusername/project1',
      demoLink: 'https://demo.project1.com',
      imageUrl : devBookURL
    },
    // Add more projects as needed
  ];

  return (
    <div className=" flex-wrap flex justify-center">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default MyProjects;

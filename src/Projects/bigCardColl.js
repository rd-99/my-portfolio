import ProjectCard from "./projectCard";
import React from "react";

const bigCardColl = () => {
    const devBookURL = "dev_book.png"
  const projects = [
    {
      title: 'Dev-Book',
      description: 'Dev-book is an online JavaScript bundler and compilerjvjv Dev-book is an online JavaScript bundler and compilerjvjv Dev-book is an online JavaScript bundler and compilerjvjv Dev-book is an online JavaScript bundler and compilerjvjv',
      technologies: 'React,TypeScript,',
      githubLink: 'https://github.com/rd-99/dev__book',
      demoLink: 'https://rd-99.github.io/dev__book/',
      imageUrl : devBookURL
    },
    // {
    //   title: '',
    //   description: 'Description of Project 1.',
    //   technologies: 'React, Tailwind CSS',
    //   githubLink: 'https://github.com/yourusername/project1',
    //   demoLink: 'https://demo.project1.com',
    // },
    // {
    //   title: 'Project 1',
    //   description: 'Description of Project 1.',
    //   technologies: 'React, Tailwind CSS',
    //   githubLink: 'https://github.com/yourusername/project1',
    //   demoLink: 'https://demo.project1.com',
    // },
    // Add more projects as needed
  ];

  return (
    <div className="justify-center">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default bigCardColl
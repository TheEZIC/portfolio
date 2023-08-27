import React from 'react';
import Layout from "@components/Layout";
import styles from "./index.module.scss";
import {combineStyles} from "@utils/combineStyles";
import ProjectCard from "@components/ProjectCard";

const ProjectsPage = () => {
  const projectsAmbient = combineStyles(["ambient", "active", styles.ambient]);

  const renderProjects = () => new Array(20)
    .fill(0)
    .map((j, i) => (
      <ProjectCard key={`project-${i}`} id={i}/>
    ));

  return (
    <Layout ambient={<div className={projectsAmbient}/>}>
      <div className={styles.projects}>
        {renderProjects()}
      </div>
    </Layout>
  );
};

export default ProjectsPage;

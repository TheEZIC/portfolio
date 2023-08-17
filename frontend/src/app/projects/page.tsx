import React from 'react';
import Layout from "@components/Layout";
import styles from "./index.module.scss";
import {combineStyles} from "@utils/combineStyles";
import ProjectCard from "@components/ProjectCard";

const ProjectsPage = () => {
  const projectsAmbient = combineStyles(["ambient", styles.ambient]);

  const renderProjects = () => {
    return new Array(20).fill(0).map((j, i) => (
      <ProjectCard />
    ));
  };

  return (
    <Layout ambient={<div className={projectsAmbient}/>}>
      <div className={styles.projects}>
        {renderProjects()}
      </div>
    </Layout>
  );
};

export default ProjectsPage;

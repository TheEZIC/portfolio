import React, { FC } from "react";
import Image from "next/image";
import styles from "@app/projects/[id]/index.module.scss";

type ProjectAmbientProps = {
  src: string;
};

const ProjectAmbient: FC<ProjectAmbientProps> = ({ src }) => {
  return (
    <Image
      className={styles.ambientImage}
      width={1920}
      height={1080}
      src={src}
      alt={""}
    />
  );
};

export default ProjectAmbient;

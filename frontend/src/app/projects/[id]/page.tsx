import React, { FC } from "react";
import Layout from "@components/Layout";
import Card from "@uikit/Card";
import Image from "next/image";
import styles from "./index.module.scss";
import HStack from "@uikit/Stack/HStack";
import Heading from "@uikit/Heading";
import Text from "@uikit/Text";
import ProjectBtn from "@uikit/ProjectBtn";
import { FaArrowRight, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import VStack from "@uikit/Stack/VStack";

type ProjectPageProps = {
  params: {
    id: string;
  }
};

const ProjectPage: FC<ProjectPageProps> = (props) => {
  const { params } = props;
  const { id } = params;

  return (
    <Layout>
      <div className={styles.content}>
        <Image
          className={styles.image}
          width={300}
          height={150}
          src={"https://mobimg.b-cdn.net/v3/fetch/06/06fc18c093d3706106e26338f040a3fa.jpeg?w=1470&r=0.5625"}
          alt={""}
        />
        <Card className={styles.mainCard} spacing={6}>
          <VStack spacing={6}>
            <Heading s={"md"}>Project {id}</Heading>
            <Text className={styles.paragraph} as={"p"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
            <Text className={styles.paragraph} as={"p"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
          </VStack>

          <HStack className={styles.footer} spacing={0}>
            <HStack className={styles.techStack} spacing={6}>
              <FaReact/>
              <FaHtml5/>
            </HStack>
            <HStack spacing={4}>
              <ProjectBtn>
                <FaGithub/>
              </ProjectBtn>
              <ProjectBtn>
                <FaArrowRight/>
              </ProjectBtn>
            </HStack>
          </HStack>
        </Card>
      </div>

    </Layout>
  );
};

export default ProjectPage;

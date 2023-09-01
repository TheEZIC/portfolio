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
import ProjectAmbient from "@app/projects/[id]/ProjectAmbient";

type ProjectPageProps = {
  params: {
    id: string;
  }
};

const ProjectPage: FC<ProjectPageProps> = (props) => {
  const { params } = props;
  const { id } = params;

  // const image = "https://w.forfun.com/fetch/33/33351c8ca634f2a7ce715c0313a862c2.jpeg";
  // const image = "https://cdn2.unrealengine.com/genshin-impact-update-2-0-3840x2160-df1f8dc45e7e.jpg";
  // const image = "https://wa-groups.ru/images/uploads/CCezx3SOJ0pD7HGVZHoLA6.jpg";
  const image = "https://images.wallpapersden.com/image/download/tighnari-x-collei-4k-genshin-impact_bWpubmyUmZqaraWkpJRqZWVlrWlma2w.jpg";


  return (
    <Layout ambient={<ProjectAmbient src={image}/>}>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            width={1920}
            height={1080}
            src={image}
            alt={""}
          />
        </div>

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

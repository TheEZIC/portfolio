import React from 'react';
import VStack from "@uikit/Stack/VStack";
import Text from "@uikit/Text";
import {BsBoxArrowRight} from "react-icons/bs";
import HStack from "@uikit/Stack/HStack";
import Heading from "@uikit/Heading";
import Card from "@uikit/Card";
import styles from "./index.module.scss";

const ProjectCard = () => {
  return (
    <Card>
      <div className={styles.projectImage}>
        <img className={styles.image} src={"https://mobimg.b-cdn.net/v3/fetch/06/06fc18c093d3706106e26338f040a3fa.jpeg?w=1470&r=0.5625"} alt={""}/>
        <div className={styles.readMore}>
          <VStack className={styles.readMoreBody} spacing={1}>
            <Text s={"xl"}><BsBoxArrowRight/></Text>
            <Text as={"b"}>читать больше</Text>
          </VStack>
        </div>
      </div>
      <HStack className={styles.body}>
        <VStack spacing={3}>
          <Heading s={"sm"}>Genshin impact</Heading>
          <Text className={styles.additionalText}>The shittiest game ever made by humanity</Text>
        </VStack>
      </HStack>
    </Card>
  );
};

export default ProjectCard;

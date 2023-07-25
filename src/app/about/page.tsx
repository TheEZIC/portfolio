import React from 'react';
import Layout from "@components/Layout";
import Text from "@uikit/Text";
import Heading from "@uikit/Heading";
import VStack from "@uikit/Stack/VStack";
import styles from "./index.module.scss";

const AboutPage = () => {
  return (
    <Layout ambient={<div className={`ambient ${styles.ambient}`}/>}>
      <VStack className={styles.textBlock} spacing={12}>
        <Heading s={"md"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</Heading>
        <Text className={styles.paragraph} s={"lg"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mi ipsum faucibus vitae aliquet nec. In arcu cursus euismod quis viverra nibh cras pulvinar. Nibh tortor id aliquet lectus proin. Tortor at auctor urna nunc id cursus metus aliquam eleifend. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis.
        </Text>
        <Text className={styles.paragraph} s={"lg"}>
          Duis convallis convallis tellus id interdum velit laoreet id. Tempor nec feugiat nisl pretium fusce id velit ut. Risus sed vulputate odio ut enim blandit volutpat maecenas. Non sodales neque sodales ut etiam sit amet nisl. Dui sapien eget mi proin sed. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis.
        </Text>
      </VStack>
    </Layout>
  );
};

export default AboutPage;

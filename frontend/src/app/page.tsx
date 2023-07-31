"use client";

import Layout from "@components/Layout";
import HStack from "@uikit/Stack/HStack";
import Text from "@uikit/Text";
import {combineStyles} from "@utils/combineStyles";
import {useHover} from "@hooks/useHover";
import styles from "./index.module.scss";

const Home = () => {
  const [cityHover, cityEvents] = useHover();
  const [meHover, meEvents] = useHover();

  const ambientStylesArray = ["ambient", styles.ambient];

  if (!cityHover && !meHover) {
    ambientStylesArray.push("active");
  }

  const ambientCityStylesArray = ["ambient", styles.ambientCity];

  if (cityHover) {
    ambientCityStylesArray.push("active");
  }

  const ambientMeStylesArray = ["ambient", styles.ambientMe];

  if (meHover) {
    ambientMeStylesArray.push("active");
  }

  const ambientStyles = combineStyles(ambientStylesArray);
  const ambientCityStyles = combineStyles(ambientCityStylesArray);
  const ambientMeStyles = combineStyles(ambientMeStylesArray);

  const ambients = (
    <>
      <div className={ambientStyles}/>
      <div className={ambientCityStyles}/>
      <div className={ambientMeStyles}/>
    </>
  );

  return (
    <Layout ambient={ambients}>
      <HStack spacing={12}>
        <Text className={styles.additionalText} s={"lg"} {...meEvents}>frontend developer</Text>
        <Text className={styles.additionalText} s={"lg"} {...cityEvents}>voronezh, russia</Text>
      </HStack>
    </Layout>
  );
};

export default Home;

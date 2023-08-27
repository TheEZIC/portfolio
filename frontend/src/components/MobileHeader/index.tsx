import React from "react";
import HStack from "@uikit/Stack/HStack";
import Logo from "@components/Logo";
import styles from "./index.module.scss";
import Hamburger from "@components/MobileHeader/Hamburger";

const MobileHeader = () => {
  return (
    <HStack className={styles.mobileHeader}>
      <Logo/>
      <Hamburger/>
    </HStack>
  );
};

export default MobileHeader;

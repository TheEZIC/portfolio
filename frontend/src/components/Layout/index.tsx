import React, { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./index.module.scss";
import HStack from "@uikit/Stack/HStack";
import VStack from "@uikit/Stack/VStack";
import Logo from "../Logo";
import Navigation from "../Navigation";
import ButtonsHub from "../ButtonsHub";
import CustomScroll from "@components/CustomScroll";
import MobileHeader from "@components/MobileHeader";
import MobileMenu from "@components/MobileMenu";
import AmbientWrapper from "@components/Layout/AmbientWrapper";

type LayoutProps = {
  ambient?: ReactNode;
} & PropsWithChildren;

const Layout: FC<LayoutProps> = ({ ambient, children }) => {
  return (
    <>
      <VStack className={styles.layout}>
        {ambient && (
          <AmbientWrapper>{ambient}</AmbientWrapper>
        )}
        <MobileHeader/>
        <MobileMenu ambient={ambient}/>
        <CustomScroll
          className={styles.content}
          overflowX={"hidden"}
          attachYTo={"body"}
        >
          {children}
        </CustomScroll>
        <HStack className={styles.bottom}>
          <HStack spacing={6} className={styles.left}>
            <Logo/>
            <Navigation/>
          </HStack>
          <ButtonsHub/>
        </HStack>
      </VStack>
    </>
  );
};

export default Layout;

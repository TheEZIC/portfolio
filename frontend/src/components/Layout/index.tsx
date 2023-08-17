import React, {FC, PropsWithChildren, ReactNode} from 'react';
import styles from "./index.module.scss";
import HStack from "@uikit/Stack/HStack";
import VStack from "@uikit/Stack/VStack";
import Logo from "../Logo";
import Navigation from "../Navigation";
import ButtonsHub from "../ButtonsHub";
import CustomScroll from "@components/CustomScroll";

type LayoutProps = {
  ambient?: ReactNode;
} & PropsWithChildren;

const Layout: FC<LayoutProps> = ({ ambient, children }) => {
  return (
    <>
      {ambient}
      <VStack className={styles.layout}>
        <CustomScroll className={styles.content}>
          {children}
        </CustomScroll>
        <HStack className={styles.bottom}>
          <HStack className={styles.left}>
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

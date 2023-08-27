import Link from "@uikit/Link";
import { GrMail } from "react-icons/gr";
import { BsGithub, BsTelegram } from "react-icons/bs";
import IconBtn from "@uikit/IconBtn";
import HStack from "@uikit/Stack/HStack";
import VStack from "@uikit/Stack/VStack";
import ToggleThemeButton from "@components/ButtonsHub/Buttons/ToggleThemeButton";
import ChangeTranslationButton from "@components/ButtonsHub/Buttons/ChangeTranslationButton";
import styles from "./index.module.scss";
import { StackProps } from "@uikit/Stack";
import { FC } from "react";
import { combineStyles } from "@utils/combineStyles";

type ButtonsHubProps = StackProps;

const ButtonsHub: FC<ButtonsHubProps> = ({ className, rest }) => {
  const classes = combineStyles([className, styles.hub]);

  return (
    <VStack spacing={6} className={classes} {...rest}>
      <HStack className={styles.hubRow} spacing={6}>
        <IconBtn className={styles.hubIcon} icon={<GrMail size={24}/>}/>
        <Link href={"https://github.com/TheEZIC"}>
          <IconBtn className={styles.hubIcon} icon={<BsGithub size={24}/>}/>
        </Link>
        <IconBtn className={styles.hubIcon} icon={<BsTelegram size={24}/>}/>
      </HStack>
      <HStack className={styles.hubRow} spacing={6}>
        <ToggleThemeButton/>
        <ChangeTranslationButton/>
      </HStack>
    </VStack>
  );
};

export default ButtonsHub;

import Link from "@uikit/Link";
import {GrMail} from "react-icons/gr";
import {BsGithub, BsTelegram} from "react-icons/bs";
import IconBtn from "@uikit/IconBtn";
import HStack from "@uikit/Stack/HStack";
import VStack from "@uikit/Stack/VStack";
import ToggleThemeButton from "@components/ButtonsHub/Buttons/ToggleThemeButton";
import ChangeTranslationButton from "@components/ButtonsHub/Buttons/ChangeTranslationButton";
import styles from "./index.module.scss";

const ButtonsHub = () => {
  return (
    <VStack spacing={6} className={styles.hub}>
      <HStack className={styles.hubRow} spacing={6}>
        <IconBtn icon={<GrMail size={24}/>}/>
        <Link href={"https://github.com/TheEZIC"}>
          <IconBtn icon={<BsGithub size={24}/>}/>
        </Link>
        <IconBtn icon={<BsTelegram size={24}/>}/>
      </HStack>
      <HStack className={styles.hubRow} spacing={6}>
        <ToggleThemeButton />
        <ChangeTranslationButton />
      </HStack>
    </VStack>
  );
};

export default ButtonsHub;

import React, {FC} from 'react';
import Heading from "@uikit/Heading";
import Link from "@uikit/Link";
import styles from "./indes.module.scss";

const Logo: FC = () => {
  return (
    <Link href={"/"}>
      <Heading className={styles.logo} as={"h2"} s={"lg"}>Alexander Ovchinnikov</Heading>
    </Link>
  );
};

export default Logo;

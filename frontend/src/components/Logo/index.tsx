"use client";

import React, { FC } from "react";
import Heading from "@uikit/Heading";
import Link from "@uikit/Link";
import styles from "./indes.module.scss";
import { useWindowDimension } from "@hooks/useWindowDemension";

const Logo: FC = () => {
  const [windowWidth] = useWindowDimension();

  const getSize = () => {
    if (windowWidth > 940) {
      return "lg";
    }

    if (windowWidth > 700) {
      return "md";
    }

    return "xs";
  };

  return (
    <Link href={"/"}>
      <Heading
        className={styles.logo}
        as={"h2"}
        s={getSize()}
      >
        Alexander Ovchinnikov
      </Heading>
    </Link>
  );
};

export default Logo;

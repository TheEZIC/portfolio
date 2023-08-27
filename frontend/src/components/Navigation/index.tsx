"use client";

import React, {FC, ReactNode} from 'react';
import Text from "@uikit/Text"
import styles from "./index.module.scss";
import Link from "@uikit/Link";
import { usePathname } from "next/navigation";
import { useWindowDimension } from "@hooks/useWindowDemension";

type Path = {
  path: string;
  text: string;
};

const PATHS: Path[] = [
  {
    path: "/about",
    text: "Обо мне",
  }, {
    path: "/projects",
    text: "Проекты",
  },
];

const Navigation: FC = () => {
  const [windowWidth] = useWindowDimension();
  const pathname = usePathname();

  const renderNavItems = (): ReactNode =>
    PATHS.map((p, i) => (
      <li key={`path-${i}`}>
        <Link href={p.path}>
          <Text
            className={`${styles.item} ${pathname?.startsWith(p.path) ? "active" : ""}`}
            s={windowWidth > 940 ? "lg" : "md"}
          >
            {p.text}
          </Text>
        </Link>
      </li>
    ));

  return (
    <nav>
      <ol className={styles.list} type={"1"}>
        {renderNavItems()}
      </ol>
    </nav>
  );
};

export default Navigation;

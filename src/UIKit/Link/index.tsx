import React, {FC, PropsWithChildren} from 'react';
import styles from "./index.module.scss";
import RouterLink from "next/link";

export type LinkProps = {
  href: string;
} & PropsWithChildren;

const Link: FC<LinkProps> = ({ children, ...rest }) => {
  return (
    <RouterLink className={styles.link} {...rest}>
      {children}
    </RouterLink>
  );
};

export default Link;

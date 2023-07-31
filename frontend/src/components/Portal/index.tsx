import React, {FC, PropsWithChildren} from "react";
import styles from "./index.module.scss"
import ReactDOM from "react-dom";

export type PortalProps = PropsWithChildren;

const Portal: FC<PortalProps> = ({ children }) => {
  return ReactDOM.createPortal((
    <div className={styles.portal}>
      {children}
    </div>
  ), document.getElementById("root")!);
};

export default Portal;

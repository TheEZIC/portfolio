"use client";

import React from 'react';
import Text from "@uikit/Text";
import styles from "@components/ButtonsHub/index.module.scss";
import IconBtn from "@uikit/IconBtn";

const ChangeTranslationButton = () => {
  return (
    <IconBtn className={styles.hubIcon} icon={<Text className={styles.translationText}>ru</Text>}/>
  );
};

export default ChangeTranslationButton;

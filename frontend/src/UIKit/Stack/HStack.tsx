import React, {FC} from 'react';
import Stack, {StackProps} from "./Stack";

const HStack: FC<StackProps> = ({ children, ...rest }) => {
  return (
    <Stack horizontal={true} {...rest}>
      {children}
    </Stack>
  );
};

export default HStack;

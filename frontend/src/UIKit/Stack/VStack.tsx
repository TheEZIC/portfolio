import React, {FC} from 'react';
import Stack, {StackProps} from "./Stack";

const VStack: FC<StackProps> = ({ children, ...rest }) => {
  console.log(rest, "r")
  return (
    <Stack horizontal={false} {...rest}>
      {children}
    </Stack>
  );
};

export default VStack;

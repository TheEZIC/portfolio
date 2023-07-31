import dynamic from 'next/dynamic'
import React, {FC, PropsWithChildren} from 'react'

type NoSSRProps = PropsWithChildren;

const NoSSR: FC<NoSSRProps> = ({ children }) => <>{children}</>;

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false
});

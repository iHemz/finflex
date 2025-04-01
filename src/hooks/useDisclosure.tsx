import { useState } from "react";

function useDisclosure() {
  const [isTrue, setIsTrue] = useState(false);

  const open = () => setIsTrue(true);
  const close = () => setIsTrue(false);
  const toggle = () => setIsTrue(!isTrue);

  return [isTrue, { open, close, toggle }];
}

export default useDisclosure;

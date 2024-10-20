import { FC } from "react";

import { Flex, Loader, useMantineTheme } from "@mantine/core";

const Loading: FC = () => {
  const theme = useMantineTheme();

  return (
    <Flex flex={1} justify={"center"} align={"center"} mih={"100vh"}>
      <Loader color={theme.colors.customRed[0]} />
    </Flex>
  );
};

export default Loading;

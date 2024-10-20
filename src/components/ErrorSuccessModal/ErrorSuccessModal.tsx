import { FC } from "react";

import { Text, Button, Modal, Flex } from "@mantine/core";

import { ErrorSuccessModalProps } from "./types";

const ErrorSuccessModal: FC<ErrorSuccessModalProps> = ({
  visible,
  closeModal,
  type,
  message,
}) => {
  const isSucces = type === "success";

  return (
    <Modal opened={visible} onClose={closeModal}>
      <Flex direction="column" align="center">
        <Text size="xl" fw={700}>
          {isSucces ? "Success" : "Error"}
        </Text>
        <Text>{message}</Text>

        <Button mt="xl" onClick={closeModal}>
          Close
        </Button>
      </Flex>
    </Modal>
  );
};

export default ErrorSuccessModal;

export type ErrorSuccessModalProps = {
  visible: boolean;
  closeModal: () => void;
  type: "success" | "error";
  message: string;
};

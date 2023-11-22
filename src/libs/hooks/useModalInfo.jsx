import { useRootContext } from "@/libs/providers/RootProvider";

const useModalInfo = (initialValues = "") => {
  const { onOpenModal } = useRootContext();

  const openModal = (info) => {
    onOpenModal(info || initialValues);
  };

  return { openModal };
};

export default useModalInfo;

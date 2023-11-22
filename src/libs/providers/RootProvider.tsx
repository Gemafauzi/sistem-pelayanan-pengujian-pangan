import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, { createContext, useContext, useState } from "react";

const RootContext = createContext({
  isOpen: false,
  onOpenModal: (_) => {},
  onOpenChange: () => {},
});

export const useRootContext = () => useContext(RootContext);

export const RootProvider = ({ children }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [infoModal, setInfoModal] = useState("");

  const onOpenModal = (info) => {
    setInfoModal(info);
    onOpen();
  };

  const value = {
    isOpen,
    onOpenModal,
    onOpenChange,
  };

  return (
    <RootContext.Provider value={value}>
      {children}

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="auto"
        size="lg"
        radius="md"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-medium">
                Information
              </ModalHeader>

              <ModalBody>
                <h2 className="text-2xl font-semibold text-center md:text-3xl">
                  {infoModal}
                </h2>
              </ModalBody>

              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  OK
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </RootContext.Provider>
  );
};

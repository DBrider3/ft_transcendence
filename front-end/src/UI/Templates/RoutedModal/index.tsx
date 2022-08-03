import React from 'react';
import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function RoutedModal({
  children,
  closeOnOverlayClick,
}: {
  children: React.ReactNode;
  closeOnOverlayClick?: boolean;
}) {
  const [isOpen, onClose] = React.useState(true);
  const navigate = useNavigate();

  return (
    <Modal
      closeOnOverlayClick={closeOnOverlayClick}
      isCentered
      isOpen={isOpen}
      onClose={() => onClose(false)}
      onCloseComplete={(): void => navigate('/', { replace: true })}
      size={{ base: 'full', lg: '6xl' }}
    >
      <ModalOverlay />
      <ModalContent>{children}</ModalContent>
    </Modal>
  );
}

RoutedModal.defaultProps = {
  closeOnOverlayClick: true,
};

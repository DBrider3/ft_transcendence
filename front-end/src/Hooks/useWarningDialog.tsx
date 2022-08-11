import React from 'react';
import WarningDialogProps from '../Props/WarningDialogProps';
import WarningAlertDialog from '../UI/Templates/WarningAlertDialog';

export default function useWarningDialog(onClose?: () => void | undefined) {
  const [error, setError] = React.useState<WarningDialogProps>({
    headerMessage: '',
    bodyMessage: '',
  });
  const clearError = React.useCallback(() => {
    setError({ headerMessage: '', bodyMessage: '' });
    if (onClose) onClose();
  }, [setError, onClose]);
  const cancelRef = React.useRef(null);

  return {
    setError,
    WarningDialogComponent: (
      <WarningAlertDialog
        isOpen={error.bodyMessage.length > 0}
        onClose={() => clearError()}
        cancelRef={cancelRef}
        headerMessage={error.headerMessage}
        bodyMessage={error.bodyMessage}
      />
    ),
  };
}

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";

export const AlertDialogue = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const handleClick = () => {};
  return (
    <>
      <Button colorScheme="red">Delete Customer</Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="medium">
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>This is the Body of Alert Dialog</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => handleClick()}>
                Cancel
              </Button>
              <Button colorScheme="red">Delete</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

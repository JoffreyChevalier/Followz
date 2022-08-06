import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

// eslint-disable-next-line
function ConfirmationModal({ open, onConfirm, onCancel, children }) {
  return (
    <Dialog
      dismissType={{ enabled: false }}
      open={open}
      handler={onCancel}
      className=" max-w-screen-lg px-4 mx-auto sm:px-8 lg:px-10"
    >
      <div className="flex flex-col items-center">
        <DialogBody>
          <p className=" text-center text-sm xs:text-md sm:text-lg">
            {children}
          </p>
        </DialogBody>
        <DialogFooter className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          <Button size="md" className="bg-primary w-20" onClick={onConfirm}>
            <span>oui</span>
          </Button>
          <Button size="md" className="bg-error w-20" onClick={onCancel}>
            <span>non</span>
          </Button>
        </DialogFooter>
      </div>
    </Dialog>
  );
}

export default ConfirmationModal;

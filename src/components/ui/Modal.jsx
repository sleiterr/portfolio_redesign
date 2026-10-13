import clsx from "clsx";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";

export function Modal({ show, children, onClose, classDialogPanel }) {
  return (
    <Transition show={show}>
      <Dialog
        as="div"
        className="fixed inset-0 z-[1100] flex items-center p-3 sm:p-6"
        onClose={onClose}
      >
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
        </TransitionChild>

        <DialogPanel
          className={clsx(
            "relative mx-auto w-full overflow-hidden shadow-xl",
            classDialogPanel,
          )}
        >
          {children}
        </DialogPanel>
      </Dialog>
    </Transition>
  );
}

export default Modal;

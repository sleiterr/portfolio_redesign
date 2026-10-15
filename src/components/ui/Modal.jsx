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
      <Dialog as="div" className="relative z-[1100]" onClose={onClose}>
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

        <div className="modal-scroll fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-3 sm:p-12">
            <DialogPanel
              className={clsx(
                "relative mx-auto w-full overflow-hidden shadow-xl",
                classDialogPanel,
              )}
            >
              {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;

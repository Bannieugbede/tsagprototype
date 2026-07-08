const ConfirmationModal = ({ isOpen, title, message, onCancel, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-n-8/80 px-4">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-n-8 p-8 shadow-2xl shadow-black/30">
        <h3 className="text-xl font-semibold text-n-1">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-n-3">{message}</p>
        <div className="mt-8 flex justify-end gap-3">
          <button type="button" onClick={onCancel} className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-n-3">
            Cancel
          </button>
          <button type="button" onClick={onConfirm} className="rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;

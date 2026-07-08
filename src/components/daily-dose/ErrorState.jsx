const ErrorState = ({ title = "Something went wrong", message = "Please try again in a moment." }) => (
  <div className="rounded-3xl border border-rose-500/30 bg-rose-500/10 p-8 text-center text-rose-200">
    <h3 className="mb-2 text-lg font-semibold">{title}</h3>
    <p className="text-sm leading-7">{message}</p>
  </div>
);

export default ErrorState;

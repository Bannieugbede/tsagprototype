import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-10 h-9 mr-4" src={loading} alt="Loading" />
      Led By Pastor Mrs. Moyosore Joseph
    </div>
  );
};

export default Generating;

import { tsag, jmaxwell, vcclogo, viclogo } from "../assets";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        In Association And Collaboration With
      </h5>
      <ul className="flex">
        
      <li
            className="flex items-center justify-center flex-1 h-[8.5rem]">
            <img src={tsag} width={134} height={28} alt="VIC_LOGO"/>
          </li>

          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]">
            <img src={jmaxwell} width={134} height={28} alt="VIC_LOGO"/>
          </li>

          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]">
            <img src={viclogo} width={134} height={28} alt="VIC_LOGO"/>
          </li>

          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]">
            <img src={vcclogo} width={134} height={28} alt="VIC_LOGO"/>
          </li>

      </ul>
    </div>
  );
};

export default CompanyLogos;

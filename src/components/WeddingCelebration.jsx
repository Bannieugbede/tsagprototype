import Section from "./Section";
import { engagementivimage } from "../assets";

const WeddingCelebration = () => {
  return (
    <Section
      className="pt-[8rem] pb-[4rem] bg-n-8"
      crosses
      customPaddings
      id="WeddingCelebration"
    >
      <div className="container mx-auto px-4">
        <h1 className="h1 text-center mb-8 font-sora text-n-1">
          Wedding Celebration: A Joyous Union of Love and Faith
        </h1>
        <p className="body-1 text-center max-w-3xl mx-auto mb-12 text-n-2 font-grotesk">
          The family of Late Elder Felix Abidoye Ajuwon & Mrs Funmilayo Ajuwon & Pastor Timothy Joseph & Pastor Mrs Moyosore Joseph Cordially invites you to the Wedding Ceremony of their children Barrister Bolaji Christianah & Doctor Damilola David-Enoch 
        </p>

        {/* Image Section */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem] overflow-hidden">
              <img
                src={engagementivimage}
                className="w-full h-auto object-cover"
                alt="Pastor Moyosore Joseph"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>

        {/* Programme Section */}
        <div className="max-w-2xl mx-auto bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl p-6">
          <h2 className="h2 mb-6 text-center font-sora text-n-1">
          WEDDING CEREMONY
          </h2>
          <ul className="space-y-4 text-n-1 font-grotesk">
            <li className="programme-item">
              <span>DATE:</span>
              <span className="font-code">Saturday 9th May, 2026</span>
            </li>
            <li className="programme-item">
              <span>TIME:</span>
              <span className="font-code">8:30am</span>
            </li>
            <li className="programme-item">
              <span>VENUE:</span>
              <span className="font-code">Christ Apostolic Church</span>
            </li>
            <li className="programme-item">
              <span>ADDRESS:</span>
              <span className="font-code">Latona Street, No 20, Latona Street, Osogbo, Osun State.</span>
            </li>
          <h3 className="h2 mb-6 text-center font-sora text-n-1">
          WEDDING RECEPTION
          </h3>
            <li className="programme-item">
              <span>VENUE:</span>
              <span className="font-code">Aurora Conference & Event Center,</span>
            </li>
            <li className="programme-item">
              <span>  </span>
              <span className="font-code">Ring Road West Byepass, Osogbo, Osun State</span>
            </li>
            <li className="programme-item">
              <span>TIME:</span>
              <span className="font-code">11:00am</span>
            </li>
          <h3 className="h2 mb-6 text-center font-sora text-n-1">
          COLOUR OF THE DAY
          </h3>
            <li className="programme-item">
              <span>
              Bride&apos;s Family
              </span>
              <span className="font-code">Sky Blue & Royal Blue</span>
            </li>
            <li className="programme-item">
              <span>Groom&apos;s Family</span>
              <span className="font-code">Gold & Milk</span>
            </li>
          <h3 className="h2 mb-6 text-center font-sora text-n-1">
          R.S.V.P
          </h3>
            <li className="programme-item">
              <span>MR. Taiwo</span>
              <span className="font-code">+234 9034533022</span>
            </li>
            <li className="programme-item">
              <span>MR. Victor</span>
              <span className="font-code">+234 806393 7907</span>
            </li>
           
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default WeddingCelebration;
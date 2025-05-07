import Section from "./Section";
import { birthdayimage } from "../assets";

const BirthdayCelebration = () => {
  return (
    <Section
      className="pt-[8rem] pb-[4rem] bg-n-8"
      crosses
      customPaddings
      id="BirthdayCelebration"
    >
      <div className="container mx-auto px-4">
        <h1 className="h1 text-center mb-8 font-sora text-n-1">
          A Life of Faith, A Heart of Gold: Celebrating Pastor Moyosore Joseph
          Birthday
        </h1>
        <p className="body-1 text-center max-w-3xl mx-auto mb-12 text-n-2 font-grotesk">
          Join us in celebrating the life and ministry of Pastor Moyosore Joseph,
          a beacon of faith and compassion.
        </p>

        {/* Image Section */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem] overflow-hidden">
              <img
                src={birthdayimage}
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
          AGENDA
          </h2>
          <ul className="space-y-4 text-n-1 font-grotesk">
            <li className="programme-item">
              <span>NETWORKING AND PHOTOS – GUESS WHO SHOWED UP</span>
              <span className="font-code">4:30PM - 5:25PM</span>
            </li>
            <li className="programme-item">
              <span>LET’S WELCOME OUR BIRTHDAY GIRL – (SONG - I love you Lord, for your mercies never fail me)</span>
              <span className="font-code">5:25PM - 5:30PM</span>
            </li>
            <li className="programme-item">
              <span>LORD YOU ARE WELCOME – OPENING PRAYER (PHILIP MORDI) </span>
              <span className="font-code">5:30PM - 5:35PM</span>
            </li>
            <li className="programme-item">
              <span>ENTER HIS COURTS WITH THANKSGIVING – ( A SONG OF PRAISE- Dansia naraekene)</span>
              <span className="font-code">5:35PM - 5:40PM</span>
            </li>
            <li className="programme-item">
              <span>WE ARE SO GLAD YOU MADE IT – WELCOME TO OUR AMAZING FRIENDS & FAMILY</span>
              <span className="font-code">5:40PM – 5:45PM</span>
            </li>
            <li className="programme-item">
              <span>WE BELIEVE THEREFORE WE DECLARE (MERCY OKE) </span>
              <span className="font-code">5:45PM-5: 50PM</span>
            </li>
            <li className="programme-item">
              <span>
              FIRESIDE CHAT WITH THE BIRTHDAY GIRL
              </span>
              <span className="font-code">5:50PM - 6:00PM</span>
            </li>
            <li className="programme-item">
              <span>PIOUS SYLVA CELEBRATES OUR BIRTHDAY GIRL</span>
              <span className="font-code">6:00PM - 6:10PM</span>
            </li>
            <li className="programme-item">
              <span>YOU CAN EAT YOUR CAKE AND HAVE IT</span>
              <span className="font-code">6:10PM - 6:20PM</span>
            </li>
            <li className="programme-item">
              <span>LET’S TOAST TO A BRIGHTER FUTURE </span>
              <span className="font-code">6:20PM - 6:30PM</span>
            </li>
            <li className="programme-item">
              <span>IT’S TIME TO JUBILATE WITH A DANCE </span>
              <span className="font-code">6:30PM - 6:40PM</span>
            </li>
            <li className="programme-item">
              <span>WE KNOW HER AND WE RISE TO CALL HER BLESSED </span>
              <span className="font-code">6:40PM - 6:50PM</span>
            </li>
            <li className="programme-item">
              <span>MAY THE LORD BLESS HER BY PASTOR TIMOTHY AND WE ALL SAY AMEN</span>
              <span className="font-code">6:50PM - 7:00PM</span>
            </li>
            <li className="programme-item">
              <span>TO GOD BE THE GLORY (FAVOUR JACOB)</span>
              <span className="font-code">7:10PM - 7:20PM</span>
            </li>
            <li className="programme-item">
              <span>THE GRACE  ( TAYO OKUNMUYIDE)</span>
              <span className="font-code">7:20PM - 7:30PM</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default BirthdayCelebration;
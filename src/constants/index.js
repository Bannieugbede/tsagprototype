import {
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  searchMd,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  tsag,
  cross,
  bible,
  community,
  youth,
  globe,
  health,
  d,
  black,
  i,
  s,
  c,
  sharing,
  skill,
  traffic,
  partner,
  feeding,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Mission",
    url: "#features",
  },
  {
    id: "1",
    title: "Store",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Resources",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Goals",
    url: "#roadmap",
  },
  {
    id: "33",
    title: "Events",
    url: "#EventsSection",
  },
  {
    id: "34",
    title: "TSAGO DAILY DOSE",
    url: "/daily-dose",
  },
  {
    id: "4",
    title: "Facebook",
    url: "https://www.facebook.com/PastorMoyo",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Give",
    url: "https://sandbox.flutterwave.com/donate/sdinqa8sues6",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Prayer",
  "Family Building",
  "Word Of God",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "CREATING OPPORTUNITIES",
    text: "To give youths and young adults the opportunity to learn a trade, be Entrepreneurs and share their ideas and innovations with the world.",
    date: "TSAGO",
    status: "progress",
    imageUrl: skill,
    colorful: true,
  },
  {
    id: "1",
    title: "COMBAT TRAFFICKING",
    text: "To combat commercial sex work, child labour and human trafficking among children and youths.",
    date: "TSAGO",
    status: "progress",
    imageUrl: traffic,
  },
  {
    id: "2",
    title: "BUILD PARTNERSHIPS",
    text: "To promote partnerships with the government, private sector, civil society and communities in line with it's vision.",
    date: "TSAGO",
    status: "progress",
    imageUrl: sharing,
  },
  {
    id: "3",
    title: "PROMOTING FOOD SECURITY",
    text: "To promote food security by administering youth and community feeding programmes.",
    date: "TSAGO",
    status: "progress",
    imageUrl: feeding,
    colorful: true,
  },
];

export const collabText =
  "Unlock your potential with the DISC method: Understand your behavior, enhance communication, and lead with confidence through tailored insights into Dominance, Influence, Steadiness, and Conscientiousness.";

export const collabContent = [
  {
    id: "0",
    title: "D - Dominant",
  },
  {
    id: "1",
    title: "I - Influencing",
  },
  {
    id: "2",
    title: "S - Steady",
  },
  {
    id: "3",
    title: "C - Compliant"
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: d,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: black,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: i,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: black,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: s,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: black,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: c,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: black,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Books",
    description: "Knowledge Is Power",
    price: "1500+",
    features: [
      "Books on spirituality",
      "Motivational reads to inspire growth",
      "Tailored recommendations for your interests",
    ],
  },
  {
    id: "1",
    title: "Mentorship",
    description: "No better teacher than someone with experience.",
    price: null,
    features: [
      "Expert mentors in church leadership, motivation, and charity",
      "Personalized guidance for your goals",
      "A guide to office relations with DISC method",
    ],
  },
  {
    id: "2",
    title: "Donate",
    description: "If you want to do a little bit more",
    price: null,
    features: [
      "Become a member of the mission",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Local Mission Work",
    text: "Street corner evangelism that should also serve to distribute daily needs to people in need.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: cross,
    imageUrl: tsag,
  },
  {
    id: "1",
    title: "Personality Training",
    text: "Use John Maxwell  DISC  Personality training to help relationships and organisations",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: community,
    imageUrl: tsag,
    light: true,
  },
  {
    id: "2",
    title: "Education And Empowerment",
    text: "Provides educational resources and vocational training to uplift underprivileged individuals and promote self-sufficiency.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: bible,
    imageUrl: tsag,
  },
  {
    id: "3",
    title: "Building Interpersonal Relations",
    text: "Help people in general to take charge of their thoughts through small groups interactions, social media involvement",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: globe,
    imageUrl: tsag,
    light: true,
  },
  {
    id: "4",
    title: "Business Growth",
    text: "Set up accountability groups and growth environment for people and businesses",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: youth,
    imageUrl: tsag,
  },
  {
    id: "5",
    title: "Health And Wellness",
    text: "Promotes holistic well-being by offering health services, mental health support, and wellness programs grounded in faith.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: health,
    imageUrl: tsag,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

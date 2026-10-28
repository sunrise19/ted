export const site = {
  name: "The Evolving Digitals",
  description: "Strategic content, creative execution and digital marketing support for small businesses, startups and growing brands.",
  mission: "To help small businesses and startups build visible, trusted, and profitable brands through strategic content, consistent execution, and results clients are proud to stand behind. We do this while growing into Lagos's leading digital marketing agency and raising the standard of the industry.",
  vision: "To stand as a reference brand in digital marketing: a standard from which practitioners learn, and an agency whose work drives lasting growth for the brands it serves.",
  contact: {
    phone: "09038568814",
    email: "theevolvingdigitals@gmail.com",
    whatsapp: "09038568814",
    instagram: "https://www.instagram.com/theevolvingdigitalslimited/",
    tiktok: "https://www.tiktok.com/@theevolvingdigitals",
    x: "https://x.com/TheEvolvingDigitals",
  },
  services: [
    {title:"Social media management",description:"Build a more consistent and considered presence across the social platforms that matter to your audience."},
    {title:"Social media marketing",description:"Plan and support campaigns designed around your audience, offer and business objectives."},
    {title:"Graphic design",description:"Communicate your brand clearly with thoughtful visual assets for digital channels."},
    {title:"Video editing",description:"Turn raw footage into polished short-form content suited to the way people watch online."},
    {title:"Content strategy & creation",description:"Give your content direction with useful themes, clear messaging and a consistent publishing approach."},
    {title:"Brand identity support",description:"Create a more recognisable and cohesive visual language across your digital touchpoints."},
    {title:"Digital advertising support",description:"Prepare and support paid digital campaigns around agreed goals and available budgets."},
    {title:"Digital strategy",description:"Bring your channels, content and audience priorities together in a practical plan."}
  ],
  portfolio: [
    {id:"fayira", title:"Fayira", category:"Branding", description:"Brand identity and visual storytelling for a distinct lifestyle-focused brand.", cover:"/images/portfolio/fayira_1.jpeg", gallery:["/images/portfolio/fayira_1.jpeg","/images/portfolio/fayira_2.jpeg","/images/portfolio/fayira_3.jpeg","/images/portfolio/fayira_4.jpeg","/images/portfolio/fayira_5.jpeg","/images/portfolio/fayira_6.jpeg"]},
    {id:"fuprisca", title:"Fuprisca", category:"Branding", description:"A polished visual identity and promotional direction built for visibility and recognition.", cover:"/images/portfolio/fuprisca_1.jpeg", gallery:["/images/portfolio/fuprisca_1.jpeg","/images/portfolio/fuprisca_2.jpeg","/images/portfolio/fuprisca_3.jpeg","/images/portfolio/fuprisca_4.jpeg","/images/portfolio/fuprisca_5.jpeg","/images/portfolio/fuprisca_6.jpeg"]},
    {id:"kingnathan", title:"Kingnathan", category:"Graphic design", description:"Social-first creative and visual branding to give the client a stronger digital presence.", cover:"/images/portfolio/kingnathan_1.jpeg", gallery:["/images/portfolio/kingnathan_1.jpeg","/images/portfolio/kingnathan_2.jpeg","/images/portfolio/kingnathan_3.jpeg","/images/portfolio/kingnathan_4.jpeg","/images/portfolio/kingnathan_5.jpeg","/images/portfolio/kingnathan_6.jpeg"]},
    {id:"ruach", title:"Ruach", category:"Social media", description:"Campaign creative and monthly brand assets crafted to build consistency across channels.", cover:"/images/portfolio/rauch_1.jpeg", gallery:["/images/portfolio/rauch_1.jpeg","/images/portfolio/rauch_2.jpeg","/images/portfolio/rauch_3.jpeg","/images/portfolio/rauch_4.jpeg","/images/portfolio/rauch_5.jpeg","/images/portfolio/rauch_6.jpeg","/images/portfolio/rauch_7.jpeg","/images/portfolio/rauch_8.jpeg","/images/portfolio/rauch_9.jpeg","/images/portfolio/rauch_10.jpeg","/images/portfolio/rauch_11.jpeg","/images/portfolio/rauch_12.jpeg","/images/portfolio/rauch_13.jpeg","/images/portfolio/rauch_14.jpeg","/images/portfolio/rauch_15.jpeg","/images/portfolio/rauch_16.jpeg","/images/portfolio/rauch_17.jpeg","/images/portfolio/rauch_18.jpeg"]},
    {id:"studio-gallery", title:"The Evolving Digitals Studio", category:"Graphic design", description:"A curated archive of branded social and marketing visuals designed in-house for the agency's own digital growth work.", cover:"/images/ted/ddd/Brand-Stand-outArtboard-1.png", gallery:["/images/ted/ddd/Brand-Stand-outArtboard-1.png","/images/ted/ddd/IDEAL-AUDIENCEArtboard-1.png","/images/ted/June_/social-growthArtboard-1-copy.png","/images/ted/MAy_/Social-media-needArtboard-1.png"]}
  ],
  team: [
    {id:"divine", name:"Divine", role:"Chief Executive Officer", bio:"Leads the agency vision, strategic direction and client growth priorities.", image:"/images/team/divine_2.jpeg"},
    {id:"jason", name:"Jason Ofem", role:"Brand Identity / Graphic Designer", bio:"Shapes the visual language and creative direction behind the brand experiences we build.", image:"/images/team/Jason_Ofem_Brand-Identity_Graphic-Designer.jpeg"},
    {id:"john", name:"John Omeiza", role:"Video Editor", bio:"Brings motion, polish and storytelling into short-form visuals that keep attention engaged.", image:"/images/team/john_omeiza_video_editor.jpeg"}
  ],
  courses: [], partners: [], testimonials: [], articles: []
} as const;
export const navItems = [
  {label:"Home",href:"/"},{label:"About Us",href:"/about"},{label:"Services",href:"/services"},{label:"Portfolio",href:"/portfolio"},{label:"Courses",href:"/courses"},{label:"Team",href:"/team"},{label:"Partners",href:"/partners"},{label:"Blog",href:"/blog"},{label:"Contact",href:"/contact"}
];
export function getWhatsAppUrl(message?: string) {
  const number = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || site.contact.whatsapp || "09038568814").replace(/[^0-9]/g, "");
  if (!number) return "";
  const text = message || process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "Hello The Evolving Digitals, I would like to discuss a project.";
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

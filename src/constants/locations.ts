export interface LocationConfig {
  slug: string;
  name: string;
  postcode: string;
  heroImage?: string;
  galleryImages?: string[];
  heroHeadline?: string;
  heroSubheadline?: string;
  intro?: string;
  localNotes?: string;
  faq?: { question: string; answer: string }[];
}

export const LOCATIONS: LocationConfig[] = [
  {
    slug: 'perth',
    name: 'Perth',
    postcode: '6164',
  },
  {
    slug: 'rockingham',
    name: 'Rockingham',
    postcode: '6168',
    heroHeadline: "Professional Gutter Repairs in Rockingham WA",
    heroSubheadline: "27+ years experience. Coastal gutter specialists. No mess, no fuss.",
    intro: "Big Mike’s Gutters provides professional gutter repairs in Rockingham WA, helping homeowners protect their properties from coastal weather conditions. Living near the coast means your gutters face salt air corrosion, strong winds and heavy winter storms. Over time, this leads to rusted sections, leaking joins and sagging brackets.\n\nWith more than 27 years of industry experience, we specialise in diagnosing and repairing gutter problems before they turn into major water damage. Whether your home is in Safety Bay, Waikiki or central Rockingham, we understand the unique challenges coastal properties face.\n\nOur team repairs leaking joints, replaces rusted sections, corrects fall issues and ensures downpipes are draining properly. If a repair is the right solution, we’ll tell you. If replacement is more cost-effective long term, we’ll explain that too. All work is completed using genuine materials and backed by a written workmanship warranty.\n\nWe operate with a ‘no mess, no fuss’ approach. Free on-site quotes take 30 minutes or less, and you don’t need to be home as long as we have side access. When it comes to reliable gutter repairs in Rockingham, Big Mike’s Gutters delivers honest advice and quality workmanship.",
    localNotes: "Rockingham’s coastal exposure means gutters deteriorate faster than inland suburbs. Salt air corrosion is one of the most common causes of premature gutter failure in this area. We regularly repair homes throughout Rockingham and surrounding coastal estates, ensuring drainage systems are ready for winter storms.",
    faq: []
  },
  {
    slug: 'waikiki',
    name: 'Waikiki',
    postcode: '6169',
  },
  {
    slug: 'cockburn-central',
    name: 'Cockburn Central',
    postcode: '6164',
  },
  {
    slug: 'bibra-lake',
    name: 'Bibra Lake',
    postcode: '6163',
  },
  {
    slug: 'beeliar',
    name: 'Beeliar',
    postcode: '6164',
  },
  {
    slug: 'success',
    name: 'Success',
    postcode: '6164',
  },
  {
    slug: 'atwell',
    name: 'Atwell',
    postcode: '6164',
  },
  {
    slug: 'hammond-park',
    name: 'Hammond Park',
    postcode: '6164',
  },
  {
    slug: 'aubin-grove',
    name: 'Aubin Grove',
    postcode: '6164',
  },
  {
    slug: 'jandakot',
    name: 'Jandakot',
    postcode: '6164',
  },
  {
    slug: 'canning-vale',
    name: 'Canning Vale',
    postcode: '6155',
    heroHeadline: "Trusted Gutter Repairs in Canning Vale WA",
    heroSubheadline: "Protecting Canning Vale homes with expert roof plumbing solutions.",
    intro: "Big Mike’s Gutters provides professional gutter repairs in Canning Vale WA, helping homeowners protect their properties from heavy winter rainfall and harsh Perth sun. Many homes in Canning Vale were built in the 1990s and early 2000s, and original gutter systems are now reaching the stage where repairs or upgrades are needed.\n\nWith over 27 years of hands-on industry experience, we repair leaking gutters, sagging sections, rusted joins and blocked downpipes before they cause structural damage. Large family homes in Canning Vale often collect significant roof water during storms, making proper fall and drainage critical.\n\nIf a repair is the most cost-effective solution, we’ll recommend it. If replacement is required, we install genuine BlueScope Colorbond guttering designed to withstand Western Australia’s extreme UV exposure and seasonal downpours. All work is backed by our written workmanship warranty for peace of mind.\n\nOur process is simple and professional. Free on-site quotes take 30 minutes or less, and you don’t need to be home as long as we have side access. When it comes to reliable gutter repairs in Canning Vale, Big Mike’s Gutters delivers quality workmanship with a ‘no mess, no fuss’ approach.",
    localNotes: "Canning Vale homes often feature large roof spans and double-storey designs that require properly positioned downpipes to prevent overflow. We regularly service homes throughout Canning Vale and understand the drainage demands of modern estate properties.",
    faq: []
  },
  {
    slug: 'booragoon',
    name: 'Booragoon',
    postcode: '6154',
  },
  {
    slug: 'bull-creek',
    name: 'Bull Creek',
    postcode: '6149',
  },
  {
    slug: 'leeming',
    name: 'Leeming',
    postcode: '6149',
  },
  {
    slug: 'murdoch',
    name: 'Murdoch',
    postcode: '6150',
  },
  {
    slug: 'kardinya',
    name: 'Kardinya',
    postcode: '6163',
  },
  {
    slug: 'thornlie',
    name: 'Thornlie',
    postcode: '6108',
    heroHeadline: "Expert Gutter Repairs & Replacement in Thornlie",
    heroSubheadline: "No mess, no fuss, just a great job. Local Thornlie roof plumbers with 27+ years experience.",
    intro: "For homeowners in Thornlie, maintaining your gutters is essential to protecting your property from the harsh Western Australian elements. Whether you're dealing with rusted, leaking gutters or simply need an upgrade to improve your home's street appeal, Big Mike’s Gutters is your trusted local expert. With over 27 years of hands-on experience in the roof plumbing industry, we specialize in providing top-tier gutter repairs, complete gutter replacements, and new installations that stand the test of time.\n\nOur team understands the specific challenges faced by Thornlie properties, from the older established homes with original galvanized systems to newer builds requiring modern profiles. We exclusively use genuine BlueScope Colorbond steel for our replacements, ensuring your new gutters are not only durable and long-lasting but also perfectly matched to your home’s aesthetic. Colorbond gutters are designed to withstand our intense summer heat and heavy winter downpours without fading, chipping, or rusting prematurely.\n\nAt Big Mike’s Gutters, we pride ourselves on our 'no mess, no fuss' approach. We know that inviting a tradesperson into your home requires trust, which is why we treat every property as if it were our own. From the initial free measure and quote to the final clean-up, our process is seamless and professional. We don't just patch problems; we provide comprehensive solutions that address the root cause of your gutter issues, whether it's incorrect fall, blocked downpipes, or structural corrosion.\n\nAll our work is backed by a written workmanship warranty, giving you complete peace of mind. We believe in transparency and honest advice—if a simple repair will extend the life of your gutters, we’ll tell you. If a full replacement is the more cost-effective long-term option, we’ll explain why and guide you through the selection of profiles and colours. Choose the local specialists who care about quality. Choose Big Mike’s Gutters for reliable, efficient, and high-quality service in Thornlie.",
    localNotes: "Thornlie is a vibrant, established suburb with a mix of classic 70s and 80s homes and modern developments. Many of the older properties in the area still have their original guttering systems, which are now reaching the end of their lifespan. We frequently work in Thornlie, helping residents upgrade from old, rusted slotted gutters to modern, high-capacity Colorbond profiles that better handle heavy storm water. Our local knowledge ensures we can recommend the right drainage solutions for your specific roof type and block layout, keeping your home safe and dry through every season.",
    faq: [
      {
        question: "How much does gutter replacement cost in Thornlie?",
        answer: "Costs vary based on your home's size and the profile selected. We offer free, no-obligation on-site quotes to give you an exact price with no hidden fees."
      },
      {
        question: "How long will the job take?",
        answer: "Most residential gutter replacements in Thornlie are completed within 1-2 days, minimizing disruption to your daily routine."
      },
      {
        question: "Do I need to be home during the work?",
        answer: "No, as long as we have clear access to the perimeter of your house, we can complete the job while you're at work or out for the day."
      },
      {
        question: "Is there a warranty on your work?",
        answer: "Absolutely. We provide a written workmanship warranty on all our installations and repairs, plus the manufacturer's warranty on BlueScope Colorbond materials."
      },
      {
        question: "Should I repair or replace my gutters?",
        answer: "If you have minor leaks or loose brackets, a repair is often sufficient. However, if there is widespread rust or structural damage, replacement is usually the more economical long-term choice. We'll assess your gutters honestly and recommend the best course of action."
      }
    ]
  },
  {
    slug: 'gosnells',
    name: 'Gosnells',
    postcode: '6110',
    heroHeadline: "Local Gutter Repairs in Gosnells WA",
    heroSubheadline: "27+ years experience. Written warranty. No mess, no fuss.",
    intro: "Big Mike’s Gutters provides professional gutter repairs in Gosnells WA, helping homeowners keep their roof drainage working properly through Perth’s hot summers and heavy winter rainfall. Leaking gutters, rusted sections, sagging brackets and blocked downpipes can quickly lead to overflow, stained eaves and water damage around your home.\n\nWith over 27 years of hands-on roof plumbing experience, we repair gutters the right way—fixing the cause, not just the symptoms. We reseal leaking joints, replace damaged sections, refit brackets, correct fall where possible, and make sure downpipes are draining efficiently.\n\nIf your system can be repaired, we’ll recommend the most cost-effective option. If replacement is the smarter long-term solution, we’ll explain why and provide a clear plan using genuine BlueScope Colorbond materials suited to Perth conditions. All work is backed by a written workmanship warranty for peace of mind.\n\nWe keep the process simple. Free quotes take 30 minutes or less, and you don’t need to be home as long as we have side access. For dependable gutter repairs in Gosnells, choose Big Mike’s Gutters for quality workmanship and honest advice.",
    localNotes: "Gosnells has many established homes where original gutters and downpipes can struggle during heavy rain. We regularly service Gosnells and often see overflow issues caused by corrosion, blocked outlets, or insufficient drainage—repairs and small upgrades can make a big difference.",
    faq: []
  },
  {
    slug: 'armadale',
    name: 'Armadale',
    postcode: '6112',
    heroHeadline: "Affordable Gutter Repairs in Armadale WA",
    heroSubheadline: "Honest advice, quality workmanship, 27+ years experience. No mess, no fuss.",
    intro: "Big Mike’s Gutters provides reliable gutter repairs in Armadale WA, helping homeowners prevent leaks, overflow and water damage during heavy winter rain. Many homes in Armadale have older gutter systems that can develop rust, leaking joins, sagging brackets and poor fall over time.\n\nWith more than 27 years of roof plumbing experience, we focus on practical, cost-effective repairs that restore proper drainage and extend the life of your gutters. We can replace rusted sections, reseal joins, refit loose brackets and identify drainage issues like blocked downpipes or incorrect fall.\n\nIf a repair is all you need, we’ll tell you. If replacement is the smarter long-term option, we’ll explain why and provide clear recommendations. Where replacement is required, we use genuine BlueScope Colorbond materials designed for Perth conditions. All work is backed by a written workmanship warranty for peace of mind.\n\nFree on-site quotes take 30 minutes or less, and you don’t need to be home as long as we have side access. For professional gutter repairs in Armadale, choose Big Mike’s Gutters for straightforward service and a clean finish.",
    localNotes: "Armadale has a mix of established homes and newer builds, and older properties often have gutters at the end of their usable life. We regularly service the Armadale area and recommend repair or upgrade options that suit your roof style and stormwater needs.",
    faq: []
  },
];

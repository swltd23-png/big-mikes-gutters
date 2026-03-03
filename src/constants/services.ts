export interface ServiceConfig {
  slug: string;
  name: string; // Display name e.g. "Gutter Repairs"
  pageTitleFormat: string; // e.g. "{service} {suburb}"
  metaTitleFormat: string; // e.g. "{service} {suburb} | Replacement & Installation"
  metaDescriptionFormat: string; // e.g. "Expert {service} in {suburb}. Local roof plumbers..."
  heroTitleFormat?: string;
  heroParagraphFormat?: string;
  introContent?: string;
  benefits?: { title: string; content: string }[];
  process?: { title: string; steps: string[] };
  faqs?: { question: string; answer: string }[];
  cta?: { headline: string; text: string };
}

export const SERVICES: ServiceConfig[] = [
  {
    slug: 'gutter-repairs',
    name: 'Gutter Repairs',
    pageTitleFormat: '{service} {suburb}',
    metaTitleFormat: '{service} {suburb} | Big Mike\'s Gutters',
    metaDescriptionFormat: 'Expert {service_lower} in {suburb}. Local roof plumbers for all gutter needs. Get a free quote today.',
    heroTitleFormat: "We fix gutters.",
    heroParagraphFormat: "Professional gutter repairs, full gutter replacement and new gutter installation across {suburb} by a local roof plumber with 27+ years roof & gutter experience.",
    introContent: `At Big Mike's Gutters, we understand that even small gutter issues can lead to significant water damage if left unchecked. For homeowners in {suburb}, our harsh WA climate means gutters take a beating from intense sun, heavy storms, and salt air.

Our gutter repair service is designed to extend the life of your existing system. We don't just patch holes; we identify the root cause of leaks, whether it's rust, joint failure, or incorrect fall. We provide comprehensive repairs including resealing corners, replacing damaged sections, and re-securing sagging brackets.

Don't let a dripping gutter damage your eaves or foundation. Our local {suburb} team provides prompt, reliable repairs to keep your home watertight and protected.`,
    benefits: [
      { title: "Leak Elimination", content: "We use high-grade sealants and proper techniques to stop leaks for good." },
      { title: "Rust Treatment", content: "We treat minor rust spots and replace severely corroded sections to prevent spread." },
      { title: "Re-aligning Fall", content: "We adjust your gutters to ensure water flows correctly to the downpipes, preventing pooling." }
    ],
    process: {
      title: "Our Repair Process",
      steps: [
        "Comprehensive Gutter Inspection",
        "Leak & Rust Identification",
        "Cleaning & Surface Preparation",
        "Precision Sealing & Repair",
        "Water Flow Testing"
      ]
    },
    faqs: [],
    cta: {
      headline: "Fix Your Gutters Today",
      text: "Stop the leaks before they cause damage. Call us for a free quote in {suburb}."
    }
  },
  {
    slug: 'gutter-replacement',
    name: 'Gutter Replacement',
    pageTitleFormat: '{service} {suburb}',
    metaTitleFormat: '{service} {suburb} | Big Mike\'s Gutters',
    metaDescriptionFormat: 'Complete {service_lower} in {suburb}. High quality Colorbond gutters. Get a free quote today.',
    heroTitleFormat: "Complete Gutter Replacement in {suburb}",
    heroParagraphFormat: "Don't let rusted, leaking gutters damage your {suburb} home. We provide full gutter replacement using premium Colorbond steel, built to withstand WA's harsh climate.",
    introContent: `When repairs are no longer enough, a full gutter replacement is the best investment for your {suburb} home. Old, rusted, or incorrectly installed gutters can cause serious water damage to your eaves, fascia, and even your home's foundation.

We specialise in complete gutter replacements using genuine BlueScope Colorbond steel. Designed for Australian conditions, these gutters are rot-resistant, heat-reflective, and available in over 20 designer colours to match your roof and style.

Our team removes your old system, inspects the fascia for rot, and installs your new gutters with precision. We ensure the correct fall for optimal drainage, protecting your home from the heavy downpours we experience in WA. Upgrade your home's protection and curb appeal today.`,
    benefits: [
      { title: "Genuine Colorbond Steel", content: "Built for WA conditions with a baked-on finish that resists chipping, peeling, and cracking." },
      { title: "Custom On-Site Fabrication", content: "We measure and cut gutters on-site at your {suburb} property for a perfect, seamless fit." },
      { title: "27 Years Experience", content: "Our master roof plumbers ensure every bracket and joint is installed to the highest standard." }
    ],
    process: {
      title: "Replacement Process",
      steps: [
        "Free On-Site Measure & Quote",
        "Safe Removal of Old Gutters",
        "Fascia & Eave Inspection",
        "Installation of New Brackets & Gutters",
        "Site Clean & Waste Removal"
      ]
    },
    faqs: [
      { question: "How long does a full replacement take?", answer: "Most residential gutter replacements in {suburb} are completed within 1-2 days, depending on the size of your home." },
      { question: "Do I need to be home?", answer: "Not necessarily. As long as we have clear access around the exterior, we can carry out the work while you're out." },
      { question: "What profiles do you offer?", answer: "We supply all major profiles including Colonial, Sheerline, and Box gutters to match your home's style." }
    ],
    cta: {
      headline: "Upgrade Your Home's Protection",
      text: "Get a free quote for Colorbond gutter replacement in {suburb}."
    }
  },
  {
    slug: 'gutter-installation',
    name: 'Gutter Installation',
    pageTitleFormat: '{service} {suburb}',
    metaTitleFormat: '{service} {suburb} | Big Mike\'s Gutters',
    metaDescriptionFormat: 'Professional {service_lower} in {suburb}. We install premium Colorbond gutters. Get a free quote today.',
    heroTitleFormat: "New Gutter Installation in {suburb}",
    heroParagraphFormat: "Building a new home or extension in {suburb}? We install high-performance gutter systems designed for maximum durability and flow.",
    introContent: `A quality gutter installation is critical for the longevity of any building. In {suburb}, where storm surges can be intense, you need a system that can handle high volumes of water without overflowing.

We provide professional gutter installation for new builds, extensions, and renovations. Our team calculates the precise roof area to determine the correct gutter profile and downpipe ratio, ensuring your system is compliant and efficient.

Using only top-tier materials like Colorbond and Zincalume, we install gutters that look sharp and perform flawlessly. From modern box gutters to classic profiles, we have the expertise to deliver a superior finish for your project.`,
    benefits: [
      { title: "Correct Flow Calculations", content: "We ensure your system has the capacity to handle heavy WA downpours." },
      { title: "Seamless Integration", content: "We match profiles and colours to complement your new build or extension perfectly." },
      { title: "Leak-Free Guarantee", content: "Our installations are pressure-tested and backed by a workmanship warranty." }
    ],
    process: {
      title: "Installation Steps",
      steps: [
        "Plan Review & Flow Calculation",
        "Material Selection & Ordering",
        "Precision Bracket Installation",
        "Gutter Hanging & Joint Sealing",
        "Final Quality Inspection"
      ]
    },
    faqs: [
      { question: "What is the best gutter profile?", answer: "It depends on your roof style and rainfall capacity needs. We can recommend the best option during our quote." },
      { question: "Do you install box gutters?", answer: "Yes, we specialise in box gutters for modern homes and commercial buildings in {suburb}." },
      { question: "Can you match my roof colour?", answer: "Absolutely. We offer the full range of Colorbond colours to match or contrast with your roof." }
    ],
    cta: {
      headline: "Start Your Project Right",
      text: "Contact us for expert gutter installation in {suburb}."
    }
  },
  {
    slug: 'fascia-replacement',
    name: 'Fascia Replacement',
    pageTitleFormat: '{service} {suburb}',
    metaTitleFormat: '{service} {suburb} | Big Mike\'s Gutters',
    metaDescriptionFormat: 'Expert {service_lower} in {suburb}. Replace damaged fascia and gutters. Get a free quote today.',
    heroTitleFormat: "Fascia Replacement & Repair in {suburb}",
    heroParagraphFormat: "Rotten timber fascia? We replace it with durable metal fascia or fresh timber to support your new gutters in {suburb}.",
    introContent: `The fascia board is the backbone of your gutter system. In many older {suburb} homes, timber fascias can rot over time due to water exposure, causing gutters to sag or detach.

We offer comprehensive fascia replacement services. We can replace rotten timber with new, treated timber, or upgrade you to a maintenance-free Colorbond metal fascia cover. Metal fascia covers are a popular choice in WA as they never need painting and protect the timber underneath from future rot.

Ensure your gutters have a solid foundation. Our team inspects your rafters and eaves, ensuring the new fascia is structurally sound and ready to hold your new gutter system for decades to come.`,
    benefits: [
      { title: "Rot Elimination", content: "We remove damaged timber and replace it with solid, treated wood or metal solutions." },
      { title: "Maintenance Free", content: "Colorbond fascia covers require no painting and look brand new for years." },
      { title: "Structural Integrity", content: "A strong fascia ensures your gutters stay straight and drain correctly." }
    ],
    process: {
      title: "Fascia Work Process",
      steps: [
        "Gutter Removal",
        "Fascia Inspection & Rot Removal",
        "Rafter Repair (if needed)",
        "New Fascia Installation",
        "Gutter Re-installation"
      ]
    },
    faqs: [
      { question: "Do I need to replace my gutters too?", answer: "Often yes, as gutters are attached to the fascia. However, if your gutters are new, we can sometimes re-install them." },
      { question: "What is a fascia cover?", answer: "It's a Colorbond steel capping that goes over your timber fascia, protecting it and eliminating the need for painting." },
      { question: "How do I know if my fascia is rotten?", answer: "Look for peeling paint, soft wood, or gutters that are pulling away from the house." }
    ],
    cta: {
      headline: "Strengthen Your Roofline",
      text: "Get a quote for fascia replacement in {suburb} today."
    }
  },
  {
    slug: 'downpipe-replacement',
    name: 'Downpipe Replacement',
    pageTitleFormat: '{service} {suburb}',
    metaTitleFormat: '{service} {suburb} | Big Mike\'s Gutters',
    metaDescriptionFormat: 'Professional {service_lower} in {suburb}. Upgrade your downpipes for better drainage. Get a free quote today.',
    heroTitleFormat: "Downpipe Replacement in {suburb}",
    heroParagraphFormat: "Blocked or rusted downpipes? We upgrade your drainage system in {suburb} with high-capacity Colorbond downpipes.",
    introContent: `Downpipes are the unsung heroes of your roof plumbing. If they are rusted, blocked, or insufficient in number, your gutters will overflow during heavy {suburb} storms.

We replace old, round plastic or rusted metal downpipes with modern, high-capacity rectangular or round Colorbond downpipes. We can also add additional downpipes to your system to improve flow and prevent overflow.

Proper drainage protects your home's foundation from water damage. Our team ensures your downpipes are correctly positioned and connected to your soakwells or stormwater system for maximum efficiency.`,
    benefits: [
      { title: "Improved Flow", content: "Larger modern downpipes handle more water, reducing gutter overflow risk." },
      { title: "Modern Look", content: "Colorbond downpipes instantly update the look of your home." },
      { title: "Rust Free", content: "We use PVC or Colorbond steel that resists rust and corrosion." }
    ],
    process: {
      title: "Downpipe Upgrade",
      steps: [
        "Flow Capacity Assessment",
        "Old Downpipe Removal",
        "New Drop Outlet Installation",
        "Downpipe Fixing & Sealing",
        "Stormwater Connection Check"
      ]
    },
    faqs: [
      { question: "Can you move a downpipe?", answer: "Yes, we can relocate downpipes to better suit your home's layout or drainage needs." },
      { question: "Do you paint the downpipes?", answer: "We install pre-painted Colorbond downpipes, so no painting is required." },
      { question: "How many downpipes do I need?", answer: "It depends on your roof area. We calculate the required number to ensure compliance." }
    ],
    cta: {
      headline: "Improve Your Drainage",
      text: "Book a downpipe replacement quote in {suburb}."
    }
  },
  {
    slug: 'colorbond-gutters',
    name: 'Colorbond Gutters',
    pageTitleFormat: '{service} {suburb}',
    metaTitleFormat: '{service} {suburb} | Big Mike\'s Gutters',
    metaDescriptionFormat: 'Genuine {service_lower} in {suburb}. Huge range of colours and profiles. Get a free quote today.',
    heroTitleFormat: "Genuine Colorbond Gutters in {suburb}",
    heroParagraphFormat: "Upgrade your home with the best. We supply and install genuine BlueScope Colorbond gutters in {suburb} for lasting beauty and performance.",
    introContent: `When it comes to gutters in WA, Colorbond is the gold standard. Designed and tested for Australian conditions, Colorbond steel is far superior to standard painted metal.

We are proud to supply and install the full range of Colorbond guttering for {suburb} homes. With 22 core colours and a range of matt finishes, you can perfectly match your roof, fascia, or window frames.

Colorbond gutters feature five layers of protection against corrosion, chipping, and flaking. They are non-combustible and easy to maintain, making them the ideal choice for the {suburb} climate. Trust us to deliver a genuine product with a flawless installation.`,
    benefits: [
      { title: "22+ Colours", content: "A massive range to suit any architectural style, from classic to contemporary." },
      { title: "5-Layer Protection", content: "Advanced coating technology ensures your gutters last for decades." },
      { title: "Low Maintenance", content: "The baked-on finish resists dirt and requires minimal cleaning." }
    ],
    process: {
      title: "Colorbond Selection",
      steps: [
        "Colour Consultation",
        "Profile Selection (Sheerline, Quad, etc.)",
        "On-Site Measurement",
        "Professional Installation",
        "Warranty Registration"
      ]
    },
    faqs: [
      { question: "Is it real Colorbond?", answer: "Yes, we only use genuine BlueScope Colorbond steel, stamped for authenticity." },
      { question: "Does the colour fade?", answer: "Colorbond is tested to withstand the harsh Australian sun with minimal fading over many years." },
      { question: "Can I mix colours?", answer: "Yes, many homeowners choose a different colour for gutters and fascia to create a contrast." }
    ],
    cta: {
      headline: "Choose the Best for Your Home",
      text: "Explore Colorbond gutter options in {suburb} today."
    }
  }
];

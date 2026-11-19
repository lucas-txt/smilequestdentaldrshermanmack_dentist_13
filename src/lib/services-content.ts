import type { Review } from "./reviews";

export type Treatment = {
  title: string;
  kicker?: string;
  body: string[];
  bullets?: string[];
  note?: string;
};

export type ServiceContent = {
  slug: string;
  name: string;
  h1: string;
  eyebrow: string;
  tagline: string;
  description: string;
  intro: string[];
  valueProps: string[];
  image: string;
  icon: string;
  treatments: Treatment[];
  approach?: {
    title: string;
    kicker?: string;
    body: string[];
  };
  testimonial?: Review;
  ctaTitle: string;
  ctaText: string;
  ctaLabel?: string;
};

const byline = {
  general: {
    name: "Heidi L.",
    quote:
      "Great service. They make you feel so comfortable. Very gentle when cleaning teeth and really listen to your concerns.",
    source: "Google" as const,
  },
  cosmetic: {
    name: "Michael T.",
    quote:
      "Love SmileQuest. I'm always treated with respect and have my questions and concerns addressed. Explanations are always given in easily understood language. And oh by the way, the workmanship is excellent.",
    source: "Google" as const,
  },
  restorative: {
    name: "Patty C.",
    quote:
      "As always, my experience was as wonderful as a dentist visit can be! 😉 They are all very friendly, helpful, gentle and kind.",
    source: "Google" as const,
  },
  childrens: {
    name: "Roxane",
    quote:
      "Awesome experience, my daughter was scared but they were so kind they explained everything and she was so at ease!! I got to go back with her, and she was so happy!! Overall the best experience you could ask for!!",
    source: "Google" as const,
  },
  endo: {
    name: "Melissa S.",
    quote:
      "I’ve been a patient at SmileQuest for a year now and my experience with them from day one has been great. The staff are very polite and professional and they are very accommodating and make you feel very comfortable from the moment you walk into their office. I would highly recommend them to all my friends and family.",
    source: "Google" as const,
  },
  emergency: {
    name: "Chanda Arneson",
    quote:
      "We had a mild emergency tooth issue with my 6yr old son who hasn't been to Smile Quest until today. We had fantastic interactions. Everyone…",
    source: "Google" as const,
  },
  general2: {
    name: "Elona O.",
    quote:
      "Had a great cleaning... super sweet, attentive hygienist! My whole experience was phenomenal!",
    source: "Google" as const,
  },
};

export const serviceContent: ServiceContent[] = [
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    h1: "General Dentistry",
    eyebrow: "Everyday care, built around you",
    tagline: "Your dental home for lifelong healthy smiles",
    description:
      "Access a complete range of general dentistry services so you can maintain your everyday oral health and prevent major dental problems.",
    intro: [
      "At SmileQuest, we believe general dentistry is much more than just stopping by for professional cleanings and checkups. It’s about finding a dental home you can trust. Our team welcomes patients of all ages and backgrounds. We provide comprehensive dental care for adults and families with children of all ages.",
      "Our approach involves taking the time to get to know you and your goals and offering thoughtful, evidence-based care that supports your long-term oral health. Our team takes twice the required continuing education courses each year to keep up with the latest innovations in dentistry so that we can provide the best possible general dentistry services to you and your family.",
    ],
    valueProps: [
      "MAINTAIN STRONG, HEALTHY TEETH & GUMS",
      "CATCH DENTAL CONCERNS EARLY",
      "AVOID COMPLEX TREATMENTS LATER",
    ],
    image: "/assets/images/general-home.webp",
    icon: "/assets/images/general.svg",
    treatments: [
      {
        title: "Professional Dental Cleaning",
        kicker: "KEEP YOUR SMILE HEALTHY & BRIGHT",
        body: [
          "Routine cleanings are essential for your long-term oral health. Our hygienists gently remove plaque and tartar buildup in areas that can’t be reached through brushing or flossing alone. We tailor every visit to your needs, whether it’s a straightforward cleaning or extra support, to prevent cavities and decay.",
          "Professional dental cleanings at your regular checkups with us also give our team the chance to catch any concerns before they become major problems for you. We’re here to help you maintain a fresh, healthy smile.",
        ],
      },
      {
        title: "Oral Cancer Screening",
        kicker: "BECAUSE EARLY DETECTION IS KEY",
        body: [
          "Oral cancer can develop without pain or obvious signs, which is why regular oral cancer screenings are important. At SmileQuest, our team checks for signs of abnormal tissue using visual and physical evaluation techniques. These include gently feeling the tissues of the mouth, neck, and jaw and closely evaluating the tongue, cheeks, lips, and roof of the mouth.",
          "These screenings are quick, noninvasive, and part of every routine evaluation.",
        ],
      },
      {
        title: "Fluoride Varnish",
        kicker: "EXTRA STRENGTH FOR ENAMEL PROTECTION",
        body: [
          "Fluoride varnish is a safe, effective way to strengthen tooth enamel and reduce the risk of cavities. It’s especially helpful for children, adults with sensitive teeth, and anyone prone to enamel erosion. Applied once we complete your dental cleaning, fluoride varnish will protect your teeth against future decay by encouraging natural remineralization.",
        ],
      },
      {
        title: "Dental Sealants",
        kicker: "AVOID CAVITIES IN THOSE HARD-TO-REACH AREAS",
        body: [
          "Molars and premolars have deep grooves that can trap food and bacteria, making them vulnerable to cavities, especially for children. Dental sealants are protective coatings we quickly apply to these grooves to keep them clean and decay-free. Sealants are often recommended for children and teens, but adults can benefit from dental sealants as well.",
        ],
      },
      {
        title: "Soft Spot & Pre-Cavity Treatments",
        kicker: "NONINVASIVE OPTIONS TO PROTECT YOUR TOOTH STRUCTURE",
        body: [
          "Before a cavity forms, weakened areas in the enamel, known as soft spots, may begin to form. Left untreated, they will progress into full cavities. We offer noninvasive treatment options to remineralize the enamel and help preserve the natural tooth structure. Treatments such as Curodont and silver diamine fluoride are used to stop decay in its tracks. These painless options support healthy enamel and are excellent preventive options for both children and adults.",
        ],
      },
      {
        title: "Tooth-Colored Fillings",
        kicker: "NATURAL-LOOKING RESTORATIONS FOR CAVITIES",
        body: [
          "When decay has progressed beyond a soft spot, a filling is needed to restore the tooth’s structure. At SmileQuest, we use tooth-colored, composite material that matches the natural shade of your teeth. This will ensure your restoration blends in beautifully while restoring strength and function.",
        ],
      },
      {
        title: "Dental Crowns",
        kicker: "RESTORE STRUCTURE & STRENGTH TO DAMAGED TEETH",
        body: [
          "Crowns are full-coverage restorations used to protect teeth that are cracked, worn down, or severely decayed. At SmileQuest, we use a variety of materials based on your unique needs. These include zirconia, lithium disilicate, gold, and porcelain fused to metal (PFM). Stainless steel crowns are available for children and are occasionally recommended for adults when appropriate.",
        ],
      },
      {
        title: "Tooth Extraction",
        kicker: "SAFE, COMFORTABLE TOOTH REMOVAL",
        body: [
          "When a tooth is too damaged to repair, or if it’s affecting your overall oral health, your dentist may recommend an extraction. Our team at SmileQuest provides gentle, comfortable tooth removal in a calm environment, always taking time to explain the process. We will also provide you with detailed aftercare instructions to help you with the healing process.",
        ],
      },
      {
        title: "Wisdom Tooth Removal",
        kicker: "IN-HOUSE SURGICAL SERVICES FOR WISDOM TEETH",
        body: [
          "Impacted or partially erupted wisdom teeth can cause discomfort, infection, or damage to nearby teeth. At SmileQuest, we can remove many wisdom teeth right here in our office while keeping patients comfortable and at ease. Sometimes with more complex cases, a referral is needed. We have trusted referral partners who have excellent patient outcomes. Our team will evaluate your case with digital imaging and walk you through the process to ensure you’re informed and comfortable throughout your treatment, even if a referral is required.",
        ],
      },
      {
        title: "Periodontal Therapy",
        kicker: "SUPPORTING HEALTHY GUMS AND A HEALTHY SMILE",
        body: [
          "Gum disease is one of the leading causes of tooth loss, and it often begins without obvious symptoms. We offer comprehensive periodontal care, including deep cleanings (scaling and root planing), follow-up therapy, and long-term periodontal maintenance plans. Healthy gums are the foundation of every healthy smile. Our experienced team at SmileQuest is here to help you keep yours in great shape.",
        ],
      },
      {
        title: "Nightguards and Mouth Guards",
        kicker: "CUSTOM-MADE FOR TEETH AND JAW PROTECTION",
        body: [
          "Whether you grind your teeth at night or need protection for sports, our custom nightguards and mouth guards are fabricated to fit your mouth precisely. Unlike store-bought versions, custom guards offer greater comfort, better durability, and more effective protection so you can avoid damage.",
        ],
      },
      {
        title: "Sedation",
        kicker: "FOR COMFORTABLE, STRESS-FREE EXPERIENCES",
        body: [
          "Dental anxiety shouldn’t get in the way of your care. We offer two forms of safe, in-office sedation to help make your visit more comfortable:",
        ],
        bullets: [
          "Nitrous oxide (laughing gas) — a fast-acting option that wears off quickly, so you can resume normal activity right away.",
          "Oral sedation — a prescribed medication that is taken before your treatment to help you feel calm and relaxed.",
        ],
        note: "These methods are never combined for safety reasons, and we will help you choose the option best suited to your needs.",
      },
    ],
    testimonial: byline.general,
    ctaTitle: "Ready for a Dental Home that Puts Your Long-Term Health First?",
    ctaText:
      "Schedule your visit with SmileQuest and experience care that goes well beyond the basics.",
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    h1: "Cosmetic Dentistry",
    eyebrow: "Confidence, designed around your smile",
    tagline: "Confidence starts with a smile you love",
    description:
      "Improve your smile and fix imperfections, or totally transform it into a new smile you’ll love. We offer a range of cosmetic dentistry solutions.",
    intro: [
      "At SmileQuest, cosmetic dentistry isn’t just about how your smile looks—it’s about how you feel. Our experienced team will discuss your goals and work collaboratively with you to create a smile that feels just right for you.",
      "We can whiten and brighten your teeth, fix unwanted gaps or chips, or completely make over your smile, whatever you need. Our personalized treatment plans will help you achieve the results you’re looking for.",
    ],
    valueProps: ["FIX CHIPS, STAINS, OR GAPS", "TRANSFORM YOUR SMILE", "FEEL CONFIDENT"],
    image: "/assets/images/cosmetic-home.webp",
    icon: "/assets/images/cosmetic.svg",
    treatments: [
      {
        title: "Teeth Whitening",
        kicker: "BRIGHTEN YOUR SMILE, IN-OFFICE OR AT HOME",
        body: [
          "Stained or discolored teeth are some of the most common cosmetic concerns. Fortunately, they are also the simplest to fix. At SmileQuest, we offer two effective whitening options:",
        ],
        bullets: [
          "In-office whitening — a powerful professional treatment that lightens your smile in just one visit. This is an excellent option if you’re looking for quick results for a special occasion, or you simply don’t want to wait.",
          "Custom take-home trays — we create personalized whitening trays that fit your teeth perfectly. You’ll use them at home with a professional-grade gel that will gradually whiten your teeth.",
        ],
      },
      {
        title: "Dental Bonding",
        kicker: "A SIMPLE FIX FOR CHIPS, GAPS AND DISCOLORATION",
        body: [
          "Dental bonding is a fast, minimally invasive way to correct minor teeth imperfections. Using a tooth-colored composite resin, we can reshape chipped or uneven teeth, close small gaps, and fix discoloration. Bonding only takes a single visit and doesn’t require much removal (if any) of your natural tooth structure, making it an ideal choice for patients looking for a cost-effective cosmetic upgrade.",
        ],
      },
      {
        title: "Porcelain Veneers",
        kicker: "CREATE A STRAIGHTER, BRIGHTER, MORE BALANCED SMILE",
        body: [
          "Veneers are thin layers of custom-made porcelain that cover the front surface of your tooth. They’re one of the most versatile cosmetic options available and can correct issues, like discoloration, uneven spacing, worn edges, minor misalignment, or irregular shape. Each veneer is handcrafted to suit your smile and natural tooth shade. So you can be confident you won’t just get a perfect smile, but a smile that still looks like yours. Veneers are bonded permanently in place and can last for many years with proper care and maintenance.",
        ],
      },
      {
        title: "Crowns",
        kicker: "NATURAL-LOOKING COSMETIC RESTORATIONS",
        body: [
          "Dental crowns are often thought of as a restorative treatment, but they also offer cosmetic advantages. If you have a tooth that’s severely worn, cracked, misshapen, or discolored, a crown can restore both appearance and function. At SmileQuest, we offer high-quality crowns made from materials like zirconia, lithium disilicate, porcelain fused to metal (PFM), and gold. Each crown is carefully crafted in partnership with trusted local labs, and our experienced team takes the time to get everything right, from fit to finish.",
        ],
      },
      {
        title: "Invisalign",
        kicker: "STRAIGHTEN YOUR TEETH WITHOUT METAL BRACES",
        body: [
          "Crooked or crowded teeth can affect the appearance of your smile, but did you know they can also make cleaning more difficult and contribute to uneven tooth wear and jaw pain? Invisalign is a contemporary alternative to traditional braces that uses custom-made sets of clear aligners to gently move your teeth into position.",
          "Invisalign is almost invisible, certainly less noticeable than traditional braces. You’ll wear each set of aligners for a set period of time, then switch to the next as your teeth gradually shift into place. And because Invisalign aligners are removable, you’ll still be able to enjoy all your favorite foods, and it will be easy to maintain your normal brushing and flossing routine.",
          "Many patients prefer Invisalign over traditional braces because they use a smooth plastic that is more comfortable than wires and brackets. The SmileQuest team will guide you through the Invisalign process from start to finish, tracking your progress and making adjustments as needed. The result? A straighter smile that looks and feels just right.",
        ],
      },
      {
        title: "Smile Makeovers",
        kicker: "CUSTOM TREATMENT PLANS FOR LIFE-CHANGING RESULTS",
        body: [
          "A smile makeover combines two or more cosmetic treatments to completely transform your smile. Whether you’ve been living with chips, unevenness, discoloration, or wear, SmileQuest can create a personalized plan to address your concerns and bring out the best in your smile.",
          "Depending on your goals, a smile makeover may include teeth whitening, veneers, bonding, crowns, Invisalign, or a combination of these treatments tailored specifically to your needs. We’ll start with a detailed consultation to understand what you’re hoping to achieve. It’s definitely not a one-size-fits-all approach when it comes to smile makeovers.",
        ],
      },
    ],
    testimonial: byline.cosmetic,
    ctaTitle: "Let’s Talk About Your Smile Goals",
    ctaText:
      "Whether you want a small change or a full transformation, SmileQuest is here to help. Our calm, caring environment makes it easy to explore your options without pressure. We’ll listen, answer your questions, and guide you toward the treatments that align best with your lifestyle and vision.",
  },
  {
    slug: "restorative-dentistry",
    name: "Restorative Dentistry",
    h1: "Restorative Dentistry",
    eyebrow: "Strength, function, and comfort restored",
    tagline: "Bring back strength, function & comfort",
    description:
      "From simple fillings to full mouth rehabilitations, the team at SmileQuest is highly experienced in restoring damaged smiles.",
    intro: [
      "At SmileQuest, we take a comprehensive approach to restoring dental health. Whether you need a single filling or full-mouth rehabilitation, our team will ensure your comfort and long-term oral health throughout your treatment journey.",
      "We use high-quality materials, the latest technology, and decades of combined clinical experience to professionally restore your smile to full function.",
    ],
    valueProps: [
      "REGAIN FULL FUNCTION",
      "REPLACE MISSING OR DAMAGED TEETH",
      "CREATE NATURAL-LOOKING RESULTS",
    ],
    image: "/assets/images/restorative-home.webp",
    icon: "/assets/images/restorative.svg",
    treatments: [
      {
        title: "Dental Crowns",
        kicker: "RESTORE DAMAGED TEETH WITH CUSTOM CROWNS",
        body: [
          "When a tooth is cracked, decayed, or structurally weakened, a dental crown restores both strength and appearance. Using digital imaging, the SmileQuest team will custom-create your crown from high-quality materials best suited to your situation. Options include zirconia, lithium disilicate, and PFM (porcelain fused to metal). Stainless steel dental crowns are also available for children and adults when necessary.",
        ],
      },
      {
        title: "Dental Bridges",
        kicker: "FILL THE GAPS WITH A PERMANENT SOLUTION",
        body: [
          "A dental bridge offers an effective solution for missing teeth. Bridges are anchored to the teeth on either side of the gap and will restore your chewing function. Another positive aspect of dental bridges is that they stop your surrounding teeth from moving out of place.",
          "At SmileQuest, we craft each dental bridge to blend naturally with your existing teeth. The materials we use are durable and support both aesthetics and longevity. Our team will walk you through your options to ensure a comfortable, functional fit that supports your bite and smile.",
        ],
      },
      {
        title: "Dentures",
        kicker: "CUSTOM PARTIALS AND FULL DENTURES",
        body: [
          "If you are missing a few or all of your teeth, dentures are a time-tested and affordable solution. At SmileQuest, we offer both full and partial dentures, which means more control over the fit, timeline, and final result.",
          "Today’s dentures are lighter, more lifelike, and more comfortable than ever before. Whether you’re receiving your first set or replacing an older one, our team will take the time to make sure your dentures feel as good as they look.",
        ],
      },
      {
        title: "Implant-Supported Dentures",
        kicker: "A SECURE, STABLE UPGRADE TO TRADITIONAL DENTURES",
        body: [
          "Looking for more stability than traditional dentures can offer? Implant-supported dentures offer premium stability and support. These dentures attach to dental implants placed in the jaw for the most secure fit and improved function. We offer several types of implant-supported dentures, including hybrid dentures, implant-retained dentures, and leave-in dentures.",
          "Implant-supported dentures offer better chewing ability, greater comfort, and no slipping or clicking, which can happen with traditional dentures. They also help preserve your jawbone structure, making them a long-term investment in your health and confidence.",
        ],
      },
      {
        title: "Dental Implants",
        kicker: "PERMANENT TOOTH REPLACEMENT",
        body: [
          "Dental implants are the most durable and natural-feeling option to replace missing teeth. Each implant acts as a replacement root and is topped with a custom crown, bridge, or denture, depending on your needs.",
          "At SmileQuest, we carefully plan and place your implants with a tailored treatment plan. We use 3D imaging, advanced surgical techniques, and high-quality materials to ensure a stable, comfortable outcome. Whether you need to replace one tooth or several, dental implants are a popular and effective restorative solution.",
        ],
      },
      {
        title: "Full Mouth Rehabilitation",
        kicker: "A COMPREHENSIVE PLAN TO REBUILD YOUR SMILE",
        body: [
          "If you’re suffering from widespread dental damage, multiple missing teeth, or severe wear, a full mouth rehabilitation can give you a fresh start. This isn’t a one-size-fits-all treatment. Rather, it’s a personalized combination of restorative services planned to rebuild your smile from the ground up. Depending on your needs, a full mouth rehabilitation may include:",
        ],
        bullets: [
          "Crowns and bridges",
          "Implants or implant-supported dentures",
          "Periodontal therapy",
          "Bite adjustment",
          "Cosmetic enhancements",
        ],
        note:
          "At SmileQuest, we use a phased approach to your care. This starts with thorough diagnostics and a plan tailored to your health, timeline, and goals. The result? A functional, comfortable, healthy smile that looks great and lasts the distance.",
      },
    ],
    approach: {
      title: "Rebuilding Function for Long-Term Health",
      kicker: "OUR APPROACH",
      body: [
        "SmileQuest’s restorative dentistry services restore your smile and your quality of life.",
        "We take the time to understand how your teeth are functioning now and where issues might arise down the line. That means making sure your bite is well aligned and stable, your teeth are working as they should, and your restorations last.",
      ],
    },
    testimonial: byline.restorative,
    ctaTitle: "Let’s Restore Your Smile",
    ctaText:
      "You don’t have to live with discomfort, missing teeth, or worn-down restorations. Whether you need a minor repair or a comprehensive solution, at SmileQuest, you will find a team known for their honesty, skill, and compassion.",
  },
  {
    slug: "childrens-dentistry",
    name: "Children’s Dentistry",
    h1: "Children’s Dentistry",
    eyebrow: "A gentle start for growing smiles",
    tagline: "A dental home for your whole family",
    description:
      "The team at SmileQuest Dental provides gentle, reassuring care for kids of all ages so they can start healthy habits early.",
    intro: [
      "At SmileQuest, we care for smiles at every age—and that includes your little ones. Our team is here to create a calm, welcoming space where kids feel safe, supported, and excited to visit the dentist. We believe the best way to build lifelong oral health is by creating positive dental experiences early on.",
      "We already care for many parents and grandparents in our community, and we’re honored when families trust us to care for their children too. With gentle techniques, age-appropriate education, and a focus on comfort, we make dental visits feel easy for kids and reassuring for parents.",
    ],
    valueProps: [
      "GIVE YOUR CHILD A POSITIVE START TO DENTAL CARE",
      "PREVENT DECAY & CAVITIES",
      "BUILD HEALTHY DENTAL HABITS FROM AN EARLY AGE",
    ],
    image: "/assets/images/childrens-home.webp",
    icon: "/assets/images/childrens.svg",
    treatments: [
      {
        title: "Preventive Care",
        kicker: "CREATING HEALTHY ROUTINES THAT LAST A LIFETIME",
        body: [
          "Good oral habits start early. Regular dental cleanings help us remove plaque and tartar that brushing can miss, while also giving us the chance to spot issues before they become problems. During each visit, our team will provide kids and parents with advice about effective at-home hygiene routines, covering everything from brushing techniques to healthy snacking tips. We also emphasize the importance of caring for baby teeth. Even though these teeth will eventually fall out, they play a vital role in chewing, speaking, and guiding adult teeth into place.",
        ],
      },
      {
        title: "Fluoride Varnish",
        kicker: "EXTRA CAVITY PROTECTION FOR DEVELOPING TEETH",
        body: [
          "Fluoride varnish is a simple, fast treatment that strengthens the tooth enamel and helps prevent decay. Applied after we finish professionally cleaning your child’s teeth, it’s especially effective for children with early signs of enamel weakness or a higher risk of cavities.",
        ],
      },
      {
        title: "Dental Sealants",
        kicker: "PROTECTING HARD-TO-REACH MOLARS",
        body: [
          "Molars have deep grooves that can be tough to keep clean, especially for kids who are still mastering their brushing skills. Dental sealants create a smooth, protective barrier over those grooves, making it easier to keep plaque and bacteria away. Sealants are quick to apply, long-lasting, and completely painless.",
        ],
      },
      {
        title: "Silver Diamine Fluoride",
        kicker: "A GENTLE OPTION TO STOP EARLY DECAY",
        body: [
          "Silver diamine fluoride (SDF) is a noninvasive treatment used to stop the progression of small cavities. It’s ideal for very young children or those who aren’t yet ready for traditional fillings. SDF halts decay and strengthens the tooth surface, giving your child a healthier smile with no drilling or discomfort.",
        ],
      },
      {
        title: "Tooth-Colored Fillings",
        kicker: "NATURAL-LOOKING REPAIRS FOR CAVITIES",
        body: [
          "When a cavity does need to be filled, we use tooth-colored composite material to restore the tooth’s strength and appearance. These fillings are durable, effective, and blend in with the natural shade of your child’s teeth.",
        ],
      },
      {
        title: "Dental Bonding",
        kicker: "EASY FIX FOR SMALL CHIPS OR GAPS",
        body: [
          "Bonding can quickly correct minor cosmetic issues like small chips, uneven edges, or gaps between teeth. It’s a simple treatment that improves appearance and function with minimal time in the chair, perfect for little ones with minor damage or wear.",
        ],
      },
      {
        title: "Stainless Steel Crowns",
        kicker: "STRONG, LONG-LASTING SOLUTIONS FOR BABY TEETH",
        body: [
          "When a baby tooth is too damaged for a filling, a stainless steel crown may be the best option. These crowns are incredibly strong and protect the tooth until it’s ready to fall out naturally. They’re most commonly used on molars and are a reliable way to maintain chewing function and space for adult teeth.",
        ],
      },
      {
        title: "Sedation Dentistry",
        kicker: "SAFE, EFFECTIVE OPTIONS TO REDUCE ANXIETY",
        body: [
          "If your child is especially anxious, has special healthcare needs, or requires extensive treatment, sedation can make the experience much easier. At SmileQuest, we offer two types of sedation for children:",
        ],
        bullets: [
          "Nitrous oxide — also known as laughing gas, this is a mild sedation option that helps your child stay calm and relaxed during treatment. It wears off quickly and has no lingering effects.",
          "General anesthesia — in some cases, we may recommend treatment under general anesthesia, performed in a hospital or surgical setting with a pediatric anesthesiologist present. This is typically reserved for very young children or those with complex needs.",
        ],
        note:
          "We’ll always discuss options with you and help determine the safest and most appropriate approach for your child.",
      },
      {
        title: "Sports Mouth Guards",
        kicker: "CUSTOM PROTECTION FOR ACTIVE KIDS",
        body: [
          "If your child plays contact sports, a custom-fitted mouth guard can protect their teeth and reduce the risk of injury. Our sports mouth guards are comfortable, durable, and fit far better than store-bought versions, making them more likely to stay in place when it matters most.",
        ],
      },
      {
        title: "Tips for Baby’s First Visit",
        kicker: "STARTING STRONG FROM THE VERY FIRST TOOTH",
        body: [
          "We recommend scheduling your baby’s first dental visit by their first birthday or when their first tooth appears, whichever comes first. The goal of this first visit is to introduce your child to the dental office in a fun, low-pressure way.",
          "We’ll do a quick evaluation while your child stays on your lap, answer any questions you have about teething or brushing, and offer guidance on how to care for your child’s teeth as they grow. Early visits help normalize the dental experience and set the stage for a lifetime of healthy habits.",
          "To prepare your child for their first visit, try talking to them about it, read a book with their favorite characters visiting the dentist, look up relevant video clips on YouTube, or role-play at home. It’s also important for parents to set a great example for their children. Let your child see you brushing your teeth and caring for your smile, and they will be excited to follow in your footsteps.",
        ],
      },
    ],
    approach: {
      title: "The Importance of a Dental Home for Children",
      kicker: "BUILDING TRUST, COMFORT AND HEALTHY HABITS FROM THE START",
      body: [
        "Having a dental home means your child sees the same trusted team at every visit, building familiarity and confidence over time. At SmileQuest, we want to be that home—not just for you, but for your entire family.",
        "Our dentists and support team are experienced in working with children of all ages. We take the time to explain what’s happening, use kid-friendly language that is easy to understand, and check in often to make sure your child feels relaxed. We also offer digital X-rays, which expose your child to far less radiation than traditional radiographs while providing clear images that enable us to accurately diagnose any oral health concerns.",
      ],
    },
    testimonial: byline.childrens,
    ctaTitle: "Book Your Child’s Next Visit at SmileQuest Dental Care",
    ctaText:
      "From toddlers to teens, we’re here to support your child’s smile every step of the way. If you’re looking for a team that truly cares and a dental home you can grow with, we’d love to meet your family.",
  },
  {
    slug: "endodontics",
    name: "Endodontics",
    h1: "Endodontics",
    eyebrow: "Advanced care inside the tooth",
    tagline: "Advanced root care from a team you can trust",
    description:
      "Our doctors perform root canal treatments with skill, experience, and steady hands so you can maintain a healthy smile.",
    intro: [
      "Endodontics focuses on the inside of the tooth, specifically the pulp and root canals. When these areas become infected, inflamed, or damaged, timely treatment can save the tooth and relieve pain. At SmileQuest, we provide comprehensive endodontic care for both adults and children using advanced imaging and techniques that support optimal outcomes.",
      "We take a thoughtful, diagnostic-first approach to every case. Our team is highly trained and experienced in treating even the most complex root-related issues, and we’re committed to making the process as smooth and comfortable as possible. If you’re in pain or have been told you need a root canal, we’re here to help—with the goal of preserving your natural tooth whenever possible.",
    ],
    valueProps: [
      "PINPOINT TOOTH PAIN WITH ADVANCED DIAGNOSTICS",
      "PRESERVE YOUR TEETH",
      "STOP THE SPREAD OF INFECTION",
    ],
    image: "/assets/images/endontics-home.webp",
    icon: "/assets/images/endodontics.svg",
    treatments: [
      {
        title: "CBCT Imaging",
        kicker: "3D DIAGNOSTICS FOR ACCURATE, TARGETED CARE",
        body: [
          "Every endodontic patient at SmileQuest receives CBCT imaging. This is a 3D scan that shows us the tooth roots, nerves, and surrounding structures in exceptional detail. It helps us identify infections, cracks, unusual root anatomy, and other hidden concerns that traditional X-rays may miss. CBCT is a critical part of our diagnostic process and ensures we can confidently plan your treatment with all the information we need.",
        ],
      },
      {
        title: "Root Canal Therapy & Pediatric Pulpotomy",
        kicker: "SAVING NATURAL TEETH AND RELIEVING PAIN",
        body: [
          "Root canal therapy removes infected or damaged pulp from inside the tooth while preserving the healthy outer structure. It’s a common treatment that stops the spread of infection, relieves pain, and helps prevent the need for a tooth extraction.",
          "We also offer pediatric pulpotomy, a treatment used when a child’s baby tooth has infected or irritated pulp. This treatment removes the damaged pulp while keeping the rest of the tooth intact, helping to maintain space for the adult tooth and protecting your child’s long-term oral health.",
          "Modern root canal therapy is a stress-free process. With local anesthesia, advanced diagnostics, and gentle techniques, we ensure a comfortable experience from start to finish.",
        ],
      },
      {
        title: "Root Canal Re-Treatment",
        kicker: "WHEN PREVIOUS TREATMENT NEEDS A SECOND LOOK",
        body: [
          "Sometimes, a tooth that’s already had a root canal may experience an issue due to a missed canal, new decay, or reinfection. In these cases, root canal re-treatment can help save the tooth. Our team will remove the existing root canal filling, re-clean the canals, and reseal it. With modern tools and updated imaging, re-treatment has a strong success rate and can often prevent the need for extraction.",
        ],
      },
      {
        title: "Endodontic Surgery (Apicoectomy)",
        kicker: "TARGETED TREATMENT FOR STUBBORN INFECTIONS",
        body: [
          "In certain cases, root canal therapy alone may not resolve an infection. That’s when an apicoectomy, a minor surgical procedure, comes into play. This treatment involves removing the tip of the tooth’s root and sealing the canal from the bottom.",
          "We typically recommend this only after other treatments have been tried or ruled out. Our CBCT imaging helps us pinpoint exactly where the infection is, making the procedure as efficient and minimally invasive as possible.",
        ],
      },
      {
        title: "Unexplained Tooth Pain",
        kicker: "IDENTIFYING THE SOURCE OF DISCOMFORT",
        body: [
          "Tooth pain doesn’t always have an obvious cause. At SmileQuest, we use advanced diagnostic tools to uncover the source of persistent or unexplained pain. Sometimes the issue lies within the tooth, such as a hairline crack or inflamed pulp. Other times, pain may stem from the gums or surrounding bone. Our thorough evaluations ensure we get to the bottom of it so you’re not left guessing or living with ongoing discomfort.",
        ],
      },
      {
        title: "Internal Bleaching",
        kicker: "LIGHTEN DARKENED TEETH FROM THE INSIDE OUT",
        body: [
          "Teeth that have undergone trauma or root canal therapy may darken over time. Internal bleaching is a cosmetic solution that lightens a tooth from within, improving its appearance without needing a crown or veneer. This can be a great option if you’re happy with the shape of the tooth but want to restore a more uniform color to your smile. We perform this treatment in-office and complete it within one to two visits.",
        ],
      },
      {
        title: "Pediatric Endodontics",
        kicker: "GENTLE, EFFECTIVE CARE FOR KIDS",
        body: [
          "We’re proud to offer pediatric endodontic care, including advanced treatment options to support developing teeth. Our approach is calm, clear, and designed with kids' comfort in mind. We offer:",
        ],
        bullets: [
          "Apexification and apexogenesis — when a young tooth has an open root tip, these help guide development and encourage healing.",
          "Vital pulp therapy and root regeneration — treatments that preserve the living tissue inside a developing tooth to support continued growth and prevent extraction.",
        ],
        note:
          "Our doctors are experienced in working with children and provide age-appropriate explanations, gentle treatments, and a supportive environment every step of the way.",
      },
      {
        title: "Sedation Options",
        kicker: "MAKING COMPLEX TREATMENT FEEL SIMPLE",
        body: [
          "Endodontic procedures can be anxiety-inducing, especially for younger patients or those with dental fears. We offer nitrous oxide (laughing gas) to help patients feel more calm during their treatment. It takes effect quickly and wears off shortly after treatment, allowing patients to return to normal activities with ease. We’ll always discuss sedation options so you feel safe and confident about your treatment.",
        ],
      },
    ],
    testimonial: byline.endo,
    ctaTitle: "Schedule an Endodontic Evaluation at SmileQuest Dental Care",
    ctaText:
      "Whether you’re in pain or simply want to explore your options, our team is here to help with compassionate, expert-led endodontic care. From root canal therapy to pediatric treatments, we bring advanced diagnostics and a gentle touch to every visit. Let’s find the source of the problem and a solution that’s right for you.",
  },
  {
    slug: "oral-surgery",
    name: "Oral Surgery",
    h1: "Oral Surgery",
    eyebrow: "In-house surgical care",
    tagline: "Gentle surgical care, close to home",
    description:
      "In-house surgical care delivered by an experienced team known for their gentle techniques and attention to detail.",
    intro: [
      "When a tooth is too damaged to repair, or if it’s affecting your overall oral health, our team provides gentle, comfortable care in a calm environment. We take the time to explain the process and provide detailed aftercare instructions.",
      "We can remove many wisdom teeth right here in our office. More complex cases may be referred to trusted partners with excellent patient outcomes. Either way, our team evaluates your case with digital imaging and walks you through the process so you feel informed and comfortable.",
    ],
    valueProps: ["IN-HOUSE SURGICAL CARE", "GENTLE TECHNIQUES", "ATTENTION TO DETAIL"],
    image: "/assets/images/office-ext.webp",
    icon: "/assets/images/surgery.svg",
    treatments: [
      {
        title: "Tooth Extraction",
        kicker: "SAFE, COMFORTABLE TOOTH REMOVAL",
        body: [
          "When a tooth is too damaged to repair, or if it’s affecting your overall oral health, your dentist may recommend an extraction. Our team at SmileQuest provides gentle, comfortable tooth removal in a calm environment, always taking time to explain the process. We will also provide you with detailed aftercare instructions to help you with the healing process.",
        ],
      },
      {
        title: "Wisdom Tooth Removal",
        kicker: "IN-HOUSE SURGICAL SERVICES FOR WISDOM TEETH",
        body: [
          "Impacted or partially erupted wisdom teeth can cause discomfort, infection, or damage to nearby teeth. At SmileQuest, we can remove many wisdom teeth right here in our office while keeping patients comfortable and at ease. Sometimes with more complex cases, a referral is needed. We have trusted referral partners who have excellent patient outcomes. Our team will evaluate your case with digital imaging and walk you through the process to ensure you’re informed and comfortable throughout your treatment, even if a referral is required.",
        ],
      },
      {
        title: "Endodontic Surgery (Apicoectomy)",
        kicker: "TARGETED TREATMENT FOR STUBBORN INFECTIONS",
        body: [
          "In certain cases, root canal therapy alone may not resolve an infection. That’s when an apicoectomy, a minor surgical procedure, comes into play. This treatment involves removing the tip of the tooth’s root and sealing the canal from the bottom. We typically recommend this only after other treatments have been tried or ruled out. Our CBCT imaging helps us pinpoint exactly where the infection is, making the procedure as efficient and minimally invasive as possible.",
        ],
      },
      {
        title: "Sedation for Comfort",
        kicker: "A CALMER EXPERIENCE",
        body: [
          "Dental anxiety shouldn’t get in the way of your care. We offer safe, in-office sedation options, including nitrous oxide (laughing gas) and oral sedation, and we will help you choose the option best suited to your needs.",
        ],
      },
    ],
    testimonial: byline.emergency,
    ctaTitle: "Ready for a Dental Home that Puts Your Long-Term Health First?",
    ctaText:
      "Schedule your visit with SmileQuest and experience care that goes well beyond the basics.",
  },
  {
    slug: "periodontics",
    name: "Periodontics",
    h1: "Periodontics",
    eyebrow: "Healthy gums, healthy smile",
    tagline: "Protect the foundation of your smile",
    description: "Gentle periodontal treatment restores gum health for your best smile.",
    intro: [
      "Gum disease is one of the leading causes of tooth loss, and it often begins without obvious symptoms. Healthy gums are the foundation of every healthy smile, and our team is here to help you keep yours in great shape.",
      "Your first visit includes a periodontal assessment and charting so we can establish a baseline and track changes over time. From there, we build a plan around what your gums need—not a one-size-fits-all routine.",
    ],
    valueProps: ["COMPREHENSIVE PERIODONTAL CARE", "GENTLE TREATMENT", "LONG-TERM MONITORING"],
    image: "/assets/images/general-home.webp",
    icon: "/assets/images/perio.svg",
    treatments: [
      {
        title: "Periodontal Therapy",
        kicker: "SUPPORTING HEALTHY GUMS AND A HEALTHY SMILE",
        body: [
          "Gum disease is one of the leading causes of tooth loss, and it often begins without obvious symptoms. We offer comprehensive periodontal care, including deep cleanings (scaling and root planing), follow-up therapy, and long-term periodontal maintenance plans. Healthy gums are the foundation of every healthy smile. Our experienced team at SmileQuest is here to help you keep yours in great shape.",
        ],
      },
      {
        title: "Periodontal Assessment & Charting",
        kicker: "A CLEAR BASELINE FOR YOUR GUM HEALTH",
        body: [
          "Your first visit includes a periodontal assessment, including probing, to evaluate your gum health. We also complete periodontal charting and document gum measurements for long-term monitoring, so changes are easy to track over time.",
        ],
      },
      {
        title: "Long-Term Periodontal Maintenance",
        kicker: "PROTECT THE PROGRESS",
        body: [
          "Ongoing maintenance helps protect the progress made in treatment and supports the health of your teeth, gums, and bone. If scaling or root planing is needed, it will be scheduled as a separate appointment so you receive the right type of cleaning based on your specific gum health.",
        ],
      },
    ],
    testimonial: byline.general2,
    ctaTitle: "Let’s Build a Plan for Healthier Gums",
    ctaText:
      "Contact SmileQuest to talk about periodontal care and the right maintenance schedule for your smile.",
  },
  {
    slug: "full-mouth-rehabilitation",
    name: "Full Mouth Rehabilitation",
    h1: "Full Mouth Rehabilitation",
    eyebrow: "A complete plan, built around you",
    tagline: "Rebuild your smile from the ground up",
    description:
      "If you need multiple treatments, a tailored full mouth rehabilitation treatment plan can bring your smile back to full health and function.",
    intro: [
      "If you’re suffering from widespread dental damage, multiple missing teeth, or severe wear, a full mouth rehabilitation can give you a fresh start. This isn’t a one-size-fits-all treatment. Rather, it’s a personalized combination of restorative services planned to rebuild your smile from the ground up.",
      "At SmileQuest, we use a phased approach to your care. This starts with thorough diagnostics and a plan tailored to your health, timeline, and goals. The result? A functional, comfortable, healthy smile that looks great and lasts the distance.",
    ],
    valueProps: ["A PERSONALIZED COMBINATION", "PHASED CARE", "LONG-LASTING FUNCTION"],
    image: "/assets/images/restorative-home.webp",
    icon: "/assets/images/full-mouth.svg",
    treatments: [
      {
        title: "A Comprehensive Plan to Rebuild Your Smile",
        kicker: "MORE THAN ONE TREATMENT",
        body: [
          "Depending on your needs, a full mouth rehabilitation may include:",
        ],
        bullets: [
          "Crowns and bridges",
          "Implants or implant-supported dentures",
          "Periodontal therapy",
          "Bite adjustment",
          "Cosmetic enhancements",
        ],
        note:
          "Each plan is built from a thorough diagnostic process and a clear understanding of your health, timeline, and goals.",
      },
      {
        title: "Our Phased Approach",
        kicker: "ONE STEP AT A TIME",
        body: [
          "We start with thorough diagnostics and a plan tailored to your health, timeline, and goals. Phasing treatment makes complex care easier to understand and easier to move through with confidence.",
        ],
      },
      {
        title: "Rebuilding Function for Long-Term Health",
        kicker: "OUR APPROACH",
        body: [
          "We take the time to understand how your teeth are functioning now and where issues might arise down the line. That means making sure your bite is well aligned and stable, your teeth are working as they should, and your restorations last.",
        ],
      },
    ],
    testimonial: byline.restorative,
    ctaTitle: "Let’s Restore Your Smile",
    ctaText:
      "You don’t have to live with discomfort, missing teeth, or worn-down restorations. Let’s talk about what’s possible and help you find your best smile again.",
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    h1: "Dental Implants",
    eyebrow: "Permanent tooth replacement",
    tagline: "The next best thing to natural teeth",
    description:
      "Dental implants are the next best replacement option for natural teeth.",
    intro: [
      "Dental implants are the most durable and natural-feeling option to replace missing teeth. Each implant acts as a replacement root and is topped with a custom crown, bridge, or denture, depending on your needs.",
      "At SmileQuest, we carefully plan and place your implants with a tailored treatment plan. We use 3D imaging, advanced surgical techniques, and high-quality materials to ensure a stable, comfortable outcome.",
    ],
    valueProps: ["PERMANENT TOOTH REPLACEMENT", "NATURAL-FEELING RESULTS", "3D-PLANNED PRECISION"],
    image: "/assets/images/restorative-home.webp",
    icon: "/assets/images/implants.svg",
    treatments: [
      {
        title: "Dental Implants",
        kicker: "PERMANENT TOOTH REPLACEMENT",
        body: [
          "Dental implants are the most durable and natural-feeling option to replace missing teeth. Each implant acts as a replacement root and is topped with a custom crown, bridge, or denture, depending on your needs. At SmileQuest, we carefully plan and place your implants with a tailored treatment plan. We use 3D imaging, advanced surgical techniques, and high-quality materials to ensure a stable, comfortable outcome. Whether you need to replace one tooth or several, dental implants are a popular and effective restorative solution.",
        ],
      },
      {
        title: "Implant-Supported Dentures",
        kicker: "A SECURE, STABLE UPGRADE",
        body: [
          "Looking for more stability than traditional dentures can offer? Implant-supported dentures offer premium stability and support. These dentures attach to dental implants placed in the jaw for the most secure fit and improved function. We offer several types of implant-supported dentures, including hybrid dentures, implant-retained dentures, and leave-in dentures.",
          "Implant-supported dentures offer better chewing ability, greater comfort, and no slipping or clicking, which can happen with traditional dentures. They also help preserve your jawbone structure, making them a long-term investment in your health and confidence.",
        ],
      },
      {
        title: "3D Imaging & Planning",
        kicker: "PRECISE FROM THE START",
        body: [
          "When needed, we have cone-beam imaging technology (CBCT) available. This 3D scan provides incredibly detailed views of bone structure, nerves, and tooth roots, and we often use it for cases involving implants, endodontics, or complex treatment planning.",
        ],
      },
    ],
    testimonial: byline.restorative,
    ctaTitle: "Let’s Talk About Replacing Missing Teeth",
    ctaText:
      "Whether you need to replace one tooth or several, our team will walk you through the options and build a plan around your health and goals.",
  },
  {
    slug: "smile-makeovers",
    name: "Smile Makeovers",
    h1: "Smile Makeovers",
    eyebrow: "A smile that still looks like you",
    tagline: "Thoughtfully planned. Beautifully yours.",
    description:
      "Thoughtfully planned enhancements refresh and transform your smile into one you will love.",
    intro: [
      "A smile makeover combines two or more cosmetic treatments to completely transform your smile. Whether you’ve been living with chips, unevenness, discoloration, or wear, SmileQuest can create a personalized plan to address your concerns and bring out the best in your smile.",
      "We’ll start with a detailed consultation to understand what you’re hoping to achieve. It’s definitely not a one-size-fits-all approach when it comes to smile makeovers.",
    ],
    valueProps: ["CUSTOM TREATMENT PLANS", "NATURAL-LOOKING RESULTS", "YOUR GOALS FIRST"],
    image: "/assets/images/cosmetic-home.webp",
    icon: "/assets/images/makeover.svg",
    treatments: [
      {
        title: "Smile Makeovers",
        kicker: "CUSTOM TREATMENT PLANS FOR LIFE-CHANGING RESULTS",
        body: [
          "A smile makeover combines two or more cosmetic treatments to completely transform your smile. Depending on your goals, a smile makeover may include teeth whitening, veneers, bonding, crowns, Invisalign, or a combination of these treatments tailored specifically to your needs.",
        ],
      },
      {
        title: "Teeth Whitening",
        kicker: "BRIGHTEN YOUR SMILE",
        body: [
          "Stained or discolored teeth are some of the most common cosmetic concerns. We offer in-office whitening for powerful professional results in one visit, and custom take-home trays with professional-grade gel for gradual whitening at home.",
        ],
      },
      {
        title: "Porcelain Veneers",
        kicker: "A STRAIGHTER, BRIGHTER, MORE BALANCED SMILE",
        body: [
          "Veneers are thin layers of custom-made porcelain that cover the front surface of your tooth. They can correct issues like discoloration, uneven spacing, worn edges, minor misalignment, or irregular shape. Each veneer is handcrafted to suit your smile and natural tooth shade.",
        ],
      },
      {
        title: "Dental Bonding",
        kicker: "A SIMPLE FIX FOR SMALL IMPERFECTIONS",
        body: [
          "Using a tooth-colored composite resin, we can reshape chipped or uneven teeth, close small gaps, and fix discoloration. Bonding only takes a single visit and doesn’t require much removal (if any) of your natural tooth structure.",
        ],
      },
      {
        title: "Crowns",
        kicker: "NATURAL-LOOKING COSMETIC RESTORATIONS",
        body: [
          "If you have a tooth that’s severely worn, cracked, misshapen, or discolored, a crown can restore both appearance and function. We offer high-quality crowns made from materials like zirconia, lithium disilicate, porcelain fused to metal (PFM), and gold.",
        ],
      },
    ],
    testimonial: byline.cosmetic,
    ctaTitle: "Let’s Talk About Your Smile Goals",
    ctaText:
      "Whether you want a small change or a full transformation, SmileQuest is here to help. We’ll listen, answer your questions, and guide you toward the treatments that align best with your lifestyle and vision.",
  },
  {
    slug: "invisalign",
    name: "Invisalign",
    h1: "Invisalign",
    eyebrow: "Clear aligners, guided care",
    tagline: "Straighten your teeth without metal braces",
    description:
      "Invisalign offers a clear, effective alternative to traditional braces if you have crooked teeth or other misalignment issues.",
    intro: [
      "Crooked or crowded teeth can affect the appearance of your smile, but did you know they can also make cleaning more difficult and contribute to uneven tooth wear and jaw pain? Invisalign is a contemporary alternative to traditional braces that uses custom-made sets of clear aligners to gently move your teeth into position.",
      "The SmileQuest team will guide you through the Invisalign process from start to finish, tracking your progress and making adjustments as needed. The result? A straighter smile that looks and feels just right.",
    ],
    valueProps: ["ALMOST INVISIBLE", "REMOVABLE & COMFORTABLE", "GUIDED FROM START TO FINISH"],
    image: "/assets/images/cosmetic-home.webp",
    icon: "/assets/images/invisalign.svg",
    treatments: [
      {
        title: "Invisalign at SmileQuest",
        kicker: "STRAIGHTEN YOUR TEETH WITHOUT METAL BRACES",
        body: [
          "Invisalign is almost invisible, certainly less noticeable than traditional braces. You’ll wear each set of aligners for a set period of time, then switch to the next as your teeth gradually shift into place. And because Invisalign aligners are removable, you’ll still be able to enjoy all your favorite foods, and it will be easy to maintain your normal brushing and flossing routine.",
          "Many patients prefer Invisalign over traditional braces because they use a smooth plastic that is more comfortable than wires and brackets.",
        ],
      },
      {
        title: "Guided from Start to Finish",
        kicker: "PROGRESS YOU CAN SEE",
        body: [
          "The SmileQuest team will guide you through the Invisalign process from start to finish, tracking your progress and making adjustments as needed. The result? A straighter smile that looks and feels just right.",
        ],
      },
      {
        title: "Part of a Bigger Smile Plan",
        kicker: "ALIGNMENT + AESTHETICS",
        body: [
          "Invisalign can also be part of a custom smile makeover when your goals include alignment along with whitening, bonding, veneers, or other cosmetic care.",
        ],
      },
    ],
    testimonial: byline.cosmetic,
    ctaTitle: "Let’s Talk About Your Smile Goals",
    ctaText:
      "Explore whether Invisalign is right for you with a consultation at SmileQuest.",
  },
];

export const serviceBySlug = (slug: string): ServiceContent | undefined =>
  serviceContent.find((service) => service.slug === slug);

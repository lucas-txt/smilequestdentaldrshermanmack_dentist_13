export type Review = {
  name: string;
  quote: string;
  source: "Google";
  treatment?: string;
  featured?: boolean;
};

export const reviews: Review[] = [
  {
    name: "Gypse Lou",
    quote:
      "Cordial staff/everone! They outshine in Customer Service. Gentle. They explain each step and frequently ask if you have questions. I’ve been going there for about…",
    source: "Google",
    treatment: "General Dentistry",
    featured: true,
  },
  {
    name: "Curt Kukert",
    quote:
      "The dental hygienist, Karla, was very informative and pleasant. She explained everything she was doing and was very knowledgeable about my past dental history…",
    source: "Google",
    treatment: "General Dentistry",
    featured: true,
  },
  {
    name: "Jolene Wee",
    quote:
      "Very happy with today’s appointment. My normal dentist was away for the day and a newer dentist to the practice exams me. Both her and…",
    source: "Google",
    treatment: "General Dentistry",
    featured: true,
  },
  {
    name: "Shelby Campbell",
    quote:
      "This was my daughter’s first ever dentist appointment and it went really well! My daughter is terrified of needles, tweezers, blood, etc so I was…",
    source: "Google",
    treatment: "Children’s Dentistry",
  },
  {
    name: "Chanda Arneson",
    quote:
      "We had a mild emergency tooth issue with my 6yr old son who hasn't been to Smile Quest until today. We had fantastic interactions. Everyone…",
    source: "Google",
    treatment: "Children’s Dentistry",
    featured: true,
  },
  {
    name: "Jackie C.",
    quote:
      "Wonderful staff. Very caring and gentle. I wouldn't go anywhere else. Highly recommend!!",
    source: "Google",
    treatment: "About SmileQuest",
    featured: true,
  },
  {
    name: "Marlene S.",
    quote:
      "My first time there and people were so kind, polite and love the care they provided. They make one feel at home, like belong. I’m happy to go back.",
    source: "Google",
    treatment: "Plan Your Visit",
  },
  {
    name: "Heidi L.",
    quote:
      "Great service. They make you feel so comfortable. Very gentle when cleaning teeth and really listen to your concerns.",
    source: "Google",
    treatment: "General Dentistry",
    featured: true,
  },
  {
    name: "Elona O.",
    quote:
      "Had a great cleaning... super sweet, attentive hygienist! My whole experience was phenomenal!",
    source: "Google",
    treatment: "General Dentistry",
  },
  {
    name: "Michael T.",
    quote:
      "Love SmileQuest. I'm always treated with respect and have my questions and concerns addressed. Explanations are always given in easily understood language. And oh by the way, the workmanship is excellent.",
    source: "Google",
    treatment: "Cosmetic Dentistry",
    featured: true,
  },
  {
    name: "Patty C.",
    quote:
      "As always, my experience was as wonderful as a dentist visit can be! 😉 They are all very friendly, helpful, gentle and kind.",
    source: "Google",
    treatment: "Restorative Dentistry",
  },
  {
    name: "Roxane",
    quote:
      "Awesome experience, my daughter was scared but they were so kind they explained everything and she was so at ease!! I got to go back with her, and she was so happy!! Overall the best experience you could ask for!!",
    source: "Google",
    treatment: "Children’s Dentistry",
    featured: true,
  },
  {
    name: "Cassandra S.",
    quote:
      "We love Smile Quest! Dr. Mack and all the hygienists are great with my kids.",
    source: "Google",
    treatment: "Children’s Dentistry",
  },
  {
    name: "Melissa S.",
    quote:
      "I’ve been a patient at SmileQuest for a year now and my experience with them from day one has been great. The staff are very polite and professional and they are very accommodating and make you feel very comfortable from the moment you walk into their office. I would highly recommend them to all my friends and family.",
    source: "Google",
    treatment: "Endodontics",
    featured: true,
  },
];

export const homeReviews = [
  reviews[0],
  reviews[1],
  reviews[2],
  reviews[3],
  reviews[4],
];

export const reviewTreatments = Array.from(
  new Set(reviews.map((review) => review.treatment ?? "General Dentistry")),
);

export type Trainer = {
  id: number;
  slug: string;
  name: string;
  title: string;
  tags: string[];
  bio: string;
};

export const TRAINERS: Trainer[] = [
  {
    id: 1,
    slug: "john-smith",
    name: "John Smith",
    title: "Trainer, Fitness",
    tags: ["Training"],
    bio: "John is a strength and conditioning coach who focuses on performance-based training. He loves helping clients get stronger, improve their lifts, and feel more confident in the gym.",
  },
  {
    id: 2,
    slug: "jane-doe-physio-1",
    name: "Jane Doe",
    title: "Physiotherapist",
    tags: ["Physio"],
    bio: "Jane is a registered physiotherapist with a special interest in lower-back and shoulder rehab. She combines hands-on treatment with exercise programming to get people back to the activities they love.",
  },
  {
    id: 3,
    slug: "jane-doe-physio-2",
    name: "Jane Doe",
    title: "Physiotherapist",
    tags: ["Physio"],
    bio: "Jane works primarily with athletes and active adults recovering from sports injuries. Her sessions focus on mobility, strength, and building long-term resilience.",
  },
  {
    id: 4,
    slug: "jane-doe-physio-3",
    name: "Jane Doe",
    title: "Physiotherapist",
    tags: ["Physio"],
    bio: "Jane enjoys helping beginners feel comfortable moving again after injury. She explains everything in simple language and builds rehab programs that fit busy schedules.",
  },
  {
    id: 5,
    slug: "alex-lee",
    name: "Alex Lee",
    title: "Trainer, Fitness",
    tags: ["Training"],
    bio: "Alex focuses on functional training, fat loss, and overall conditioning. His sessions are structured but friendly, making it easy for clients to stay consistent and motivated.",
  },
  {
    id: 6,
    slug: "sam-patel",
    name: "Sam Patel",
    title: "Rehab Specialist",
    tags: ["Rehab"],
    bio: "Sam is a rehab specialist who works with chronic pain and post-surgery clients. He’s patient, detail-oriented, and designs step-by-step plans that feel achievable.",
  },
  {
    id: 7,
    slug: "chris-kim",
    name: "Chris Kim",
    title: "Physiotherapist",
    tags: ["Physio"],
    bio: "Chris combines physiotherapy with strength training principles. He works a lot with lifters and athletes who want to keep training while managing pain or previous injuries.",
  },
  {
    id: 8,
    slug: "morgan-yu",
    name: "Morgan Yu",
    title: "Rehab Specialist",
    tags: ["Rehab"],
    bio: "Morgan focuses on movement quality, posture, and long-term joint health. Clients appreciate her calm coaching style and clear explanations of each exercise.",
  },
];

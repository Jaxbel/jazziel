// src/lib/learning.ts

export type LearningItem = {
  title: string;
  provider: string;
  status: "in-progress" | "planned" | "completed";
  description?: string;
  skills: string[];
  url?: string;
};

export const learning: LearningItem[] = [
  {
    title: "Advanced System Design",
    provider: "ByteByteGo",
    status: "in-progress",
    description: "Deep dive into scalable architectures, distributed systems, and backend patterns.",
    skills: ["Scalability", "Distributed Systems", "Database Internals"],
    url: "https://bytebytego.com/"
  },
  {
    title: "Next.js 15 & React Server Components",
    provider: "Self-study",
    status: "in-progress",
    description: "Mastering the latest features of Next.js for high-performance web applications.",
    skills: ["Next.js", "RSC", "React 19"],
    url: "https://nextjs.org/docs"
  },
  {
    title: "LLM Orchestration & AI Agents",
    provider: "DeepLearning.AI",
    status: "planned",
    description: "Building complex AI agents and multi-step reasoning chains with LangChain.",
    skills: ["LangChain", "Vector DBs", "Agentic AI"],
    url: "https://www.deeplearning.ai/"
  }
];

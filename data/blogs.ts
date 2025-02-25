// data/blogs.ts
import { FaLightbulb, FaRobot, FaBrain } from 'react-icons/fa';

export interface Skill {
  name: string;
}

export interface blog {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  githubLink: string;
  skills: Skill[];
}

export const blogs: blog[] = [
  {
    id: 1,
  title: "RAG for Gen Z: How AI Picks the Best Info Just Like You Pick the Right Relationship",
  description: "Explain RAG in very easy language that anyone can understand and specially for Gen Z.",
  icon: FaLightbulb,
  technologies: ["AI", "RAG", "Python"],
  githubLink: "https://medium.com/@gharudxd/rag-for-gen-z-how-ai-picks-the-best-info-just-like-you-pick-the-right-relationship-34c670ed8eee",
  skills: [
    {name: "Frontend Development"},
    { name: "UI/UX Design"},
    { name: "Responsive Web Design"},
    { name: "Performance Optimization"}
  ]
  },
  {
    id: 2,
  title: "AI Agents Explained with a Simple Real Life Example | Part 1",
  description: "Explain AI Agents in very easy language that anyone can understand with indian household real life example.",
  icon: FaRobot,
  technologies: ["AI Agents", "Python", "AI"],
  githubLink: "https://medium.com/@gharudxd/ai-agents-explained-with-a-simple-real-life-example-part-1-473a0e249ddc",
  skills: [
    { name: "Web Scraping"},
    { name: "Data Analysis"},
    { name: "Automation"},
    { name: "Machine Learning"},
    { name: "Document Generation"}
  ]
  },
  {
    id: 2,
  title: "Master AI Agents: Build with LangGraph & Ollama (Without openAI API ) | Part 2",
  description: "Hands on building a Financial Analyst with LangGraph & Ollama Without openAI API",
  icon: FaBrain,
  technologies: ["Ollama", "AI Agents", "Python", "LLM", "LangGraph", "Financial Agents"],
  githubLink: "https://medium.com/@gharudxd/master-ai-agents-build-with-langgraph-ollama-without-openai-api-7b5eccaa2055",
  skills: [
    { name: "API Integration"},
    { name: "Asynchronous Programming"},
    { name: "Data Synchronization"},
    { name: "Python Development"},
    { name: "Task Automation"}
  ]
  },
];

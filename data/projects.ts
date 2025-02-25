// data/projects.ts
import { FaDotCircle, FaChartLine, FaPython, FaDatabase, FaLinkedin, FaMoneyBill } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiTensorflow, SiPostgresql } from 'react-icons/si';

export interface Skill {
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  githubLink: string;
  skills: Skill[];
}

export const projects: Project[] = [
  {
    id: 1,
  title: "Morse Code with hand tracking Made Easy with Computer Vision",
  description: "Decode Morse code using hand gestures with OpenCV and MediaPipe.",
  icon: FaDotCircle,
  technologies: ["CV", "Morse code", "Python", "OpenCV"],
  githubLink: "https://github.com/GharudxD/morse-code-decoder",
  skills: [
    {name: "Frontend Development"},
    { name: "UI/UX Design"},
    { name: "Responsive Web Design"},
    { name: "Performance Optimization"}
  ]
  },
  {
    id: 2,
  title: "Stock market prediction using CNN-LSTM",
  description: "Streamlit-based stock market prediction web app using a CNN-LSTM model, achieving 56% accuracy on real-time data.",
  icon: FaChartLine,
  technologies: ["Python", "Pandas", "Streamlit", "CNN","LSTM"],
  githubLink: "https://gharudxd-stock-market-intraday-prediction-main-163pm6.streamlit.app/",
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
  title: "Named Entity Recognition(NER) of Invoice Images",
  description: "Recognize various entities like name to address, ship to address, total amount etc.",
  icon: FaMoneyBill,
  technologies: ["Python", "Flask", "NER", "OCR"],
  githubLink: "https://github.com/GharudxD/invoice-NER",
  skills: [
    { name: "API Integration"},
    { name: "Asynchronous Programming"},
    { name: "Data Synchronization"},
    { name: "Python Development"},
    { name: "Task Automation"}
  ]
  },
];

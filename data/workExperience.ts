// data/workExperience.ts
import React from 'react';

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  year: number;
  description: string[];
  skills: Skill[];
  logo: string;
}

export const workExperiences: WorkExperience[] = [
{
    company: "Aerocraft Engineering Pvt. LTD",
    position: "AI/ML Developer",
    duration: "Nov 2023 - current",
    year: 2024,
    description: [
      "Developed an Intelligent Document Processing (IDP) system for detecting and classifying document components",
      "(e.g., text blocks, tables, images) with high accuracy, and deploying it via Docker.",
      "Implemented a robust data end to end pipeline for Object Detection with YOLOv11 compatible with current",
      "pipeline that increase 25% detection with 97% recall in FastAPI."
    ],
    skills: [],
    logo: "/logos/ae.jpeg"
  },
  {
    company: "AGS Health",
    position: "Research Engineer",
    duration: "Sept 2021 – Nov 2022",
    year: 2021,
    description: [
      "Collected and analyzed medical data, cleaned and pre-processed it for pattern recognition using MySQL,",
      "Python, and statistical methods to derive actionable insights and solutions.",
      "Led development of automation scripts, profiling tools, and database integration, improving system efficiency",
      "by 30% using MLflow.",
      "Designed and implemented medical code automation projects using machine learning and deep learning approaches,",
      "achieving 79% F1 score with integrated XGBoost and Logistic Regression models.",
      "Deployed efficient data cleaning pipelines on AWS SageMaker, ensuring data quality and integrity.",
      "Successfully conducted Proof of Concepts (POCs) for clients, achieving 90% recall in data analysis.",
      "Resolved memory challenges with binary serialization, achieving 97.25% file compression and saving over",
      "$25,000 annually.",
      "Utilized Retrieval-Augmented Generation (RAG) using LangChain and ChromaDB for information",
      "retrieval tasks.",
      "Fine-tuned LLMs (llama3, bioclinicalBERT, BioMistral) for information retrieval and classification, enhancing",
      "F1 scores in multiple projects.",
      "Developed solutions for extracting data from table structures in PDFs, scanned images, and digital formats."
    ],
    skills: [],
    logo: "/logos/ags.png"
  },
];

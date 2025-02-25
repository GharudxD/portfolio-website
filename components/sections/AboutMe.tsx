"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StyledPic from '../Styledpic';
import { FaLightbulb, FaCode, FaPizzaSlice, FaHiking, FaPuzzlePiece, FaChalkboardTeacher } from 'react-icons/fa';
import { useScrollSection } from '@/hooks/use-scroll-section';
import { CardSpotlight } from '../ui/card-spotlight';

const AboutMe: React.FC = () => {
  const { ref, isVisible } = useScrollSection();

  return (
    <div id="about" className="relative w-full flex flex-col sm:flex-row py-20 scroll-mt-20" ref={ref}>
      <motion.div 
      className="w-full sm:w-[70%] pr-0 sm:pr-8 mb-8 sm:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
          <Card className="w-full bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-primary flex items-center">
              <FaLightbulb className="mr-2" /> About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base text-foreground space-y-4">
          <p>
  👋 <b>Namaste! I'm Vinit, an AI/ML Developer</b> who spends his time teaching machines to understand language, process data, and occasionally guess what I want for dinner (*still in beta*). My love for math was inevitable, thanks to my <b>math-genius mother</b>, who ensured I could solve equations before I could spell "algorithm."
</p>

<p>
  <FaCode className="inline-block mr-2" /> 
  After <b>two years of wrestling with data</b> as a research engineer, I took a deep dive into the world of AI. Teaching <b>Transform Calculus</b> in academia was a revelation—it turns out <b>programming and math</b> aren't just cousins; they're practically Bollywood siblings separated at birth. This realization led me straight into the fascinating world of <b>Machine Learning, NLP, and LLMs</b>.
</p>

<p>
  When I'm not debugging models or explaining AI concepts with funny analogies, you might find me:
</p>

<ul className="list-disc pl-5 space-y-2">
  <li><FaPizzaSlice className="inline-block mr-2" /> Experimenting with the <b>perfect panner-to-butter ratio</b> (because hyperparameter tuning applies to spices too).</li>
  <li><FaHiking className="inline-block mr-2" /> Trekking in the <b>Western Ghats</b> (and proving that getting lost is just an <b>unsupervised learning task</b>).</li>
  <li><FaPuzzlePiece className="inline-block mr-2" /> Solving puzzles, <b>both logical and why my WiFi stops working when I need it most</b>.</li>
</ul>

<p>
  Currently, I'm diving deeper into <b>LLMs, NLP, and AI Agents</b>, because who wouldn't want to build AI that actually understands humans? I believe in <b>lifelong learning, innovation</b>, and ensuring AI is as <b>useful, efficient, and maybe even funny</b> as possible. 
</p>

<p>
  So, if you ever need a conversation about <b>AI</b>, <b>or just want to debate the best street food in India</b>, let's connect! 🚀
</p>

          </CardContent>
        </Card>
      </motion.div>
      <motion.div 
        className="w-full sm:w-[30%] flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='w-full max-w-[250px] aspect-square'>
          <StyledPic />
        </div>
      </motion.div>
    </div>
  )
}

export default AboutMe

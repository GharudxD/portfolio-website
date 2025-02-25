import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { RiTerminalBoxFill } from 'react-icons/ri';
import { useScrollSection } from '@/hooks/use-scroll-section';

const Terminal = () => {
  const [typedLines, setTypedLines] = useState<string[]>(['', '', '']);
  const [currentLine, setCurrentLine] = useState<number>(0);
  const [currentChar, setCurrentChar] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const { ref, isVisible } = useScrollSection();

  const codeLines = useMemo(() => [
    'print("Hey!!! I\'m Vinit👋 Explain AI concepts in a way your grandma (and your chatbot) can understand.")',
    'print("Helping AI understand text better than your autocorrect— ML, NLP & LLMs , with CV just in case it needs to ‘see’ what’s up!")'
  ], []);

  const typeLine = useCallback(() => {
    const line = codeLines[currentLine];
    if (currentChar <= line.length) {
      setTypedLines(prev => prev.map((l, idx) => idx === currentLine ? line.slice(0, currentChar) : l));
      setCurrentChar(prev => prev + 1);
    } else {
      if (currentLine < codeLines.length - 1) {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      } else {
        setIsTyping(false);
      }
    }
  }, [codeLines, currentLine, currentChar]);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setIsTyping(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  useEffect(() => {
    if (isTyping) {
      const timer = setTimeout(typeLine, 50);
      return () => clearTimeout(timer);
    }
  }, [isTyping, typeLine]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-card text-card-foreground rounded-lg p-6 mb-8 shadow-lg relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'], opacity: [0.3, 0.5] }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <motion.div 
          className="flex items-center mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.4 }}
        >
          <RiTerminalBoxFill className="text-primary mr-2" />
          <span className="text-primary">vinit@portfolio:~$</span>
          <span className="text-secondary ml-2">&gt;&gt;</span>
          <span className='text-muted-foreground'>python</span>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.4 }}>
          {typedLines.map((line, index) => (
            <motion.div
              key={index}
              className={index <= currentLine ? 'text-primary' : 'text-muted-foreground'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.2, duration: 0.4 }}
            >
              <span className="text-secondary mr-2">&gt;&gt;</span>
              {/* <span className="text-muted-foreground">{line.slice(0, 6)}</span>
              <span className="text-primary">{line.slice(6)}</span> */}
              <span className="text-muted-foreground">{line.slice(0, 6)}</span>
              <span className="text-primary">{line.slice(6, -1)}</span>
              <span className="text-muted-foreground">{line.endsWith(')') ? ')' : ''}</span>
              {index === currentLine && isTyping && <span className="animate-blink">|</span>}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Terminal;

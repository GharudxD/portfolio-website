// components/sections/Blog.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../BlogCard';
import { blogs } from '@/data/blogs';
import { useScrollSection } from '@/hooks/use-scroll-section';
import { FaFeatherAlt } from 'react-icons/fa';

const Blog: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollSection();


  return (
    <section id="blog" className="py-20" ref={ref}>
      <motion.h2 
        className="text-2xl sm:text-3xl font-bold text-primary flex items-center justify-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <FaFeatherAlt className="mr-2" /> Blog
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BlogCard
              {...blog}
              isHovered={hoveredIndex === index}
            />
          </motion.div>
        ))}
      </div>
      {/* Read More Button */}
      <motion.div 
        className="flex justify-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.a 
          href="https://medium.com/@vinitshah101" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 inset-0 rounded-xl border-2 border-primary background-primary text-primary font-medium text-lg hover:bg-primary hover:text-background transition-all duration-300"
          whileHover={{ scale: 1.1 }} // Scale up and change color on hover
          whileTap={{ scale: 0.95 }} // Slightly shrink on click
        >
          More on Medium
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Blog;
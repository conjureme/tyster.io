'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Icon } from '@iconify/react';

import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  borderColor: string;
  bgColor: string;
  shadowColor: string;
  link: string;
  tags: string[];
  stats: Record<string, string>;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'tyster.io',
    description: `you're here right now! thanks for visiting!`,
    icon: '/diamond.svg',
    color: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-500',
    bgColor: '',
    shadowColor: '#a855f7',
    link: 'https://github.com/conjureme/tyster.io',
    tags: ['Next.js', 'TailwindCSS', 'AWESOME'],
    stats: {},
  },
  {
    id: 2,
    title: 'moemoe',
    description:
      'a super awesome discord bot with AI integration, function calling, and additional configs for power users. ',
    icon: '/club.svg',
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500',
    bgColor: '',
    shadowColor: '#3b82f6',
    link: 'https://github.com/conjureme/moemoe',
    tags: ['discord.js', 'typescript'],
    stats: {},
  },
  {
    id: 3,
    title: 'frieren plush',
    description: 'the thing that powers this entire website',
    icon: '/heart.svg',
    color: 'from-pink-500 to-red-500',
    borderColor: 'border-pink-500',
    bgColor: '',
    shadowColor: '#ec4899',
    link: 'null',
    tags: ['slayer', 'absolutely essential', '<(=w=)>'],
    // TODO: add click counter
    stats: { clicks: 'null', 'looting that mimic': '100%' },
  },
  {
    id: 4,
    title: 'mystery project',
    description:
      'something amazing and free is being prepared... check back soon!',
    icon: '/spade.svg',
    color: '',
    borderColor: 'border-gray-500',
    bgColor: '',
    shadowColor: '#6b7280',
    link: '#',
    tags: ['coming soon', '???'],
    stats: { progress: '34%' },
  },
];

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.35, 1], [20, 0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.45, 1], [0.25, 1, 1]);
  const baseScale = useTransform(scrollYProgress, [0, 0.35, 1], [0.75, 1, 1]);

  return (
    <motion.div
      ref={cardRef}
      className='cursor-pointer mb-16 w-full'
      style={{
        perspective: '1000px',
        transformOrigin: 'center top',
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className={`relative bg-white rounded-2xl border-2 ${project.borderColor} overflow-hidden w-full`}
        style={{
          rotateX: rotateX,
          opacity: opacity,
          scale: isHovered ? 1.05 : baseScale,
          transformStyle: 'preserve-3d',
          transition: 'all 0.3s ease-out',
          boxShadow: `3px 3px 0 0 ${project.shadowColor}`,
        }}
      >
        <div className='flex flex-col md:flex-row'>
          <div
            className={`relative w-full md:w-1/3 h-48 md:h-auto p-8 flex items-center justify-center`}
          >
            <motion.div
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={project.icon}
                width={11}
                height={11}
                className='text-white w-24 h-24 md:w-32 md:h-32'
                alt='card icon'
                unoptimized
              />
            </motion.div>

            <div className='absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-md' />
            <div className='absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-lg' />
          </div>

          <div className='flex-1 p-8'>
            <div className='mb-4'>
              <h3 className='text-2xl md:text-3xl font-bold text-gray-800 mb-2'>
                {project.title}
              </h3>
              <p className='text-gray-600 text-lg'>{project.description}</p>
            </div>

            <div className='flex flex-wrap gap-2 mb-6'>
              {project.tags.map((tag, tagIndex) => (
                <motion.span
                  key={tagIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                  className={`px-3 py-1 ${project.bgColor} text-gray-700 rounded-full text-sm font-medium`}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <div className='flex gap-6 mb-6'>
              {Object.entries(project.stats).map(([key, value]) => (
                <div key={key} className='text-center'>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className='text-2xl font-bold text-gray-800'
                  >
                    {value}
                  </motion.div>
                  <div className='text-sm text-gray-500'>{key}</div>
                </div>
              ))}
            </div>

            {project.link === '#' ? (
              <div className='inline-flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-500 font-semibold rounded-lg cursor-not-allowed'>
                <span>coming soon</span>
                <Icon icon='mdi:clock' className='w-5 h-5' />
              </div>
            ) : project.link === 'null' ? (
              <div></div>
            ) : (
              <motion.a
                href={project.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <span>check it out</span>
                <Icon icon='mdi:arrow-right' className='w-5 h-5' />
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className='py-16 w-full'>
      <div className='mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            <span className='gradient-flow'>my awesome sauce projects</span>
          </h2>
          <p className='text-xl text-gray-600'>
            some cool stuff i&apos;ve been working on
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 gap-8 w-full'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.45 }}
          transition={{ delay: 1 }}
          className='text-center mt-16'
        >
          <p className='text-gray-500'>
            <span className='font-mono text-sm'>
              {'// TODO: work on the other 13 projects ongoing'}
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

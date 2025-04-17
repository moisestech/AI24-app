'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CTAButton } from './types';

interface InteractionLayerProps {
  buttons: CTAButton[];
  isVisible: boolean;
}

const InteractionLayer: React.FC<InteractionLayerProps> = ({ buttons, isVisible }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 justify-center pointer-events-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {buttons.map((button) => (
        <Button
          key={button.id}
          size="lg"
          variant={button.variant}
          className={`${
            button.variant === 'outline' 
              ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400/10' 
              : 'bg-cyan-400 text-white hover:bg-cyan-500'
          } glitch-text`}
          data-text={button.text}
        >
          <Link href={button.href}>
            {button.text}
            {button.text === 'Start a Project' && <ArrowRight className="ml-2" />}
          </Link>
        </Button>
      ))}
    </motion.div>
  );
};

export default InteractionLayer; 
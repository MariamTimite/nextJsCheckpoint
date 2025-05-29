import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Image from 'next/image';
import profilePic from '../assets/images/profile.jpg';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px;
`;

const Hero = () => {
  return (
    <HeroSection>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image src={profilePic} width={150} height={150} alt="Profile" />
        <h1>Bienvenue sur mon portfolio</h1>
        <p>Développeuse Web passionnée par le design et les technologies modernes.</p>
      </motion.div>
    </HeroSection>
  );
};

export default Hero;

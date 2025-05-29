import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Card = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: #fff;
  color: #333;
  padding: 20px;
  text-align: center;
`;

const ProjectCard = ({ title, description, image }) => {
  return (
    <Card>
      <Image src={image} width={300} height={200} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  );
};

export default ProjectCard;

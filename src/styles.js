// frontend/src/styles.js

import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #121212;
`;

export const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid #1db954;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProductName = styled.h3`
  color: #ffffff;
  text-align: center;
  font-family: Arial, sans-serif;
  margin-top: 10px;
`;

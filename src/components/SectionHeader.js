import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 128px;
}
`;

const Title = styled.h1`
  font-size: 6rem;
  font-family: 'Les Mores';
  margin: 0 auto;
  position: relative;

  &:after {
    content: '';
    height: 5px;
    width: 50%;
    background: linear-gradient(100deg, rgb(248, 7, 89), rgb(188, 78, 156));
    display: block;
    margin: 0 auto;
    border-radius: 12px;
  }

  @media (max-width: 900px) {
    font-size: 4rem;
  }
`;

const SectionHeader = ({ title }) => (
  <Header>
    <Title>{title}</Title>
  </Header>
);

export default SectionHeader;

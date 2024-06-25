import React from 'react';
import styled from 'styled-components';


const Heading1 = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
`
const Heading2 = styled.h2`
  margin: 0;
  font-size: 2.25rem;
  line-height: 3rem;
  font-weight: 500;
`
const Heading3 = styled.h3`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
`
const Parag = styled.p`
  margin: 0;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
`


interface IProps {
  type?: string;
  children: React.ReactNode;
};
export default function Text({
  type,
  children,
}: IProps, {...restProps}: any) {

  switch (type) {
    case 'h1':
      return(<Heading1 {...restProps}>{children}</Heading1>);
    case 'h2':
      return(<Heading2 {...restProps}>{children}</Heading2>);
    case 'h3':
      return(<Heading3 {...restProps}>{children}</Heading3>);
    default:
      return(<Parag {...restProps}>{children}</Parag>);
  }
};
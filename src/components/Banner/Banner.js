import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../breakpoints';
import tw from 'tailwind.macro';

const BannerContainer = styled.div`
  ${tw`flex items-center justify-center m-auto text-white bg-blue-500`}
`;

const BannerContent = styled.div`
  ${tw`p-10 text-2xl`}
`;

export const Banner = () => (
  <BannerContainer>
    <BannerContent>Information angående Covid-19</BannerContent>
  </BannerContainer>
);

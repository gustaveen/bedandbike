import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import tw from 'tailwind.macro';

const BannerContainer = styled.div`
  ${tw`flex items-center justify-center m-auto`}
  background-color: ${props => props.theme.palette.gray.main};
`;

const BannerContent = styled.div`
  ${tw`p-10 text-2xl text-center`}
`;

const CovidLink = styled(Link)`
  font-weight: 700;
  text-decoration: underline;
`;

export const Banner = () => (
  <BannerContainer>
    <BannerContent>
      Hur påverkas ditt besök av Corona (COVID-19)?{' '}
      <CovidLink to="/sv/corona-virus-information">Läs mer</CovidLink>
    </BannerContent>
  </BannerContainer>
);

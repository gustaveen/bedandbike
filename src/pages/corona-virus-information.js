import React from 'react';
import { graphql } from 'gatsby';
import { withIntl } from '../i18n';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import theme from '../components/theme';
import Info from '../components/Info';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import tw from 'tailwind.macro';
import { breakpoints } from '../components/breakpoints';

import {
  List,
  Item,
  Content,
  ContentTitle,
} from '../components/cykelpaket.styles';

export const Article = styled.div`
  ${tw` m-auto`}
  max-width: calc(740px + 8%);
  padding: 40px 4%;

  @media ${breakpoints.lg} {
    margin-top: 32px;
  }
`;

const CovidInfo = props => (
  <ThemeProvider theme={theme}>
    <Layout langKey={props.pageContext.locale}>
      <Hero
        image={props.data.heroImage.childImageSharp.fluid}
        left
        title="Info om Covid-19"
      />
      <Article>
        <Content>
          <ContentTitle>
            Hur påverkas ditt besök hos oss på Bed & Bike Öckerö av Corona
            (COVID-19) viruset?
          </ContentTitle>
          <p>
            Du som är vår gäst ska känna Dig lika trygg som Du gör hemma. Då du
            vistas hos oss och kommer du att njuta av den friska luften på våra
            öar och Du kommer att befinna dig långt borta från de stora
            folkmassorna.
          </p>
          <h3>Information och åtgärder angående rådande smittspridning</h3>
          <p>
            För att minimera riskerna att smittan sprids och för att säkerställa
            en trevlig och trygg vistelse på Bed and Bike Öckerö har vi vidtagit
            följande åtgärder.
          </p>
          <p>
            <strong>Vi har förstärkt och förbättrat våra städrutiner. </strong>
            Efter varje besök desinficerar handtag, knoppar, spolknappar och
            strömbrytare etc. Kort sagt alla ställen där man trycker eller
            håller. På toaletten och gemensamma utrymmen finns det behållare för
            desinficering och rengöring.
          </p>
          <p>
            <strong>Frukostservering.</strong> Vi kommer att servera frukosten
            på bricka så att ni kan äta i respektive rum om ni vill, annars
            finns det gemensamma allrummet att tillgå och vid fint väder kan ni
            givetvis äta utomhus i vår trädgård.
          </p>
          <p>
            <strong>
              Vi följer självklart Folkhälsomyndigheternas rekommendationer:
            </strong>
          </p>
          <List>
            <Item>Om jag är sjuk stannar jag hemma.</Item>
            <Item>Tvätta händerna ofta och noga.</Item>
            <Item>Att hålla avstånd till de jag möter.</Item>
            <Item>Undvik att röra ögon, näsa och mun.</Item>
            <Item>Undvik att hälsa genom att ta i hand.</Item>
            <Item>Undvik större folksamlingar.</Item>
            <Item>Hosta och nys i armvecket.</Item>
          </List>
        </Content>
      </Article>
      <Info />
    </Layout>
  </ThemeProvider>
);

export default withIntl(CovidInfo);

export const query = graphql`
  query {
    heroImage: file(relativePath: { regex: "/cliff-and-bike-large/" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

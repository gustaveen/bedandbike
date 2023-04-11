import React from 'react';
import { graphql } from 'gatsby';
import { withIntl, Link } from '../i18n';
import { FormattedMessage } from 'react-intl';
import styled, { ThemeProvider } from 'styled-components';
import { breakpoints } from '../components/breakpoints';
import theme from '../components/theme';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Button from '../components/Button';
import Info from '../components/Info';

import {
  Article,
  Sidebar,
  SidebarTitle,
  List,
  Item,
  Content,
  ContentTitle,
  Price,
  PriceText,
  PriceAmount,
  Booking,
} from '../components/cykelpaket.styles';

const Section = styled.div`
  max-width: calc(1220px + 8%);
  margin: 40px auto;
  padding-left: 4%;
  padding-right: 4%;

  @media ${breakpoints.ml} {
    margin-top: 60px;
    margin-bottom: 60px;
  }

  @media ${breakpoints.lg} {
    margin-top: 75px;
    margin-bottom: 75px;
  }
`;

export const HikeText = props => {
  return (
    <ThemeProvider theme={theme}>
      <Article>
        <Sidebar>
          <Price>
            <PriceText>Pris</PriceText>
            <PriceAmount>1900 kr/person</PriceAmount>
          </Price>
          <SidebarTitle>Ingår i priset</SidebarTitle>
          <List>
            <Item>2 övernattningar i dubbelrum</Item>
            <Item>Lakan, handduk och städning</Item>
            <Item>Frukost (dag 2 & 3)</Item>
            <Item>Lunchpaket (dag 2 & 3)</Item>
            <Item>Karta och guide</Item>
          </List>
          <SidebarTitle>Möjliga tillval</SidebarTitle>
          <List>
            <Item>Hyrcykel 100kr/dygn</Item>
            <Item>Parkering 100kr</Item>
            <Item>
              Paketet kompletteras enkelt med en eller flera övernattningar
              (dubbelrum 1400kr inkl. frukost)
            </Item>
            <Item>Barn i extrasäng 300 kr/dygn</Item>
          </List>
          <Booking>
            <Button to="mailto:bedandbikeockero@gmail.com?subject=Vandringspaket">
              Boka här
            </Button>
          </Booking>
        </Sidebar>
        <Content>
          <ContentTitle>
            Vi erbjuder ett 2-3 dagars vandringspaket på några av våra vackra
            öar. Du bor på vårt familjära Bed & Bike på huvudön, Öckerö.
          </ContentTitle>
          <h3>Dag 1</h3>
          <p>
            Ankomst till boendet och incheckning från 15.00. Därefter finns
            möjlighet att vandra en bit på leden med start från vårt boende. På
            väg ner till Kanndalens hamn tar ni stigen till höger upp i bergen.
            Här kommer man fram till våghalsarnas badklippor, Jacobs Bratt. Där
            följer man toppen ner mot vattnet och över rullstensfältet ner mot
            badplatsen Saltas. Ta sikte mot Öckerö kyrka och vandra över
            kyrkogården. En tur in i Öckerös hembygdsgård hinner ni med innan ni
            är ute på Sörgårdsvägen. Därefter kan ni hyra våra cyklar och ta er
            ner till Hönö Klåva för en bit mat.
          </p>
          <List>
            <Item>Logi: Bed & Bike Öckerö</Item>
          </List>
          <br />
          <h3>Dag 2</h3>
          <p>
            Efter frukost startar ni från boendet på er heldagsvandring söderut
            på Hönö genom Ersdalens naturreservat med vidsträckta vyer ut mot
            horisonten. Via Lapposands badplats, ” Bådevi” och Hästens badplats
            når ni Hönö Klåva med fiskemuseum, caféer, restauranger och affärer,
            antingen äter ni av ert medhavda lunchpaket men med 100 sek tillägg
            får ni njuta Tullhusets fantastiska fisklunch. Ni kan välja att
            fortsätta vandringen över till Fotö och därifrån ta bussen tillbaks
            till boendet. Buss nr 2 tar er tillbaka till boendet, avstigning
            Hönö norra.
          </p>
          <List>
            <Item>Logi: Bed & Bike Öckerö</Item>
            <Item>
              Måltider: Frukost och lunchpaket (alternativt lunch på Tullhuset)
            </Item>
            <Item>Vandring 12-20 km</Item>
          </List>
          <br />
          <h3>Dag 3</h3>
          <p>
            Efter frukost och utcheckning senast kl.11.00 (packningen kan ni
            lämna kvar) tar ni bussen över till Burö och därifrån den gula
            färjan över till Rörö. Vandringen går genom hamnen över vackra hedar
            med säregen flora där får och hästar betar. En smal stig slingrar
            sig mellan klapperstensfälten som förgylls av konstverk byggda av
            vrakgods. Ni tar samma färja och buss tillbaks till boendet, buss nr
            1 eller 290, avstigning Kanndalen.
          </p>
          <List>
            <Item>Logi: Bed & Bike Öckerö</Item>
            <Item>Måltider: Frukost & lunchpaket</Item>
            <Item>Vandring ca 12km</Item>
          </List>
          <br />
          <h3>Digital karta över Skärgårdsleden</h3>
          <div
            style={{
              marginBlock: '16px',
              padding: '56.25% 0 0 0',
              position: 'relative',
            }}
          >
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1lA6ppbnP3P54362aa6ksq2g_jSzUx99K&ehbc=2E312F"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <br />
          <p>
            Vandringspaketet är ett förslag. Ni kan tillsammans med värdparet
            anpassa paketet. Hyppeln, Källö-Knippla, Kalvsund och Grötö är andra
            unika öar som man når med färja + cykel/vandring eller kajak. Dessa
            öar har också vandringsleder och underbar natur. Fantastiska
            matställen finns även på Hyppeln, Källö-Knippla och Björkö.
          </p>
        </Content>
      </Article>
      <Info />
    </ThemeProvider>
  );
};

const HikePage = props => {
  return (
    <ThemeProvider theme={theme}>
      <Layout langKey={props.pageContext.locale}>
        <Hero
          image={props.data.heroImage.childImageSharp.fluid}
          left
          title={<FormattedMessage id="hikePackage" />}
        />
        <Intro text={<FormattedMessage id="hikeIntro" />} />
        <Section>
          <HikeText />
        </Section>
      </Layout>
    </ThemeProvider>
  );
};

export default withIntl(HikePage);

export const query = graphql`
  query {
    heroImage: file(relativePath: { regex: "/vandring-hero/" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

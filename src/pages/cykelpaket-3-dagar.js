import React from 'react';
import { graphql } from 'gatsby';
import { withIntl } from '../i18n';
import { ThemeProvider } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import theme from '../components/theme';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import Button from '../components/Button';

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

const BikeThreeDay = props => (
  <ThemeProvider theme={theme}>
    <Layout langKey={props.pageContext.locale}>
      <Hero
        image={props.data.heroImage.childImageSharp.fluid}
        left
        title={<FormattedMessage id="bikeCardTitle3" />}
      />
      <Article>
        <Sidebar>
          <Price>
            <PriceText>Pris</PriceText>
            <PriceAmount>2950 kr/person</PriceAmount>
          </Price>
          <SidebarTitle>Ingår i priset</SidebarTitle>
          <List>
            <Item>3 övernattningar i dubbelrum</Item>
            <Item>Lakan, handduk och städning</Item>
            <Item>Lunchpaket (dag 1 och 2)</Item>
            <Item>Frukost (dag 1 - 3 )</Item>
            <Item>Middag (dag 1 exkl. dryck)</Item>
            <Item>Guidad båttur till Vinga (2.5h)</Item>
            <Item>Karta och guide</Item>
          </List>
          <SidebarTitle>Möjliga tillval</SidebarTitle>
          <List>
            <Item>Hyrcykel 100kr/dygn</Item>
            <Item>Parkering 100kr</Item>
            <Item>
              Paketet kompletteras enkelt med en eller flera övernattningar
              (dubbelrum 1050kr inkl. frukost)
            </Item>
            <Item>Barn i extrasäng 200 sek/dygn</Item>
          </List>
          <Booking>
            <p>Du bokar detta cykelpaket via swedenbybike.com</p>
            <Button to="https://swedenbybike.com/cykelpaket/o-loffa-med-cykel-pa-ockeroarna/">
              Boka här
            </Button>
          </Booking>
        </Sidebar>
        <Content>
          <ContentTitle>
            Välkommen till en 3-dagars ”ö-luffning" på Öckerös 10 öar. Du tar
            dig fram med cykel, färja och till fots. Du bor på vårt familjära
            Bed & Bike på huvudön, Öckerö.
          </ContentTitle>
          <h3>Dag 1 - Cykla till Rörö med vandring i naturreservatet</h3>
          <p>
            Efter ankomsten, då ni avsmakat en god kopp latté, hoppar ni upp på
            era cyklar alt. våra hyrcyklar och far norrut mot Burö och där
            väntar den gula färjan till Rörö. Väl framme ta gärna ett stopp i
            Rörö hamn. Detta är hemmahamn för ”Astrid” ett av Sveriges största
            fiskefartyg. Här ligger också sjöräddningens fartyg för regionen.
            Vid kajkanten i hamnen finner ni, Röröboa Cafe och Restaurang, där
            ni hämtar ert lunchpaket.
          </p>
          <p>
            Tag gärna en cykeltur mellan underbart vackra skärgårdshus till den
            lilla hamnen Apelvik i nordost. På västsidan av ön ligger
            naturreservatet med fantastiska vandringsleder. Här sträcker sig
            stora klapperstensfält mot väst och mot syd en badvänlig sandstrand
            och har du tur kan du träffa vildhästarna och fåren som betar på
            ljunghedarna. På vägen hem stannar ni till på Evas på Hälsö och
            avnjuter er middag.
          </p>
          <List>
            <Item>Logi: Bed & Bike Öckerö</Item>
            <Item>Måltider: Lunchpaket och middag</Item>
            <Item>Cykling c:a 25 km och vandring (hela rundan 12 km)</Item>
          </List>
          <br />
          <h3>
            Dag 2 - Cykla till Björkö med avstickare till Kalvsund eller Grötö
          </h3>
          <p>
            Efter en berikande frukostbuffé cyklar ni till Öckerö färjeläge för
            en båttur till Björkö. Färjan passerar Kalvsund med sjömärket Valen
            och Bremerska villan. Ni går i land vid Framnäs och cyklar norrut,
            ner till Björkö hamn där ni hämtar ert lunchpaket i ” Feskeboa”
            besök gärna Skeppshandeln.
          </p>
          <p>
            När hamnturen är avklarad cyklar ni genom Björkö samhälle, passerar
            genom vacker ekskog, öppna landskap och bohuslänska klippor tills ni
            når det pittoreska fiskeläget Bovik. Under säsong kan man längs
            vägen hitta både orkidéer och blåsippor. På tillbakavägen kan man
            göra en avstickare till Grötö eller Kalvsund. Efter hemkomst och en
            svalkande dusch är det dags att cykla ner till restaurangerna i
            Klåva där vi kan rekommendera Tullhuset med fantastiska fiskrätter
            eller någon av de andra restaurangerna såsom Franses Skärgårdspub,
            Haralds restaurang, Lilling Cottage och Trubaduren.
          </p>
          <List>
            <Item>Logi: Bed & Bike Öckerö</Item>
            <Item>Måltider: Frukost och lunchpaket</Item>
            <Item>Cykling c:a 30 km</Item>
          </List>
          <br />
          <h3>Dag 3 - Cykla till Hönö och Fotö</h3>
          <p>
            Efter frukost cyklar ni via Öckerö hembygdsmuseum, Hönö konsthall
            och Galleri Gårda vidare söderut och över bron till den sydligast
            belägna ön, Fotö. Där kan ni vandra omkring i den bevarade
            skärgårdsbebyggelsen. Styr därefter färden mot Hönö Klåvas centrum
            med dess många små och spännande butiker, restauranger och caféer.
          </p>
          <p>
            Klockan 12.30 (alt. 16.30) stiger ni ombord på ms/Belle–Amie som tar
            er, via kobbar och skär, ut på en mycket uppskattad och spännande
            guidad tur till Vinga. Turen tar 2.5 timmar så det finns tid för
            shopping och ett besök på öns fiskemuseum som visar livet på
            Öckerö-öarna över tid.
          </p>
          <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <iframe
              src="https://player.vimeo.com/video/312052598?autoplay=0&title=0&byline=0&portrait=0"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
              }}
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            />
          </div>
          <script src="https://player.vimeo.com/api/player.js" />
          <span>MS/Belle–Amie en vacker sommardag</span>
          <p>Ni avslutar med middag på någon av restaurangerna.</p>
          <List>
            <Item>Logi: Bed & Bike Öckerö</Item>
            <Item>Måltider: Frukost</Item>
            <Item>Cykling c:a 25 km</Item>
          </List>
          <br />
          <h3>Dag 4 - Dags för hemfärd</h3>
          <p>
            Efter några riktigt upplevelserika dagar på Öckerööarna är det dags
            för hemfärd. Du kommer att ha många fina minnen med dig hem.
          </p>
          <p>Varmt välkomna åter!</p>
          <List>
            <Item>Måltider: Frukost</Item>
          </List>
          <br />
          <p>
            Cykelpaketet är ett förslag. Ni kan tillsammans med värdparet forma
            ert eget paket.  Hyppeln, Källö-Knippla, Kalvsund och Grötö är andra
            unika öar som man når med färja + cykel/vandring eller kajak. Dessa
            öar har också vandringsleder och underbar natur. Fantastiska
            matställen finns även på Hyppeln, Källö-Knippla och Björkö.
          </p>
        </Content>
      </Article>
    </Layout>
  </ThemeProvider>
);

export default withIntl(BikeThreeDay);

export const query = graphql`
  query {
    heroImage: file(relativePath: { regex: "/planning_large/" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

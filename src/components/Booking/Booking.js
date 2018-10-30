import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';
import Helmet from 'react-helmet';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import MomentLocaleUtils, { 
  formatDate, 
  parseDate, 
} from 'react-day-picker/moment';
import 'react-day-picker/lib/style.css';

// Include the locale utils designed for moment

import { FormattedMessage } from 'react-intl';
import 'moment/locale/sv';

import styled from 'styled-components';
import { breakpoints } from '../breakpoints';
import Button from '../Button';

const BookingRoot = styled.div`
  padding-left: 4%;
  padding-right: 4%;
  background-color: #F9F9F9;
`;

const BookingContainer = styled.div`
  max-width: 870px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 32px;
  padding-bottom: 32px;
  text-align: center;

  @media ${breakpoints.ml} {  
    padding-top: 56px;
    padding-bottom: 56px;
  }

  @media ${breakpoints.xl} {  
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

const Title = styled.h3`
  margin-bottom: 15px;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: left;

  @media ${breakpoints.ml} {  
    font-size: 2.4rem;
  }
`;

const Label = styled.p`
  margin-bottom: 10px;
  font-size: 1.6rem;
  font-weight: bold;
  text-align: left;
`;

const Email = styled.input`
  height: 50px;
  width: 100%;
  margin-bottom: 20px;
  padding: .5em 1em;
  border: 1px solid #F1F1F1;
  border-radius: 4px;
  font-size: 1.6rem;

  @media ${breakpoints.ml} {  
    height: 65px;
  }
`;

const Message = styled.textarea`
  width: 100%;
  margin-bottom: 28px;
  padding: .5em 1em;
  border: 1px solid #F1F1F1;
  border-radius: 4px;
  font-size: 1.6rem;
  resize: none;

  @media ${breakpoints.ml} {  
    font-size: 1.8rem;
  }
`;

const ButtonContainer = styled.div`
  text-align: right;
`;

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.state = {
      from: undefined,
      to: undefined,
    };
  }

  static contextTypes = {
    language: PropTypes.object,
  }

  showFromMonth() {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }
  handleFromChange(from) {
    // Change the from date and focus the "to" input field
    this.setState({ from });
  }
  handleToChange(to) {
    this.setState({ to }, this.showFromMonth);
  }

  render() {
    const { language } = this.context;
    const { image } = this.props;
    const { locale } = language;
    moment.locale(locale);
    const today = moment();
    const fromString = today.format('D MMMM, YYYY');
    const tomorrow = today.add(3, 'days');
    const toString = tomorrow.format('D MMMM, YYYY');
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };

    return (
      <BookingRoot>
        <BookingContainer>
          <Title>
            <FormattedMessage id="booking" />
          </Title>
          <form>
            <div className="InputFromTo" id="book">
              <div className="InputFromTo-from">
                <Label><FormattedMessage id="checkIn" /></Label>
                <DayPickerInput
                  value={from}
                  placeholder={fromString}
                  format="LL"
                  formatDate={formatDate}
                  parseDate={parseDate}
                  dayPickerProps={{
                    selectedDays: [from, { from, to }],
                    disabledDays: { after: to },
                    firstDayOfWeek: 1,
                    localeUtils: MomentLocaleUtils,
                    locale:locale,
                    toMonth: to,
                    modifiers,
                    numberOfMonths: 2,  
                    onDayClick: () => this.to.getInput().focus(),
                  }}
                  onDayChange={this.handleFromChange}
                />
              </div>
              <div className="InputFromTo-to">
                <Label><FormattedMessage id="checkOut" /></Label>
                <DayPickerInput
                  ref={el => (this.to = el)}
                  value={to}
                  placeholder={toString}
                  firstDayOfWeek={2}
                  format="LL"
                  formatDate={formatDate}
                  parseDate={parseDate}
                  dayPickerProps={{
                    selectedDays: [from, { from, to }],
                    disabledDays: { before: from },
                    firstDayOfWeek: 1,
                    localeUtils: MomentLocaleUtils,
                    locale: locale,
                    modifiers,
                    month: from,
                    fromMonth: from,
                    numberOfMonths: 2,
                  }}
                  onDayChange={this.handleToChange}
                />
              </div>
            </div>
            <Label>
              <FormattedMessage id="email" />
            </Label>
            <Email
              type="email"
            />
            <Label>
              <FormattedMessage id="message" />
            </Label>
            <Message 
              rows="10" 
              name="message" 
            />
            <ButtonContainer>
              <Button>
                <FormattedMessage id="send" />
              </Button>
            </ButtonContainer>
            <Helmet>
              <style>{`
                .InputFromTo {
                  position: relative;
                  display: flex;
                  justify-content: space-between;
                }
                .InputFromTo > * {
                  width: calc(50% - 5px);
                }
                .InputFromTo .DayPicker {
                  margin-bottom: 20px;
                  font-size: 1.8rem !important;
                  font-family: 'CircularStd', sans-serif !important;
                }
                .InputFromTo .DayPickerInput {
                  margin-bottom: 20px;
                }
                .InputFromTo .InputFromTo-from .DayPickerInput {
                  width: 100%;
                }
                .InputFromTo .InputFromTo-to .DayPickerInput {
                    width: 100%;
                }
                .InputFromTo input {
                  height: 50px;
                  width: 100%;
                  padding: .5em 1em;
                  border: 1px solid #F1F1F1;
                  border-radius: 4px;
                  font-size: 1.6rem;
                }
                @media (min-width: 768px) {
                  .InputFromTo input {
                    height: 65px;
                    font-size: 1.8rem;
                  }
                }
                .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                  background-color: #f0f8ff !important;
                  color: #4a90e2;
                }
                .InputFromTo .DayPicker-Day {
                  border-radius: 0 !important;
                }
                .InputFromTo .DayPicker-Day--start {
                  border-top-left-radius: 50% !important;
                  border-bottom-left-radius: 50% !important;
                }
                .InputFromTo .DayPicker-Day--end {
                  border-top-right-radius: 50% !important;
                  border-bottom-right-radius: 50% !important;
                }
                .InputFromTo .DayPickerInput-Overlay {
                  width: calc(200% + 10px);
                  max-width: 870px;
                  margin-top: 2px;
                }
                .InputFromTo-to .DayPickerInput-Overlay {
                  margin-left: calc(-100% - 10px);
                }
              `}</style>
            </Helmet>
          </form>
        </BookingContainer>
      </BookingRoot>
    )
  }
}

export default Booking;
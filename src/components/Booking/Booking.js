import React from 'react'
import PropTypes from 'prop-types'
import { navigateTo } from "gatsby-link";
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
  font-size: 1.8rem;
  font-weight: bold;
  text-align: left;

  @media ${breakpoints.ml} {  
    font-size: 2.4rem;
  }
`;

const Label = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1.6rem;
  font-weight: bold;
  text-align: left;
`;

const Email = styled.input`
  height: 50px;
  width: 100%;
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

const Error = styled.div`
  padding-top: 5px;
  color: red;
  text-align: left;
`;

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    return {
      from: undefined,
      to: undefined,
      email: '',
      message: '',
      submitted: false,
      inputErrors: {
        email: '',
      }
    };
  }

  static contextTypes = {
    language: PropTypes.object,
  }

  validateInput = (email) => {
    const {
      inputErrors,
    } = this.state;
    console.log(email);
    inputErrors.email = (email === '');
    console.log(inputErrors);
    this.setState({
      inputErrors,
    });
    return (
      email !== ''
    );
  }

  showFromMonth = () => {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }
  handleFromChange = (from) => {
    // Change the from date and focus the "to" input field
    this.setState({ from });
  }
  handleToChange = (to) => {
    this.setState({ to }, this.showFromMonth);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const {
      email,
    } = this.state;
    e.preventDefault();

    if (!this.validateInput(email)) {
      return;
    }
    const form = e.target;
    console.log(form);
    console.log(this.state);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    const { language } = this.context;
    const { 
      email,
      from,
      inputErrors,
      message,
      to, 
    } = this.state;
    
    const { locale } = language;
    moment.locale(locale);
    const today = moment();
    const fromString = today.format('D MMMM YYYY');
    const tomorrow = today.add(3, 'days');
    const toString = tomorrow.format('D MMMM YYYY');
    const modifiers = { start: from, end: to };

    return (
      <BookingRoot>
        <BookingContainer>
          <Title>
            <FormattedMessage id="booking" />
          </Title>
          <form
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </p>
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
              name="email"
              type="email"
              value={email}
              onChange={this.handleChange}
            />
            {inputErrors.email &&
              <Error>
                <FormattedMessage id="errorEmail" />
              </Error>
            }
            <Label>
              <FormattedMessage id="message" />
            </Label>
            <Message 
              rows="10" 
              name="message"
              value={message}
              onChange={this.handleChange}
            />
            <ButtonContainer>
              <Button type="submit">
                <FormattedMessage id="send" />
              </Button>
            </ButtonContainer>
            {/* {submitted &&
              <h1>Tack för ditt mail</h1>
            } */}
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
                  font-size: 1.8rem !important;
                  font-family: 'CircularStd', sans-serif !important;
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
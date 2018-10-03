import React from 'react'
// import Link from 'gatsby-link'
// import { FormattedMessage } from 'react-intl';

const BookingBar = () => (
    <section className="BookingBar">
        <div className="BookingBar__Container">
            <h2 className="BookingBar__Title">
                <FormattedMessage id="bookingBarTitle" />
            </h2>
            <a href="#" className="BookingBar__Button">Boka rum</a>
        </div>
    </section>

)

export default BookingBar;
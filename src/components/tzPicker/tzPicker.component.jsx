import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';

import { selectCurrTimezone } from '../../redux/timezone/timezone.selector';

import TzSelect from '../tzSearchSelect/tzSearchSelect.component';

import './tzPicker.styles.scss';

const TzPicker = ({ currZone }) => (
    <div className='tz-picker'>
      <span>Current time: { moment.tz(Date.now(), currZone.name).format('HH:MM') }</span>
      {/* <span>Offset: { currZone.parse(Date.now) }</span> */}
      <TzSelect />
    </div>
)

const mapStateToProps = createStructuredSelector({
  currZone: selectCurrTimezone,
})

export default connect( mapStateToProps )( TzPicker );
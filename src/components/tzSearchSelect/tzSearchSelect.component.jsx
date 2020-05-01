import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

import './tzSearchSelect.styles.scss';

import { setTimezone } from '../../redux/timezone/timezone.actions';
import { data } from '../../redux/timezone/timezone.data';

const TzSelect = ({ handleChange }) => (
  <div className='tz-select'>
    <Select 
      options= { data } 
      onChange= { handleChange } 
      placeholder= { "GMT" }
    />
  </div>
)

const mapDispatchToProps = (dispatch) => ({
    handleChange: 
        result => dispatch( setTimezone( result.value ))
})

export default connect( null, mapDispatchToProps )(TzSelect);
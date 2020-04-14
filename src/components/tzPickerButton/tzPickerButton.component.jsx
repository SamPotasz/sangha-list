import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

import './tzPickerButton.styles.scss';

import { setTimezone } from '../../redux/timezone/timezone.actions';
import { data } from '../../redux/timezone/timezone.data';

// const 

const TzPickerButton = ({handleChange}) => (
    <div>
        <Select options={data} onChange={handleChange}/>
        {/* <Button variant="outline-secondary" size="sm"
            onClick={()=>{
                console.log(moment.tz.names())
                console.log(moment.tz.countries())}
                }>
            <FaGlobe /> Time Zone </Button> */}
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    handleChange: 
        result => dispatch(setTimezone(result.value))
})

export default connect(null, mapDispatchToProps)(TzPickerButton);
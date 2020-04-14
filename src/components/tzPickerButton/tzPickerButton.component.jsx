import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Select from 'react-select';

import './tzPickerButton.styles.scss';

import { selectCurrTimezone } from '../../redux/timezone/timezone.selector';
import { setTimezone } from '../../redux/timezone/timezone.actions';
import { data } from '../../redux/timezone/timezone.data';

// const 

const TzPickerButton = ({handleChange, currZone}) => {
    console.log(currZone);
    console.log(currZone.name);
    return(
    <div>
        <Select options={data} onChange={handleChange} 
            defaultValue={currZone.name} />
        {/* <Button variant="outline-secondary" size="sm"
            onClick={()=>{
                console.log(moment.tz.names())
                console.log(moment.tz.countries())}
                }>
            <FaGlobe /> Time Zone </Button> */}
    </div>
)}

const mapStateToProps = createStructuredSelector({
    currZone: selectCurrTimezone
})

const mapDispatchToProps = (dispatch) => ({
    handleChange: 
        result => dispatch(setTimezone(result.value))
})



export default connect(mapStateToProps, mapDispatchToProps)(TzPickerButton);
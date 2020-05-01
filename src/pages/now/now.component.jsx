import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectNowSanghas } from '../../redux/sangha/sangha.selector';
import SanghaRow from '../../components/sanghaRow/sanghaRow.component';

/**
 * Page that guides practitioners through process of finding
 * sanghas that are practicing RIGHT NOW. Or about to start.
 */
const NowPage = ({ sanghas }) => {

  //whether or not we show who's sitting now
  console.log(sanghas);

  return(
    <div className='page-content'>
      <h1>Sit right now.</h1>
      <p>Get on the cushion with practitioners and teachers who are sitting (or about to sit) this very moment.</p>
      
      <div>
        {
          sanghas.length > 0 ?
            sanghas.map( sangha => <SanghaRow sangha={sangha} />)
            : <span>No sanghas found.</span>
        }
      </div>
      {/* <AffinityFilters />
      <ShowNowButton /> */}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sanghas: selectNowSanghas
})

export default connect( mapStateToProps )( NowPage );
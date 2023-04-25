import React, {useState} from 'react'
import PropTypes from 'prop-types'
import ChannelForm from './ChannelForm'
import ChannelList from './ChannelList'

function ChannelSection({channels, addChannel, displayActiveChannel}) {

  return (
    <div className='support panel panel-primary'>
      <div className='panel-heading'>
          Channels{console.log("rerendering: ChannelSection. Channel size:" + channels.length)}
      </div>
      <div className='panel-body channels'>
        <ChannelList channels={channels} displayActiveChannel={displayActiveChannel} />
        <ChannelForm addChannel={addChannel} />
      </div>

    </div>
  )
}

ChannelSection.propTypes = {
  channels: PropTypes.array.isRequired,
  addChannel: PropTypes.func.isRequired,
  displayActiveChannel: PropTypes.func.isRequired
};

export default ChannelSection
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import ChannelForm from './ChannelForm'
import ChannelList from './ChannelList'

function ChannelSection({channels, addChannel}) {

  return (
    <>
        {console.log("rerendering: ChannelSection. Channel size:" + channels.length)}

        <ChannelList channels={channels} />
        <ChannelForm addChannel={addChannel} />
    </>
  )
}

ChannelSection.propTypes = {
  channels: PropTypes.array.isRequired,
  addChannel: PropTypes.func.isRequired
};

export default ChannelSection
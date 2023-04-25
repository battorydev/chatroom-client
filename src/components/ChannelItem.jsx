import React from "react";
import PropTypes from 'prop-types'

function ChannelItem({channel, displayActiveChannel}) {


  return (
    <li>
      {console.log("rerendering Item: " + channel + " ||")}
      <a onClick={() => displayActiveChannel(channel)}>{channel.name}</a>
    </li>
  );
}

ChannelItem.propTypes = {
    channel: PropTypes.object.isRequired,
    displayActiveChannel: PropTypes.object.isRequired
};
    

export default ChannelItem;

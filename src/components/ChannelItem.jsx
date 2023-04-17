import React from "react";
// import PropTypes from 'prop-types'

function ChannelItem(channel, setChannel) {
  function onClick(e) {
    e.preventDefault();
    setChannel(channel);
  }
  return (
    <li>
      <a onClick={onClick(this)}>{channel.name}</a>
    </li>
  );
}

// ChannelItem.propTypes = {
//     channel: React.PropTypes.object.isRequired,
//     setChannel: React.PropTypes.func.isRequired
// };
    

export default ChannelItem;

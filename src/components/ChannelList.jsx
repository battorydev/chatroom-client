import React from "react";
// import PropTypes from 'prop-types'
import ChannelItem from "./ChannelItem";

function ChannelList({ channels, setChannel }) {
  return (
    <ul>
      {channels.map((channel) => {
        <ChannelItem channel={channel} setChannel={setChannel }/>;
      })}
    </ul>
  );
}

// ChannelList.propTypes = {
//   channels: React.PropTypes.array.isRequired,
//   setChannel: React.PropTypes.func.isRequired
// };

export default ChannelList;

import React from "react";
import PropTypes from 'prop-types'
import ChannelItem from "./ChannelItem";

function ChannelList({channels, displayActiveChannel}) {

  return (
    <ul>
      {console.log("rendering ChannelList")}  
      {console.log(channels.length)} 

      {channels.map((ch) => {
        console.log(ch);
        return (<ChannelItem key={ch.id} channel={ch} displayActiveChannel={displayActiveChannel}/>);
      })}
 
    </ul>
  );
}

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
  displayActiveChannel: PropTypes.func.isRequired
};

export default ChannelList;

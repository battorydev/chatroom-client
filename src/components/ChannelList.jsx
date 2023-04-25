import React from "react";
import PropTypes from 'prop-types'
import ChannelItem from "./ChannelItem";

function ChannelList({channels}) {

  return (
    <ul>
      {console.log("rendering ChannelForm")}  
      {console.log(channels.length)} 

      {channels.map((ch) => {
        console.log(ch);
        return (<ChannelItem key={ch.id} channel={ch}/>);
      })}
 
    </ul>
  );
}

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired
};

export default ChannelList;

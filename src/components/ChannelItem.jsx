import React from "react";
import PropTypes from 'prop-types'

function ChannelItem({channel}) {

  function onClick() {
    //console.log(typeof ch);
  }

  return (
    <li>
      {console.log("rerendering Item: " + channel + " ||")}
      <a onClick={onClick}>{channel.name}</a>
    </li>
  );
}

ChannelItem.propTypes = {
    channel: PropTypes.object.isRequired
};
    

export default ChannelItem;

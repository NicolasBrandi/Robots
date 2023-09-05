import React from 'react';

const Scroll = (props) => {
  const scrollContainerStyle = {
    border: '0px solid black',
    height: '1000px',
    overflow: 'hidden', // Hide the scrollbar
  };

  const scrollContentStyle = {
    paddingRight: '17px', // Adjust for the scrollbar width
    overflowY: 'scroll',
    marginRight: '-17px', // Adjust for the scrollbar width
    height: '100%', // Ensure the content fills the container height
  };

  return (
    <div style={scrollContainerStyle}>
      <div style={scrollContentStyle}>
        {props.children}
      </div>
    </div>
  );
};

export default Scroll;
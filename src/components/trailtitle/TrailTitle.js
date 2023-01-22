import React from 'react';
import { StyledTrailTitle } from './style';

function TrailTitle({ trailName }) {
  return (
    <StyledTrailTitle>
      <h1>{trailName.toUpperCase()} </h1>
    </StyledTrailTitle>
  );
}

export default TrailTitle;

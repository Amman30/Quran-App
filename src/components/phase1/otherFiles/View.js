
import React, { useState } from 'react';
import Chapters from '../Chapters_verses/Chapters';

const View = () => {
  const [views, setViews] = useState(0);


  return (
    <div>
      {views}
    </div>
  );
}

export default View;


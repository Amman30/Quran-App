import React, { useEffect } from 'react';
import ReactGa from 'react-ga';
const View = () => {
  useEffect(() => {
    ReactGa.initialize('G-41FG5RD597 ');

    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div>
      This page has {ReactGa.pageview(window.location.pathname + window.location.search)} views
    </div>
  );
};

export default View;

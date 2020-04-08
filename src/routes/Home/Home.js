import React from 'react';
import { connect } from 'react-redux';
import { HelmetWrapper } from 'elements';

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

const Home = () => {
  const title = 'Home';
  const description = 'Sign In';
  return (
    <div>
      <HelmetWrapper title={title} description={description} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

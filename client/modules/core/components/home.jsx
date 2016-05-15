import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import TopicList from './topic_list';

const Home = () => (
  <div>
    <Jumbotron>
      <h1>Sashwato Bidyangon</h1>
      <p>Let's be self educated</p>
      <p><Button bsStyle="primary">Learn more</Button></p>
    </Jumbotron>

    <TopicList />
  </div>
);

export default Home;

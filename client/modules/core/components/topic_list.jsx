import React from 'react';
import { Panel } from 'react-bootstrap';

const title = (
  <h3>Panel title</h3>
);

const TopicList = () => (
  <div>
    <Panel header={title} bsStyle="primary">
      Panel content
    </Panel>
  </div>
);

export default TopicList;

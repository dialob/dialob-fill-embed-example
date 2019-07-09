import React, {useState} from 'react'
import {Header, Container, Message, Segment} from 'semantic-ui-react';
import {Dialob} from 'dialob-fill-ui';

// Display Dialob session with given ID (sessionId prop) within an application
// Handle 'complete' event by displaying a message (onComplete) prop

const App = (props) => {
  const [completed, setCompleted] = useState(false);

  return (
    <Container>
      <Header as='h2'>Custom dialob application</Header>

      <Segment>
        {
          completed ?
            <Message success icon='check' header='Completed!'
              content='Your form has been submitted successfully' />

          :

            <Dialob sessionId='b8d3e90056e516ec2d6d0ed2ec133816'
              onComplete={() => setCompleted(true)}
              onError={(message) => console.log('error: ', message)}
            />
        }
      </Segment>
    </Container>
  );
};

export default App;

import React, { Fragment } from "react";
import { Image, Item, Label, List, Segment } from "semantic-ui-react";

export const EventDetailedSidebar = ({ attendees }) => {
  const isHost = false;
  return (
    <Fragment>
      <Segment
        textAlign='center'
        style={{ border: "none" }}
        attached='top'
        secondary
        inverted
        color='teal'
      >
        {attendees && attendees.length} {attendees && attendees.length === 1 ? 'Person' : 'People'} Going
      </Segment>
      <Segment attached>
        <List relaxed divided>
          {attendees &&
            attendees.map(attendee => (
              <Item key={attendee.id} style={{ position: "relative" }}>
                {isHost &&
                <Label
                  style={{ position: "absolute" }}
                  color='orange'
                  ribbon='right'
                >
                  Host
                </Label> }
                
                <Image avatar src={attendee.photoURL} />
                <Item.Content verticalAlign='middle'>
                  <Item.Header as="h3">{attendee.name}</Item.Header>
                </Item.Content>
              </Item>
            ))}
        </List>
      </Segment>
    </Fragment>
  );
};

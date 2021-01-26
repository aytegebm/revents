import React from 'react'
import { Button, Container, Header, Icon, Image, SegmentGroup } from 'semantic-ui-react'

const HomePage = ({history}) => {
    return (
            <SegmentGroup inverted textAlign='center' vertical className='masthead'>
            <Container text>
              <Header as='h1' inverted>
                <Image
                  size='massive'
                  src='/assets/logo.png'
                  alt='logo'
                  style={{ marginBottom: 12 }}
                />
                Re-vents
              </Header>
              <Button onClick={() => history.push('/events')} size='huge' inverted>
                Get started
                <Icon name='right arrow' inverted />
              </Button>
            </Container>
          </SegmentGroup>
    )
}

export default HomePage
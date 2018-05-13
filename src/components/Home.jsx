import React, { Component } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Jumbotron,
  Button
} from 'reactstrap';
import {
  Grid,
  Segment,
  Divider,
  Icon,
  Image,
  Header,
  Rating
} from 'semantic-ui-react'
import TopNav from './TopNav'

const items = [
  {
    src:"https://www.alltrails.com/api/alltrails/photos/11491393/image?size=extra_large&api_key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i"
  },
  {
    src:"https://www.alltrails.com/api/alltrails/photos/13540828/image?size=extra_large&api_key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i"
  },
  {
    src:"https://www.alltrails.com/api/alltrails/photos/20431635/image?size=extra_large&api_key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i"
  }
];

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} style={{ maxWidth: "100%" }}/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
    <div>
      <TopNav showFilterPost={false} history={this.props.history}/>
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
    </Carousel>
      <Jumbotron>
        <Header  as='h1' textAlign='center' color="blue">Your guide to the outdoors</Header>
        <Grid columns={3} relaxed>
          <Grid.Column>
            <Header as='h2' icon color="blue">
              <br/><Icon name='photo'/><br/>
                Add media to capture your memories
              <Header.Subheader>
                <br/> SnapTrails has the largest collection of detailed, hand-curated trail maps so you can hit the trail with confidence. Anytime. Anywhere.
              </Header.Subheader>
            </Header>
          </Grid.Column>
          <Divider vertical>Or</Divider>
          <Grid.Column>
            <Header as='h2' icon color="blue">
              <br/><Icon name='marker'/><br/>
              Access 50,000+ trail maps
              <Header.Subheader>
                <br/> With just one click, get detailed driving directions so you can get from your computer to the trailhead in no time.
              </Header.Subheader>
            </Header>
          </Grid.Column>
          <Divider vertical>And</Divider>
          <Grid.Column>
            <Header as='h2' icon color="blue">
              <br/><Icon name='empty heart'/><br/>
              Save your favorite trails
              <Header.Subheader>
                <br/> Keep track of trails you may want to explore, or the ones that you think are beautiful and inspiring.
              </Header.Subheader>
            </Header>
          </Grid.Column>
        </Grid>
    </Jumbotron>

    <Grid columns={2} relaxed>
      <Grid.Column>
        <Segment>
          <Image  src='https://image.shutterstock.com/image-vector/colorful-landscape-hiking-man-taking-260nw-695213989.jpg' size='medium' circular />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment basic>
          <Header as='h1'>Add media to capture your memories</Header>
          <p>As they say, "a photo is worth a thousand words", but with a date, location, and additional notes, that photo becomes even more valuable. With The Traveler, your photos are no longer static images sitting on a memory card or in a folder on your computer. They represent a complete story of your journey.<br/>
          You can also record video and audio clips, drop markers on your path, or spend a moment writing a journal entry, all geotagged along your path.</p>
        </Segment>
      </Grid.Column>
    </Grid>


      <Segment textAlign="center">
        <Header size='huge'>What people are saying about SnapTrails</Header><br/>
        <Rating maxRating={5} defaultRating={5} disabled icon='star' size='huge' /><br /><br />
        <blockquote data-reactroot="" data-reactid="1" data-react-checksum="-1189571061">Great for anyone who enjoys the outdoors. Never get lost hiking again. This is a must have for all outdoors lovers.<cite data-reactid="3">Benjamin P.</cite></blockquote>
      </Segment>


    </div>
    );
  }
}


export default Home;

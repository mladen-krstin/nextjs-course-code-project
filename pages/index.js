import Head from 'next/head';

import { getFeaturedEvents } from '../helpers/api-util';
import EventsList from '../components/events/event-list';

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>NexJS Events</title>
        <meta
          name='description'
          content='Some description of content...'
        />
      </Head>
      <EventsList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  };
}

export default HomePage;
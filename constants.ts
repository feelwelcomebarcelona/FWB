
import { Testimonial, Feature } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marc Wilson',
    date: 'Stayed July 2023',
    text: '"The apartment was spotless and the location in Cornellà was perfect for a more local experience while still being 15 mins from the center."',
    rating: 5,
    avatar: 'https://picsum.photos/id/64/100/100'
  },
  {
    id: '2',
    name: 'Elena Rodriguez',
    date: 'Stayed Sept 2023',
    text: '"Wonderful communication from the team. The WhatsApp support was super fast when we needed a local restaurant recommendation."',
    rating: 5,
    avatar: 'https://picsum.photos/id/65/100/100'
  }
];

export const FEATURES: Feature[] = [
  {
    icon: 'sanitizer',
    title: 'Professional Cleaning',
    description: 'Every apartment is sanitized by professional teams following strict COVID-19 safety protocols.'
  },
  {
    icon: 'key',
    title: 'Smart Check-in',
    description: 'Enjoy full privacy with our contactless, digital key systems for seamless entry at any time.'
  },
  {
    icon: 'support_agent',
    title: '24/7 Support',
    description: 'Our local team is available around the clock to assist with any questions or emergencies during your stay.'
  }
];

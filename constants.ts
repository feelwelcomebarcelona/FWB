import { Testimonial, Feature } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marc Wilson',
    date: 'Estancia en Julio 2023',
    text: '"El apartamento estaba impecable y la ubicación en Cornellà fue perfecta para una experiencia local real, a solo 15 minutos del centro."',
    rating: 5,
    avatar: 'https://picsum.photos/id/64/100/100'
  },
  {
    id: '2',
    name: 'Elena Rodriguez',
    date: 'Estancia en Sept 2023',
    text: '"Excelente comunicación del equipo. El soporte por WhatsApp fue súper rápido cuando necesitamos una recomendación de restaurante."',
    rating: 5,
    avatar: 'https://picsum.photos/id/65/100/100'
  }
];

export const FEATURES: Feature[] = [
  {
    icon: 'sanitizer',
    title: 'Limpieza Profesional',
    description: 'Cada apartamento es desinfectado por equipos profesionales siguiendo estrictos protocolos de seguridad.'
  },
  {
    icon: 'key',
    title: 'Check-in Inteligente',
    description: 'Disfruta de total privacidad con nuestros sistemas de llaves digitales para una entrada sin contacto.'
  },
  {
    icon: 'support_agent',
    title: 'Soporte 24/7',
    description: 'Nuestro equipo local está disponible las 24 horas para ayudar con cualquier pregunta o emergencia.'
  }
];
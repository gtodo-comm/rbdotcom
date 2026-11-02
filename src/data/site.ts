// Everything editable in one place. TODO_ values need real input from Rashmi's team.
export const site = {
  name: 'Rashmi Bansal',
  tagline: 'A storyteller of purpose, possibilities and people.',
  intro: "I discover and chronicle the stories of India's greatest achievers, to inspire the next generation of achievers.",
  // Newsletter: swap for the Substack embed or form endpoint once decided.
  newsletterAction: 'TODO_NEWSLETTER_ENDPOINT',
  // All inquiries go here (basic static page, still to be built).
  contactUrl: 'TODO_CONTACT_PAGE_URL',
  social: {
    instagram: 'https://www.instagram.com/rashmibansalofficial/',
    linkedin: 'https://www.linkedin.com/in/author-rashmi-bansal/',
    x: 'https://x.com/rashmibansal',
    facebook: 'https://www.facebook.com/rashmibansal',
  },
};
export const categoryLabels: Record<string, string> = {
  'stories-from-published-books': 'Stories from published books',
  'advice-to-entrepreneurs': 'Advice to entrepreneurs',
  'online-exclusive': 'Online exclusive',
  'musings': 'Musings',
  'archives': 'Archives',
  'workshop-stories': 'Workshop stories',
  'where-are-they-now': 'Where are they now?',
  'writing-advice': 'Writing advice',
  'dainik-bhaskar': 'Dainik Bhaskar',
};
const a = (isbn: string) => `https://www.amazon.in/dp/${isbn}`;
export const books = [
  { title: 'Connect the Dots', sub: 'Stories of 20 entrepreneurs without an MBA', cover: 'connect_the_dots', buy: a('8193182170') },
  { title: 'Arise Awake', sub: 'Stories of 10 young entrepreneurs', cover: 'arise_awake', buy: 'https://www.amazon.in/s?k=arise+awake+by+rashmi+bansal' },
  { title: 'I Have a Dream', sub: 'Social entrepreneurs who are changing India', cover: 'i_have_a_dream', buy: a('8193182162') },
  { title: 'We Are the Champions', sub: 'Stories of entrepreneurs', cover: 'we_are_the_champions', buy: a('8193182138') },
  { title: 'Take Me Home', sub: 'Stories of entrepreneurs', cover: 'take_me_home', buy: a('8193182197') },
  { title: 'Follow Every Rainbow', sub: 'Stories of women entrepreneurs', cover: 'follow_every_rainbow', buy: a('8194767903') },
  { title: 'Touch the Sky', sub: 'Commissioned', cover: 'touch_the_sky', buy: a('8194767911') },
  { title: "God's Own Kitchen", sub: 'Commissioned', cover: 'gods_own_kitchen', buy: a('819476792X') },
  { title: 'Shine Bright', sub: 'Commissioned', cover: 'shine_bright', buy: a('9387894649') },
  { title: "Who Said She Can't?", sub: 'Stories of women entrepreneurs', cover: 'who_said_she_cant', buy: a('8194767938') },
];

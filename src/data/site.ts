// Everything editable in one place. TODO_ values need real input from Rashmi's team.
export const site = {
  name: 'Rashmi Bansal',
  tagline: 'A storyteller of purpose, possibilities and people.',
  intro: "I discover and chronicle the stories of India's greatest achievers, to inspire the next generation of achievers.",
  // PLACEHOLDERS: shown on the page with a yellow highlight until Rashmi's team confirms them.
  newsletter: {
    name: 'Newsletter name',            // placeholder
    readers: 'reader count',             // placeholder
    finePrint: 'Free. No spam. Unsubscribe any time.',
  },
  // Placeholder statement. To be replaced with a line from one of her books, plus the book's name.
  quote: { lines: ['Quote from book.'], source: 'book name' },
  note: 'Short note from Rashmi.',
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
// Press coverage found online on 13 Nov 2026. To be reviewed and replaced with Rashmi's own preferred list.
export const press = [
  { name: 'The New York Times', title: 'A Conversation With: Rashmi Bansal', year: 2011, url: 'https://archive.nytimes.com/india.blogs.nytimes.com/2011/09/19/a-conversation-with-rashmi-bansal/' },
  { name: 'YourStory', title: 'Young people should experiment with life, have a dream and make it come true', year: 2015, url: 'https://yourstory.com/2015/03/rashmi-bansal' },
  { name: 'DNA', title: 'Women entrepreneurs should start small but think big', year: 2011, url: 'https://www.dnaindia.com/mumbai/interview-women-entrepreneurs-should-start-small-but-think-big-1583549' },
  { name: 'SheThePeople', title: "It's Important For Leaders To Be Entrepreneurs At Work", year: 2019, url: 'https://www.shethepeople.tv/news/shine-bright-rashmi-bansal-interview' },
  { name: 'InsideIIM', title: 'I was very clear that I will not do a job I do not like', year: 2013, url: 'https://insideiim.com/i-was-very-clear-that-i-will-not-do-a-job-i-do-not-like-rashmi-bansal-in-conversation-with-insideiim-com' },
  { name: 'Heartfulness Magazine', title: 'The road less traveled', year: null, url: 'https://heartfulness.org/magazine/the-road-less-traveled' },
];
// Talks and interviews found on YouTube on 13 Nov 2026. To be replaced with her best recent footage.
export const videos = [
  { id: 'MoXNWf-hlVM', title: "Stay Hungry Stay Foolish: Rashmi Bansal's story", by: 'Conversations Mumbai', length: '20 min' },
  { id: 'HRKI_Rl6DUM', title: 'Launching Take Me Home at The Entrepreneurship Summit 2014', by: 'E-Cell, IIT Bombay', length: '25 min' },
  { id: 'OAPyAL6Ichw', title: 'I decided I want to be a writer', by: 'MyGov India', length: '3 min' },
];
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
  { title: 'Stay Hungry Stay Foolish', sub: 'Stories of 25 IIM Ahmedabad graduates who chose entrepreneurship', cover: 'stay_hungry_stay_foolish', buy: a('8190453017') },
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

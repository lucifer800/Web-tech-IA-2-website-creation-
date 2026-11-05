export const events = [
  { kind: 'INTER-UNIVERSITY · ATHLETICS', name: 'GTU Zonal Athletics', sport: 'Athletics', status: 'Results out' },
  { kind: 'INTER-UNIVERSITY · FOOTBALL', name: 'GTU Inter-Zone Football', sport: 'Football · Men', status: 'Upcoming' },
  { kind: 'INTRA-UNIVERSITY · MULTI-SPORT', name: 'Intra PDEU Sports Week', sport: 'All sports', status: 'Completed' },
  { kind: 'FRIENDLY · CRICKET', name: 'PDEU vs Nirma Invitational', sport: 'Cricket · Men', status: 'Upcoming' },
];

export const matches = [
  { s: 'live', sport: 'Football', date: 'Today · 16:00', teams: 'PDEU vs Opponent', venue: 'PDEU Football Ground', score: '1 – 0' },
  { s: 'upcoming', sport: 'Basketball', date: 'Sat · 17:30', teams: 'PDEU Men vs Opponent', venue: 'PDEU Basketball Court', score: '' },
  { s: 'upcoming', sport: 'Cricket', date: 'Sun · 09:00', teams: 'PDEU vs Opponent', venue: 'PDEU Cricket Ground', score: '' },
  { s: 'upcoming', sport: 'Volleyball', date: 'Mon · 16:00', teams: 'PDEU Women vs Opponent', venue: 'PDEU Volleyball Court', score: '' },
  { s: 'final', sport: 'Badminton', date: 'Last week', teams: 'PDEU vs Opponent', venue: 'Indoor Sports Complex', score: '3 – 2' },
  { s: 'final', sport: 'Table Tennis', date: 'Last week', teams: 'PDEU vs Opponent', venue: 'Indoor Sports Complex', score: '1 – 3' },
  { s: 'final', sport: 'Chess', date: 'Last week', teams: 'PDEU vs Opponent', venue: 'Seminar Hall', score: '2½ – 1½' },
];

export const statusMap = {
  live: { text: 'LIVE', bg: '#f26522', fg: '#fff' },
  upcoming: { text: 'UPCOMING', bg: '#1c2e4d', fg: '#cfd6e3' },
  final: { text: 'FINAL', bg: '#e6cf86', fg: '#0a1a33' },
};

export const achievements = [
  { big: '14', heading: 'Active sports', desc: 'Field, court and indoor — men\'s, women\'s and mixed teams across disciplines.', color: '#f26522' },
  { big: '50+', heading: 'Tournaments a year', desc: 'GTU zones, inter-university opens, invitationals and intra-PDEU leagues.', color: '#e6cf86' },
  { big: '800+', heading: 'Student athletes', desc: 'One in five PDEU students plays a competitive sport for the university.', color: '#f26522' },
  { big: '2009', heading: 'Petrocup founded', desc: 'PDPU\'s flagship inter-college fest became the Energy Cup in 2027.', color: '#e6cf86' },
];

export const stories = [
  { tag: 'ATHLETICS', title: 'PDEU wins 5 golds at GTU Zonal' },
  { tag: 'FOOTBALL', title: 'Men\'s team reaches state semis' },
  { tag: 'BADMINTON', title: 'Women\'s team clinches invitational' },
];

export const navLinks = [
  { label: 'Sports', href: '#sports' },
  { label: 'Fixtures', href: '#fixtures' },
  { label: 'Events', href: '#events' },
  { label: 'News', href: '#news' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Energy Cup', href: '/' },
  { label: 'PDEU', href: 'https://pdeu.ac.in/' },
  { label: 'Contact', href: '#footer' },
];

export const footerCols = [
  { h: 'QUICK LINKS', items: [{ label: 'Sports', href: '#sports' }, { label: 'Fixtures', href: '#fixtures' }, { label: 'Events', href: '#events' }, { label: 'Achievements', href: '#achievements' }] },
  { h: 'CONNECT', items: [{ label: 'Instagram', href: '#' }, { label: 'YouTube', href: '#' }, { label: 'LinkedIn', href: '#' }, { label: 'Contact', href: '#footer' }] },
  { h: 'UNIVERSITY', items: [{ label: 'pdeu.ac.in', href: 'https://pdeu.ac.in/' }, { label: 'Student Activities', href: '#' }, { label: 'Energy Cup \'27', href: '/' }] },
];

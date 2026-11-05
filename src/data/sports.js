const raw = [
  ['Cricket', 'Field', 'Men', 'Knockout'],
  ['Football', 'Field', 'Men · Women', 'League + KO'],
  ['Athletics', 'Field', 'Men · Women', 'Heats + Finals'],
  ['Kabaddi', 'Field', 'Men', 'Knockout'],
  ['Tug of War', 'Field', 'Men · Women', 'Knockout'],
  ['Frisbee', 'Field', 'Mixed', 'League + KO'],
  ['Basketball', 'Court', 'Men · Women', 'League + KO'],
  ['Volleyball', 'Court', 'Men · Women', 'Knockout'],
  ['Pickleball', 'Court', 'Doubles', 'Round robin'],
  ['Lawn Tennis', 'Court', 'Men · Women', 'Knockout'],
  ['Badminton', 'Indoor', 'Men · Women', 'Team KO'],
  ['Table Tennis', 'Indoor', 'Men · Women', 'Team KO'],
  ['Chess', 'Indoor', 'Mixed team', 'Swiss'],
  ['Rifle Shooting', 'Indoor', 'Men · Women', 'Qualification + Final'],
];

export const sports = raw.map((s, i) => ({
  n: String(i + 1).padStart(2, '0'),
  name: s[0],
  cat: s[1],
  gender: s[2],
  format: s[3],
  slug: s[0].toLowerCase().replace(/\s/g, '-'),
}));

export const categories = ['All', 'Field', 'Court', 'Indoor'];

import Team from './js/components/Team';
import Bowman from './js/components/Character/Bowman';
import Magican from './js/components/Character/Magician';
import Swordsman from './js/components/Character/Swordsman';
import Deamon from './js/components/Character/Daemon';
import Settings from './js/components/Settings';

const myTeam = new Team();

window.myTeam = myTeam;

const John = new Bowman({ name: 'John' });
const Mary = new Magican({ name: 'Mary' });
const Seed = new Swordsman({ name: 'Seed' });
const Hell = new Deamon({ name: 'Hell' });

const invited = [John, Mary, Seed, Hell];

invited.forEach((character) => {
  try {
    myTeam.add(character);
  } catch (err) {
    console.error(err.message);
  }
});

try {
  myTeam.addAll(...invited);
} catch (err) {
  console.log(err.message);
}

console.log('MY_TEAM: ', myTeam.members);
console.log('MY_TEAM ARR: ', myTeam.toArray());

for (const member of myTeam) {
  console.log(member);
}

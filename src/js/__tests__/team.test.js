import Team from '../components/Team';
import Bowman from '../components/Character/Bowman';
import Magican from '../components/Character/Magician';
import Swordsman from '../components/Character/Swordsman';

describe('Team Class: ', () => {
  const myTeam = new Team();
  const John = new Bowman({ name: 'John' });
  const Mary = new Magican({ name: 'Mary' });
  const Seed = new Swordsman({ name: 'Seed' });
  const cases = [
    [John, 1],
    [Mary, 2],
    [Seed, 3],
  ];
  const cases2 = [John, Mary, Mary, Mary, Mary, Mary, Seed, Seed];
  const allFriends = [John, Mary, Seed];

  test.each(cases)(
    'function "add" should to add unique character to a team',
    (character, expected) => {
      myTeam.add(character);
      expect(myTeam.members.size).toBe(expected);
    },
  );

  test.each(cases)(
    'function "add" should to return Errors for the same character',
    (character, expected) => {
      expect(() => {
        myTeam.add(character);
      }).toThrow(Error);
    },
  );

  test('function "addAll" should to add unique character to a team', () => {
    myTeam.addAll(...cases2);
    expect(myTeam.toArray()).toEqual(allFriends);
  });

  test('function "toArray" should return array form Set', () => {
    expect(myTeam.toArray()).toEqual(allFriends);
  });

  test.each(allFriends)('should return a next character object', (character) => {
    expect(myTeam.next().value).toEqual(character);
  });

  test('[Symbol.iterator] should return this', () => {
    expect(myTeam[Symbol.iterator]()).toEqual(myTeam);
  });
});

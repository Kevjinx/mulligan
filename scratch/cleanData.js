//converting the raw exported JSON file of card data into cleaner version to seed database
const cardJson = require('../backend/db/card-api/cards-v3-low.json')


// need to get all of the faction, type, category, keywords,rarity,set
// iterate through all of the cards in JSON, and for each different faction, type, etc, add to the object

const refObj = {
  factionArr: [],
  typeArr: [],
  categoryArr: [],
  keywordArr: [],
  rarityArr: [],
  setArr: [],
}




for (card in cardJson) {

  if (!refObj.factionArr.includes(cardJson[card].faction)) refObj.factionArr.push(cardJson[card].faction)
  if (!refObj.typeArr.includes(cardJson[card].cardType)) refObj.typeArr.push(cardJson[card].cardType)
  if (!refObj.rarityArr.includes(cardJson[card].rarity)) refObj.rarityArr.push(cardJson[card].rarity)
  if (!refObj.setArr.includes(cardJson[card].set)) refObj.setArr.push(cardJson[card].set)

  if (cardJson[card].keywords) {
    cardJson[card].keywords.forEach(keyword => {
      if (!refObj.keywordArr.includes(keyword)) refObj.keywordArr.push(keyword)
    });
  }

  if (cardJson[card].categories) {
    cardJson[card].categories.forEach(category => {
      if (!refObj.categoryArr.includes(category)) refObj.categoryArr.push(category)
    })
  }


}



{
  factionArr: [
    'Neutral',
    'Monster',
    'Nilfgaard',
    'Northern Realms',
    'Scoiatael',
    'Skellige',
    'Syndicate'
  ],
  typeArr: [ null, 'Unit', 'Spell', 'Artifact', 'Leader', 'Strategem' ],
  categoryArr: [
    'Witcher',      'Vampire',        'Human',        'Mage',
    'Dragon',       'Dwarf',          'Elf',          'Relict',
    'Cursed',       'Bandit',         'Beast',        'Spell',
    'Bomb',         'Warfare',        'Druid',        'Organic',
    'Alchemy',      'Warrior',        'Soldier',      'Leader',
    'Agent',        'Knight',         'Ogroid',       'Machine',
    'Siege Engine', 'Wild Hunt',      'Specter',      'Insectoid',
    'Necrophage',   'Crone',          'Construct',    'Demon',
    'Token',        'Dryad',          'Tactic',       'Trap',
    'Ship',         'Raid',           'Pirate',       'Cultist',
    'Aristocrat',   'Plant',          'Nature',       'Support',
    'Gnome',        'Doomed',         'Hazard',       'Location',
    'Treant',       'Blindeyes',      'Witch Hunter', 'Crime',
    'Cutups',       'Halfling',       'Tidecloaks',   'Firesworn',
    'Cleric',       'Crownsplitters', 'Salamandra',   'Mutant',
    'Scenario'
  ],
  keywordArr: [
    'deploy',      'initiative', 'order',         'melee',
    'drain',       'ranged',     'reveal',        'spawn',
    'zeal',        'cooldown',   'adrenaline',    'summon',
    'heal',        'banish',     'vitality',      'doomed',
    'deathwish',   'cataclysm',  'storm',         'veil',
    'frost',       'fog',        'charge',        'rain',
    'Bloodthirst', 'lock',       'formation',     'inspired',
    'bleeding',    'disloyal',   'coin',          'armor',
    'resupply',    'crew',       'barricade',     'exposed',
    'shield',      'purify',     'immune',        'consume',
    'seize',       'thrive',     'dominance',     'bonded',
    'Deploy',      'resilient',  'deathblow',     'ambush',
    'spring',      'Spring',     'discard',       'bloodthirst',
    'berserk',     'conspiracy', 'spying',        'create',
    'poison',      'patience',   'symbiosis',     'harmony',
    'assimilate',  'duel',       'dragons_dream', 'blood_moon',
    'tribute',     'profit',     'fee',           'bounty',
    'intimidate',  'insanity',   'hoard',         'defender',
    'Armor',       'echo',       'devotion',      'veteran',
    'rupture',     'sabbath'
  ],
  rarityArr: [ null, 'Legendary', 'Epic', 'Rare', 'Common' ],
  setArr: [
    'Token',
    'Base',
    'Unmillable',
    'Novigrad',
    'IronJudgement',
    'CrimsonCurse',
    'Thronebreaker',
    'Tutorial',
    'MerchantsOfOfir',
    'MasterMirror',
    'Unreleased1',
    'Unreleased2'
  ]
}
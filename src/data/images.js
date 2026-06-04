// Centralised, curated architecture/interior imagery (Unsplash, stable IDs).
// Helper appends sizing params so images stay crisp and lightweight.
const u = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const img = {
  // Architecture / exteriors
  facadeWhite: u('1487958449943-2429e8be8625'),
  towerGlass: u('1496307653780-42ee777d4833'),
  modernBuild: u('1486406146926-c627a92ad1ab'),
  concrete: u('1449157291145-7efd050a4d0e'),
  cityDusk: u('1480714378408-67cf0d13bc1b'),
  curveArch: u('1429497419816-9ca5cfb4571a'),
  museum: u('1518998053901-5348d3961a04'),
  pavilion: u('1511818966892-d7d671e672a2'),
  // Residential
  villa: u('1600585154340-be6161a56a0c'),
  house2: u('1600607687939-ce8a6c25118c'),
  house3: u('1512917774080-9991f1c4c750'),
  house4: u('1564013799919-ab600027ffc6'),
  house5: u('1580587771525-78b9dba3b914'),
  house6: u('1583608205776-bfd35f0d9f83'),
  // Interiors
  interior1: u('1502005229762-cf1b2da7c5d6'),
  interior2: u('1493809842364-78817add7ffb'),
  interior3: u('1505691938895-1758d7feb511'),
  interior4: u('1524758631624-e2822e304c36'),
  interior5: u('1600566753086-00f18fb6b3ea'),
  interior6: u('1618221195710-dd6b41faaea6'),
  // Retail / commercial
  retail1: u('1441986300917-64674bd600d8'),
  retail2: u('1555529669-e69e7aa0ba9a'),
  cafe: u('1554118811-1e0d58224f24'),
  // Texture / studio
  studio: u('1497366216548-37526070297c'),
  studio2: u('1497366811353-6870744d04b2'),
  model: u('1507003211169-0a1dd7228f2d'),
  team: u('1556761175-b413da4baf72'),
}

export default img

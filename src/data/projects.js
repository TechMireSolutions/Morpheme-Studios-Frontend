import img from './images.js'

// Categories used across the site (filter + nav)
export const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'architecture', label: 'Architecture' },
  { key: 'interior', label: 'Interior Design' },
  { key: 'residential', label: 'Residential' },
  { key: 'retail', label: 'Retail & Commercial' },
  { key: 'arts', label: 'Arts & Design' },
  { key: 'competition', label: 'Competition' },
]

export const projects = [
  {
    slug: 'pynnacles-close-residences',
    title: 'Pynnacles Close Residences',
    location: 'London, United Kingdom',
    year: '2024',
    category: 'residential',
    type: 'Residential',
    status: 'Completed',
    cover: img.villa,
    gallery: [img.villa, img.interior1, img.house2, img.interior5],
    excerpt:
      'A terrace of light-filled homes that negotiate density with generosity — private gardens folded into a restrained brick language.',
    services: ['Architecture', 'Interior Design', 'Landscape'],
    description:
      'Pynnacles Close reimagines suburban density as something quietly luxurious. Eight homes share a single material palette of handmade brick and bronze, each opening onto a private courtyard that draws daylight deep into the plan.',
  },
  {
    slug: 'aesthetics-clinic-kensington',
    title: 'Aesthetics Clinic',
    location: 'Kensington, London',
    year: '2023',
    category: 'interior',
    type: 'Interior',
    status: 'Completed',
    cover: img.interior4,
    gallery: [img.interior4, img.interior2, img.interior6, img.retail2],
    excerpt:
      'A calming, clinical-luxe interior where soft arches and warm stone replace the cold language of the conventional clinic.',
    services: ['Interior Design', 'Brand Spatial Identity'],
    description:
      'For a Kensington aesthetics practice we designed an interior that disarms — curved plaster thresholds, hidden lighting and a palette of travertine and oatmeal linen create the calm of a private members club rather than a clinic.',
  },
  {
    slug: 'moin-khan-academy',
    title: 'Moin Khan Cricket Academy',
    location: 'Karachi, Pakistan',
    year: '2023',
    category: 'architecture',
    type: 'Architecture',
    status: 'Completed',
    cover: img.concrete,
    gallery: [img.concrete, img.modernBuild, img.pavilion, img.cityDusk],
    excerpt:
      'A coastal sports academy shaped by shade, airflow and the long horizontal line of the playing field.',
    services: ['Architecture', 'Master Planning'],
    description:
      'Sited on the Karachi coast, the academy is organised around a deep shaded verandah that mediates the harsh climate. Cantilevered canopies frame the pitch while a perforated screen filters the sea light.',
  },
  {
    slug: 'mosul-housing-project',
    title: 'Mosul Housing Project',
    location: 'Mosul, Iraq',
    year: '2024',
    category: 'competition',
    type: 'Competition',
    status: 'Competition — Shortlisted',
    cover: img.facadeWhite,
    gallery: [img.facadeWhite, img.curveArch, img.museum, img.modernBuild],
    excerpt:
      'A post-conflict housing framework that rebuilds the courtyard typology of the old city at a contemporary scale.',
    services: ['Architecture', 'Urban Design', 'Competition'],
    description:
      'Our shortlisted proposal for Mosul revives the dense, shaded courtyard urbanism of the historic city — a kit of parts that residents can extend over time, knitting community back into the fabric.',
  },
  {
    slug: 'private-residence-mill-park',
    title: 'Private Residence',
    location: 'Mill Park',
    year: '2022',
    category: 'residential',
    type: 'Residential',
    status: 'Completed',
    cover: img.house4,
    gallery: [img.house4, img.interior3, img.house5, img.interior5],
    excerpt:
      'A family house that opens entirely to its garden — a single sweeping roof unifying living, courtyard and pool.',
    services: ['Architecture', 'Interior Design'],
    description:
      'A continuous roof plane folds over a sequence of indoor and outdoor rooms, dissolving the boundary between house and garden. Full-height glazing and a stone spine ground the openness.',
  },
  {
    slug: 'iconic-mosque-dubai',
    title: 'Iconic Mosque',
    location: 'Dubai, UAE',
    year: '2025',
    category: 'architecture',
    type: 'Architecture',
    status: 'In Progress',
    cover: img.curveArch,
    gallery: [img.curveArch, img.museum, img.facadeWhite, img.pavilion],
    excerpt:
      'A contemporary mosque whose folded shell renders light itself as the primary building material.',
    services: ['Architecture', 'Lighting Design'],
    description:
      'The prayer hall is wrapped in a single folded concrete shell, perforated to scatter daylight into a slow, shifting pattern across the floor. The minaret is reduced to a pure vertical line of light.',
  },
  {
    slug: 'eab-hall-hyde-park',
    title: 'EAB Hall',
    location: 'Hyde Park, London',
    year: '2023',
    category: 'arts',
    type: 'Arts & Design',
    status: 'Completed',
    cover: img.museum,
    gallery: [img.museum, img.pavilion, img.interior6, img.studio],
    excerpt:
      'A cultural hall and gallery — a flexible vessel for performance, exhibition and gathering.',
    services: ['Architecture', 'Arts & Design'],
    description:
      'EAB Hall is a quietly monumental room: lime-plaster walls, a coffered timber ceiling and a clerestory that washes the space in even northern light, ready for art or assembly.',
  },
  {
    slug: 'national-foods-excellence-centre',
    title: 'National Foods Excellence Centre',
    location: 'Karachi, Pakistan',
    year: '2024',
    category: 'retail',
    type: 'Commercial',
    status: 'In Progress',
    cover: img.modernBuild,
    gallery: [img.modernBuild, img.towerGlass, img.retail1, img.interior2],
    excerpt:
      'A corporate centre of excellence combining research kitchens, workplace and brand experience under one expressive roof.',
    services: ['Architecture', 'Workplace', 'Retail'],
    description:
      'The Excellence Centre brings R&D, hospitality and workplace together around a top-lit atrium, with a tasting theatre and brand journey that turns the building into a marketing instrument.',
  },
  {
    slug: 'city-by-the-sea',
    title: 'City By the Sea',
    location: 'Karachi, Pakistan',
    year: '2025',
    category: 'architecture',
    type: 'Master Plan',
    status: 'In Progress',
    cover: img.cityDusk,
    gallery: [img.cityDusk, img.towerGlass, img.modernBuild, img.facadeWhite],
    excerpt:
      'A waterfront mixed-use district — living, working and leisure threaded along a new public promenade.',
    services: ['Master Planning', 'Architecture'],
    description:
      'Living in a metropolis like Karachi has its own charm and demands. City By the Sea reclaims the waterfront for the public with a promenade that stitches residential towers, retail and parks into one walkable district.',
  },
  {
    slug: 'churosity-outlet',
    title: 'Churosity Outlet',
    location: 'Karachi, Pakistan',
    year: '2022',
    category: 'retail',
    type: 'Retail',
    status: 'Completed',
    cover: img.cafe,
    gallery: [img.cafe, img.retail2, img.retail1, img.interior4],
    excerpt:
      'A playful dessert outlet — warm terrazzo, brass and a glowing counter built for the queue and the camera.',
    services: ['Retail Design', 'Interior Design'],
    description:
      'A compact dessert kiosk concept rolled out across the city: a glowing terrazzo counter, brass trim and a tight, repeatable kit that reads instantly as the brand.',
  },
  {
    slug: 'pafsom-club',
    title: 'PAFSOM Club',
    location: 'Karachi, Pakistan',
    year: '2023',
    category: 'interior',
    type: 'Hospitality',
    status: 'Completed',
    cover: img.interior6,
    gallery: [img.interior6, img.interior2, img.interior3, img.interior5],
    excerpt:
      'A members’ club interior balancing grandeur and intimacy across dining, lounge and event spaces.',
    services: ['Interior Design', 'Hospitality'],
    description:
      'PAFSOM moves from a soaring double-height lounge to intimate panelled dining rooms, held together by a palette of deep green, walnut and aged brass.',
  },
  {
    slug: 'yelo-kiosks',
    title: 'YELO Ice Cream Kiosks',
    location: 'Multiple Locations',
    year: '2021',
    category: 'arts',
    type: 'Product / Retail',
    status: 'Completed',
    cover: img.retail2,
    gallery: [img.retail2, img.cafe, img.retail1, img.interior4],
    excerpt:
      'A modular ice-cream kiosk system — flat-pack, joyful and deployable anywhere in a weekend.',
    services: ['Arts & Design', 'Product Design'],
    description:
      'A flat-pack kiosk family for an ice-cream brand: a bright, modular system that ships flat and assembles into a recognisable beacon in any mall or street.',
  },
]

export const featured = [
  'pynnacles-close-residences',
  'iconic-mosque-dubai',
  'aesthetics-clinic-kensington',
  'mosul-housing-project',
  'national-foods-excellence-centre',
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)

export const getFeatured = () =>
  featured.map((s) => projects.find((p) => p.slug === s)).filter(Boolean)

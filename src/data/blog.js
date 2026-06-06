import img from './images.js'

export const blog = [
  {
    slug: 'light-as-material',
    title: 'Light as a Material',
    date: '12 May 2026',
    category: 'Essay',
    image: img.pavilion,
    excerpt:
      'Why we treat daylight as the first material on every project — and how it shapes plan before form.',
  },
  {
    slug: 'mosul-shortlist',
    title: 'Morpheme Shortlisted for Mosul Housing',
    date: '28 Apr 2026',
    category: 'Studio News',
    image: img.facadeWhite,
    excerpt:
      'Our courtyard-led proposal for post-conflict housing in Mosul has been shortlisted in the international competition.',
  },
  {
    slug: 'the-courtyard-returns',
    title: 'The Courtyard Returns',
    date: '03 Apr 2026',
    category: 'Essay',
    image: img.curveArch,
    excerpt:
      'An old typology for a hot planet: how the courtyard answers climate, privacy and community at once.',
  },
  {
    slug: 'studio-dubai',
    title: 'Breaking Ground in Dubai',
    date: '19 Mar 2026',
    category: 'Studio News',
    image: img.museum,
    excerpt:
      'Construction begins on the Iconic Mosque — a folded shell that makes light the building’s subject.',
  },
  {
    slug: 'materials-we-love',
    title: 'Five Materials We Keep Returning To',
    date: '01 Mar 2026',
    category: 'Notebook',
    image: img.interior5,
    excerpt:
      'Handmade brick, travertine, lime plaster, aged brass and oak — a short field guide to the studio palette.',
  },
  {
    slug: 'designing-for-wellness',
    title: 'Designing for Wellness',
    date: '14 Feb 2026',
    category: 'Essay',
    image: img.interior3,
    excerpt:
      'What it really means to put human wellbeing at the centre of a plan, beyond the wellness buzzwords.',
  },
]

export const getPost = (slug) => blog.find((p) => p.slug === slug)

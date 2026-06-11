// One-off: serialize the bundled frontend data to JSON for the backend importer.
// Run from the frontend dir:  node scripts/export_data.mjs <out.json>
import { writeFileSync } from 'node:fs'
import { projects, categories, featured } from '../src/data/projects.js'
import { blog } from '../src/data/blog.js'
import { services, stats, team, offices, approach } from '../src/data/studio.js'

// Job openings are hardcoded in Careers.jsx (not a data module) — mirror them here.
const jobOpenings = [
  { title: 'Senior Architect', place: 'London / Dubai', type: 'Full-time' },
  { title: 'Architectural Assistants Part I & II', place: 'London / Dubai', type: 'Full-time' },
  { title: 'Interior Designer', place: 'London / Dubai', type: 'Full-time' },
  { title: 'FF&E Designer', place: 'Dubai', type: 'Full-time' },
  { title: 'Landscape Architect', place: 'London / Karachi', type: 'Full-time' },
  { title: '3D Visualizer', place: 'Remote', type: 'Contract' },
  { title: 'Business Development Manager', place: 'London / Dubai', type: 'Full-time' },
  { title: 'Office Manager', place: 'London / Karachi', type: 'Full-time' },
]

const out = process.argv[2] || 'export_data.json'
writeFileSync(out, JSON.stringify(
  { projects, categories, featured, blog, services, stats, team, offices, approach, jobOpenings },
  null, 2,
))
console.log(`wrote ${out}: ${projects.length} projects, ${categories.length} categories, ` +
  `${blog.length} posts, ${team.length} team, ${offices.length} offices, ` +
  `${services.length} services, ${stats.length} stats, ${jobOpenings.length} openings`)

// cms/schemaTypes/testimonial.js
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Tag',
      type: 'string',
      description: 'E.g. Athlete, Rehab Client, Team, etc.',
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1–5)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'relatedService',
      title: 'Related Service',
      type: 'reference',
      to: [{type: 'service'}],
      description: 'Optional – link this testimonial to a specific service.',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Use to control display order if needed.',
    }),
  ],
})

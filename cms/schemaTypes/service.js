// cms/schemaTypes/service.js
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Service Category',
      type: 'reference',
      to: [{type: 'serviceCategory'}],
      validation: (Rule) => Rule.required(),
    }),

    // HERO CONTENT
    defineField({
      name: 'heroLabel',
      title: 'Hero Label',
      type: 'string',
      description: 'E.g. "Recovery • Physiotherapy"',
    }),
    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      description: 'Main heading in the hero section.',
    }),
    defineField({
      name: 'heroHighlight',
      title: 'Hero Highlight',
      type: 'string',
      description: 'Highlighted word/phrase in red in the hero.',
    }),
    defineField({
      name: 'heroSubheading',
      title: 'Hero Subheading',
      type: 'text',
      rows: 3,
      description: 'Short paragraph under the hero heading.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
      description: 'Main hero image (right side).',
    }),

    // GENERAL CONTENT
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Brief overview used in cards/previews.',
    }),
    defineField({
      name: 'body',
      title: 'Detailed Content',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Rich text for the main content area.',
    }),

    // BENEFITS CARDS
    defineField({
      name: 'keyBenefits',
      title: 'Key Benefits',
      type: 'array',
      of: [
        defineField({
          name: 'benefit',
          title: 'Benefit',
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'description', title: 'Description', type: 'text', rows: 2},
          ],
        }),
      ],
    }),

    // PROCESS / STEPS (for the 3-4 step sections)
    defineField({
      name: 'processSteps',
      title: 'Process / Steps',
      type: 'array',
      of: [
        defineField({
          name: 'step',
          title: 'Step',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            },
            {
              name: 'order',
              title: 'Step Order',
              type: 'number',
              description: '1, 2, 3...',
            },
          ],
        }),
      ],
    }),

    // FAQS
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        defineField({
          name: 'faq',
          title: 'FAQ',
          type: 'object',
          fields: [
            {name: 'question', title: 'Question', type: 'string'},
            {name: 'answer', title: 'Answer', type: 'text', rows: 3},
          ],
        }),
      ],
    }),

    // CTA
    defineField({
      name: 'ctaLabel',
      title: 'CTA Label',
      type: 'string',
      description: 'E.g. "Book a session".',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'url',
      description: 'JaneApp booking URL or external link.',
    }),
  ],
})

// cms/schemaTypes/serviceCategory.js
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'serviceCategory',
  title: 'Service Category',
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
      name: 'type',
      title: 'Type (Main Group)',
      type: 'string',
      description: 'Rehab / Athlete Training / Fitness / Other',
      options: {
        list: [
          {title: 'Rehab', value: 'rehab'},
          {title: 'Athlete Training', value: 'athlete-training'},
          {title: 'Fitness', value: 'fitness'},
          {title: 'Other', value: 'other'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Use this to control category order in the UI.',
    }),
  ],
})

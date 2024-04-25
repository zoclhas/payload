import type { CollectionConfig } from '../../../packages/payload/src/collections/config/types'

const Gallery: CollectionConfig = {
  slug: 'gallery',
  access: { read: () => true },
  fields: [
    {
      name: 'screenshot_by',
      label: 'Screenshot By:',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'image',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },

    {
      name: 'pack',
      type: 'select',
      options: [
        {
          label: 'SubtlePBR',
          value: 'subtlepbr',
        },
        {
          label: 'Amulet',
          value: 'amulet',
        },
        {
          label: 'F8thful PBR',
          value: 'f8thfulpbr',
        },
      ],
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}

export default Gallery

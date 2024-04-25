import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

// import Jimp from "jimp";
// import path from "path";

const Media: CollectionConfig = {
  slug: 'media',
  access: { read: () => true },
  upload: {
    adminThumbnail: 'card',
    imageSizes: [
      {
        name: 'card',
        width: 640,
        height: 480,
        formatOptions: {
          format: 'jpg',
          options: {
            quality: 100,
            compressionLevel: 0,
          },
        },
      },
      {
        name: 'feature',
        width: 1024,
        height: 576,
        formatOptions: {
          format: 'jpg',
          options: {
            quality: 100,
            compressionLevel: 0,
          },
        },
      },
    ],
    formatOptions: {
      format: 'jpg',
      options: {
        quality: 100,
        compressionLevel: 0,
      },
    },
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: true,
    },
    {
      name: 'avg',
      label: 'Average Colour',
      type: 'text',
      defaultValue: '#000',
      required: true,
    },
    {
      name: 'text',
      label: 'Text Colour',
      type: 'text',
      defaultValue: '#fff',
      required: true,
    },
  ],
  hooks: {
    afterChange: [
      // Afterchange hook to determine the average colour of the image.
    ],
  },
}

export default Media

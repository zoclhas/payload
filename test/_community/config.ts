import { buildConfigWithDefaults } from '../buildConfigWithDefaults'
import { devUser } from '../credentials'
import GalleryCollection from './collections/Gallery'
import MediaCollection from './collections/Media'
// import { PostsCollection, postsSlug } from './collections/Posts'
// import { MenuGlobal } from './globals/Menu'

export default buildConfigWithDefaults({
  // ...extend config here
  collections: [MediaCollection, GalleryCollection],
  globals: [
    // MenuGlobal,
    // ...add more globals here
  ],
  graphQL: {
    schemaOutputFile: './test/_community/schema.graphql',
  },

  onInit: async (payload) => {
    await payload.create({
      collection: 'users',
      data: {
        email: devUser.email,
        password: devUser.password,
      },
    })

    // await payload.create({
    //   collection: postsSlug,
    //   data: {
    //     text: 'example post',
    //   },
    // })
  },
})

export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6204e29f0a7a4c0c08801a25',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-test-landing-studio',
                  apiId: '6a67da60-ccd5-472f-bd3f-027c0cb3bf4a'
                },
                {
                  buildHookId: '6204e29fc58de60b5428e0ec',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-test-landing',
                  apiId: 'a34b6024-51fd-4916-9a3b-24f795407b2c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Kirill20123/sanity-nextjs-test-landing',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-test-landing.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60719467d2f5ec16442af556",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-try8ogsx",
                  apiId: "c1870e9e-a357-4f45-8230-9f634a9d952b",
                },
                {
                  buildHookId: "60719467add5e02dd7b6d715",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-cs7h2zdp",
                  apiId: "c7c437ee-5787-4d6a-8ca7-6215afb962c0",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/insidemedia/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-cs7h2zdp.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

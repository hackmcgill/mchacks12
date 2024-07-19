exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/sponsor",
    toPath: "/sponsor.pdf",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/promo",
    toPath:
      "https://docs.google.com/document/d/1ly4fqNVvxZSvoVW3NTE5NoVtvD6nj2czLc7J1EUbNtY/edit?usp=sharing",
  })
  createRedirect({
    fromPath: "/waiver",
    toPath: "/waiver.pdf",
    isPermanent: true,
  })
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions

  const buildPersonType = (name) => {
    return schema.buildObjectType({
      name,
      fields: {
        name: {
          type: "String!",
        },
        position: {
          type: "String",
        },
        company: {
          type: "String",
        },
        imageLink: {
          type: "String",
        },
      },
      interfaces: ["Node"],
    })
  }

  const typeDefs = [
    buildPersonType("GoogleSpreadsheetSpeakers"),
    buildPersonType("GoogleSpreadsheetRecruiters"),
    buildPersonType("GoogleSpreadsheetJudges"),
    schema.buildObjectType({
      name: "GoogleSpreadsheetSchedule",
      fields: {
        day: {
          type: "Int!",
        },
        name: {
          type: "String!",
        },
        type: {
          type: "String!",
        },
        startTime: {
          type: "String!",
          resolve: (source) =>
            source.startTime == null ? "" : source.startTime,
        },
        endTime: {
          type: "String!",
          resolve: (source) => (source.endTime == null ? "" : source.endTime),
        },
        description: {
          type: "String!",
          resolve: (source) =>
            source.description == null ? "" : source.description,
        },
        company: {
          type: "String!",
          resolve: (source) => (source.company == null ? "" : source.company),
        },
        prize: {
          type: "String!",
          resolve: (source) => (source.prize == null ? "" : source.prize),
        },
      },
      interfaces: ["Node"],
    }),
    schema.buildObjectType({
      name: "GoogleSpreadsheetSponsors",
      fields: {
        tier: {
          type: "String!",
        },
        link: {
          type: "String!",
        },
        image: {
          type: "String!",
        },
        alt: {
          type: "String!",
          resolve: (source) => (source.alt == null ? "" : source.alt),
        },
      },
      interfaces: ["Node"],
    }),
  ]
  createTypes(typeDefs)
}

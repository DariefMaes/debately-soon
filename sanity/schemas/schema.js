// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    {
      title: "info",
      name: "info",
      type: "document",
      fields: [
        {
          name: "logo",
          title: "logo",
          type: "image",
        },
        {
          title: "Slogan",
          name: "slogan",
          type: "string",
        },
      ],
    },

    {
      title: "Socials",
      name: "socials",
      type: "document",
      fields: [
        {
          name: "socialName",
          type: "string",
        },
        {
          name: "image",
          type: "image",
        },
        {
          name: "url",
          type: "url",
        },
      ],
    },
  ]),
});

import { isUniqueAcrossAllDocuments } from "../lib/isUniqueAcrossAllDocuments";
import { generateCipher } from "../util";
console.log("hai");
export default {
  name: "event",
  type: "document",
  title: "Event",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "subhead",
      type: "string",
      title: "Subhead",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: (doc) => `${doc.name}`,
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .slice(0, 200)
            .concat(generateCipher(input)),
        unique: isUniqueAcrossAllDocuments,
      },
    },
    {
      name: "gallery",
      type: "array",
      title: "Galley",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};

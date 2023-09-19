import { defineField } from "sanity";
 export default {
    name:"profile",
    type:"document",
    title:"Profile",
  
    fields: [
      defineField({
        name: "fullName",
        title: "Full Name",
        type: "string",
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: "headline",
        title: "Headline",
        type: "string",
        description: "In one short sentence, what do you do?",
        validation: (Rule) => Rule.required().min(40).max(50),
      }),
      {
        name: "profileImage",
        title: "Profile Image",
        type: "image",
        description: "Upload a profile picture",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string",
          },
        ],
      },
  
   ],
 }
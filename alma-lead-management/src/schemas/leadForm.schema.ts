export const leadFormSchema = {
  type: "object",
  properties: {
    firstName: { type: "string", minLength: 1 },
    lastName: { type: "string", minLength: 1 },
    email: { type: "string", format: "email" },
    linkedin: { type: "string", format: "uri" },
    visaInterest: {
      type: "array",
      items: {
        type: "string",
        enum: ["O-1", "EB-1A", "EB-2 NIW", "I don't know"],
      },
      uniqueItems: true,
    },
    resume: { type: "string",   contentEncoding: "base64",
      contentMediaType: "application/pdf",
      title: "Resume/CV" },
    additionalInfo: { type: "string" },
  },
  required: ["firstName", "lastName", "email", "linkedin", "visaInterest"],
};

export const leadFormUISchema = {
  type: "VerticalLayout",
  elements: [
    { type: "Control", scope: "#/properties/firstName" },
    { type: "Control", scope: "#/properties/lastName" },
    { type: "Control", scope: "#/properties/email" },
    { type: "Control", scope: "#/properties/linkedin" },
    { type: "Control", scope: "#/properties/visaInterest" },
    { type: "Control", scope: "#/properties/resume" },
    { type: "Control", scope: "#/properties/additionalInfo" },
  ],
};

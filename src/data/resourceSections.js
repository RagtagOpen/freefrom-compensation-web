const resourceSections = [
  { slug: "the-details", name: "The Details", omitFor: [] },
  { slug: "the-challenges", name: "The Challenges", omitFor: [] },
  { slug: "how-to-apply", name: "How To Apply", omitFor: [] },
  {
    slug: "what-to-expect",
    name: "What to Expect After You Apply",
    omitFor: ["small-claims-court", "criminal-restitution", "civil-tort"],
  },
  {
    slug: "what-if-i-dont-agree",
    name: "What if I Don't Agree With the Decision?",
    omitFor: ["civil-tort", "criminal-restitution"],
  },
  { slug: "resources", name: "Resources", omitFor: ["criminal-restitution"] },
]

export default resourceSections

const allFeatures = [
  "Full Source Code",
  "Premium Support",
  "Lifetime Free Updates",
  "Figma Design Files",
  "No Charge for End Users",
  "6 Months of Support (Envato Support Policy)",
  "All Features Included",
];

export const plans = [
  {
    name: "Regular License",
    price: "$39",
    desc: "Use by you or one client, in a single end product which end users are not charged for.",
    recommended: false,
    features: [
      ...allFeatures.map((text) => ({ text, included: true })),
      { text: "For Commercial Projects", included: false },
      { text: "Priority Support", included: false },
      { text: "White-Label Branding", included: false },
      { text: "SaaS Product Development", included: false },
      { text: "Installation Support", included: false },
    ],
  },
  {
    name: "Extended License",
    price: "$499",
    desc: "Use by you or one client, in a single end product which end users can be charged for.",
    recommended: true,
    features: [
      ...allFeatures.map((text) => ({ text, included: true })),
      { text: "For Commercial Projects", included: true },
      { text: "Priority Support", included: true },
      { text: "White-Label Branding", included: true },
      { text: "SaaS Product Development", included: true },
      { text: "Installation Support", included: false },
    ],
  },
];
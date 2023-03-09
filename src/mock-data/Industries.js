const MOCK_INDUSTRIES = [
  {
    id: "1",
    name: "Software & Tech",
    logo: {
      id: "image-1",
      type: "Image",
      name: "Software & Tech Logo.png",
      url: "TODO",
      width: "200",
      height: "200",
      extension: "png",
    },
  },
  {
    id: "2",
    name: "Education",
    logo: {
      id: "image-2",
      type: "Image",
      name: "Education.png",
      url: "TODO",
      width: "200",
      height: "200",
      extension: "png",
    },
  },
  {
    id: "3",
    name: "Retail & Ecommerce",
    logo: {
      id: "image-3",
      type: "Image",
      name: "Retail & Ecommerce.png",
      url: "TODO",
      width: "200",
      height: "200",
      extension: "png",
    },
  },
  {
    id: "4",
    name: "Beauty & Fashion",
    logo: {
      id: "image-4",
      type: "Image",
      name: "Beauty & Fashion.png",
      url: "TODO",
      width: "200",
      height: "200",
      extension: "png",
    },
  },
  {
    id: "5",
    name: "Health & Fitness",
    logo: {
      id: "image-5",
      type: "Image",
      name: "Health & Fitness.png",
      url: "TODO",
      width: "200",
      height: "200",
      extension: "png",
    },
  },
  {
    id: "6",
    name: "Food & Restuarants",
    logo: {
      id: "image-6",
      type: "Image",
      name: "Food & Restuarants.png",
      url: "TODO",
      width: "200",
      height: "200",
      extension: "png",
    },
  },
  {
    id: "7",
    name: "Professtional Services",
    logo: {
      id: "image-7",
      type: "Image",
      name: "Professtional Services.png",
      url: "TODO",
      width: "200",
      height: "200",
      extension: "png",
    },
  },
  {
    id: "8",
    name: "Home & Garden",
    logo: {
      id: "image-8",
      type: "Image",
      name: "Home & Garden.png",
      url: "TODO",
      width: "200",
      height: "200",
      extension: "png",
    },
  },
  {
    id: "9",
    name: "Medical & Biotech",
    logo: {
      id: "image-9",
      type: "Image",
      name: "Medical & Biotech.png",
      url: "TODO",
      width: "200",
      height: "200",
      extension: "png",
    },
  },
  {
    id: "10",
    name: "Travel & Hospitality",
    logo: {
      id: "image-8",
      type: "Image",
      name: "Travel & Hospitality.png",
      url: "TODO",
      width: "200",
      height: "200",
      extension: "png",
    },
  },
  {
    id: "11",
    name: "Real Estate",
    logo: {
      id: "image-11",
      type: "Image",
      name: "Real Estate.png",
      url: "TODO",
      width: "200",
      height: "200",
      extension: "png",
    },
  },
  {
    id: "12",
    name: "Other",
    logo: {
      id: "image-12",
      type: "Image",
      name: "Other.png",
      url: "TODO",
      width: "200",
      height: "200",
      extension: "png",
    },
  },
];

export function listIndustries() {
  return MOCK_INDUSTRIES;
}

export function getIndustry(id) {
  return MOCK_INDUSTRIES.filter((industry) => industry.id === id)[0];
}

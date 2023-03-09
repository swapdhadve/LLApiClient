# LLApiClient

Client package for integrating with LL APIs.

### How to use this Client

---

1. Add package as a dependency

2. Import `LLAPIClient` from "@skillvestors/llapiclient"

```
import LLApiClient from "@skillvestors/llapiclient";

console.log(LLApiClient.listIndustries());
```

## Client Interfaces

```

---------------- 1. List Industries API ----------------

listIndustries()

Response:

[
  {
    "id": "1",
    "name": "Software & Tech",
    "logo": {
      "id": "image-1",
      "type": "Image",
      "name": "Software & Tech Logo.png",
      "url": "TODO",
      "width": "200",
      "height": "200",
      "extension": "png"
    }
  },
  {
    "id": "2",
    "name": "Education",
    "logo": {
      "id": "image-2",
      "type": "Image",
      "name": "Education.png",
      "url": "TODO",
      "width": "200",
      "height": "200",
      "extension": "png"
    }
  },
  {
    "id": "3",
    "name": "Retail & Ecommerce",
    "logo": {
      "id": "image-3",
      "type": "Image",
      "name": "Retail & Ecommerce.png",
      "url": "TODO",
      "width": "200",
      "height": "200",
      "extension": "png"
    }
  },
  {
    "id": "4",
    "name": "Beauty & Fashion",
    "logo": {
      "id": "image-4",
      "type": "Image",
      "name": "Beauty & Fashion.png",
      "url": "TODO",
      "width": "200",
      "height": "200",
      "extension": "png"
    }
  },
  {
    "id": "5",
    "name": "Health & Fitness",
    "logo": {
      "id": "image-5",
      "type": "Image",
      "name": "Health & Fitness.png",
      "url": "TODO",
      "width": "200",
      "height": "200",
      "extension": "png"
    }
  },
  {
    "id": "6",
    "name": "Food & Restuarants",
    "logo": {
      "id": "image-6",
      "type": "Image",
      "name": "Food & Restuarants.png",
      "url": "TODO",
      "width": "200",
      "height": "200",
      "extension": "png"
    }
  },
  {
    "id": "7",
    "name": "Professtional Services",
    "logo": {
      "id": "image-7",
      "type": "Image",
      "name": "Professtional Services.png",
      "url": "TODO",
      "width": "200",
      "height": "200",
      "extension": "png"
    }
  },
  {
    "id": "8",
    "name": "Home & Garden",
    "logo": {
      "id": "image-8",
      "type": "Image",
      "name": "Home & Garden.png",
      "url": "TODO",
      "width": "200",
      "height": "200",
      "extension": "png"
    }
  },
  {
    "id": "9",
    "name": "Medical & Biotech",
    "logo": {
      "id": "image-9",
      "type": "Image",
      "name": "Medical & Biotech.png",
      "url": "TODO",
      "width": "200",
      "height": "200",
      "extension": "png"
    }
  },
  {
    "id": "10",
    "name": "Travel & Hospitality",
    "logo": {
      "id": "image-8",
      "type": "Image",
      "name": "Travel & Hospitality.png",
      "url": "TODO",
      "width": "200",
      "height": "200",
      "extension": "png"
    }
  },
  {
    "id": "11",
    "name": "Real Estate",
    "logo": {
      "id": "image-11",
      "type": "Image",
      "name": "Real Estate.png",
      "url": "TODO",
      "width": "200",
      "height": "200",
      "extension": "png"
    }
  },
  {
    "id": "12",
    "name": "Other",
    "logo": {
      "id": "image-12",
      "type": "Image",
      "name": "Other.png",
      "url": "TODO",
      "width": "200",
      "height": "200",
      "extension": "png"
    }
  }
]
---------------- 2. Get Industry API ----------------

getIndustry(id)

Response:


{
  "id": "3",
  "name": "Retail & Ecommerce",
  "logo": {
    "id": "image-3",
    "type": "Image",
    "name": "Retail & Ecommerce.png",
    "url": "TODO",
    "width": "200",
    "height": "200",
    "extension": "png"
  }
}
---------------- 3. List Asset Purposes API ----------------

listAssetPurposes()

[
  {
    "id": "1",
    "title": "Explainer or Educational",
    "description": "I want to educate or inform the audience about a product, service or topic.",
    "media": {
      "id": "asset-purpose-image-1",
      "type": "Image",
      "name": "1.png",
      "url": "TODO",
      "width": "200",
      "height": "200",
      "extension": "png"
    }
  },
  {
    "id": "2",
    "title": "Promotional or Advertising",
    "description": "I want to create a video that promotes a product, service or brand to potential customers.",
    "media": {
      "id": "asset-purpose-image-2",
      "type": "Image",
      "name": "2.png",
      "url": "TODO",
      "width": "200",
      "height": "200",
      "extension": "png"
    }
  },
  {
    "id": "3",
    "title": "Testimonial or Interview",
    "description": "I want to showcase satisfied customers or conduct interviews with experts or influencers.",
    "media": {
      "id": "asset-purpose-image-3",
      "type": "Image",
      "name": "3.png",
      "url": "TODO",
      "width": "200",
      "height": "200",
      "extension": "png"
    }
  },
  {
    "id": "4",
    "title": "Product Showcase",
    "description": "I want to highlight the features and benefits of a specific product or service.",
    "media": {
      "id": "asset-purpose-image-4",
      "type": "Image",
      "name": "4.png",
      "url": "TODO",
      "width": "200",
      "height": "200",
      "extension": "png"
    }
  },
  {
    "id": "5",
    "title": "Training or Instructional",
    "description": "I want to provide a step by step instructions or guidance on how to use a product, service or system.",
    "media": {
      "id": "asset-purpose-image-5",
      "type": "Image",
      "name": "5.png",
      "url": "TODO",
      "width": "200",
      "height": "200",
      "extension": "png"
    }
  },
  {
    "id": "6",
    "title": "Internal Video",
    "description": "I want to create videos for internal communications, such as company culture or training.",
    "media": {
      "id": "asset-purpose-image-6",
      "type": "Image",
      "name": "6.png",
      "url": "TODO",
      "width": "200",
      "height": "200",
      "extension": "png"
    }
  },
  {
    "id": "7",
    "title": "Event Coverage",
    "description": "I want to capture and showcase the highlights of an event,conference or trade show.",
    "media": {
      "id": "asset-purpose-image-7",
      "type": "Image",
      "name": "7.png",
      "url": "TODO",
      "width": "200",
      "height": "200",
      "extension": "png"
    }
  }
]
---------------- 4. List Asset Content Types API ----------------

listContentTypes()

Response:

[
  {
    "id": "1",
    "assetPurposeIds": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "title": "Promotional Video",
    "description": "Showcases the features, benefits and value of a software or tech product or service to encourage purchase or sign-up.",
    "media": {
      "id": "asset-content-type-image-1",
      "type": "Image",
      "name": "Promotional Video.png",
      "url": "TODO",
      "width": "200",
      "height": "200",
      "extension": "png"
    }
  },
  {
    "id": "2",
    "assetPurposeIds": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "title": "Explainer",
    "description": "Simplifies complex software or tech concepts and processes to help potential customers understand the value and benefits of a product or service.",
    "media": {
      "id": "asset-content-type-image-2",
      "type": "Image",
      "name": "Explainer.png",
      "url": "TODO",
      "width": "200",
      "height": "200",
      "extension": "png"
    }
  },
  {
    "id": "3",
    "assetPurposeIds": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "title": "Social Media Videos",
    "description": "Short engaging vidoes optimized for social media platforms, designed to grab the viewer's attention and encourage engagement and sharing, promoting the features and benefits of a software or tech product or service.",
    "media": {
      "id": "asset-content-type-image-3",
      "type": "Image",
      "name": "Social Media Videos.png",
      "url": "TODO",
      "width": "200",
      "height": "200",
      "extension": "png"
    }
  }
]


---------------- 5. List Packages API ----------------

listPackages(industryId, assetPurposeId, assetContentTypeId)

Response:

[
  {
    "id": "1",
    "assetContentTypeIds": [
      "1",
      "2",
      "3"
    ],
    "assetPurposeIds": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "title": "Package Name 1",
    "subTitle": "Lorem ipsum package description what you can accomplish.",
    "shortDescription": null,
    "description": null,
    "inclusions": [
      "5-Hour Production",
      "Standard Crew",
      "60-Sec Video",
      "Interviews"
    ],
    "medias": [
      {
        "id": "package-image1",
        "type": "Image",
        "name": "Package Name 1.png",
        "url": "TODO",
        "width": "200",
        "height": "200",
        "extension": "png"
      }
    ],
    "customizations": [
      {
        "id": "1",
        "type": "CUSTOMIZATION",
        "title": "Filming Location",
        "subTitle": "Where is the location of your production located?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "2",
        "type": "CUSTOMIZATION",
        "title": "Sound",
        "subTitle": "Do you want to record outdoor interviews?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "3",
        "type": "CUSTOMIZATION",
        "title": "Voiceover",
        "subTitle": "Is the voiceover lauguage of this video ina foreign language?",
        "shortDescription": null,
        "description": null,
        "price": 1000,
        "currency": "USD"
      },
      {
        "id": "4",
        "type": "CUSTOMIZATION",
        "title": "Drone Footage",
        "subTitle": "Would you like to record drone footage of your location?",
        "shortDescription": null,
        "description": null,
        "price": 1500,
        "currency": "USD"
      }
    ],
    "price": 4500,
    "currency": "USD"
  },
  {
    "id": "2",
    "assetContentTypeIds": [
      "1",
      "2",
      "3"
    ],
    "assetPurposeIds": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "title": "Package Name 2",
    "subTitle": "Lorem ipsum package description what you can accomplish.",
    "shortDescription": null,
    "description": null,
    "inclusions": [
      "4-Hour Production",
      "Standard Crew",
      "45-Sec Video"
    ],
    "medias": [
      {
        "id": "package-image2",
        "type": "Image",
        "name": "Package Name 2.png",
        "url": "TODO",
        "width": "200",
        "height": "200",
        "extension": "png"
      }
    ],
    "customizations": [
      {
        "id": "1",
        "type": "CUSTOMIZATION",
        "title": "Filming Location",
        "subTitle": "Where is the location of your production located?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "2",
        "type": "CUSTOMIZATION",
        "title": "Sound",
        "subTitle": "Do you want to record outdoor interviews?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "3",
        "type": "CUSTOMIZATION",
        "title": "Voiceover",
        "subTitle": "Is the voiceover lauguage of this video ina foreign language?",
        "shortDescription": null,
        "description": null,
        "price": 1000,
        "currency": "USD"
      },
      {
        "id": "4",
        "type": "CUSTOMIZATION",
        "title": "Drone Footage",
        "subTitle": "Would you like to record drone footage of your location?",
        "shortDescription": null,
        "description": null,
        "price": 1500,
        "currency": "USD"
      }
    ],
    "price": 3500,
    "currency": "USD"
  },
  {
    "id": "3",
    "assetContentTypeIds": [
      "1",
      "2",
      "3"
    ],
    "assetPurposeIds": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "title": "Package Name 3",
    "subTitle": "Lorem ipsum package description what you can accomplish.",
    "shortDescription": null,
    "description": null,
    "inclusions": [
      "3-Hour Production",
      "Standard Crew",
      "30-Sec Video"
    ],
    "medias": [
      {
        "id": "package-image3",
        "type": "Image",
        "name": "Package Name 3.png",
        "url": "TODO",
        "width": "200",
        "height": "200",
        "extension": "png"
      }
    ],
    "customizations": [
      {
        "id": "1",
        "type": "CUSTOMIZATION",
        "title": "Filming Location",
        "subTitle": "Where is the location of your production located?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "2",
        "type": "CUSTOMIZATION",
        "title": "Sound",
        "subTitle": "Do you want to record outdoor interviews?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "3",
        "type": "CUSTOMIZATION",
        "title": "Voiceover",
        "subTitle": "Is the voiceover lauguage of this video ina foreign language?",
        "shortDescription": null,
        "description": null,
        "price": 1000,
        "currency": "USD"
      },
      {
        "id": "4",
        "type": "CUSTOMIZATION",
        "title": "Drone Footage",
        "subTitle": "Would you like to record drone footage of your location?",
        "shortDescription": null,
        "description": null,
        "price": 1500,
        "currency": "USD"
      }
    ],
    "price": 2500,
    "currency": "USD"
  },
  {
    "id": "4",
    "assetContentTypeIds": [
      "1",
      "2",
      "3"
    ],
    "assetPurposeIds": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "title": "Package Name 4",
    "subTitle": "Lorem ipsum package description what you can accomplish.",
    "shortDescription": null,
    "description": null,
    "inclusions": [
      "2-Hour Production",
      "Standard Crew",
      "15-Sec Video"
    ],
    "medias": [
      {
        "id": "package-image4",
        "type": "Image",
        "name": "Package Name 4.png",
        "url": "TODO",
        "width": "200",
        "height": "200",
        "extension": "png"
      }
    ],
    "customizations": [
      {
        "id": "1",
        "type": "CUSTOMIZATION",
        "title": "Filming Location",
        "subTitle": "Where is the location of your production located?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "2",
        "type": "CUSTOMIZATION",
        "title": "Sound",
        "subTitle": "Do you want to record outdoor interviews?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "3",
        "type": "CUSTOMIZATION",
        "title": "Voiceover",
        "subTitle": "Is the voiceover lauguage of this video ina foreign language?",
        "shortDescription": null,
        "description": null,
        "price": 1000,
        "currency": "USD"
      },
      {
        "id": "4",
        "type": "CUSTOMIZATION",
        "title": "Drone Footage",
        "subTitle": "Would you like to record drone footage of your location?",
        "shortDescription": null,
        "description": null,
        "price": 1500,
        "currency": "USD"
      }
    ],
    "price": 1500,
    "currency": "USD"
  },
  {
    "id": "5",
    "assetContentTypeIds": [
      "1",
      "2",
      "3"
    ],
    "assetPurposeIds": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "title": "Package Name 5",
    "subTitle": "Lorem ipsum package description what you can accomplish.",
    "shortDescription": null,
    "description": null,
    "inclusions": [
      "1-Hour Production",
      "Standard Crew",
      "15-Sec Video"
    ],
    "medias": [
      {
        "id": "package-image5",
        "type": "Image",
        "name": "Package Name 5.png",
        "url": "TODO",
        "width": "200",
        "height": "200",
        "extension": "png"
      }
    ],
    "customizations": [
      {
        "id": "1",
        "type": "CUSTOMIZATION",
        "title": "Filming Location",
        "subTitle": "Where is the location of your production located?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "2",
        "type": "CUSTOMIZATION",
        "title": "Sound",
        "subTitle": "Do you want to record outdoor interviews?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "3",
        "type": "CUSTOMIZATION",
        "title": "Voiceover",
        "subTitle": "Is the voiceover lauguage of this video ina foreign language?",
        "shortDescription": null,
        "description": null,
        "price": 1000,
        "currency": "USD"
      },
      {
        "id": "4",
        "type": "CUSTOMIZATION",
        "title": "Drone Footage",
        "subTitle": "Would you like to record drone footage of your location?",
        "shortDescription": null,
        "description": null,
        "price": 1500,
        "currency": "USD"
      }
    ],
    "price": 1000,
    "currency": "USD"
  },
  {
    "id": "6",
    "assetContentTypeIds": [
      "1",
      "2",
      "3"
    ],
    "assetPurposeIds": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "title": "Package Name 6",
    "subTitle": "Lorem ipsum package description what you can accomplish.",
    "shortDescription": null,
    "description": null,
    "inclusions": [
      "1-Hour Production",
      "Standard Crew",
      "15-Sec Video"
    ],
    "medias": [
      {
        "id": "package-image6",
        "type": "Image",
        "name": "Package Name 6.png",
        "url": "TODO",
        "width": "200",
        "height": "200",
        "extension": "png"
      }
    ],
    "customizations": [
      {
        "id": "1",
        "type": "CUSTOMIZATION",
        "title": "Filming Location",
        "subTitle": "Where is the location of your production located?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "2",
        "type": "CUSTOMIZATION",
        "title": "Sound",
        "subTitle": "Do you want to record outdoor interviews?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "3",
        "type": "CUSTOMIZATION",
        "title": "Voiceover",
        "subTitle": "Is the voiceover lauguage of this video ina foreign language?",
        "shortDescription": null,
        "description": null,
        "price": 1000,
        "currency": "USD"
      },
      {
        "id": "4",
        "type": "CUSTOMIZATION",
        "title": "Drone Footage",
        "subTitle": "Would you like to record drone footage of your location?",
        "shortDescription": null,
        "description": null,
        "price": 1500,
        "currency": "USD"
      }
    ],
    "price": 900,
    "currency": "USD"
  },
  {
    "id": "7",
    "assetContentTypeIds": [
      "1",
      "2",
      "3"
    ],
    "assetPurposeIds": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "title": "Package Name 7",
    "subTitle": "Lorem ipsum package description what you can accomplish.",
    "shortDescription": null,
    "description": null,
    "inclusions": [
      "1-Hour Production",
      "Standard Crew",
      "15-Sec Video"
    ],
    "medias": [
      {
        "id": "package-image7",
        "type": "Image",
        "name": "Package Name 7.png",
        "url": "TODO",
        "width": "200",
        "height": "200",
        "extension": "png"
      }
    ],
    "customizations": [
      {
        "id": "1",
        "type": "CUSTOMIZATION",
        "title": "Filming Location",
        "subTitle": "Where is the location of your production located?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "2",
        "type": "CUSTOMIZATION",
        "title": "Sound",
        "subTitle": "Do you want to record outdoor interviews?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "3",
        "type": "CUSTOMIZATION",
        "title": "Voiceover",
        "subTitle": "Is the voiceover lauguage of this video ina foreign language?",
        "shortDescription": null,
        "description": null,
        "price": 1000,
        "currency": "USD"
      },
      {
        "id": "4",
        "type": "CUSTOMIZATION",
        "title": "Drone Footage",
        "subTitle": "Would you like to record drone footage of your location?",
        "shortDescription": null,
        "description": null,
        "price": 1500,
        "currency": "USD"
      }
    ],
    "price": 800,
    "currency": "USD"
  },
  {
    "id": "8",
    "assetContentTypeIds": [
      "1",
      "2",
      "3"
    ],
    "assetPurposeIds": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "title": "Package Name 8",
    "subTitle": "Lorem ipsum package description what you can accomplish.",
    "shortDescription": null,
    "description": null,
    "inclusions": [
      "1-Hour Production",
      "Standard Crew",
      "15-Sec Video"
    ],
    "medias": [
      {
        "id": "package-image8",
        "type": "Image",
        "name": "Package Name 8.png",
        "url": "TODO",
        "width": "200",
        "height": "200",
        "extension": "png"
      }
    ],
    "customizations": [
      {
        "id": "1",
        "type": "CUSTOMIZATION",
        "title": "Filming Location",
        "subTitle": "Where is the location of your production located?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "2",
        "type": "CUSTOMIZATION",
        "title": "Sound",
        "subTitle": "Do you want to record outdoor interviews?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "3",
        "type": "CUSTOMIZATION",
        "title": "Voiceover",
        "subTitle": "Is the voiceover lauguage of this video ina foreign language?",
        "shortDescription": null,
        "description": null,
        "price": 1000,
        "currency": "USD"
      },
      {
        "id": "4",
        "type": "CUSTOMIZATION",
        "title": "Drone Footage",
        "subTitle": "Would you like to record drone footage of your location?",
        "shortDescription": null,
        "description": null,
        "price": 1500,
        "currency": "USD"
      }
    ],
    "price": 700,
    "currency": "USD"
  },
  {
    "id": "9",
    "assetContentTypeIds": [
      "1",
      "2",
      "3"
    ],
    "assetPurposeIds": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "title": "Package Name 9",
    "subTitle": "Lorem ipsum package description what you can accomplish.",
    "shortDescription": null,
    "description": null,
    "inclusions": [
      "1-Hour Production",
      "Standard Crew",
      "15-Sec Video"
    ],
    "medias": [
      {
        "id": "package-image9",
        "type": "Image",
        "name": "Package Name 9.png",
        "url": "TODO",
        "width": "200",
        "height": "200",
        "extension": "png"
      }
    ],
    "customizations": [
      {
        "id": "1",
        "type": "CUSTOMIZATION",
        "title": "Filming Location",
        "subTitle": "Where is the location of your production located?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "2",
        "type": "CUSTOMIZATION",
        "title": "Sound",
        "subTitle": "Do you want to record outdoor interviews?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "3",
        "type": "CUSTOMIZATION",
        "title": "Voiceover",
        "subTitle": "Is the voiceover lauguage of this video ina foreign language?",
        "shortDescription": null,
        "description": null,
        "price": 1000,
        "currency": "USD"
      },
      {
        "id": "4",
        "type": "CUSTOMIZATION",
        "title": "Drone Footage",
        "subTitle": "Would you like to record drone footage of your location?",
        "shortDescription": null,
        "description": null,
        "price": 1500,
        "currency": "USD"
      }
    ],
    "price": 600,
    "currency": "USD"
  }
]

---------------- 6. Get Top Packages API ----------------

getTopPackages(industryId, assetPurposeId, assetContentTypeId)

Response:

[
  {
    "id": "1",
    "assetContentTypeIds": [
      "1",
      "2",
      "3"
    ],
    "assetPurposeIds": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "title": "Package Name 1",
    "subTitle": "Lorem ipsum package description what you can accomplish.",
    "shortDescription": null,
    "description": null,
    "inclusions": [
      "5-Hour Production",
      "Standard Crew",
      "60-Sec Video",
      "Interviews"
    ],
    "medias": [
      {
        "id": "package-image1",
        "type": "Image",
        "name": "Package Name 1.png",
        "url": "TODO",
        "width": "200",
        "height": "200",
        "extension": "png"
      }
    ],
    "customizations": [
      {
        "id": "1",
        "type": "CUSTOMIZATION",
        "title": "Filming Location",
        "subTitle": "Where is the location of your production located?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "2",
        "type": "CUSTOMIZATION",
        "title": "Sound",
        "subTitle": "Do you want to record outdoor interviews?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "3",
        "type": "CUSTOMIZATION",
        "title": "Voiceover",
        "subTitle": "Is the voiceover lauguage of this video ina foreign language?",
        "shortDescription": null,
        "description": null,
        "price": 1000,
        "currency": "USD"
      },
      {
        "id": "4",
        "type": "CUSTOMIZATION",
        "title": "Drone Footage",
        "subTitle": "Would you like to record drone footage of your location?",
        "shortDescription": null,
        "description": null,
        "price": 1500,
        "currency": "USD"
      }
    ],
    "price": 4500,
    "currency": "USD"
  },
  {
    "id": "2",
    "assetContentTypeIds": [
      "1",
      "2",
      "3"
    ],
    "assetPurposeIds": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "title": "Package Name 2",
    "subTitle": "Lorem ipsum package description what you can accomplish.",
    "shortDescription": null,
    "description": null,
    "inclusions": [
      "4-Hour Production",
      "Standard Crew",
      "45-Sec Video"
    ],
    "medias": [
      {
        "id": "package-image2",
        "type": "Image",
        "name": "Package Name 2.png",
        "url": "TODO",
        "width": "200",
        "height": "200",
        "extension": "png"
      }
    ],
    "customizations": [
      {
        "id": "1",
        "type": "CUSTOMIZATION",
        "title": "Filming Location",
        "subTitle": "Where is the location of your production located?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "2",
        "type": "CUSTOMIZATION",
        "title": "Sound",
        "subTitle": "Do you want to record outdoor interviews?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "3",
        "type": "CUSTOMIZATION",
        "title": "Voiceover",
        "subTitle": "Is the voiceover lauguage of this video ina foreign language?",
        "shortDescription": null,
        "description": null,
        "price": 1000,
        "currency": "USD"
      },
      {
        "id": "4",
        "type": "CUSTOMIZATION",
        "title": "Drone Footage",
        "subTitle": "Would you like to record drone footage of your location?",
        "shortDescription": null,
        "description": null,
        "price": 1500,
        "currency": "USD"
      }
    ],
    "price": 3500,
    "currency": "USD"
  },
  {
    "id": "3",
    "assetContentTypeIds": [
      "1",
      "2",
      "3"
    ],
    "assetPurposeIds": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "title": "Package Name 3",
    "subTitle": "Lorem ipsum package description what you can accomplish.",
    "shortDescription": null,
    "description": null,
    "inclusions": [
      "3-Hour Production",
      "Standard Crew",
      "30-Sec Video"
    ],
    "medias": [
      {
        "id": "package-image3",
        "type": "Image",
        "name": "Package Name 3.png",
        "url": "TODO",
        "width": "200",
        "height": "200",
        "extension": "png"
      }
    ],
    "customizations": [
      {
        "id": "1",
        "type": "CUSTOMIZATION",
        "title": "Filming Location",
        "subTitle": "Where is the location of your production located?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "2",
        "type": "CUSTOMIZATION",
        "title": "Sound",
        "subTitle": "Do you want to record outdoor interviews?",
        "shortDescription": null,
        "description": null,
        "price": 750,
        "currency": "USD"
      },
      {
        "id": "3",
        "type": "CUSTOMIZATION",
        "title": "Voiceover",
        "subTitle": "Is the voiceover lauguage of this video ina foreign language?",
        "shortDescription": null,
        "description": null,
        "price": 1000,
        "currency": "USD"
      },
      {
        "id": "4",
        "type": "CUSTOMIZATION",
        "title": "Drone Footage",
        "subTitle": "Would you like to record drone footage of your location?",
        "shortDescription": null,
        "description": null,
        "price": 1500,
        "currency": "USD"
      }
    ],
    "price": 2500,
    "currency": "USD"
  }
]
---------------- 7. Get Package API ----------------

getPackage(packageId)

Response:

{
  "id": "1",
  "assetContentTypeIds": [
    "1",
    "2",
    "3"
  ],
  "assetPurposeIds": [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7"
  ],
  "title": "Package Name 1",
  "subTitle": "Lorem ipsum package description what you can accomplish.",
  "shortDescription": null,
  "description": null,
  "inclusions": [
    "5-Hour Production",
    "Standard Crew",
    "60-Sec Video",
    "Interviews"
  ],
  "medias": [
    {
      "id": "package-image1",
      "type": "Image",
      "name": "Package Name 1.png",
      "url": "TODO",
      "width": "200",
      "height": "200",
      "extension": "png"
    }
  ],
  "customizations": [
    {
      "id": "1",
      "type": "CUSTOMIZATION",
      "title": "Filming Location",
      "subTitle": "Where is the location of your production located?",
      "shortDescription": null,
      "description": null,
      "price": 750,
      "currency": "USD"
    },
    {
      "id": "2",
      "type": "CUSTOMIZATION",
      "title": "Sound",
      "subTitle": "Do you want to record outdoor interviews?",
      "shortDescription": null,
      "description": null,
      "price": 750,
      "currency": "USD"
    },
    {
      "id": "3",
      "type": "CUSTOMIZATION",
      "title": "Voiceover",
      "subTitle": "Is the voiceover lauguage of this video ina foreign language?",
      "shortDescription": null,
      "description": null,
      "price": 1000,
      "currency": "USD"
    },
    {
      "id": "4",
      "type": "CUSTOMIZATION",
      "title": "Drone Footage",
      "subTitle": "Would you like to record drone footage of your location?",
      "shortDescription": null,
      "description": null,
      "price": 1500,
      "currency": "USD"
    }
  ],
  "price": 4500,
  "currency": "USD"
}

---------------- 8. Get Package Customizations API ----------------

getPackageCustomizations(packageId)

Response:

{
  "id": "1",
  "type": "CUSTOMIZATION",
  "title": "Filming Location",
  "subTitle": "Where is the location of your production located?",
  "shortDescription": null,
  "description": null,
  "price": 750,
  "currency": "USD"
}
---------------- 8. Get Package AddOns API ----------------

getPackageAddOns(packageId)

Response:

{
  "id": "5",
  "type": "ADD_ON",
  "title": "6-Second Clip",
  "subTitle": null,
  "shortDescription": null,
  "description": null,
  "price": 100,
  "currency": "USD"
}
```

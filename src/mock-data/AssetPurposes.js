const MOCK_ASSET_PURPOSES = [
  build("1", "Explainer or Educational", "I want to educate or inform the audience about a product, service or topic."),
  build("2", "Promotional or Advertising", "I want to create a video that promotes a product, service or brand to potential customers."),
  build("3", "Testimonial or Interview", "I want to showcase satisfied customers or conduct interviews with experts or influencers."),
  build("4", "Product Showcase", "I want to highlight the features and benefits of a specific product or service."),
  build(
    "5",
    "Training or Instructional",
    "I want to provide a step by step instructions or guidance on how to use a product, service or system."
  ),
  build("6", "Internal Video", "I want to create videos for internal communications, such as company culture or training."),
  build("7", "Event Coverage", "I want to capture and showcase the highlights of an event,conference or trade show."),
];

function build(id, title, description) {
  return {
    id: id,
    title: title,
    description: description,
    media: {
      id: "asset-purpose-image-" + id,
      type: "Image",
      name: id + ".png",
      url: "TODO",
      width: "200",
      height: "200",
      extension: "png",
    },
  };
}

export function listAssetPurposes() {
  return MOCK_ASSET_PURPOSES;
}

export function getAssetPurpose(id) {
  return MOCK_ASSET_PURPOSES.filter((purpose) => purpose.id === id)[0];
}

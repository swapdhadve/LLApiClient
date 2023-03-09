const MOCK_ASSET_CONTENT_TYPES = [
  build(
    "1",
    [1, 2, 3, 4, 5, 6, 7],
    "Promotional Video",
    "Showcases the features, benefits and value of a software or tech product or service to encourage purchase or sign-up."
  ),
  build(
    "2",
    [1, 2, 3, 4, 5, 6, 7],
    "Explainer",
    "Simplifies complex software or tech concepts and processes to help potential customers understand the value and benefits of a product or service."
  ),
  build(
    "3",
    [1, 2, 3, 4, 5, 6, 7],
    "Social Media Videos",
    "Short engaging vidoes optimized for social media platforms, designed to grab the viewer's attention and encourage engagement and sharing, promoting the features and benefits of a software or tech product or service."
  ),
];

function build(id, assetPurposeIds, title, description) {
  return {
    id: id,
    assetPurposeIds: assetPurposeIds,
    title: title,
    description: description,
    media: {
      id: "asset-content-type-image-" + id,
      type: "Image",
      name: title + ".png",
      url: "TODO",
      width: "200",
      height: "200",
      extension: "png",
    },
  };
}

export function listAssetContentTypes() {
  return MOCK_ASSET_CONTENT_TYPES;
}

export function getAssetContentType(id) {
  return MOCK_ASSET_CONTENT_TYPES.filter((contentType) => contentType.id === id)[0];
}

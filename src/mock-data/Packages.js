const FILMING_LOCATION_CUSTOMIZATION = buildCustomization(
  "1",
  "CUSTOMIZATION",
  "Filming Location",
  "Where is the location of your production located?",
  null,
  null,
  750
);

const SOUND_CUSTOMIZATION = buildCustomization("2", "CUSTOMIZATION", "Sound", "Do you want to record outdoor interviews?", null, null, 750);

const VOICE_OVER_CUSTOMIZATION = buildCustomization(
  "3",
  "CUSTOMIZATION",
  "Voiceover",
  "Is the voiceover lauguage of this video ina foreign language?",
  null,
  null,
  1000
);

const DRONE_FOOTAGE_CUSTOMIZATION = buildCustomization(
  "4",
  "CUSTOMIZATION",
  "Drone Footage",
  "Would you like to record drone footage of your location?",
  null,
  null,
  1500
);

const SIX_SECONDS_CLIP_CUSTOMIZATION = buildCustomization("5", "ADD_ON", "6-Second Clip", null, null, null, 100);

const FIFTEEN_SECONDS_CLIP_CUSTOMIZATION = buildCustomization("6", "ADD_ON", "15-Second Clip", null, null, null, 250);

const THIRTY_SECONDS_CLIP_CUSTOMIZATION = buildCustomization("7", "ADD_ON", "30-Second Clip", null, null, null, 500);

const ADDITIONAL_ASPECT_RATIO_CLIP_CUSTOMIZATION = buildCustomization("8", "ADD_ON", "Additional Aspect Ratio", null, null, null, 500);

const MOCK_PACKAGES_CUSTOMIZATIONS = [
  FILMING_LOCATION_CUSTOMIZATION,
  SOUND_CUSTOMIZATION,
  VOICE_OVER_CUSTOMIZATION,
  DRONE_FOOTAGE_CUSTOMIZATION,
  SIX_SECONDS_CLIP_CUSTOMIZATION,
  FIFTEEN_SECONDS_CLIP_CUSTOMIZATION,
  THIRTY_SECONDS_CLIP_CUSTOMIZATION,
  ADDITIONAL_ASPECT_RATIO_CLIP_CUSTOMIZATION,
];

const PACKAGE_1 = buildPackage(
  "1",
  ["1", "2", "3"],
  ["1", "2", "3", "4", "5", "6", "7"],
  "Package Name 1",
  "Lorem ipsum package description what you can accomplish.",
  null,
  null,
  ["5-Hour Production", "Standard Crew", "60-Sec Video", "Interviews"],
  MOCK_PACKAGES_CUSTOMIZATIONS,
  4500
);

const PACKAGE_2 = buildPackage(
  "2",
  ["1", "2", "3"],
  ["1", "2", "3", "4", "5", "6", "7"],
  "Package Name 2",
  "Lorem ipsum package description what you can accomplish.",
  null,
  null,
  ["4-Hour Production", "Standard Crew", "45-Sec Video"],
  MOCK_PACKAGES_CUSTOMIZATIONS,
  3500
);

const PACKAGE_3 = buildPackage(
  "3",
  ["1", "2", "3"],
  ["1", "2", "3", "4", "5", "6", "7"],
  "Package Name 3",
  "Lorem ipsum package description what you can accomplish.",
  null,
  null,
  ["3-Hour Production", "Standard Crew", "30-Sec Video"],
  MOCK_PACKAGES_CUSTOMIZATIONS,
  2500
);

const PACKAGE_4 = buildPackage(
  "4",
  ["1", "2", "3"],
  ["1", "2", "3", "4", "5", "6", "7"],
  "Package Name 4",
  "Lorem ipsum package description what you can accomplish.",
  null,
  null,
  ["2-Hour Production", "Standard Crew", "15-Sec Video"],
  MOCK_PACKAGES_CUSTOMIZATIONS,
  1500
);

const PACKAGE_5 = buildPackage(
  "5",
  ["1", "2", "3"],
  ["1", "2", "3", "4", "5", "6", "7"],
  "Package Name 5",
  "Lorem ipsum package description what you can accomplish.",
  null,
  null,
  ["1-Hour Production", "Standard Crew", "15-Sec Video"],
  MOCK_PACKAGES_CUSTOMIZATIONS,
  1000
);

const PACKAGE_6 = buildPackage(
  "6",
  ["1", "2", "3"],
  ["1", "2", "3", "4", "5", "6", "7"],
  "Package Name 6",
  "Lorem ipsum package description what you can accomplish.",
  null,
  null,
  ["1-Hour Production", "Standard Crew", "15-Sec Video"],
  MOCK_PACKAGES_CUSTOMIZATIONS,
  900
);

const PACKAGE_7 = buildPackage(
  "7",
  ["1", "2", "3"],
  ["1", "2", "3", "4", "5", "6", "7"],
  "Package Name 7",
  "Lorem ipsum package description what you can accomplish.",
  null,
  null,
  ["1-Hour Production", "Standard Crew", "15-Sec Video"],
  MOCK_PACKAGES_CUSTOMIZATIONS,
  800
);

const PACKAGE_8 = buildPackage(
  "8",
  ["1", "2", "3"],
  ["1", "2", "3", "4", "5", "6", "7"],
  "Package Name 8",
  "Lorem ipsum package description what you can accomplish.",
  null,
  null,
  ["1-Hour Production", "Standard Crew", "15-Sec Video"],
  MOCK_PACKAGES_CUSTOMIZATIONS,
  700
);

const PACKAGE_9 = buildPackage(
  "9",
  ["1", "2", "3"],
  ["1", "2", "3", "4", "5", "6", "7"],
  "Package Name 9",
  "Lorem ipsum package description what you can accomplish.",
  null,
  null,
  ["1-Hour Production", "Standard Crew", "15-Sec Video"],
  MOCK_PACKAGES_CUSTOMIZATIONS,
  600
);

const MOCK_PACKAGES = [PACKAGE_1, PACKAGE_2, PACKAGE_3, PACKAGE_4, PACKAGE_5, PACKAGE_6, PACKAGE_7, PACKAGE_8, PACKAGE_9];

const MOCK_PACKAGES_CUSTOMIZATION_ASSOCIATIONS = [
  {
    packageId: PACKAGE_1.id,
    customizationId: FILMING_LOCATION_CUSTOMIZATION.id,
    maxItems: 1,
  },
  {
    packageId: PACKAGE_1.id,
    customizationId: SOUND_CUSTOMIZATION.id,
    maxItems: 1,
  },
  {
    packageId: PACKAGE_1.id,
    customizationId: VOICE_OVER_CUSTOMIZATION.id,
    maxItems: 1,
  },
  {
    packageId: PACKAGE_1.id,
    customizationId: DRONE_FOOTAGE_CUSTOMIZATION.id,
    maxItems: 1,
  },
  {
    packageId: PACKAGE_1.id,
    customizationId: SIX_SECONDS_CLIP_CUSTOMIZATION.id,
    maxItems: 10,
  },
  {
    packageId: PACKAGE_1.id,
    customizationId: FIFTEEN_SECONDS_CLIP_CUSTOMIZATION.id,
    maxItems: 10,
  },
  {
    packageId: PACKAGE_1.id,
    customizationId: THIRTY_SECONDS_CLIP_CUSTOMIZATION.id,
    maxItems: 10,
  },
  {
    packageId: PACKAGE_1.id,
    customizationId: ADDITIONAL_ASPECT_RATIO_CLIP_CUSTOMIZATION.id,
    maxItems: 10,
  },
];

function buildCustomization(id, type, title, subTitle, shortDescription, description, price) {
  return {
    id: id,
    type: type,
    title: title,
    subTitle: subTitle,
    shortDescription: shortDescription,
    description: description,
    price: price,
    currency: "USD",
  };
}

function buildPackage(
  id,
  assetContentTypeIds,
  assetPurposeIds,
  title,
  subTitle,
  shortDescription,
  description,
  inclusions,
  customizations,
  price
) {
  return {
    id: id,
    assetContentTypeIds: assetContentTypeIds,
    assetPurposeIds: assetPurposeIds,
    title: title,
    subTitle: subTitle,
    shortDescription: shortDescription,
    description: description,
    inclusions: inclusions,
    medias: [
      {
        id: "package-image" + id,
        type: "Image",
        name: title + ".png",
        url: "TODO",
        width: "200",
        height: "200",
        extension: "png",
      },
    ],
    customizations: customizations,
    price: price,
    currency: "USD",
  };
}

export function listPackages() {
  const packages = MOCK_PACKAGES;
  const allPackages = [];
  MOCK_PACKAGES.forEach((productPackage) => {
    const customizations = productPackage.customizations.filter((customization) => customization.type === "CUSTOMIZATION");
    productPackage.customizations = customizations;
    allPackages.push(productPackage);
  });

  return allPackages;
}

export function getPackage(id) {
  return MOCK_PACKAGES.filter((mockPackage) => mockPackage.id === id)[0];
}

export function listCustomizations() {
  return MOCK_PACKAGES_CUSTOMIZATIONS;
}

export function getCustomization(id) {
  return MOCK_PACKAGES_CUSTOMIZATIONS.filter((customization) => customization.id === id)[0];
}

export function listPackageCustomizationAssociations() {
  return MOCK_PACKAGES_CUSTOMIZATION_ASSOCIATIONS;
}

export function getPackageCustomizationAssociation(packageId, customizationId) {
  return MOCK_PACKAGES_CUSTOMIZATION_ASSOCIATIONS.filter(
    (association) => association.customizationId === customizationId && association.packageId === packageId
  )[0];
}

export function getPackageAddOns(packageId) {
  return MOCK_PACKAGES_CUSTOMIZATIONS.filter((customization) => customization.type === "ADD_ON")[0];
}

export function getPackageCustomizations(packageId) {
  return MOCK_PACKAGES_CUSTOMIZATIONS.filter((customization) => customization.type === "CUSTOMIZATION")[0];
}

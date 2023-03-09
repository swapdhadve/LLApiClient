import { listAssetContentTypes, getAssetContentType } from "./mock-data/AssetContentTypes.js";
import { listAssetPurposes } from "./mock-data/AssetPurposes.js";
import { listIndustries, getIndustry } from "./mock-data/Industries.js";
import { listPackages, getPackage, getPackageCustomizations, getPackageAddOns } from "./mock-data/Packages.js";

const LLApiClient = {
  listIndustries: () => {
    return listIndustries();
  },
  getIndustry: (id) => {
    return getIndustry(id);
  },
  listAssetPurposes: () => {
    return listAssetPurposes();
  },
  listContentTypes: () => {
    return listAssetContentTypes();
  },
  getTopPackages: (industryId, assetPurposeId, assetContentTypeId) => {
    const packages = listPackages();
    return packages.slice(0, 3);
  },
  listPackages: (industryId, assetPurposeId, assetContentTypeId) => {
    return listPackages();
  },
  getPackage: (id) => {
    return getPackage(id);
  },
  getPackageCustomizations: (id) => {
    return getPackageCustomizations(id);
  },
  getPackageAddOns: (id) => {
    return getPackageAddOns(id);
  },
};

export default LLApiClient;

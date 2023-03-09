import LLApiClient from "@skillvestors/llapiclient";

console.log("---------------- 1. List Industries API ----------------");
console.log("");
console.log("listIndustries()");
console.log("");
console.log(JSON.stringify(LLApiClient.listIndustries(), null, 2));

console.log("---------------- 2. Get Industry API ----------------");
console.log("");
console.log("getIndustry(id)");
console.log("");
console.log(JSON.stringify(LLApiClient.getIndustry("3"), null, 2));

console.log("---------------- 3. List Asset Purposes API ----------------");
console.log("");
console.log("listAssetPurposes()");
console.log("");
console.log(JSON.stringify(LLApiClient.listAssetPurposes(), null, 2));

console.log("---------------- 4. List Asset Content Types API ----------------");
console.log("");
console.log("listContentTypes()");
console.log("");
console.log(JSON.stringify(LLApiClient.listContentTypes(), null, 2));

console.log("---------------- 5. List Packages API ----------------");
console.log("");
console.log("listPackages(industryId, assetPurposeId, assetContentTypeId)");
console.log("");
console.log(JSON.stringify(LLApiClient.listPackages("1", "2", "3"), null, 2));

console.log("---------------- 6. Get Top Packages API ----------------");
console.log("");
console.log("getTopPackages(industryId, assetPurposeId, assetContentTypeId)");
console.log("");
console.log(JSON.stringify(LLApiClient.getTopPackages("1", "2", "3"), null, 2));

console.log("---------------- 7. Get Package API ----------------");
console.log("");
console.log("getPackage(packageId)");
console.log("");
console.log(JSON.stringify(LLApiClient.getPackage("1"), null, 2));

console.log("---------------- 8. Get Package Customizations API ----------------");
console.log("");
console.log("getPackageCustomizations(packageId)");
console.log("");
console.log(JSON.stringify(LLApiClient.getPackageCustomizations("1"), null, 2));

console.log("---------------- 9. Get Package AddOns API ----------------");
console.log("");
console.log("getPackageAddOns(packageId)");
console.log("");
console.log(JSON.stringify(LLApiClient.getPackageAddOns("1"), null, 2));

require("../css/app.css");
require("../css/custom.css");
require("../scss/style.scss");

import adSizes from "../../adSize";
import adBidders from "../../adBidder";

const networkCode = "1015965"; // will not change
const topLevelAdUnit = "trd-chicago"; // will change base on region
const pageLevelAdUnit = "news-articles"; // will change base on page
const pageSlotPrefix =
  networkCode + "/" + topLevelAdUnit + "/" + pageLevelAdUnit; // add all to make prefix slot name
const device = "mobile"; // can be "mobile, tablet, or desktop"

// sample object
const adUnits = [];

//Get Bidder Names
let bidderNames = Object.keys(adBidders);
//console.log(bidderNames);

//Get Ad Sizes
const adSizeNames = Object.keys(adSizes);
adSizeNames.map((position) => {
  let structuredObjectOfAdUnit = {
    code: adSizes[position].id + "/" + position,
    mediaTypes: {
      banner: {
        sizes: adSizes[position].sizes,
      },
    },
    bids: adBidders[adSizes[position].id][position],
  };
  adUnits.push(structuredObjectOfAdUnit);
});
document.getElementById("json").textContent = JSON.stringify(adUnits, null, 10);

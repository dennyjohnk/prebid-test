/**
 * Ad Bidder Array
 */

const adBidders = {
  "trd-chicago": {
    top: [
      {
        bidder: "appnexus-top",
        params: {
          placementId: 13144370,
        },
      },
      {
        bidder: "rubicon-top",
        params: {
          accountId: "20242",
          siteId: "242082",
          zoneId: "1194328",
        },
        devices: ["desktop", "tablet"],
      },
    ],
  },
  "trd-miami": {
    right: [
      {
        bidder: "appnexus-right",
        params: {
          placementId: 13144370,
        },
      },
      {
        bidder: "rubicon-right",
        params: {
          accountId: "20242",
          siteId: "242082",
          zoneId: "1194328",
        },
        devices: ["desktop", "tablet"],
      },
    ],
  },
  "trd-ny": {
    left: [
      {
        bidder: "appnexus-left",
        params: {
          placementId: 13144370,
        },
      },
      {
        bidder: "rubicon-left",
        params: {
          accountId: "20242",
          siteId: "242082",
          zoneId: "1194328",
        },
        devices: ["desktop", "tablet"],
      },
    ],
  },
};

export default adBidders;

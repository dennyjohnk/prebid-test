/**
 * Ad Sizes Array
 */

const adSizes = {
  top: {
    id: "trd-chicago",
    sizes: [
      [300, 250],
      [300, 600],
    ],
    display: false,
    lazyload: 0, // in px
    ooo: false, // out of page
    refresh: false,
  },
  right: {
    id: "trd-miami",
    sizes: [
      [300, 250],
      [300, 600],
    ],
    display: false,
    lazyload: 500, // in px
    ooo: false, // out of page
    refresh: true,
  },
  left: {
    id: "trd-ny",
    sizes: [
      [300, 250],
      [300, 600],
    ],
    display: false,
    lazyload: 500, // in px
    ooo: false, // out of page
    refresh: true,
  },
};

export default adSizes;

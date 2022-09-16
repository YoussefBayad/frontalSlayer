export default [
  // {
  //   path: "/",
  //   label: "HOME",
  // },
  {
    path: "/products",
    label: "PRODUCTS",
    isDropdown: true,
    key: "1",
    dropdownItems: [
      {
        path: "/products/wigs",
        label: "WIGS",
        isDropdown: true,
        key: "1-1",
        dropdownItems: [
          {
            path: "/products/wigs/hd",
            label: "HD",
            isDropdown: true,
            key: "1-1-1",

            dropdownItems: [
              {
                path: "/products/wigs/hd/raw",
                label: "RAW",
                key: "1-1-1-2",
              },
              {
                path: "/products/wigs/hd/virgin",
                label: "VIRGIN",
                key: "1-1-1-3",
              },
              {
                path: "/products/wigs/hd/613",
                label: "613",
                key: "1-1-1-4",
              },
            ],
          },
          {
            path: "/products/wigs/transparent",
            label: "TRANSPARENT",
            isDropdown: true,
            key: "1-1-2",

            dropdownItems: [
              {
                path: "/products/wigs/transparent/raw",
                label: "RAW",
                key: "1-1-2-1",
              },
              {
                path: "/products/wigs/transparent/virgin",
                label: "VIRGIN",
                key: "1-1-2-2",
              },
              {
                path: "/products/wigs/transparent/613",
                label: "613",
                key: "1-1-2-3",
              },
            ],
          },
          {
            path: "/products/wigs/custom",
            label: "CUSTOM",
            isDropdown: true,
            key: "1-1-3",

            dropdownItems: [
              {
                path: "/products/wigs/custom/hd",
                label: "HD",
                key: "1-1-3-1",
              },
              {
                path: "/products/wigs/custom/transparent",
                label: "TRANSPARENT",
                key: "1-1-3-2",
              },

              {
                path: "/products/wigs/custom/watercolor",
                label: "WATERCOLOR",
                key: "1-1-3-3",
              },
            ],
          },
        ],
      },
      {
        path: "/products/bundles",
        label: "BUNDLES",
        key: "1-2",
      },

      {
        path: "/products/closures",
        label: "CLOSURES",
        isDropdown: true,
        key: "1-3",
        dropdownItems: [
          {
            path: "/products/closures/hd",
            label: "HD",
            key: "1-3-1",
          },
          {
            path: "/products/closures/transparent",
            label: "TRANSPARENT",
            key: "1-3-2",
          },
        ],
      },
      {
        path: "/products/frontals",
        label: "FRONTALS",
        isDropdown: true,
        key: "1-4",
        dropdownItems: [
          {
            path: "/products/frontals/hd",
            label: "HD",
            key: "1-4-1",
          },
          {
            path: "/products/frontals/transparent",
            label: "TRANSPARENT",
            key: "1-4-2",
          },
        ],
      },
    ],
  },
  {
    path: "/tools",
    label: "TOOLS",
    key: "2",
    isDropdown: true,
    dropdownItems: [
      {
        path: "/tools/slay-kit",
        label: "SLAY KIT",
        key: "2-1",
      },
      {
        path: "/tools/lace-products",
        label: "LACE PRODUCTS",
        key: "2-2",
      },
      {
        path: "/tools/hair-products",
        label: "HAIR PRODUCTS",
        key: "2-3",
      },
    ],
  },
  {
    path: "/booking",
    label: "BOOKING",
    key: "4",
  },
  {
    path: "/build-a-wig",
    label: "BUILD-A-WIG",
    key: "5",
  },
  {
    path: "/about",
    label: "ABOUT US",
    key: "6",
  },
  {
    path: "/faq",
    label: "FAQ",
    key: "7",
  },
  {
    path: "/contact",
    label: "CONTACT",
    key: "8",
  },
];

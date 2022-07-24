export default [
  // {
  //   path: "/",
  //   label: "HOME",
  // },
  {
    path: "/products",
    label: "PRODUCTS",
    isDropdown: true,
    dropdownItems: [
      {
        path: "/products/wigs",
        label: "WIGS",
        isDropdown: true,
        dropdownItems: [
          {
            path: "/products/wigs/hd",
            label: "HD",
            isDropdown: true,
            dropdownItems: [
              {
                path: "/products/wigs/hd/raw",
                label: "RAW",
              },
              {
                path: "/products/wigs/hd/virgin",
                label: "VIRGIN",
              },
              {
                path: "/products/wigs/hd/613",
                label: "613",
              },
            ],
          },
          {
            path: "/products/wigs/transparent",
            label: "TRANSPARENT",
            isDropdown: true,
            dropdownItems: [
              {
                path: "/products/wigs/transparent/raw",
                label: "RAW",
              },
              {
                path: "/products/wigs/transparent/virgin",
                label: "VIRGIN",
              },
              {
                path: "/products/wigs/transparent/613",
                label: "613",
              },
            ],
          },
          {
            path: "/products/wigs/custom",
            label: "CUSTOM",
            isDropdown: true,
            dropdownItems: [
              {
                path: "/products/wigs/custom/hd",
                label: "HD",
              },
              {
                path: "/products/wigs/custom/transparent",
                label: "TRANSPARENT",
              },

              {
                path: "/products/wigs/custom/watercolor",
                label: "WATERCOLOR",
              },
            ],
          },
        ],
      },
      {
        path: "/products/bundles",
        label: "BUNDLES",
      },

      {
        path: "/products/closures",
        label: "CLOSURES",
        isDropdown: true,
        dropdownItems: [
          {
            path: "/products/closures/hd",
            label: "HD",
          },
          {
            path: "/products/closures/transparent",
            label: "TRANSPARENT",
          },
        ],
      },
      {
        path: "/products/frontals",
        label: "FRONTALS",
        isDropdown: true,
        dropdownItems: [
          {
            path: "/products/frontals/hd",
            label: "HD",
          },
          {
            path: "/products/frontals/transparent",
            label: "TRANSPARENT",
          },
        ],
      },
    ],
  },
  {
    path: "/tools",
    label: "TOOLS",
    isDropdown: true,
    dropdownItems: [
      {
        path: "/tools/slay-kit",
        label: "SLAY KIT",
      },
      {
        path: "/tools/lace-products",
        label: "LACE PRODUCTS",
      },
      {
        path: "/tools/hair-products",
        label: "HAIR PRODUCTS",
      },
    ],
  },
  {
    path: "/booking",
    label: "BOOKING",
  },
  {
    path: "/build-a-wig",
    label: "BUILD A WIG",
  },
  {
    path: "/about",
    label: "ABOUT US",
  },
  {
    path: "/faq",
    label: "FAQ",
  },
  {
    path: "/contact",
    label: "CONTACT",
  },
];

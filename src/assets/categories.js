module.exports = [
  {
    id: 1,
    category: "cuisine",
    filters: [
      {
        id: 11,
        title: "Italian",
        params: { cuisine: "italian" },
        image:
          "https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love-1080x700.jpg",
      },
      {
        id: 12,
        title: "Mexican",
        params: { cuisine: "mexican" },
        image:
          "https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Pork-carnitas-b94893e.jpg?quality=90&resize=556,505",
      },
      {
        id: 13,
        title: "Mediterranean",
        params: { cuisine: "mediterranean" },
        image:
          "https://schoolnightvegan.com/wp-content/uploads/2022/07/crispy-falafel-19.jpg",
      },
    ],
  },
  {
    id: 2,
    category: "type",
    filters: [
      {
        id: 21,
        title: "Drink",
        params: { type: "drink" },
        image:
          "https://images.immediate.co.uk/production/volatile/sites/2/2020/12/passion-fruit-martini-d07eb8b.jpg?quality=90&resize=556,505",
      },
      {
        id: 22,
        title: "Breakfast",
        params: { type: "breakfast" },
        image:
          "https://potatorolls.com/wp-content/uploads/Lumberjack-Breakfast2.jpg",
      },
      {
        id: 23,
        title: "Soup",
        params: { type: "soup" },
        image:
          "https://www.seriouseats.com/thmb/DvSDZoMw8WSOQFAMgf3L2wlfY9Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/053123_TomatoSoup-MPPSoupsAndStews-Morgan-Hunt-Glaze-f59a081d7efb4625a75a1a907a6b1cbf.jpg",
      },
      {
        id: 24,
        title: "Dessert",
        params: { type: "dessert" },
        image:
          "https://img.taste.com.au/xi2t8DpL/taste/2016/11/lemon-panna-cotta-with-vodka-blueberry-syrup-92005-1.jpeg",
      },
    ],
  },
  {
    id: 3,
    category: "diet",
    filters: [
      {
        id: 31,
        title: "Ketogenic",
        params: { diet: "ketogenic" },
        image:
          "https://images.everydayhealth.com/images/keto-diet-list-of-what-to-eat-and-7-day-sample-menu-alt-1440x810.jpg",
      },
      {
        id: 32,
        title: "Vegan",
        params: { diet: "vegan" },
        image:
          "https://static.ffx.io/images/$zoom_1%2C$multiply_0.372%2C$ratio_1.777778%2C$width_2000%2C$x_0%2C$y_260/t_crop_custom/q_86%2Cf_auto/c7461837502347e74de69bdf593f246d09cf1335",
      },
    ],
  },
  {
    id: 4,
    category: "intolerances",
    filters: [
      {
        id: 41,
        title: "Gluten Free",
        params: { intolerances: "gluten" },
        image:
          "https://blog-images-1.pharmeasy.in/2020/10/01170918/shutterstock_555202156-1-1140x712.jpg",
      },
    ],
  },
];

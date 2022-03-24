const projectList = [
  {
    title: "Spot A Song dApp",
    descriptions: [
      `A simple dApp where users can recommend, find songs and stand a chance to be rewarded with some ether`,
      `Song information is fetched from Spotify API`,
      `Built with React.js, ethers.js with smart contract deployed to the Rinkeby testnet`,
    ],
    isDemoAvailable: true,
    url: "https://spot-a-song.netlify.app/",
    githubUrl: "https://github.com/ivanavi2/spot-a-song",
    modalTargetName: "#modal-spotasong",
    technologies: ["react.js", "solidity", "ethers.js"],
    imagePaths: ["/img/spotasong.JPG"],
  },
  {
    title: "Homemade Food Delivery App",
    descriptions: [
      `Features includes user authentication/authorization, item
        cart, food order status tracking, managing menu for sellers,
        viewing and searching stores for customers , etc.`,
      `Built using Node.js, MongoDB, Express.js, ejs and deployed
        with Heroku.`,
    ],
    isDemoAvailable: true,
    url: "https://powerful-everglades-25382.herokuapp.com/",
    githubUrl: "https://github.com/ivanavi2/hf-delivery-app",
    modalTargetName: "#modal-deliveryapp",
    technologies: ["express.js", "mongodb"],
    imagePaths: ["/img/preview-deliveryrapp.JPG"],
  },
  {
    title: "Shopping App",
    descriptions: [
      `Personal project built with Flutter to learn more about the
      framework such as widgets available in the framework, state
      management, page navigation, handling and validating user
      inputs.`,
      ` Firebase is used to store data and authenticate user from the app.`,
    ],
    isDemoAvailable: false,
    url: "",
    githubUrl: "https://github.com/ivanavi2/shop_app",
    modalTargetName: "#modal-shoppingapp",
    technologies: ["flutter", "firebase"],
    imagePaths: ["/img/preview-shopapp1.JPG", "/img/preview-shopapp2.JPG"],
  },
];

export default projectList;

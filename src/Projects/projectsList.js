const projectList = [
  {
    title: "Allowance Management Module for PEIA System",
    descriptions: [
      `Final year project with Johor Education Department or Jabatan Pendidikan Negeri Johor (JPNJ) as the stakeholder to
      improve on the features provided by the existing Public Exam Invigilator Appointment system`,
      ` Features of the application includes user authentication, dashboard view, automatic calculation of eligible allowance,
      email notifications, export PDF and excel report and address autocomplete`,
      `Built using Node.js, MongoDB, Express.js, React.js and deployed with Netlify and Heroku`,
    ],
    isDemoAvailable: true,
    url: "https://drive.google.com/file/d/1pVxMaa3n1u9GnDSGP7aOt2ocTPMD_usu/view?usp=sharing",
    githubUrl: "https://github.com/ivanavi2/peia-allowance-frontend",
    modalTargetName: "",
    technologies: ["react.js", "express.js", "mongodb"],
    imagePaths: [],
  },
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

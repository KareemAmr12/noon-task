//all images are from unsplash
//unsplash domain is added to next.config.mjs so that this application could use picture from unsplash.com
//not alt attributes are added for any of the images as they are not critical for the purpose of this project. (using random pictures from unsplash)

export const initPosts = [
  {
    id: 0,
    img: "https://images.unsplash.com/photo-1634175734730-feeb73322946?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Elon Musk",
      pic: "https://images.unsplash.com/photo-1612810806695-30f7a8258391?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    noLikes: Math.floor(Math.random() * 1000), //initalizing the number of likes to be random so that the post feed feels more interactive
    isFav: false,
    liked: false,
    noComments: Math.floor(Math.random() * 100), //initalizing the number of comments to be random so that the post feed feels more interactive
    caption: "Launching Starlink in Fiji with the president!",
    tags: "#starlink #spacex #elonmusk #falcon #nasa #space #tesla #starship",
  },
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1715788338483-d991b12a988f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
    author: {
      name: "Adriana Smith",
      pic: "https://images.unsplash.com/photo-1716297277285-c35dedc5fdf0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    noLikes: Math.floor(Math.random() * 1000),
    isFav: false,
    liked: false,
    noComments: Math.floor(Math.random() * 100),
    caption: "Art is everywhere, you just have to look around.",
    tags: "#food #ships #sea #seafood #art",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1513682121497-80211f36a7d3?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Aiony Haust",
      pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    noLikes: Math.floor(Math.random() * 1000),
    isFav: false,
    liked: false,
    noComments: Math.floor(Math.random() * 100),
    caption: "Capturing the beauty of NY!",
    tags: "#newyork #life #people",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Ian Dooley",
      pic: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    noLikes: Math.floor(Math.random() * 1000),
    isFav: false,
    liked: false,
    noComments: Math.floor(Math.random() * 100),
    caption: "Vibing with a new outfit.",
    tags: "#fasion #menswear #gents clothing #vibes",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Rafaella Mendes Diniz",
      pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    noLikes: Math.floor(Math.random() * 1000),
    isFav: false,
    liked: false,
    noComments: Math.floor(Math.random() * 100),
    caption: "A good day at work!",
    tags: "#business #meeting #marketing #people #office",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1495216875107-c6c043eb703f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Ivana Cajina",
      pic: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    noLikes: Math.floor(Math.random() * 1000),
    isFav: false,
    liked: false,
    noComments: Math.floor(Math.random() * 100),
    caption: "Discovering!",
    tags: "#the unkown #discover #explore #new place #landscape",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1636564499112-6113e73c504a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Sandra Ogunseinde",
      pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    noLikes: Math.floor(Math.random() * 1000),
    isFav: false,
    liked: false,
    noComments: Math.floor(Math.random() * 100),
    caption: "Just chilling",
    tags: "#icecream #food #vibes #chilling",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1716117273853-75a1989029f2?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Matheus Ferrero",
      pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    noLikes: Math.floor(Math.random() * 1000),
    isFav: false,
    liked: false,
    noComments: Math.floor(Math.random() * 100),
    caption: "Casablanca",
    tags: "#vibes ",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Nicholas Green",
      pic: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    noLikes: Math.floor(Math.random() * 1000),
    isFav: false,
    liked: false,
    noComments: Math.floor(Math.random() * 100),
    caption: "Celebrating my friendship with her.",
    tags: "#friendship #bestfriend #alwaysTogether",
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Lachlan Dempsey",
      pic: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    noLikes: Math.floor(Math.random() * 1000),
    isFav: false,
    liked: false,
    noComments: Math.floor(Math.random() * 100),
    caption: "It's nice to be back to the countryside.",
    tags: "#calmness #peaceful #countryside ",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Jake Nackos",
      pic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    noLikes: Math.floor(Math.random() * 1000),
    isFav: false,
    liked: false,
    noComments: Math.floor(Math.random() * 100),
    caption: "good times is all we having",
    tags: "",
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?q=80&w=1210&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Elizeu Dias",
      pic: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    noLikes: Math.floor(Math.random() * 1000),
    isFav: false,
    liked: false,
    noComments: Math.floor(Math.random() * 100),
    caption: "the people, the city, and my camera...",
    tags: "#photography #pictures #art",
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1716210180381-b756fd5ccc94?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Vince Fleming",
      pic: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    noLikes: Math.floor(Math.random() * 1000),
    isFav: false,
    liked: false,
    noComments: Math.floor(Math.random() * 100),
    caption: "my house. But from far far away.",
    tags: "",
  },
  {
    id: 13,
    img: "https://images.unsplash.com/photo-1585071863853-3b66d00b4550?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Martina Soprano junior",
      pic: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    noLikes: Math.floor(Math.random() * 1000),
    isFav: false,
    liked: false,
    noComments: Math.floor(Math.random() * 100),
    caption: "What is he doing now?? haha",
    tags: "#children #sneaky",
  },
  {
    id: 14,
    img: "https://images.unsplash.com/photo-1522778034537-20a2486be803?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Jurica Koletic",
      pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    noLikes: Math.floor(Math.random() * 1000),
    isFav: false,
    liked: false,
    noComments: Math.floor(Math.random() * 100),
    caption: "Back to the one place closest to my heart.",
    tags: "#realmadrid #madridista #fan $football #champions #cr7",
  },
  {
    id: 15,
    img: "https://images.unsplash.com/photo-1626025437642-0b05076ca301?q=80&w=1134&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Charles Etoroma",
      pic: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    noLikes: Math.floor(Math.random() * 1000),
    isFav: false,
    liked: false,
    noComments: Math.floor(Math.random() * 100),
    caption: "Always and forever.",
    tags: "#messi #goat #barca",
  },
];

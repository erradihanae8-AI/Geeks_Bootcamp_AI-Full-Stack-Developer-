
const allRecipes = [
    {
        id: 1,
        title: "Tajine de poulet",
        category: "Plat principal",
        image: "https://tse1.mm.bing.net/th/id/OIP.v4_vsWp3m0uI6PtX4oKKuwHaE8?r=0&pid=Api&h=220&P=0",
        time: 60,
        shortDescription: "Poulet mijoté aux épices, citron confit et olives.",
        fullDetails: "Le tajine de poulet est un plat emblématique du Maroc. Il associe le poulet tendre, les olives, le citron confit et un mélange parfumé d'épices marocaines."
    },
    {
        id: 2,
        title: "Couscous marocain",
        category: "Plat principal",
        image: "https://tse4.mm.bing.net/th/id/OIP.Sc_RVPfltPYuIGAkkH5XIwHaE8?r=0&pid=Api&h=220&P=0",
        time: 90,
        shortDescription: "Semoule accompagnée de légumes et de viande.",
        fullDetails: "Le couscous marocain est traditionnellement préparé avec une semoule légère, des légumes de saison et une viande selon les préférences. Il est souvent partagé en famille le vendredi."
    },
    {
        id: 3,
        title: "Pastilla",
        category: "Plat principal",
        image: "https://tse1.mm.bing.net/th/id/OIP.QpML8Fp-40VJnVe___Vv7wHaEe?r=0&pid=Api&h=220&P=0",
        time: 90,
        shortDescription: "Une pâtisserie salée croustillante et parfumée.",
        fullDetails: "La pastilla traditionnelle marocaine associe des feuilles croustillantes à une farce savoureuse. Certaines versions combinent poulet, amandes, cannelle et une légère touche sucrée."
    },
    {
        id: 4,
        title: "Rfissa",
        category: "Plat principal",
        image: "https://tse2.mm.bing.net/th/id/OIP.A9CMVzAQwnKse7qPEH2IhQHaHa?r=0&pid=Api&h=220&P=0",
        time: 90,
        shortDescription: "Msemen effiloché, poulet et lentilles.",
        fullDetails: "La rfissa est un plat généreux préparé avec du poulet, des lentilles et une sauce parfumée au fenugrec et aux épices, servis sur des msemen ou des trid."
    },
    {
        id: 5,
        title: "Harira",
        category: "Soupe",
        image: "https://tse4.mm.bing.net/th/id/OIP.yCcc6wmZgDo9EcIUcYtK0QHaHa?r=0&pid=Api&h=220&P=0",
        time: 60,
        shortDescription: "Soupe marocaine aux tomates, lentilles et pois chiches.",
        fullDetails: "La harira est une soupe riche et parfumée à base de tomates, de légumineuses, de coriandre et de céleri. Elle est particulièrement appréciée pendant le Ramadan."
    },
    {
        id: 6,
        title: "Bissara",
        category: "Soupe",
        image: "https://tse1.mm.bing.net/th/id/OIP.zYBOitsRLFme09FgxGWhGQHaEJ?r=0&pid=Api&h=220&P=0",
        time: 45,
        shortDescription: "Purée chaude de fèves ou de pois cassés.",
        fullDetails: "La bissara est une préparation populaire et réconfortante à base de fèves sèches ou de pois cassés. Elle est généralement servie chaude avec de l'huile d'olive, du cumin et du paprika."
    },
    {
        id: 7,
        title: "Maakouda",
        category: "Entrée",
        image: "https://tse3.mm.bing.net/th/id/OIP.5ufiLs-WcuFgDcX_TGAMmQHaE8?r=0&pid=Api&h=220&P=0",
        time: 30,
        shortDescription: "Galettes de pommes de terre dorées et croustillantes.",
        fullDetails: "La maakouda est une galette de pommes de terre assaisonnée d'ail, de persil et d'épices, puis dorée à la poêle ou frite. Elle se déguste seule ou dans un sandwich."
    },
    {
        id: 8,
        title: "Zaalouk",
        category: "Entrée",
        image: "https://tse2.mm.bing.net/th/id/OIP.kW_AsotX_1gkSaYtB38MzQHaLH?r=0&pid=Api&h=220&P=0",
        time: 35,
        shortDescription: "Salade cuite d'aubergines et de tomates.",
        fullDetails: "Le zaalouk est une salade marocaine cuite à base d'aubergines, de tomates, d'ail, de cumin et de paprika. Il se sert généralement avec du pain."
    },
    {
        id: 9,
        title: "Chebakia",
        category: "Dessert",
        image: "https://tse1.mm.bing.net/th/id/OIP.7bUQw-MXpuDWTmV_4eVaUgHaE8?r=0&pid=Api&h=220&P=0",
        time: 90,
        shortDescription: "Pâtisserie au miel et au sésame.",
        fullDetails: "La chebakia est une pâtisserie marocaine façonnée en forme de fleur, frite puis enrobée de miel et décorée de graines de sésame. Elle accompagne souvent la harira pendant le Ramadan."
    },
    {
        id: 10,
        title: "Cornes de gazelle",
        category: "Dessert",
        image: "https://tse3.mm.bing.net/th/id/OIP.mbe6P55VazkzP2hJWqZLzAHaFj?r=0&pid=Api&h=220&P=0",
        time: 75,
        shortDescription: "Petites pâtisseries fourrées à la pâte d'amandes.",
        fullDetails: "Les cornes de gazelle sont des pâtisseries délicates à base d'une pâte fine et d'une farce aux amandes parfumée à la fleur d'oranger."
    },
    {
        id: 11,
        title: "Thé à la menthe",
        category: "Boisson",
        image: "https://tse3.mm.bing.net/th/id/OIP.HukrhFXmLp1D6b6x3QSdJgHaE8?r=0&pid=Api&h=220&P=0",
        time: 10,
        shortDescription: "Thé vert parfumé à la menthe fraîche.",
        fullDetails: "Le thé à la menthe occupe une place importante dans l'hospitalité marocaine. Il est préparé avec du thé vert, de la menthe fraîche et du sucre selon les goûts."
    },
    {
        id: 12,
        title: "Msemen",
        category: "Petit-déjeuner",
        image: "https://tse3.mm.bing.net/th/id/OIP.RfEDRzkGwP853aYEd6rCXgHaE7?r=0&pid=Api&h=220&P=0",
        time: 40,
        shortDescription: "Crêpe marocaine feuilletée, tendre et dorée.",
        fullDetails: "Le msemen est une crêpe marocaine carrée et feuilletée, préparée à partir d'une pâte travaillée puis pliée. Il se déguste au petit-déjeuner ou au goûter avec du miel, du beurre ou du fromage."
    },
      {
        id: 13,
        title: "Tajine de viande aux pruneaux",
        category: "Plat principal",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTshkbWrUTrS8ZcYOce9x7QEuuIPvFM8SkgccBZq-kHCg&s",
        time: 60,
        shortDescription: "Un tajine marocain savoureux à base de viande tendre et de pruneaux sucrés.",
        fullDetails: "Un plat traditionnel marocain préparé avec de la viande mijotée, des pruneaux, des amandes et des épices."
    }
];

const dataset = [
  {
    hotelId: "1",
    hotelName: "Jack Sparrow",
    rate: 5,
    location: "Kingston",
    hotelDesc:
      "This swash-buckling tale follows the quest of Captain Jack Sparrow, a savvy pirate, and Will Turner, a resourceful blacksmith, as they search for Elizabeth Swann. Elizabeth, the daughter of the governor and the love of Will's life, has been kidnapped by the feared Captain Barbossa. Little do they know, but the fierce and clever Barbossa has been cursed. He, along with his large crew, are under an ancient curse, doomed for eternity to neither live, nor die. That is, unless a blood sacrifice is made.",
    mainimg:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    price: [
      {
        season: "regular",
        month: [3, 4, 5, 6, 9, 10, 11],
        seasonPirce: 300
      },
      {
        season: "super",
        month: [1, 7, 8, 12],
        seasonPirce: 600
      },
      {
        season: "expensive",
        month: [2],
        seasonPirce: 480
      }
    ]
  },
  {
    hotelId: "2",
    hotelName: "Barbossa",
    rate: 4.5,
    location: "Havana",
    hotelDesc:
      "This swash-buckling tale follows the quest of Captain Jack Sparrow, a savvy pirate, and Will Turner, a resourceful blacksmith, as they search for Elizabeth Swann. Elizabeth, the daughter of the governor and the love of Will's life, has been kidnapped by the feared Captain Barbossa. Little do they know, but the fierce and clever Barbossa has been cursed. He, along with his large crew, are under an ancient curse, doomed for eternity to neither live, nor die. That is, unless a blood sacrifice is made.",
    mainimg:
      "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    price: [
      {
        season: "regular",
        month: [3, 4, 5, 6, 9, 10, 11],
        seasonPirce: 280
      },
      {
        season: "super",
        month: [12, 8],
        seasonPirce: 600
      },
      {
        season: "expensive",
        month: [1, 2, 7],
        seasonPirce: 500
      }
    ]
  },
  {
    hotelId: "3",
    hotelName: "Elizabath Swann",
    rate: 4.5,
    location: "Havana",
    hotelDesc:
      "This swash-buckling tale follows the quest of Captain Jack Sparrow, a savvy pirate, and Will Turner, a resourceful blacksmith, as they search for Elizabeth Swann. Elizabeth, the daughter of the governor and the love of Will's life, has been kidnapped by the feared Captain Barbossa. Little do they know, but the fierce and clever Barbossa has been cursed. He, along with his large crew, are under an ancient curse, doomed for eternity to neither live, nor die. That is, unless a blood sacrifice is made. ",
    mainimg:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    price: [
      {
        season: "regular",
        month: [3, 4, 5, 6, 9, 10, 11],
        seasonPirce: 250
      },
      {
        season: "super",
        month: [1, 8, 12],
        seasonPirce: 550
      },
      {
        season: "expensive",
        month: [2, 7],
        seasonPirce: 400
      }
    ]
  },
  {
    hotelId: "4",
    hotelName: "Will Turner",
    rate: 4,
    location: "Havana",
    hotelDesc:
      "This swash-buckling tale follows the quest of Captain Jack Sparrow, a savvy pirate, and Will Turner, a resourceful blacksmith, as they search for Elizabeth Swann. Elizabeth, the daughter of the governor and the love of Will's life, has been kidnapped by the feared Captain Barbossa. Little do they know, but the fierce and clever Barbossa has been cursed. He, along with his large crew, are under an ancient curse, doomed for eternity to neither live, nor die. That is, unless a blood sacrifice is made. ",
    mainimg:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
    price: [
      {
        season: "regular",
        month: [3, 4, 5, 6, 9, 10, 11],
        seasonPirce: 200
      },
      {
        season: "super",
        month: [12, 8],
        seasonPirce: 400
      },
      {
        season: "expensive",
        month: [1, 2, 7],
        seasonPirce: 300
      }
    ]
  },
  {
    hotelId: "5",
    hotelName: "Norrington",
    rate: 4,
    location: "Havana",
    hotelDesc:
      "This swash-buckling tale follows the quest of Captain Jack Sparrow, a savvy pirate, and Will Turner, a resourceful blacksmith, as they search for Elizabeth Swann. Elizabeth, the daughter of the governor and the love of Will's life, has been kidnapped by the feared Captain Barbossa. Little do they know, but the fierce and clever Barbossa has been cursed. He, along with his large crew, are under an ancient curse, doomed for eternity to neither live, nor die. That is, unless a blood sacrifice is made. ",
    mainimg:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    price: [
      {
        season: "regular",
        month: [3, 4, 5, 6, 9, 10, 11],
        seasonPirce: 200
      },
      {
        season: "super",
        month: [12, 8],
        seasonPirce: 400
      },
      {
        season: "expensive",
        month: [1, 2, 7],
        seasonPirce: 300
      }
    ]
  },
  {
    hotelId: "6",
    hotelName: "Pintel",
    rate: 3,
    location: "Kingston",
    hotelDesc:
      "This swash-buckling tale follows the quest of Captain Jack Sparrow, a savvy pirate, and Will Turner, a resourceful blacksmith, as they search for Elizabeth Swann. Elizabeth, the daughter of the governor and the love of Will's life, has been kidnapped by the feared Captain Barbossa. Little do they know, but the fierce and clever Barbossa has been cursed. He, along with his large crew, are under an ancient curse, doomed for eternity to neither live, nor die. That is, unless a blood sacrifice is made. ",
    mainimg:
      "https://images.unsplash.com/photo-1534612899740-55c821a90129?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    price: [
      {
        season: "regular",
        month: [3, 4, 5, 6, 9, 10, 11],
        seasonPirce: 150
      },
      {
        season: "super",
        month: [12],
        seasonPirce: 400
      },
      {
        season: "expensive",
        month: [1, 2, 7, 8],
        seasonPirce: 200
      }
    ]
  },
  {
    hotelId: "7",
    hotelName: "Ragetti",
    rate: 3,
    location: "Kingston",
    hotelDesc:
      "This swash-buckling tale follows the quest of Captain Jack Sparrow, a savvy pirate, and Will Turner, a resourceful blacksmith, as they search for Elizabeth Swann. Elizabeth, the daughter of the governor and the love of Will's life, has been kidnapped by the feared Captain Barbossa. Little do they know, but the fierce and clever Barbossa has been cursed. He, along with his large crew, are under an ancient curse, doomed for eternity to neither live, nor die. That is, unless a blood sacrifice is made. ",
    mainimg:
      "https://images.unsplash.com/photo-1557034362-d9b6856e4cab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    price: [
      {
        season: "regular",
        month: [3, 4, 5, 6, 9, 10, 11],
        seasonPirce: 180
      },
      {
        season: "super",
        month: [12, 8],
        seasonPirce: 400
      },
      {
        season: "expensive",
        month: [1, 2, 7],
        seasonPirce: 210
      }
    ]
  },
  {
    hotelId: "8",
    hotelName: "Murtogg",
    rate: 2.5,
    location: "Santo Domingo",
    hotelDesc:
      "This swash-buckling tale follows the quest of Captain Jack Sparrow, a savvy pirate, and Will Turner, a resourceful blacksmith, as they search for Elizabeth Swann. Elizabeth, the daughter of the governor and the love of Will's life, has been kidnapped by the feared Captain Barbossa. Little do they know, but the fierce and clever Barbossa has been cursed. He, along with his large crew, are under an ancient curse, doomed for eternity to neither live, nor die. That is, unless a blood sacrifice is made. ",
    mainimg:
      "https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=500&q=60",
    price: [
      {
        season: "regular",
        month: [3, 4, 5, 6, 9, 10, 11],
        seasonPirce: 120
      },
      {
        season: "super",
        month: [12],
        seasonPirce: 300
      },
      {
        season: "expensive",
        month: [1, 2, 7, 8],
        seasonPirce: 190
      }
    ]
  },
  {
    hotelId: "9",
    hotelName: "Mullroy",
    rate: 2.5,
    location: "Havana",
    hotelDesc:
      "This swash-buckling tale follows the quest of Captain Jack Sparrow, a savvy pirate, and Will Turner, a resourceful blacksmith, as they search for Elizabeth Swann. Elizabeth, the daughter of the governor and the love of Will's life, has been kidnapped by the feared Captain Barbossa. Little do they know, but the fierce and clever Barbossa has been cursed. He, along with his large crew, are under an ancient curse, doomed for eternity to neither live, nor die. That is, unless a blood sacrifice is made. ",
    mainimg:
      "https://images.unsplash.com/photo-1570213489059-0aac6626cade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    price: [
      {
        season: "regular",
        month: [3, 4, 5, 6, 9, 10, 11],
        seasonPirce: 120
      },
      {
        season: "super",
        month: [12],
        seasonPirce: 300
      },
      {
        season: "expensive",
        month: [1, 2, 7, 8],
        seasonPirce: 190
      }
    ]
  },
  {
    hotelId: "10",
    hotelName: "Twigg",
    rate: 2.5,
    location: "Havana",
    hotelDesc:
      "This swash-buckling tale follows the quest of Captain Jack Sparrow, a savvy pirate, and Will Turner, a resourceful blacksmith, as they search for Elizabeth Swann. Elizabeth, the daughter of the governor and the love of Will's life, has been kidnapped by the feared Captain Barbossa. Little do they know, but the fierce and clever Barbossa has been cursed. He, along with his large crew, are under an ancient curse, doomed for eternity to neither live, nor die. That is, unless a blood sacrifice is made. ",
    mainimg:
      "https://images.unsplash.com/photo-1570214476695-19bd467e6f7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: [
      {
        season: "regular",
        month: [3, 4, 5, 6, 9, 10],
        seasonPirce: 90
      },
      {
        season: "super",
        month: [1, 7, 8, 12],
        seasonPirce: 190
      },
      {
        season: "expensive",
        month: [2, 11],
        seasonPirce: 130
      }
    ]
  },
  {
    hotelId: "11",
    hotelName: "Mermaids",
    rate: 2.5,
    location: "Havana",
    hotelDesc:
      "This swash-buckling tale follows the quest of Captain Jack Sparrow, a savvy pirate, and Will Turner, a resourceful blacksmith, as they search for Elizabeth Swann. Elizabeth, the daughter of the governor and the love of Will's life, has been kidnapped by the feared Captain Barbossa. Little do they know, but the fierce and clever Barbossa has been cursed. He, along with his large crew, are under an ancient curse, doomed for eternity to neither live, nor die. That is, unless a blood sacrifice is made. ",
    mainimg:
      "https://images.unsplash.com/photo-1549109786-eb80da56e693?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    price: [
      {
        season: "regular",
        month: [3, 4, 5, 6, 9, 10, 11],
        seasonPirce: 120
      },
      {
        season: "super",
        month: [12, 7, 8],
        seasonPirce: 200
      },
      {
        season: "expensive",
        month: [1, 2],
        seasonPirce: 160
      }
    ]
  }
];

module.exports = dataset;

import React from "react";

export default function Marketplace() {
  const dummyAccounts = [
    {
      id: 1,
      game: "lol",
      description: "120 Champions • 85 Skins",
      price: 249.99,
      OldPrice: 299.99,
      image: "/src/assets/Gassy.jpg",
      verified: true,
      rank: "Diamond III",
      seller: {
        name: "NewSeller",
        tier: "regular",
        rating: 4.5,
        reviews: 12,
        sales: 25,
      },
    },
    {
      id: 2,
      game: "valorant",
      description: "All Agents • 15 Premium Skins",
      price: 349.99,
      image: "/src/assets/Gassy.jpg",
      verified: true,
      instantDelivery: false,
      rank: {
        name: "Immortal II",
        image:
          "https://static.wikia.nocookie.net/valorant/images/1/1e/Immortal_Rank.png",
      },
      seller: {
        name: "ValoKing",
        tier: "gold",
        rating: 5,
        reviews: 42,
        sales: 78,
      },
    },
    {
      id: 3,
      game: "lol",
      description: "65 Champions • 30 Skins",
      price: 89.99,
      image: "/src/assets/Gassy.jpg",
      verified: true,
      instantDelivery: true,
      rank: {
        name: "Gold IV",
        image:
          "https://static.wikia.nocookie.net/leagueoflegends/images/8/8d/Season_2022_-_Gold.png",
      },
      seller: {
        name: "SmurfMaster",
        tier: "diamond",
        rating: 5,
        reviews: 67,
        sales: 132,
      },
    },
    {
      id: 4,
      game: "valorant",
      description: "All Agents • 25 Premium Skins",
      price: 499.99,
      OldPrice: 599.99,
      image: "/src/assets/Gassy.jpg",
      verified: true,
      instantDelivery: false,
      isNew: true,
      rank: {
        name: "Radiant",
        image:
          "https://static.wikia.nocookie.net/valorant/images/8/8a/Radiant_Rank.png",
      },
      seller: {
        name: "ProPlayer",
        tier: "elite",
        rating: 5,
        reviews: 93,
        sales: 215,
      },
    },
    {
      id: 5,
      game: "lol",
      title: "Unranked LoL",
      description: "All Champions • 150+ Skins",
      price: 399.99,
      image: "/src/assets/Gassy.jpg",
      verified: true,
      instantDelivery: false,
      rank: {
        name: "Unranked",
        image:
          "https://static.wikia.nocookie.net/leagueoflegends/images/7/73/Season_2022_-_Unranked.png",
      },
      seller: {
        name: "SkinCollector",
        tier: "regular",
        rating: 4.5,
        reviews: 28,
        sales: 18,
      },
    },
    {
      id: 6,
      game: "valorant",
      title: "Plat Valorant",
      description: "All Agents • 8 Premium Skins",
      price: 149.99,
      OldPrice: 179.99,
      image: "/src/assets/Gassy.jpg",
      verified: true,
      instantDelivery: true,
      rank: {
        name: "Platinum I",
        image:
          "https://static.wikia.nocookie.net/valorant/images/4/4f/Platinum_Rank.png",
      },
      seller: {
        name: "ValoDeals",
        tier: "gold",
        rating: 5,
        reviews: 37,
        sales: 82,
      },
    },
  ];
  return <div>Marketplace</div>;
}

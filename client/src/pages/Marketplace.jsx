import React, { useState } from "react";
import Card from "../components/Card";

export default function Marketplace() {
  const accounts = [
    {
      id: 1,
      sellerRank: "gold",
      salesCount: "42",
      rating: 4.5,
      reviewsCount: "128",
      accountRank: "Diamond II",
      warrantyType: "Basic",
      description:
        "6 year old smurf account, never banned, honor level 4, 66% w/r",
      image: "/src/assets/CardImage.png",
      level: "107",
      levelUpType: "Hand made",
      blueEssence: "13484",
      price: "85",
      skins: "43",
      champions: "77",
      region: "Europe Nordic & East",
    },
    {
      id: 2,
      sellerRank: "elite",
      salesCount: "215",
      rating: 5,
      reviewsCount: "93",
      accountRank: "Master I",
      warrantyType: "Premium",
      description: "Main account with rare skins, 70% win rate",
      image: "/src/assets/CardImage.png",
      level: "256",
      levelUpType: "Hand made",
      blueEssence: "45210",
      price: "250",
      skins: "120",
      champions: "95",
      region: "North America",
    },
    {
      id: 3,
      sellerRank: "diamond",
      salesCount: "132",
      rating: 4.8,
      reviewsCount: "67",
      accountRank: "Platinum IV",
      warrantyType: "Standard",
      description: "Fresh smurf, ready for ranked, all champs unlocked",
      image: "/src/assets/CardImage.png",
      level: "45",
      levelUpType: "Hand made",
      blueEssence: "7800",
      price: "65",
      skins: "25",
      champions: "65",
      region: "Europe West",
    },
    {
      id: 4,
      sellerRank: "gold",
      salesCount: "78",
      rating: 4.2,
      reviewsCount: "42",
      accountRank: "Gold I",
      warrantyType: "Basic",
      description: "Good starter account with popular champions",
      image: "/src/assets/CardImage.png",
      level: "62",
      levelUpType: "Hand made",
      blueEssence: "11200",
      price: "45",
      skins: "30",
      champions: "50",
      region: "Japan",
    },
    {
      id: 5,
      sellerRank: "regular",
      salesCount: "25",
      rating: 3.9,
      reviewsCount: "12",
      accountRank: "Silver II",
      warrantyType: "Basic",
      description: "Budget account with decent champion pool",
      image: "/src/assets/CardImage.png",
      level: "38",
      levelUpType: "Hand made",
      blueEssence: "6500",
      price: "30",
      skins: "15",
      champions: "40",
      region: "Brazil",
    },
    {
      id: 6,
      sellerRank: "elite",
      salesCount: "300",
      rating: 5,
      reviewsCount: "150",
      accountRank: "Challenger",
      warrantyType: "Premium",
      description: "High elo account with all champions and rare skins",
      image: "/src/assets/CardImage.png",
      level: "300",
      levelUpType: "Hand made",
      blueEssence: "65000",
      price: "500",
      skins: "150",
      champions: "100",
      region: "Korea",
    },
  ];
  const [filters, setFilters] = useState({
    accountType: "",
    companyAccount: false,
    priceRange: false,
    notPoints: false,
    dataRelease: false,
    accountServer: "",
    sokolBank: false,
    value: false,
    notes: false,
    lastSeasonBank: false,
    flatQueueBank: false,
    mainMenu: false,
    sellerBank: "",
    bike: false,
    accountLevel: false,
    classifiers: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <div className="">
      {/* Header Section */}

      <div className="flex items-center">
        <div className="">
          <div className="text-center font-bold xl:text-[40px]">
            From Banned Mains to Fresh Smurfs, Your League of Legends journey
            Starts Here
          </div>
          <div className="font-bold xl:text-[30px] text-center text-[#B59BCE]">
            TND priced, Safe accounts!
          </div>
        </div>
        <img src="src/assets/Ahri.png" alt="" />
      </div>

      {/* Filters Section */}
      <div className="flex items-start justify-around">
        <div className="bg-[#2B1C40] p-6 rounded-lg text-white min-w-[250px]">
          <div className="">filters</div>
          <div className="">filters</div>
          <div className="">filters</div>
          <div className="">filters</div>
          <div className="">filters</div>
          <div className="">filters</div>
          <div className="">filters</div>
          <div className="">filters</div>
          <div className="">filters</div>
          <div className="">filters</div>
          <div className="">filters</div>
          <div className="">filters</div>
          <div className="">filters</div>
          <div className="">filters</div>
          <div className="">filters</div>
          <div className="">filters</div>
          <div className="">filters</div>
          <div className="">filters</div>
          <div className="">filters</div>
          <div className="">filters</div>
          <div className="">filters</div>
        </div>
        <div className="px-4">
          <div className="pb-5 ">
            <div className="relative w-full">
              {/* Search Icon */}
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-[#D8B4FE]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {/* Input Field */}
              <input
                type="text"
                placeholder="Search..."
                className="py-1 sm:py-2 pl-10 pr-3 sm:pl-12 sm:pr-4 w-full focus:outline-none text-white bg-[#111827] rounded-lg text-sm sm:text-base"
                autoFocus
              />
            </div>
            <div className="">Sort by</div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {accounts.map((account) => (
              <Card
                key={account.id}
                sellerRank={account.sellerRank}
                salesCount={account.salesCount}
                rating={account.rating}
                reviewsCount={account.reviewsCount}
                accountRank={account.accountRank}
                warrantyType={account.warrantyType}
                description={account.description}
                image={account.image}
                level={account.level}
                levelUpType={account.levelUpType}
                blueEssence={account.blueEssence}
                price={account.price}
                skins={account.skins}
                champions={account.champions}
                region={account.region}
              />
            ))}
            <div className="flex justify-center mt-12">
              <button className="bg-[#7E22CE] hover:bg-[#6B21A8] text-white font-medium py-2 px-6 rounded-lg">
                Load More Accounts
              </button>
            </div>
          </div>
        </div>

        {/* Pagination */}
      </div>

      {/* Cards Grid */}
    </div>
  );
}

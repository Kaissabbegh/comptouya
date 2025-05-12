import React from "react";
import IronIcon from "../assets/iron.png";
import BronzeIcon from "../assets/bronze.png";
import SilverIcon from "../assets/silver.png";
import GoldIcon from "../assets/gold.png";
import PlatinumIcon from "../assets/platinum.png";
import EmeraldIcon from "../assets/emerald.png";
import DiamondIcon from "../assets/diamond.png";
import MasterIcon from "../assets/master.png";
import GrandmasterIcon from "../assets/grandmaster.png";
import ChallengerIcon from "../assets/challenger.png";
import UnrankedIcon from "../assets/unranked.png";
import RankStarIcon from "../assets/rankstar.png";
import WarrantyIcon from "../assets/warrantyperiod.png";
import LeveluptypeIcon from "../assets/leveluptype.png";
import LevelIcon from "../assets/level.png";
import BlueessenceIcon from "../assets/blueessence.png";

import RegularSellerIcon from "../assets/RegularSeller.png";
import GoldSellerIcon from "../assets/GoldSeller.png";
import DiamondSellerIcon from "../assets/DiamondSeller.png";
import EliteSellerIcon from "../assets/EliteSeller.png";
import StarIcon from "../assets/star.png";

const AccountCard = ({
  sellerRank = "gold", // 'regular', 'gold', 'diamond', 'elite'
  salesCount = "42",
  rating = 4.5, // 0-5
  reviewsCount = "128",
  accountRank = "Diamond II",
  warrantyType = "Basic",
  description = "Selling my 6 year old smurf account, handleveled, never banned or chat restricted, honor level 4, currently 66% w/r d4, +22",
  image = "src/assets/CardImage.png",
  level = "Level 107",
  levelUpType = "Hand made",
  blueEssence = "13484",
  price = "85",
  skins = "43",
  champions = "77",
  region = "Europe Nordic & East",
}) => {
  const sellerRanks = {
    regular: {
      icon: RegularSellerIcon,
      label: "Regular Seller",
      color: "text-gray-400",
    },
    gold: {
      icon: GoldSellerIcon,
      label: "Gold Seller",
      color: "text-yellow-500",
    },
    diamond: {
      icon: DiamondSellerIcon,
      label: "Diamond Seller",
      color: "text-blue-400",
    },
    elite: {
      icon: EliteSellerIcon,
      label: "Elite Seller",
      color: "text-purple-500",
    },
  };

  // Get seller info
  const sellerInfo = sellerRanks[sellerRank] || sellerRanks.regular;

  const getRankName = () => {
    if (!accountRank) return "unranked";
    const rankName = accountRank.toLowerCase().split(" ")[0];
    return rankName;
  };

  const rankIcons = {
    iron: IronIcon,
    bronze: BronzeIcon,
    silver: SilverIcon,
    gold: GoldIcon,
    platinum: PlatinumIcon,
    emerald: EmeraldIcon,
    diamond: DiamondIcon,
    master: MasterIcon,
    grandmaster: GrandmasterIcon,
    challenger: ChallengerIcon,
    unranked: UnrankedIcon,
  };

  const rankName = getRankName();
  const iconSrc = rankIcons[rankName] || UnrankedIcon;

  return (
    <div className="flex flex-col items-end max-w-[400px]">
      <div
        className="p-3 mr-4 rounded-t-2xl"
        style={{
          background: "linear-gradient(to right, #111827 0%, #1E1B4B 100%)",
        }}
      >
        <div className="flex items-center gap-2">
          <img
            src={sellerInfo.icon}
            alt={sellerInfo.label}
            className="w-6 h-6"
          />
          <span className={`font-medium ${sellerInfo.color}`}>
            {sellerInfo.label}
          </span>
        </div>
      </div>
      <div
        className="p-5 rounded-2xl min-h-[0px]"
        style={{
          background: "linear-gradient(to right, #111827 0%, #1E1B4B 100%)",
        }}
      >
        <div className="pb-4 font-bold">
          {region}/{champions} Champions/{skins} Skins
        </div>
        <div className="flex justify-around text-center items-center pb-4">
          <div>
            <div className="flex items-center gap-1 justify-center">
              <img src={RankStarIcon} alt="Rank star" />
              <div>Rank of account</div>
            </div>
            <div className="text-[#B59BCE] flex items-center justify-center gap-1">
              <img
                src={iconSrc}
                alt={accountRank || "Unranked"}
                className="w-6 h-6 object-contain"
              />
              {accountRank}
            </div>
          </div>
          <div className="w-px h-12 bg-[#E9D5FF]"></div>
          <div>
            <div className="flex items-center gap-1 justify-center">
              <img src={WarrantyIcon} alt="Warranty" />
              <div>Warranty Type</div>
            </div>
            <div className="text-[#B59BCE]">{warrantyType}</div>
          </div>
        </div>
        <div className="line-clamp-1 text-[#E9D5FF] text-[13px]">
          {description}
        </div>
        <img src={image} alt="" className="py-5" />
        <div className="flex items-center justify-between pb-5">
          <div className="">
            <div className="">Account level</div>
            <div className="flex gap-1 items-center">
              <img src={LevelIcon} alt="" />
              <div className="">{level}</div>
            </div>
          </div>
          <div className="">
            <div className="">Level up type</div>
            <div className="flex gap-1 items-center">
              <img src={LeveluptypeIcon} alt="" />
              <div className="">{levelUpType}</div>
            </div>
          </div>
          <div className="">
            <div className="">Blue essence</div>
            <div className="flex gap-1 items-center">
              <img src={BlueessenceIcon} alt="" />
              <div className="">BE {blueEssence}</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="font-bold text-[24px]">{price} TND</div>
          <div className=" flex gap-2">
            <button className="rounded-full py-2 px-4 bg-[linear-gradient(to_right,#7E22DB_0%,#095ADF_100%)] text-center">
              Buy Now
            </button>
            <button className="rounded-full py-2 px-3 bg-[#9C8767] text-center">
              Add to cart
            </button>
          </div>
        </div>
        <div className="flex justify-end items-center gap-2 pt-2 text-[10px]">
          <div className="flex items-center gap-1">
            <img src={StarIcon} alt="" className="h-2 w-2" />
            {rating}
            {"("}
            {reviewsCount}
            {")"}
          </div>

          <div className="w-px h-4 bg-white"></div>
          <div className="">sales {salesCount}</div>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;

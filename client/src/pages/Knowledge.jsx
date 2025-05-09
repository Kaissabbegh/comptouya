import React, { useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { CgDanger, CgLock } from "react-icons/cg";
import { IoShieldOutline } from "react-icons/io5";
import { TiStarburstOutline } from "react-icons/ti";
import { FaHeadphones } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Knowledge() {
  const guidesB = [
    {
      id: "1",
      icon: "src/assets/guide1.png",
      title: "Browse Accounts",
      description:
        "Explore our extensive collection of Game accounts with various ranks,skins, champions, agents and much more !",
    },
    {
      id: "2",
      icon: "src/assets/guide2.png",
      title: "Verify Sellers",
      description:
        "Check seller Rank and Rating to ensure you are buying From trusted members of our community.",
    },
    {
      id: "3",
      icon: "src/assets/guide3.png",
      title: "Secure Payment",
      description:
        "Use our secure escrow system to protect your payment until you receive and Verify your purchase.",
    },
    {
      id: "4",
      icon: "src/assets/guide4.png",
      title: "8-Day Warranty",
      description:
        "Enjoy your peace of mind with our 8 days full warranty on all of the account listed ! ",
    },
  ];
  const guidesS = [
    {
      icon: "src/assets/guide2.png",
      title: "Identity Verification",
      description:
        "Submit the required documents to our support email or through your dashboard for verification to establish trust with potential buyers.",
    },
    {
      icon: "src/assets/guide3.png",
      title: "Account Information",
      description:
        "Ensure you provide correct and accurate account information to speedup your review process and build credibility.",
    },
    {
      icon: "src/assets/guide5.png",
      title: "Transaction tracking",
      description:
        "Track your transactions in your dashboard and make sure you provide correct and updated payout information.",
    },
  ];
  const data = [
    {
      rank: "Regular",
      warranty: "8 Days escrow",
      covered: "Any Issue",
      less100: "Full refund",
      more100: "Full refund",
    },
    {
      rank: "Gold",
      warranty: "14 Days",
      covered: "Account Retrieval",
      less100: "40%",
      more100: "14%",
    },
    {
      rank: "Diamond",
      warranty: "14 Days",
      covered: "Retrieval or account lock",
      less100: "60%",
      more100: "25%",
    },
    {
      rank: "Elite",
      warranty: "16 Days",
      covered: "Retrieval or account lock or ban",
      less100: "Full refund",
      more100: "31%",
    },
  ];
  const SellerRequirements = [
    {
      rank: "Regular",
      sales: "< 40",
      salesProgress: 20, // 20% of progress
      platformFee: "13%",
      transactionFee: "3%",
      requirements: ["ID + phone number"],
    },
    {
      rank: "Gold",
      sales: "40 to 100",
      salesProgress: 50, // 50% of progress
      platformFee: "11%",
      transactionFee: "3%",
      requirements: ["☆ 4 star rating", "ID + Socials (6 months old)"],
    },
    {
      rank: "Diamond",
      sales: "100 to 180",
      salesProgress: 75, // 75% of progress
      platformFee: "9%",
      transactionFee: "2.5%",
      requirements: ["☆☆ 4.5 star rating", "ID + Socials + proof of Address"],
    },
    {
      rank: "Elite",
      sales: "> 180",
      salesProgress: 100, // 100% of progress
      platformFee: "7%",
      transactionFee: "2%",
      requirements: ["☆☆☆ 4.9 star rating", "ID + Socials + Proof of Address"],
    },
  ];
  const buyerQuestions = [
    {
      question: "How does the 8-day warranty work?",
      answer: (
        <>
          <p className="pb-2">
            An 8-day warranty ensures buyers retain payment protection for 8
            days post-purchase. If issues arise, buyers need to report defects
            during this window, triggering a refund from escrow and seller
            penalties. Sellers receive funds only after the period expires
            without disputes, balancing buyer safety with seller accountability.
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-1">
              <span className="font-medium">Warranty period:</span>
              <span>8 days from purchase</span>
            </div>
            <div className="flex items-start gap-1">
              <span className="font-medium">Covered Issue:</span>
              <span>
                The type of issues eligible for refunds or replacements in case
                of seller's inability to help
              </span>
            </div>
            <div className="flex items-start gap-1">
              <span className="font-medium">
                Replacement amount if account {"<"} 100 TND:
              </span>
              <span>Full refund for verified issues</span>
            </div>
          </div>
        </>
      ),
    },
    {
      question: "What if I have an issue after the warranty period?",
      answer: (
        <>
          <p className="pb-2">
            If a buyer has an issue after the warranty period, the marketplace
            considers the transaction final, leaving resolution to direct
            negotiation with the seller but sellers are not obligated to refund.
          </p>
          <div className="flex items-start gap-1">
            <span className="font-medium">
              Replacement amount if account {">"} 100 TND:
            </span>
            <span>Partial refund based on issue severity</span>
          </div>
        </>
      ),
    },
    {
      question: "Can I refund if I don't like the account?",
      answer: (
        <p>
          Refunds for not liking an account are not covered under standard
          warranties. Post-warranty, buyers have no automatic refund rights.
          Buyers should vet accounts thoroughly BEFORE purchase.
        </p>
      ),
    },
    {
      question: "How are accounts priced?",
      answer: (
        <p>
          Accounts are priced based on rank, exclusive skins, champion/skin
          count, account age, server region, and seller reputation. High-value
          features like exclusive or unreleased content or boosted stats can
          raise prices, while basic accounts start lower. Prices reflect buyer
          demand, seller urgency, and platform fees added on top.
        </p>
      ),
    },
  ];

  const sellerQuestions = [
    {
      question: "What fees do sellers pay?",
      answer: (
        <>
          <p className="pb-2">
            Seller fees depend on the seller rank and they are not deducted from
            the asked price.
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-1">
              <span className="font-medium">Platform fee:</span>
              <span>
                Tiered charges added on top of a seller's listed price,
                decreasing with higher seller ranks. Buyers pay the total
                (account price + fee), while sellers receive their exact
                requested amount.
              </span>
            </div>
            <div className="flex items-start gap-1">
              <span className="font-medium">Transaction fee:</span>
              <span>
                A percentage-based charge added on top of a seller's listed
                price, paid by the buyer, with rates decreasing as sellers rank
                up.
              </span>
            </div>
          </div>
        </>
      ),
    },
    {
      question: "When do I get paid after the sale?",
      answer: (
        <>
          <p className="pb-2">
            Sellers can request a payout of their available balance typically
            taking 1-3 business days.
          </p>
          <div className="flex items-start gap-1">
            <span className="font-medium">Faster payout:</span>
            <span>
              A streamlined process where sellers receive funds within hours or
              immediately after escrow period bypassing standard multi-day
              payout periods.
            </span>
          </div>
        </>
      ),
    },
    {
      question: "What if I provide wrong payout information?",
      answer: (
        <p>
          The marketplace holds the seller responsible for verifying their
          details pre-transaction. If a seller provides incorrect payout
          information and funds are sent to the wrong recipient there won't be
          any reversal or refunding.
        </p>
      ),
    },
    {
      question: "What if the buyer has issues with my account?",
      answer: (
        <p>
          If the buyer has issues with an account purchase during warranty
          period they need to report it to the platform and the seller will be
          notified to help with the issue. Failure to resolve it may result in
          bans, balance termination or other penalties.
        </p>
      ),
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };
  return (
    <>
      <motion.section
        className="xl:py-10 mx-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <div className="text-center font-bold xl:text-[40px] text-[20px] mt-10">
            Welcome to Comptouya Knowledge Base
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <div className="text-center xl:text-[20px] text-[12px] text-white/80">
            Your complete guide for safely buying and selling League of Legends
            accounts in Tunisia
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center xl:gap-[150px] my-10"
          variants={containerVariants}
        >
          {[
            {
              img: "src/assets/Frame1.png",
              title: "Secure Transactions",
              desc: "Every transaction is protected by our escrow system",
            },
            {
              img: "src/assets/Frame2.png",
              title: "Verified Accounts",
              desc: "All accounts are verified for authenticity and ownership",
            },
            {
              img: "src/assets/Frame1.png",
              title: "8-Day Warranty",
              desc: "All purchases come with our exclusive 8-day protection",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center w-full max-w-[250px] sm:max-w-[200px] gap-2"
            >
              <img
                src={item.img}
                alt="frame"
                className="rounded-full p-3 bg-white/5 xl:w-16 xl:h-16 w-12 h-12 object-contain"
              />
              <div className="text-center font-semibold text-base md:text-lg text-[14px]">
                {item.title}
              </div>
              <div className="text-center lg:text-sm text-[12px] text-white/80">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      <motion.section
        className="py-10 mx-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <motion.div variants={itemVariants}>
          <div className="font-bold xl:text-[48px] text-[20px] text-center">
            Buyer's Guide
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <div className="text-white/80 xl:text-[20px] text-[12px] text-center">
            Follow these simple steps to safely purchase your ideal League of
            Legends account
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-5 justify-center my-10"
          variants={containerVariants}
        >
          {guidesB.map((guide, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 p-3 max-w-[250px] min-h-[180px] rounded-xl"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-[#FDE68A] px-3 py-1 text-black">
                    {guide.id}
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={guide.icon} alt="guide" className="w-5 h-5" />
                    <div className="text-[17px]">{guide.title}</div>
                  </div>
                </div>
                <div className="text-[15px]">{guide.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
          variants={itemVariants}
        >
          <button className="bg-[#FDE68A] text-black text-center rounded-3xl font-semibold px-10 py-3">
            Start shopping
          </button>
        </motion.div>
      </motion.section>
      <motion.section
        className="py-10 bg-white/10 px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <motion.div variants={itemVariants}>
          <div className="font-bold xl:text-[48px] text-[20px] text-center">
            Seller Guide
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <div className="text-white/80 xl:text-[20px] text-[12px] text-center">
            Want to sell your League of Legends account? Follow our verification
            process to get started
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-5 justify-center my-10"
          variants={containerVariants}
        >
          {guidesS.map((guide, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 p-3 max-w-[250px] min-h-[180px] rounded-xl"
            >
              <div className="flex flex-col items-center gap-2">
                <img src={guide.icon} alt="guide" className="w-8 h-8" />
                <div className="text-[17px] font-semibold">{guide.title}</div>
                <div className="text-[15px]">{guide.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
          variants={itemVariants}
        >
          <button className="bg-[linear-gradient(to_right,#7E22DB_0%,#095ADF_100%)] text-center rounded-3xl font-semibold px-10 py-3">
            Apply Now
          </button>
        </motion.div>
      </motion.section>
      <motion.section
        className="py-10 xl:mx-[200px] mx-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <motion.div variants={itemVariants}>
          <div className="font-bold xl:text-[48px] text-[20px] text-center">
            Seller Ranks & Benefits
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <div className="text-white/80 xl:text-[20px] text-[12px] text-center">
            Unlock exclusive benefits and rewards as you climb through our
            seller ranks
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="flex pt-10 gap-1 items-center">
            <img src="src/assets/shield.png" alt="shield" className="w-5 h-5" />
            <div className="font-semibold">Warranty Policies</div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="text-[12px] text-white/60 italic pb-2">
            Disclaimer: This warranty does NOT cover issues caused by buyer
            actions.
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="py-4">
          <div className="overflow-x-auto rounded-lg border-b">
            <table className="min-w-full divide-y">
              <thead className="bg-[#3B185F]">
                <tr className="">
                  <th className="px-6 py-3 text-left text-xs font-medium text-white  tracking-wider">
                    Seller Rank
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white tracking-wider">
                    <div className="flex items-center gap-1">
                      Warranty Period
                      <div>
                        <a
                          data-tooltip-id="my-tooltip11"
                          data-tooltip-content="The period in which a buyer has the right to file a complaint and ask for a refund IF unfixed issues arise with a certain seller"
                          data-tooltip-place="top"
                        >
                          <CgDanger className="text-[#FDE68A] size-[16px]" />
                        </a>
                        <Tooltip
                          id="my-tooltip11"
                          style={{
                            backgroundColor: "rgb(250, 204, 21)",
                            color: "#222",
                            maxWidth: "200px",
                            textAlign: "center",
                          }}
                        />
                      </div>
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white tracking-wider">
                    <div className="flex items-center gap-1">
                      Covered Issue
                      <div>
                        <a
                          data-tooltip-id="my-tooltip12"
                          data-tooltip-content="The type of issues Eligible for refunds or replacements in case of seller’s inability to help "
                          data-tooltip-place="top"
                        >
                          <CgDanger className="text-[#FDE68A] size-[16px]" />
                        </a>
                        <Tooltip
                          id="my-tooltip12"
                          style={{
                            backgroundColor: "rgb(250, 204, 21)",
                            color: "#222",
                            maxWidth: "200px",
                            textAlign: "center",
                          }}
                        />
                      </div>
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white tracking-wider">
                    <div className="flex items-center gap-1">
                      Replacement Amount (Value {"<"}100 TND)
                      <div>
                        <a
                          data-tooltip-id="my-tooltip13"
                          data-tooltip-content="The amount of money received  if there is a covered issue in the warranty period for an account of total value less than 100 TND "
                          data-tooltip-place="top"
                        >
                          <CgDanger className="text-[#FDE68A] size-[16px]" />
                        </a>
                        <Tooltip
                          id="my-tooltip13"
                          style={{
                            backgroundColor: "rgb(250, 204, 21)",
                            color: "#222",
                            maxWidth: "200px",
                            textAlign: "center",
                          }}
                        />
                      </div>
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white tracking-wider">
                    <div className="flex items-center gap-1">
                      Replacement Amount (Value {">"}100 TND)
                      <div>
                        <a
                          data-tooltip-id="my-tooltip13"
                          data-tooltip-content="The amount of money received  if there is a covered issue in the warranty period for an account of total value higher than 100 TND   "
                          data-tooltip-place="top"
                        >
                          <CgDanger className="text-[#FDE68A] size-[16px]" />
                        </a>
                        <Tooltip
                          id="my-tooltip13"
                          style={{
                            backgroundColor: "rgb(250, 204, 21)",
                            color: "#222",
                            maxWidth: "200px",
                            textAlign: "center",
                          }}
                        />
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white/5 divide-y divide-white/120">
                {data.map((row, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                      {row.rank}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {row.warranty}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {row.covered}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {row.less100}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {row.more100}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.section>
      <motion.section
        className="py-10 xl:mx-[200px] mx-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <motion.div variants={itemVariants}>
          <div className="flex gap-1 items-center">
            <img src="src/assets/Perks.png" alt="shield" className="w-4 h-4" />
            <div className="font-semibold">Warranty Policies</div>
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <div className="text-[12px] text-white/60 italic pb-2">
            Disclaimer: Physical rewards for Elite item are delivered within 1-7
            working days in Tunisia, subject to third-party delays and accurate
            address submission.
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <div className="py-4 flex items-center justify-start gap-[100px]">
            <div className="overflow-x-auto rounded-lg border-b ">
              <table className="min-w-full divide-y">
                <thead className="bg-[#3B185F]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white tracking-wider xl:w-[350px]">
                      Seller Rank
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white tracking-wider">
                      <div className="flex items-center gap-1">
                        Rewards
                        <div>
                          <a
                            data-tooltip-id="my-tooltip5"
                            data-tooltip-content="benefits given to sellers in response to Grinding ranks and being trust worthy."
                            data-tooltip-place="top"
                          >
                            <CgDanger className="text-[#FDE68A] size-[16px]" />
                          </a>
                          <Tooltip
                            id="my-tooltip5"
                            style={{
                              backgroundColor: "rgb(250, 204, 21)",
                              color: "#222",
                              maxWidth: "200px",
                              textAlign: "center",
                            }}
                          />
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white/5 divide-y divide-white/120">
                  {/* Base Rank */}
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="font-semibold">Basic</div>
                    </td>
                    <td className="py-4 text-sm">
                      <ul className="list-disc pl-5 space-y-1">
                        <div className="flex gap-1 items-center">
                          <IoShieldOutline></IoShieldOutline>
                          <div className="">
                            <div className="flex items-center gap-1">
                              Basic escrow
                              <div>
                                <a
                                  data-tooltip-id="my-tooltip6"
                                  data-tooltip-content="A secure transaction method where payment is held for 8 days to protect both buyer and seller. During this period, the seller must deliver the account while the buyer verifies its validity If satisfied, funds release to the seller; if issues arise, disputes are mediated by the platform."
                                  data-tooltip-place="top"
                                >
                                  <CgDanger className="text-[#FDE68A] size-[16px]" />
                                </a>
                                <Tooltip
                                  id="my-tooltip6"
                                  style={{
                                    backgroundColor: "rgb(250, 204, 21)",
                                    color: "#222",
                                    maxWidth: "200px",
                                    textAlign: "center",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-1 items-center">
                          <TiStarburstOutline></TiStarburstOutline>
                          <div className="">Static listing visibility</div>
                        </div>
                      </ul>
                    </td>
                  </tr>

                  {/* Gold Rank */}
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="font-semibold flex items-center gap-2">
                        <span className="text-[#FDE68A]">Gold</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-">
                      <ul className="list-disc pl-5 space-y-1 text-[#FDE68A]">
                        <div className="flex gap-1 items-center">
                          <TiStarburstOutline></TiStarburstOutline>
                          <div className="">Gold Seller Badge</div>
                        </div>
                        <div className="flex gap-1 items-center">
                          <FaHeadphones></FaHeadphones>
                          <div className="">
                            <div className="flex items-center gap-1">
                              Priority support
                              <div>
                                <a
                                  data-tooltip-id="my-tooltip7"
                                  data-tooltip-content="A  premium service offering high-value sellers expedited assistance with guaranteed fast response times, direct access to expert agents, proactive monitoring, and tailored solutions to resolve critical issues swiftly. "
                                  data-tooltip-place="top"
                                >
                                  <CgDanger className="text-[#FDE68A] size-[16px]" />
                                </a>
                                <Tooltip
                                  id="my-tooltip7"
                                  style={{
                                    backgroundColor: "rgb(250, 204, 21)",
                                    color: "#222",
                                    maxWidth: "200px",
                                    textAlign: "center",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-1 items-center">
                          <FaGift></FaGift>
                          <div className="">1×10% discount code</div>
                        </div>
                      </ul>
                    </td>
                  </tr>

                  {/* Diamond Rank */}
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="font-semibold flex items-center gap-2">
                        <span className="text-[#93C5FD]">Diamond</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-">
                      <ul className="list-disc pl-5 space-y-1 text-[#93C5FD]">
                        <div className="flex gap-1 items-center">
                          <SlEnergy></SlEnergy>
                          <div className="">
                            <div className="flex items-center gap-1">
                              Animated listing
                              <div>
                                <a
                                  data-tooltip-id="my-tooltip8"
                                  data-tooltip-content=" is A dynamic account showcase that uses motion effects, rotating visuals to highlight account details These eye-catching listings aim to attract buyers by vividly demonstrating an item’s value and functionality, boosting engagement and trust compared to static text or images."
                                  data-tooltip-place="top"
                                >
                                  <CgDanger className="text-[#FDE68A] size-[16px]" />
                                </a>
                                <Tooltip
                                  id="my-tooltip8"
                                  style={{
                                    backgroundColor: "rgb(250, 204, 21)",
                                    color: "#222",
                                    maxWidth: "200px",
                                    textAlign: "center",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-1 items-center">
                          <FaGift></FaGift>
                          <div className="">2×10% discount codes</div>
                        </div>
                        <div className="flex gap-1 items-center">
                          <FaClock></FaClock>
                          <div className="">Faster payout</div>
                        </div>
                      </ul>
                    </td>
                  </tr>

                  {/* Elite Rank */}
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="font-semibold flex items-center gap-2">
                        <span className="text-[#D8B4FE]">Elite</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-">
                      <ul className="list-disc pl-5 space-y-1 text-[#D8B4FE]">
                        <div className="flex gap-1 items-center">
                          <FaHeadphones></FaHeadphones>
                          <div className="">
                            <div className="flex items-center gap-1">
                              VIP support
                              <div>
                                <a
                                  data-tooltip-id="my-tooltip9"
                                  data-tooltip-content="A streamlined process where sellers receive funds  within hours or immediately after escrow period bypassing standard multi-day payout periods."
                                  data-tooltip-place="top"
                                >
                                  <CgDanger className="text-[#FDE68A] size-[16px]" />
                                </a>
                                <Tooltip
                                  id="my-tooltip9"
                                  style={{
                                    backgroundColor: "rgb(250, 204, 21)",
                                    color: "#222",
                                    maxWidth: "200px",
                                    textAlign: "center",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-1 items-center">
                          <FaClock></FaClock>
                          <div className="">Instant posting</div>
                        </div>
                        <div className="flex gap-1 items-center">
                          <FaGift></FaGift>
                          <div className="">Custom gift (giftcard/merch)</div>
                        </div>
                        <div className="flex gap-1 items-center">
                          <SlEnergy></SlEnergy>
                          <div className="">
                            <div className="flex items-center gap-1">
                              Elite animated listing
                              <div>
                                <a
                                  data-tooltip-id="my-tooltip0"
                                  data-tooltip-content="is a premium service offering prioritized assistance to Elite sellers featuring instant access to dedicated agents, expedited dispute resolution, and personalized help for refunds, or High Value transactions, enhancing trust and loyalty."
                                  data-tooltip-place="top"
                                >
                                  <CgDanger className="text-[#FDE68A] size-[16px]" />
                                </a>
                                <Tooltip
                                  id="my-tooltip0"
                                  style={{
                                    backgroundColor: "rgb(250, 204, 21)",
                                    color: "#222",
                                    maxWidth: "200px",
                                    textAlign: "center",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="hidden xl:block">
              <img src="src/assets/kayn.png" alt="" className="h-[300px]" />
            </div>
          </div>
        </motion.div>
      </motion.section>
      <motion.section
        className="py-10 xl:mx-[200px] mx-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <div className="font-bold xl:text-[48px] text-[20px] pb-10 text-center">
              Seller Rank Requirements & Fees
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="overflow-x-auto rounded-lg border-b">
              <table className="min-w-full divide-y">
                <thead className="bg-[#3B185F]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white tracking-wider">
                      Rank
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white tracking-wider">
                      <div className="flex items-center gap-1">
                        Sales Threshold
                        <div>
                          <a
                            data-tooltip-id="my-tooltip1"
                            data-tooltip-content="the number of Unique sales needed for a seller to apply for the next rank."
                            data-tooltip-place="top"
                          >
                            <CgDanger className="text-[#FDE68A] size-[16px]" />
                          </a>
                          <Tooltip
                            id="my-tooltip1"
                            style={{
                              backgroundColor: "rgb(250, 204, 21)",
                              color: "#222",
                              maxWidth: "200px",
                              textAlign: "center",
                            }}
                          />
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white tracking-wider">
                      <div className="flex items-center gap-1">
                        Platform Fee
                        <div>
                          <a
                            data-tooltip-id="my-tooltip2"
                            data-tooltip-content="tiered charges added on top of a seller’s listed price, decreasing with higher seller ranks. Buyers pay the total (account price + fee), while sellers receive their exact requested amount."
                            data-tooltip-place="top"
                          >
                            <CgDanger className="text-[#FDE68A] size-[16px]" />
                          </a>
                          <Tooltip
                            id="my-tooltip2"
                            style={{
                              backgroundColor: "rgb(250, 204, 21)",
                              color: "#222",
                              maxWidth: "200px",
                              textAlign: "center",
                            }}
                          />
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white tracking-wider">
                      <div className="flex items-center gap-1">
                        Transaction Fee
                        <div>
                          <a
                            data-tooltip-id="my-tooltip3"
                            data-tooltip-content="a percentage-based charge added on top of a seller’s listed price, paid by the buyer, with rates decreasing as sellers rank up."
                            data-tooltip-place="top"
                          >
                            <CgDanger className="text-[#FDE68A] size-[16px]" />
                          </a>
                          <Tooltip
                            id="my-tooltip3"
                            style={{
                              backgroundColor: "rgb(250, 204, 21)",
                              color: "#222",
                              maxWidth: "200px",
                              textAlign: "center",
                            }}
                          />
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white tracking-wider">
                      <div className="flex items-center gap-1">
                        Additional Requirements
                        <div>
                          <a
                            data-tooltip-id="my-tooltip4"
                            data-tooltip-content="additional verified criteria that needs to be submitted by a seller to be eligible for a rank up."
                            data-tooltip-place="top"
                          >
                            <CgDanger className="text-[#FDE68A] size-[16px]" />
                          </a>
                          <Tooltip
                            id="my-tooltip4"
                            style={{
                              backgroundColor: "rgb(250, 204, 21)",
                              color: "#222",
                              maxWidth: "200px",
                              textAlign: "center",
                            }}
                          />
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white/5 divide-y divide-white/120">
                  {SellerRequirements.map((row, index) => (
                    <motion.tr key={index} variants={itemVariants}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {row.rank}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex items-center gap-2 min-w-[150px]">
                          <span>{row.sales}</span>
                          <div className="w-full xl:max-w-[150px] ">
                            <div className="w-full  bg-white/10 rounded-full h-2.5">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${row.salesProgress}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-2.5 rounded-full"
                                style={{
                                  background:
                                    row.rank === "Elite"
                                      ? "linear-gradient(to right, #9333EA, #A855F7)"
                                      : row.rank === "Diamond"
                                      ? "linear-gradient(to right, #3B82F6, #60A5FA)"
                                      : row.rank === "Gold"
                                      ? "linear-gradient(to right, #CA8A04, #EAB308)"
                                      : "linear-gradient(to right, #6B7280, #9CA3AF)",
                                }}
                              ></motion.div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {row.platformFee}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {row.transactionFee}
                      </td>
                      <td className="px-6 py-4 text-sm min-w-[300px]">
                        <ul className="space-y-1">
                          {row.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-6 text-center text-sm text-white/60"
          >
            By either selling or buying accounts you fully agree to our&nbsp;
            <Link
              to="/terms"
              className="text-[#FDE68A]"
              onClick={() => window.scrollTo(0, 0)}
            >
              Terms of Service and privacy policy.
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.section
        className="py-10 xl:mx-[200px] mx-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <div className="font-bold xl:text-[48px] text-[20px] text-center">
              Frequently Asked Questions
            </div>
            <div className="text-white/80 xl:text-[20px] text-[12px] text-center pb-6">
              Find answers to common questions about buying and selling League
              of Legends accounts
            </div>
          </motion.div>

          {/* Two-column layout */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* For Buyers */}
            <div>
              <h2 className="xl:text-2xl text-lg font-bold pb-4 text-white">
                For Buyers
              </h2>
              <div className="space-y-4">
                {buyerQuestions.map((item, index) => (
                  <div
                    key={`buyer-${index}`}
                    className="bg-white/5 p-4 rounded-lg"
                  >
                    <details className="group">
                      <summary className="cursor-pointer font-semibold text-white group-open:text-[#FDE68A] transition-all">
                        {item.question}
                      </summary>

                      <div className="mt-2 text-white/80">{item.answer}</div>
                    </details>
                  </div>
                ))}
              </div>
            </div>

            {/* For Sellers */}
            <div>
              <h2 className="xl:text-2xl text-lg font-bold pb-4 text-white">
                For Sellers
              </h2>
              <div className="space-y-4">
                {sellerQuestions.map((item, index) => (
                  <div
                    key={`seller-${index}`}
                    className="bg-white/5 p-4 rounded-lg"
                  >
                    <details className="group">
                      <summary className="cursor-pointer font-semibold text-white group-open:text-[#FDE68A] transition-all">
                        {item.question}
                      </summary>
                      <div className="mt-2 text-white/80">{item.answer}</div>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}

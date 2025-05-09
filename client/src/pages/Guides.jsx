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
  // ... (keep all your existing data arrays and variables)

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
      {/* Welcome Section */}
      <motion.section
        className="py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <div className="text-center font-bold text-[40px] mt-10">
            Welcome to Comptouya Knowledge Base
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <div className="text-center text-[20px] text-white/80">
            Your complete guide for safely buying and selling League of Legends
            accounts in Tunisia
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center gap-[150px] my-10"
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
              className="flex flex-col items-center max-w-[200px] gap-2"
            >
              <img
                src={item.img}
                alt="frame"
                className="rounded-full p-3 bg-white/5"
              />
              <div className="text-center font-semibold text-[17px]">
                {item.title}
              </div>
              <div className="text-center text-[13px]">{item.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Buyer's Guide Section */}
      <motion.section
        className="py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <motion.div variants={itemVariants}>
          <div className="font-bold text-[48px] text-center">Buyer's Guide</div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <div className="text-white/80 text-[20px] text-center">
            Follow these simple steps to safely purchase your ideal League of
            Legends account
          </div>
        </motion.div>

        <motion.div
          className="flex gap-5 justify-center my-10"
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

      {/* Seller Guide Section */}
      <motion.section
        className="py-10 bg-white/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <motion.div variants={itemVariants}>
          <div className="font-bold text-[48px] text-center">Seller Guide</div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <div className="text-white/80 text-[20px] text-center">
            Want to sell your League of Legends account? Follow our verification
            process to get started
          </div>
        </motion.div>

        <motion.div
          className="flex gap-5 justify-center my-10"
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

      {/* Seller Ranks & Benefits Section */}
      <motion.section
        className="py-10 xl:mx-[200px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <motion.div variants={itemVariants}>
          <div className="font-bold text-[48px] text-center">
            Seller Ranks & Benefits
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <div className="text-white/80 text-[20px] text-center">
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
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="The period in which a buyer has the right to file a complaint and ask for a refund IF unfixed issues arise with a certain seller"
                          data-tooltip-place="top"
                        >
                          <CgDanger className="text-[#FDE68A] size-[16px]" />
                        </a>
                        <Tooltip
                          id="my-tooltip"
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
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="The type of issues Eligible for refunds or replacements in case of seller’s inability to help "
                          data-tooltip-place="top"
                        >
                          <CgDanger className="text-[#FDE68A] size-[16px]" />
                        </a>
                        <Tooltip
                          id="my-tooltip"
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
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="The amount of money received  if there is a covered issue in the warranty period for an account of total value less than 100 TND "
                          data-tooltip-place="top"
                        >
                          <CgDanger className="text-[#FDE68A] size-[16px]" />
                        </a>
                        <Tooltip
                          id="my-tooltip"
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
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="The amount of money received  if there is a covered issue in the warranty period for an account of total value higher than 100 TND   "
                          data-tooltip-place="top"
                        >
                          <CgDanger className="text-[#FDE68A] size-[16px]" />
                        </a>
                        <Tooltip
                          id="my-tooltip"
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

      {/* Seller Perks & Rewards Section */}
      <motion.section
        className="py-10 xl:mx-[200px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        {/* ... (apply the same motion pattern to all elements in this section) */}
      </motion.section>

      {/* Seller Rank Requirements & Fees Section */}
      <motion.section
        className="py-10 xl:mx-[200px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        {/* ... (keep your existing animated structure for this section) */}
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-10 xl:mx-[200px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        {/* ... (keep your existing animated structure for this section) */}
      </motion.section>
    </>
  );
}

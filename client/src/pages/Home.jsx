import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const sellers = [
    {
      icon: "src/assets/GoldSeller.png",
      title: "Gold Seller",
      benefits: [
        "10% reduced commission",
        "Verified Goldseller badge",
        "Priority support",
      ],
      forwho: "For new sellers",
      background:
        "linear-gradient(180deg, rgba(173, 132, 19, 0.45) 0%, rgba(255, 189, 7, 0.68) 13%, rgba(213, 158, 9, 0.68) 19%, rgba(157, 118, 11, 0.8) 32%, rgba(129, 97, 7, 0.6) 100%)",
    },
    {
      icon: "src/assets/DiamondSeller.png",
      title: "Diamond Seller",
      benefits: [
        "7% reduced commission",
        "Fast payout",
        "Priority listing",
        "24/7 support",
      ],
      forwho: "50+ successful sales",
      background:
        "linear-gradient(180deg, rgba(124, 17, 227, 1) 8%, rgba(182, 113, 248, 0.9) 17%, rgba(181, 104, 255, 0.6) 29%, rgba(111, 21, 196, 0.7) 50%, rgba(124, 16, 227, 0.4) 100%)",
    },
    {
      icon: "src/assets/EliteSeller.png",
      title: "Elite Seller",
      benefits: [
        "10% reduced commission",
        "Fastest payout and review time",
        "Premium listing",
        "Dedicated manager",
        "Exclusive benefits",
      ],
      forwho: "200+ successful sales",
      background:
        "linear-gradient(180deg, rgba(103, 118, 6, 0.99) 0%, rgba(223, 255, 14, 0.99) 14%, rgba(217, 250, 4, 0.99) 20%, rgba(128, 147, 5, 0.99) 37%, rgba(131, 151, 0, 0.6) 96%)",
    },
  ];
  const paymentMethods = [
    {
      icon: "src/assets/credit-card.png",
      title: "Bank Transfer",
      banks: "STB, BIAT, ATB, ABC",
      benefits: [
        "Direct transaction with instant confirmation",
        "Pay using any local bank or postal method",
      ],
    },
    {
      icon: "src/assets/successful.png", // You might want different icons
      title: "Mobile Payment",
      banks: "MyT Money, Orange Money, Ooredoo Cash",
      benefits: ["Instant mobile wallet transfers", "24/7 availability"],
    },
    {
      icon: "src/assets/secure-payment.png",
      title: "Cash Payment",
      banks: "In-person transactions",
      benefits: [
        "Pay when receiving account details",
        "No bank account needed",
      ],
    },
  ];
  const Infos = [
    {
      icon: "src/assets/info1.png",
      title: "Bank Transfer",
      description:
        "Your money is protected until you receive and verify your account. Safe transactions guaranteed.",
    },
    {
      icon: "src/assets/info2.png", // You might want different icons
      title: "Mobile Payment",
      description:
        "Most sellers are verified Tunisian gamers with established reputation and history.",
    },
    {
      icon: "src/assets/info3.png",
      title: "Cash Payment",
      description:
        "Get access to your new account immediately after payment confirmation.",
    },
  ];
  // Animation variants
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

  return (
    <>
      <section>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="space-y-6"
        >
          <div className="h-[500px] bg-no-repeat bg-[url(assets/homepage.png)] bg-right ml-[150px] py-[75px]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-1 bg-white/30 rounded-full px-3 py-1 w-fit"
              >
                <img src="src/assets/star.png" alt="" className="h-4 w-4" />
                <div className="text-sm">Tunisia's #1 Marketplace</div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="text-[40px] font-bold"
              >
                Buy and Sell Game Accounts in <br /> TND- Fast and Safe !
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="text-[20px] text-[#D1D5DB]"
              >
                Join Verified Sellers and Climb The Ranks Today
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center py-4 gap-4"
              >
                <div className="rounded-full py-3 px-6 bg-[linear-gradient(to_right,#7E22DB_0%,#095ADF_100%)]">
                  Browse Accounts
                </div>
                <div className="rounded-full py-3 px-6 bg-[#9C8767]">
                  Become a Seller
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-6"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="text-sm">100% Tunisian</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="text-sm">Secure Payment</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="text-sm">Buyer Protection</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col justify-center items-center gap-1  py-10 bg-white/5"
      >
        <motion.div variants={itemVariants} className="font-bold text-[25px]">
          Secure Local Payment
        </motion.div>

        <motion.div variants={itemVariants} className="text-[15px]">
          Instant Transactions in Tunisian Dinar!
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex p-5 gap-10 flex-wrap justify-center"
        >
          {paymentMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className=" bg-white/8 rounded-lg p-4 max-w-[300px] hover:bg-white/15 transition-all"
            >
              <div className="flex gap-4 pb-3">
                <img src={method.icon} alt="" className="w-8 h-8" />
                <div className="">
                  <div className="font-bold text-[13px]">{method.title}</div>
                  <div className="text-[11px] text-gray-400">
                    {method.banks}
                  </div>
                </div>
              </div>

              {method.benefits.map((benefit, i) => (
                <div key={i} className="flex gap-1 items-start py-1">
                  <img
                    src="src/assets/tick.png"
                    alt=""
                    className="w-4 h-4 mt-0.5"
                  />
                  <div className="text-[12px]">{benefit}</div>
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col justify-center items-center gap-1  py-10 "
      >
        <motion.div variants={itemVariants} className="font-bold text-[25px]">
          Why Choose Comptouya?
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex p-5 gap-10 flex-wrap justify-center"
        >
          {Infos.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className=" bg-white/8 rounded-lg p-4 max-w-[300px] hover:bg-white/15 transition-all"
            >
              <div className="flex flex-col gap-2 pb-3">
                <img src={method.icon} alt="" className="w-10 h-10" />

                <div className="font-bold text-[13px]">{method.title}</div>
                <div className="text-[11px] text-gray-400">
                  {method.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col justify-center items-center gap-1 py-10 bg-white/5"
      >
        <motion.div variants={itemVariants} className="font-bold text-[25px]">
          Regular Sellers
        </motion.div>

        <motion.div variants={itemVariants} className="text-[15px]">
          Join Tunisia’s Trusted Seller Network
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex p-5 gap-10 flex-wrap justify-center"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="rounded-lg p-6 max-w-[300px] transition-all shadow-lg bg-white/5"
          >
            <div className="flex flex-col gap-4 text-white">
              <div className="flex flex-col items-center">
                <img
                  src="src/assets/RegularSeller.png"
                  alt="Regular Seller"
                  className="w-20 h-20 mb-3"
                />
                <div className="font-bold text-lg">Regular Seller</div>
              </div>

              <div className="space-y-2">
                <div className="flex gap-2 items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="text-sm">10% reduced commission</div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="text-sm">Verified seller badge</div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="text-sm">Priority support</div>
                </div>
              </div>

              <div className="text-xs text-white/80 mt-2">For new sellers</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="font-bold text-[25px]">
          Verified Seller Program
        </motion.div>

        <motion.div variants={itemVariants} className="text-[15px]">
          Upgrade to A Verified seller and Unlock Premium Benefits!
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex p-5 gap-10 flex-wrap justify-center"
        >
          {sellers.map((seller, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="rounded-lg p-6 w-[300px] min-h-[420px] flex flex-col transition-all shadow-lg relative"
              style={{ background: seller.background }}
            >
              <div className="flex flex-col gap-4 text-white h-full">
                <div className="flex flex-col items-center">
                  <img
                    src={seller.icon}
                    alt={seller.title}
                    className="mb-3 object-contain"
                  />
                  <div className="font-bold text-lg">{seller.title}</div>
                </div>

                <div className="space-y-2">
                  {seller.benefits.map((benefit, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <img
                        src="src/assets/sellertick.png"
                        alt=""
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                      />
                      <div className="text-sm">{benefit}</div>
                    </div>
                  ))}
                </div>

                <div className="text-xs text-white/80 mt-2">
                  {seller.forwho}
                </div>

                {/* See More Button - positioned at bottom of card */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto w-full py-2 px-4 rounded-md bg-white/20 backdrop-blur-sm text-sm font-medium border border-white/30 hover:bg-white/30 transition-colors"
                >
                  See More Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}

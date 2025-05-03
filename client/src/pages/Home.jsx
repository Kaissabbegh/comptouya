import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Home() {
  const sellers = [
    {
      icon: "src/assets/GoldSeller.png",
      title: "Gold Seller",
      benefits: [
        "2% reduced total commission",
        "Verified Goldseller badge",
        "Priority support",
      ],
      forwho: "40+ successful sales to unique buyers",
      background:
        "linear-gradient(180deg, rgba(173, 132, 19, 0.45) 0%, rgba(255, 189, 7, 0.68) 13%, rgba(213, 158, 9, 0.68) 19%, rgba(157, 118, 11, 0.8) 32%, rgba(129, 97, 7, 0.6) 100%)",
    },
    {
      icon: "src/assets/DiamondSeller.png",
      title: "Diamond Seller",
      benefits: [
        "4.5% reduced total commission",
        "Fast payout",
        "Priority listing",
        "24/7 support",
      ],
      forwho: "100+ successful sales to unique buyers",
      background:
        "linear-gradient(180deg, rgba(124, 17, 227, 1) 8%, rgba(182, 113, 248, 0.9) 17%, rgba(181, 104, 255, 0.6) 29%, rgba(111, 21, 196, 0.7) 50%, rgba(124, 16, 227, 0.4) 100%)",
    },
    {
      icon: "src/assets/EliteSeller.png",
      title: "Elite Seller",
      benefits: [
        "6% reduced commission",
        "Fastest payout and review time",
        "Premium listing",
        "Dedicated manager",
        "Exclusive benefits",
      ],
      forwho: "180+ successful sales to unique buyers ",
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
      icon: "src/assets/successful.png",
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
      icon: "src/assets/info2.png",
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
  const feedback = [
    {
      client: "Ahmed D.",
      text: "I bought a Diamond account in 10 minutes, Thanks Comptouya! The process was simple and secure.",
      status: "Verified Buyer",
      rate: 5,
    },
    {
      client: "Amira B.",
      text: "Best platform in Tunisia for selling LoL accounts. Quick payment and responsive support.",
      status: "Elite Seller",
      rate: 5,
    },
    {
      client: "Yassine K.",
      text: "Prices in TND and D17 payment is super convenient. Highly recommend!",
      status: "Verified Buyer",
      rate: 4,
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
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="space-y-6"
        >
          <div className="h-auto xl:h-[500px] bg-no-repeat xl:bg-[url(assets/homepage.png)] bg-right  xl:py-[75px] xl:ml-[150px] flex items-center justify-center xl:justify-start">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-6 max-w-6xl"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-1 bg-white/30 rounded-full px-3 py-2 mt-10 xl:mt-0 w-fit"
              >
                <img src="src/assets/star.png" alt="" className="h-4 w-4" />
                <div className="text-sm ">Tunisia's #1 Marketplace</div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="text-3xl md:text-[40px] font-bold text-center xl:text-left md:w-[400px]"
              >
                Buy and Sell Game Accounts in TND- Fast and Safe !
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="text-base md:text-[20px] text-[#D1D5DB]"
              >
                Join Verified Sellers and Climb The Ranks Today
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 sm:gap-6"
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
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center gap-4 mb-5"
              >
                <button className="rounded-full py-3 px-6 bg-[linear-gradient(to_right,#7E22DB_0%,#095ADF_100%)] w-full sm:w-auto text-center">
                  Browse Accounts
                </button>
                <button className="rounded-full py-3 px-6 bg-[#9C8767] w-full sm:w-auto text-center">
                  Become a Seller
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Payment Methods Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col justify-center items-center gap-1 py-10 bg-white/5 px-4 sm:px-6"
      >
        <motion.div
          variants={itemVariants}
          className="font-bold text-2xl md:text-[25px] text-center"
        >
          Secure Local Payment
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-sm md:text-[15px] text-center"
        >
          Instant Transactions in Tunisian Dinar!
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex flex-col md:flex-row p-5 gap-6 flex-wrap justify-center max-w-6xl mx-auto"
        >
          {paymentMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white/8 rounded-lg p-4 w-full sm:w-[300px] hover:bg-white/15 transition-all"
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

      {/* Why Choose Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col justify-center items-center gap-1 py-10 px-4 sm:px-6"
      >
        <motion.div
          variants={itemVariants}
          className="font-bold text-2xl md:text-[25px] text-center"
        >
          Why Choose Comptouya?
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex flex-col md:flex-row p-5 gap-6 flex-wrap justify-center max-w-6xl mx-auto"
        >
          {Infos.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white/8 rounded-lg p-4 w-full sm:w-[300px] hover:bg-white/15 transition-all"
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

      {/* Sellers Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col justify-center items-center gap-1 py-10 bg-white/5 px-4 sm:px-6"
      >
        <motion.div
          variants={itemVariants}
          className="font-bold text-2xl md:text-[25px] text-center"
        >
          Regular Sellers
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-sm md:text-[15px] text-center"
        >
          Join Tunisia's Trusted Seller Network
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex p-5 gap-6 flex-wrap justify-center max-w-6xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="rounded-lg p-6 w-full sm:w-[300px] transition-all shadow-lg bg-white/5"
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

        <motion.div
          variants={itemVariants}
          className="font-bold text-2xl md:text-[25px] text-center mt-10"
        >
          Verified Seller Program
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-sm md:text-[15px] text-center"
        >
          Upgrade to A Verified seller and Unlock Premium Benefits!
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex flex-col md:flex-row p-5 gap-6 flex-wrap justify-center max-w-6xl mx-auto"
        >
          {sellers.map((seller, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="rounded-lg p-6 w-full sm:w-[300px] min-h-[420px] flex flex-col transition-all shadow-lg relative"
              style={{ background: seller.background }}
            >
              <div className="flex flex-col gap-4 text-white h-full">
                <div className="flex flex-col items-center">
                  <img
                    src={seller.icon}
                    alt={seller.title}
                    className="mb-3 object-contain h-20"
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

      {/* Selling Cards Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className=""
      >
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-5 bg-white/5  mx-auto">
          {/* First Card - Start Selling */}
          <motion.div
            variants={itemVariants}
            className="p-5 bg-white/5 rounded-xl m-5 flex flex-col"
          >
            <motion.div
              variants={itemVariants}
              className="font-bold text-xl md:text-[20px] pb-5"
            >
              Start Selling in 5 Minutes
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 pb-3"
            >
              <img src="src/assets/Frame.png" alt="" />
              <div className="">
                <div className="text-[14px]">0% fees for new sellers</div>
                <div className="text-[11px] text-[#9CA3AF]">
                  For the first week
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 pb-3"
            >
              <img src="src/assets/Frame.png" alt="" />
              <div className="">
                <div className="text-[14px]">Fast TND payment</div>
                <div className="text-[11px] text-[#9CA3AF]">
                  Directly to your bank account or d17 wallet
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 pb-5"
            >
              <img src="src/assets/Frame.png" alt="" />
              <div className="">
                <div className="text-[14px]">24/7 dedicated support</div>
                <div className="text-[11px] text-[#9CA3AF]">
                  In English and Arabic
                </div>
              </div>
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl bg-[#9C8767] xl:w-[400px] w-full h-[50px] mt-auto"
            >
              Start Selling Now
            </motion.button>
          </motion.div>

          {/* Second Card - Trusted Seller */}
          <motion.div
            variants={itemVariants}
            className="p-5 bg-white/5 rounded-xl m-5 flex flex-col"
          >
            <motion.div
              variants={itemVariants}
              className="font-bold text-xl md:text-[20px] pb-5"
            >
              Trusted Seller Program
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/5 px-3 pt-3 rounded-xl mb-5"
            >
              <div className="flex justify-between">
                <div className="">Elite Progression</div>
                <div className="">150/190 sales</div>
              </div>
              <div className="w-full p-4">
                <div className="w-full bg-white/10 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 5, delay: 0.5 }}
                    className="h-2.5 rounded-full"
                    style={{
                      background: "linear-gradient(to right, #CA8A04, #EAB308)",
                    }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 pb-3"
            >
              <img src="src/assets/luxury.png" alt="" />
              <div className="text-[14px]">Your Customers Pay 7% Less !</div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 pb-3"
            >
              <img src="src/assets/luxury.png" alt="" />
              <div className="text-[14px]">
                You get Fastest payout and review time
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 pb-3"
            >
              <img src="src/assets/luxury.png" alt="" />
              <div className="text-[14px]">Exclusive Elite Badge</div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 pb-3"
            >
              <img src="src/assets/luxury.png" alt="" />
              <div className="text-[14px]">Custom made Gift Upon approval</div>
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl bg-[#2A2B3C] xl:w-[400px] w-full h-[50px] mt-auto"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col justify-center items-center gap-1 py-10 px-4 sm:px-6"
      >
        <motion.div
          variants={itemVariants}
          className="font-bold text-2xl md:text-[25px] text-center"
        >
          What Our Customers Say
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="text-sm text-[#9CA3AF] text-center"
        >
          Discover experiences from our community
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex flex-col md:flex-row p-5 gap-6 flex-wrap justify-center max-w-6xl mx-auto"
        >
          {feedback.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white/8 rounded-lg p-4 w-full sm:w-[300px] hover:bg-white/15 transition-all"
            >
              <div className="flex flex-col gap-2 pb-3">
                <img src="src/assets/quote.png" alt="" className="w-10 h-10" />

                <div className="text-[13px] py-5 text-[#D1D5DB]">
                  {method.text}
                </div>
                <div className="flex justify-between items-center">
                  <div className="">
                    <div className="">{method.client}</div>
                    <div className="text-[#9CA3AF] text-[11px]">
                      {method.status}
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < method.rate
                            ? "text-amber-400 fill-amber-400"
                            : "text-white/30"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}

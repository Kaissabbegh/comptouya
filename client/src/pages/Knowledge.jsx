import React from "react";

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
  return (
    <>
      <section className="py-10">
        <div className="text-center font-bold text-[40px] mt-10">
          Welcome to Comptouya Knowledge Base
        </div>
        <div className="text-center text-[20px] text-white/80">
          Your complete guide for safely buying and selling League of Legends
          accounts in Tunisia
        </div>
        <div className="flex justify-center gap-[150px] my-10">
          <div className="flex flex-col items-center max-w-[200px] gap-2 ">
            <img
              src="src/assets/Frame1.png"
              alt="frame1"
              className="rounded-full p-3 bg-white/5"
            />
            <div className="text-center font-semibold text-[17px]">
              Secure Transactions
            </div>
            <div className="text-center text-[13px]">
              Every transaction is protected by our escrow system
            </div>
          </div>

          <div className="flex flex-col items-center max-w-[200px] gap-2 ">
            <img
              src="src/assets/Frame2.png"
              alt="frame1"
              className="rounded-full p-3 bg-white/5"
            />
            <div className="text-center font-semibold text-[17px]">
              Verified Accounts
            </div>
            <div className="text-center text-[13px]">
              All accounts are verified for authenticity and ownership
            </div>
          </div>

          <div className="flex flex-col items-center max-w-[200px] gap-2 ">
            <img
              src="src/assets/Frame1.png"
              alt="frame1"
              className="rounded-full p-3 bg-white/5"
            />
            <div className="text-center font-semibold text-[17px]">
              8-Day Warranty
            </div>
            <div className="text-center text-[13px]">
              All purchases come with our exclusive 8-day protection
            </div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="font-bold text-[48px] text-center">Buyer's Guide</div>
        <div className="text-white/80 text-[20px] text-center">
          Follow these simple steps to safely purchase your ideal League of
          Legends account
        </div>

        <div className="flex gap-5 justify-center my-10">
          {guidesB.map((guide, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>
        <div className=" flex items-center justify-center">
          <button className="bg-[#FDE68A] text-black text-center rounded-3xl font-semibold px-10 py-3">
            Start shopping
          </button>
        </div>
      </section>
      <section className="py-10 bg-white/10">
        <div className="font-bold text-[48px] text-center">Seller Guide</div>
        <div className="text-white/80 text-[20px] text-center">
          Want to sell your League of Legends account? Follow our verification
          process to get started
        </div>

        <div className="flex gap-5 justify-center my-10">
          {guidesS.map((guide, index) => (
            <div
              key={index}
              className="bg-white/10 p-3 max-w-[250px] min-h-[180px] rounded-xl"
            >
              <div className="flex flex-col items-center gap-2">
                <img src={guide.icon} alt="guide" className="w-8 h-8" />
                <div className="text-[17px] font-semibold">{guide.title}</div>
                <div className="text-[15px]">{guide.description}</div>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex items-center justify-center">
          <button className="bg-[linear-gradient(to_right,#7E22DB_0%,#095ADF_100%)] text-center rounded-3xl font-semibold px-10 py-3">
            Apply Now
          </button>
        </div>
      </section>
      <section className="py-10 xl:mx-[200px]">
        <div className="font-bold text-[48px] text-center">
          Seller Ranks & Benefits
        </div>
        <div className="text-white/80 text-[20px] text-center">
          Unlock exclusive benefits and rewards as you climb through our seller
          ranks
        </div>
        <div className="flex pt-10 gap-1 items-center">
          <img src="src/assets/shield.png" alt="shield" className="w-5 h-5"/>
          <div className="font-semibold">Warranty Policies</div>
        </div>
        <div className="pb-2 text-[12px]">Disclaimer: This warranty does NOT cover issues caused by buyer actions.</div>
        <div className="py-4">
          <div className="overflow-x-auto rounded-lg border-b ">
            <table className="min-w-full divide-y">
              <thead className="bg-[#3B185F]">
                <tr className="">
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Seller Rank
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Warranty Period
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Covered Issue
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Replacement amount (Value {"<"}100 TND)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Replacement amount (Value {">"}100 TND)
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
        </div>
      </section>
    </>
  );
}

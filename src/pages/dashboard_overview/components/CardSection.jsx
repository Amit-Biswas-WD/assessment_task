import { FaRobot } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { HiSwitchHorizontal } from "react-icons/hi";
import { BsCalendarCheck } from "react-icons/bs";
import { AiOutlineCloseCircle, AiOutlineClockCircle } from "react-icons/ai";

const cardData = [
  {
    id: 1,
    label: "Total Calls Today",
    value: 127,
    growth: "+12%",
    icon: <IoCallOutline className="w-6 h-6 text-white" />,
    iconBg: "bg-gradient-to-br from-[#2B7FFF] to-[#00B8DB]",
  },
  {
    id: 2,
    label: "AI-Handled Calls",
    value: 98,
    growth: "+77%",
    icon: <FaRobot className="w-6 h-6 text-white" />,
    iconBg: "bg-gradient-to-br from-[#AD46FF] to-[#F6339A]",
  },
  {
    id: 3,
    label: "Warm Transfer",
    value: 23,
    growth: "+18%",
    icon: <HiSwitchHorizontal className="w-6 h-6 text-white" />,
    iconBg: "bg-gradient-to-br from-[#FF6900] to-[#FB2C36]",
  },
  {
    id: 4,
    label: "Appointments Booked",
    value: 34,
    growth: "+8%",
    icon: <BsCalendarCheck className="w-6 h-6 text-white" />,
    iconBg: "bg-gradient-to-br from-[#00C950] to-[#00BC7D]",
  },
  {
    id: 5,
    label: "Missed/Failed Calls",
    value: 6,
    growth: "-3%",
    icon: <AiOutlineCloseCircle className="w-6 h-6 text-white" />,
    iconBg: "bg-gradient-to-br from-[#FB2C36] to-[#FF2056]",
  },
  {
    id: 6,
    label: "Avg Call Duration",
    value: "3:42",
    growth: "+15%",
    icon: <AiOutlineClockCircle className="w-6 h-6 text-white" />,
    iconBg: "bg-gradient-to-br from-[#615FFF] to-[#2B7FFF]",
  },
];

const CardSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {cardData.map((c) => (
        <div
          key={c.id}
          className={`relative p-6 rounded-2xl shadow-md bg-[#101A3B] border border-gray-800`}
        >
          <div className="flex items-start justify-between">
            <div className="text-sm font-normal ">
              <div className="text-[#90A1B9]">{c.label}</div>
              <div className="my-2.5 text-3xl font-semibold">{c.value}</div>
              <div>
                <span
                  className={
                    c.growth.startsWith("+")
                      ? "text-[#05DF72]"
                      : "text-[#FD244A]"
                  }
                >
                  {c.growth}
                </span>
              </div>
            </div>

            <div
              className={`flex items-center justify-center w-12 h-12 rounded-lg ${c.iconBg}`}
            >
              <div className="text-white">{c.icon}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;

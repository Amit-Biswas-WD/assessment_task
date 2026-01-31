import { BsExclamationCircle } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";
import { LuCalendarDays } from "react-icons/lu";

const cardData = [
  {
    id: 1,
    label: "Total Booked",
    value: 34,
    growth: "+8 this week",
    icon: LuCalendarDays,
    iconColor: "#51A2FF",
  },
  {
    id: 2,
    label: "AI Booked",
    value: 28,
    growth: "82% of total",
    icon: FiCheckCircle,
    iconColor: "#05DF72",
  },
  {
    id: 3,
    label: "Pending",
    value: 3,
    growth: "Awaiting confirmation",
    icon: BsExclamationCircle,
    iconColor: "#FDC700",
  },
];

const CardSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {cardData.map((c) => {
        const IconComponent = c.icon;
        return (
          <div
            key={c.id}
            className="relative p-6 rounded-2xl shadow-md bg-[#101A3B] border border-gray-800"
          >
            {/* Text Section */}
            <div className="flex-1 text-sm font-normal">
              <div className="text-[#90A1B9] flex items-center gap-3">
                {/* Icon with color and size */}
                <IconComponent color={c.iconColor} size={24} />
                {c.label}
              </div>
              <div className="my-2.5 text-2xl font-normal">{c.value}</div>
              <div
                className={
                  c.growth.startsWith("+") ? "text-[#05DF72]" : "text-[#90A1B9]"
                }
              >
                {c.growth}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardSection;

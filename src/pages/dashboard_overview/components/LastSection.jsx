// Recent Activity Data
const recentActivities = [
  {
    id: 1,
    text: "AI booked appointment for iPhone 13 screen repair",
    time: "2 min ago",
    color: "bg-green-500",
  },
  {
    id: 2,
    text: "Warm transfer to technician - Software issue",
    time: "5 min ago",
    color: "bg-orange-500",
  },
  {
    id: 3,
    text: "Quote provided for iPad battery replacement",
    time: "8 min ago",
    color: "bg-green-500",
  },
  {
    id: 4,
    text: "Call dropped after 12 seconds",
    time: "15 min ago",
    color: "bg-red-500",
  },
];

// Top Repair Requests Data
const repairRequests = [
  {
    id: 1,
    name: "Screen Repair",
    requests: 156,
    percentage: 85,
  },
  {
    id: 2,
    name: "Battery Replacement",
    requests: 89,
    percentage: 48,
  },
  {
    id: 3,
    name: "Back Glass Repair",
    requests: 67,
    percentage: 36,
  },
  {
    id: 4,
    name: "Software Issues",
    requests: 45,
    percentage: 25,
  },
];

const LastSection = () => {
  return (
    <div
      className="xl:mt-10 lg:mt-8 mt-6"
      //   style={{
      //     background:
      //       "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)",
      //   }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-8 lg:gap-7 md:gap-6 gap-5">
        {/* Recent Activity Section */}
        <div className="p-8 bg-[#121C3E] rounded-2xl">
          <h2 className="text-white text-xl font-normal mb-6">
            Recent Activity
          </h2>

          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 bg-[#17223D] p-4 rounded-xl"
              >
                <div
                  className={`${activity.color} w-2 h-2 rounded-full mt-1.5 flex-shrink-0`}
                ></div>

                <div className="flex-1 font-normal">
                  <p className="text-sm font-normal leading-relaxed">
                    {activity.text}
                  </p>
                  <p className="text-[#7A8BA4] text-xs mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Repair Requests Section */}
        <div className="p-8 bg-[#121C3E] rounded-2xl">
          <h2 className="text-white text-xl font-normal mb-6">
            Top Repair Requests
          </h2>

          <div className="space-y-5">
            {repairRequests.map((request) => (
              <div key={request.id} className="space-y-3">
                <div className="flex items-center justify-between text-sm font-normal">
                  <span>{request.name}</span>
                  <span>{request.requests} requests</span>
                </div>

                <div className="w-full bg-[#1D293D] rounded-full h-2 overflow-hidden">
                  <div
                    className="h-2 rounded-full transition-all duration-500 
               bg-gradient-to-r from-[#2B7FFF] to-[#00B8DB]"
                    style={{ width: `${request.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastSection;

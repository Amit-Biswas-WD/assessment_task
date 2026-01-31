import React, { useState } from "react";
import {
  FiPhone,
  FiClock,
  FiCheckCircle,
  FiPlayCircle,
  FiFileText,
} from "react-icons/fi";

const calls = [
  {
    id: 1,
    phone: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "Quote Provided",
    type: "AI Resolved",
    typeColor: "green",
    issue: "Screen",
    outcome: "Quote provided",
    callType: "AI Resolved",
    transcript: {
      assistant1:
        "Thank you for calling UBreakIFixIt! How can I help you today?",
      customer1:
        "Hi, my iPhone 13 screen is cracked. How much would it cost to repair?",
      assistant2:
        "I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?",
      customer2: "Yes, please! When are you available?",
      assistant3:
        "Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?",
    },
  },
  {
    id: 2,
    phone: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "Escalated to technician",
    type: "Warm Transfer",
    typeColor: "orange",
    issue: "Software",
    outcome: "Escalated to technician",
    callType: "Warm Transfer",
  },
  {
    id: 3,
    phone: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "Appointment Booked",
    type: "Appointment",
    typeColor: "blue",
    issue: "Battery",
    outcome: "Appointment Booked",
    callType: "Appointment",
  },
  {
    id: 4,
    phone: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "0:20",
    status: "Call Dropped",
    type: "Dropped",
    typeColor: "red",
    issue: "Unknown",
    outcome: "Call Dropped",
    callType: "Dropped",
  },
  {
    id: 5,
    phone: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "Quote Provided",
    type: "AI Resolved",
    typeColor: "green",
    issue: "Screen",
    outcome: "Quote provided",
    callType: "AI Resolved",
    transcript: {
      assistant1:
        "Thank you for calling UBreakIFixIt! How can I help you today?",
      customer1:
        "Hi, my iPhone 13 screen is cracked. How much would it cost to repair?",
      assistant2:
        "I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?",
      customer2: "Yes, please! When are you available?",
      assistant3:
        "Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?",
    },
  },
];

const SecondSection = () => {
  const [selectedCall, setSelectedCall] = useState(calls[0]);

  const getStatusColor = (type) => {
    const colors = {
      green: "bg-emerald-500/20 text-[#05DF72] border-emerald-500/30",
      orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      red: "bg-red-500/20 text-red-400 border-red-500/30",
    };
    return colors[type] || colors.green;
  };

  const getIssueColor = (issue) => {
    const colors = {
      Screen: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      Software: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      Battery: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
      Unknown: "bg-gray-500/20 text-gray-300 border-gray-500/30",
    };
    return colors[issue] || colors.Screen;
  };

  return (
    <div className="lg:flex xl:gap-8 lg:gap-7 md:gap-6 gap-5">
      {/* Call List Panel */}
      <div className="lg:w-1/2 w-full border-r border-slate-700/50 bg-[#111C3D]">
        <div className="p-6 border-b border-slate-700/50">
          <h2 className="text-xl font-normal">Call List</h2>
        </div>

        <div className="divide-y divide-slate-700/30">
          {calls.map((call) => (
            <div
              key={call.id}
              onClick={() => setSelectedCall(call)}
              className={`p-4 cursor-pointer transition-all hover:bg-slate-800/40 ${
                selectedCall?.id === call.id
                  ? "bg-slate-800/60 border-l-2 border-blue-500"
                  : ""
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <FiPhone className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm">{call.phone}</span>
                    <span
                      className={`px-2.5 py-1.5 rounded-xl text-xs font-normal border ${getStatusColor(call.typeColor)}`}
                    >
                      {call.type}
                    </span>
                  </div>

                  <div className="text-xs text-[#90A1B9] mb-2">
                    {call.date} • {call.time}
                  </div>

                  <div className="flex items-center gap-3 text-xs text-[#90A1B9]">
                    <div className="flex items-center gap-1">
                      <FiClock className="w-3.5 h-3.5" />
                      <span>{call.duration}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <FiCheckCircle className="w-3.5 h-3.5" />
                      <span>{call.status}</span>
                    </div>

                    <span
                      className={`px-2 py-0.5 rounded border text-xs ${getIssueColor(call.issue)}`}
                    >
                      {call.issue}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call Details Panel */}
      <div className="lg:w-1/2 w-full flex-1 bg-[#111C3D]">
        <div className="p-6 border-b border-slate-700/50">
          <h2 className="text-xl font-normal">Call Details</h2>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <div className="text-sm text-[#90A1B9] mb-1">Phone Number</div>
              <div className="text-base font-normal">{selectedCall.phone}</div>
            </div>

            <div>
              <div className="text-sm text-[#90A1B9] mb-1">Duration</div>
              <div className="text-base font-normal">4:32</div>
            </div>

            <div>
              <div className="text-sm text-[#90A1B9] mb-1">Date & Time</div>
              <div className="text-base font-normal">
                {selectedCall.date} {selectedCall.time}
              </div>
            </div>

            <div>
              <div className="text-sm text-[#90A1B9] mb-1">Issue Type</div>
              <div className="text-base font-normal">{selectedCall.issue}</div>
            </div>

            <div className="col-span-2">
              <div className="text-sm text-[#90A1B9] mb-2">Call Type</div>
              <span
                className={`inline-block px-3 py-1.5 rounded-xl text-sm font-medium border ${getStatusColor(selectedCall.typeColor)}`}
              >
                {selectedCall.callType}
              </span>
            </div>

            <div className="col-span-2">
              <div className="text-sm text-[#90A1B9] mb-1">Outcome</div>
              <div className="text-base font-normal">
                {selectedCall.outcome}
              </div>
            </div>
          </div>

          {/* Play Audio Recording Button */}
          <button className="w-full bg-gradient-to-r from-[#AD46FF33] to-[#F6339A33] border border-[#5E2C85] text-[#C27AFF] py-4 rounded-xl font-medium mb-6 flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-900/30">
            <FiPlayCircle className="w-5 h-5" />
            Play Audio Recording
          </button>

          {/* Conversation Transcript */}
          {selectedCall.transcript && (
            <div className="bg-slate-800/40 rounded-lg p-6 border border-slate-700/50">
              <div className="flex items-center gap-2 mb-4">
                <FiFileText className="w-5 h-5 text-blue-400" />
                <h3 className="text-base font-normal">
                  Conversation Transcript
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-[#05DF72] font-normal text-sm mb-1">
                    AI Assistant:
                  </div>
                  <div className="text-xs font-medium">
                    {selectedCall.transcript.assistant1}
                  </div>
                </div>

                <div>
                  <div className="text-blue-400 font-medium text-sm mb-1">
                    Customer:
                  </div>
                  <div className="text-xs font-medium">
                    {selectedCall.transcript.customer1}
                  </div>
                </div>

                <div>
                  <div className="text-[#05DF72] font-medium text-sm mb-1">
                    AI Assistant:
                  </div>
                  <div className="text-xs font-medium">
                    {selectedCall.transcript.assistant2}
                  </div>
                </div>

                <div>
                  <div className="text-blue-400 font-medium text-sm mb-1">
                    Customer:
                  </div>
                  <div className="text-xs font-medium">
                    {selectedCall.transcript.customer2}
                  </div>
                </div>

                <div>
                  <div className="text-[#05DF72] font-medium text-sm mb-1">
                    AI Assistant:
                  </div>
                  <div className="text-xs font-medium">
                    {selectedCall.transcript.assistant3}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

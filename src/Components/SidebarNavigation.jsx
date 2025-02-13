import React from "react";
import {
  MessageCircle,
  Search,
  Home,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Smile,
  Image,
} from "lucide-react";
function SidebarNavigation() {
  const clients = [
    {
      id: 1,
      name: "Saudi Aramco",
      message: "Can you confirm the status of our",
      time: "Today, 12:11pm",
      unread: 1,
    },
    {
      id: 2,
      name: "Saudi Aramco",
      message: "Can you confirm the status of our",
      time: "Today, 2:40pm",
      unread: 1,
    },
    {
      id: 3,
      name: "Bill Gates",
      message: "Can you confirm the status of our",
      time: "Yesterday, 12:31pm",
      unread: 5,
    },
    {
      id: 4,
      name: "Saudi Aramco",
      message: "Can you confirm the status of our",
      time: "Wednesday, 11:12am",
      read: true,
    },
    {
      id: 5,
      name: "Saudi Aramco",
      message: "Can you confirm the status of our",
      time: "Today, 9:52pm",
      read: true,
    },
    {
      id: 6,
      name: "Saudi Aramco",
      message: "Can you confirm the status of our",
      time: "Today, 12:11pm",
      unread: 1,
    },
    {
      id: 7,
      name: "Saudi Aramco",
      message: "Can you confirm the status of our",
      time: "Today, 2:40pm",
      unread: 1,
    },
    {
      id: 8,
      name: "Saudi Aramco",
      message: "Can you confirm the status of our",
      time: "Yesterday, 12:31pm",
      unread: 5,
    },
    {
      id: 9,
      name: "Saudi Aramco",
      message: "Can you confirm the status of our",
      time: "Wednesday, 11:12am",
      read: true,
    },
  ];

  // Sample chat messages
  const chatMessages = [
    { id: 1, text: "", time: "Today, 8:30pm", sent: false },
    { id: 2, text: "", time: "Today, 8:33pm", sent: true },
    { id: 3, text: "", time: "Today, 8:34pm", sent: true },
    { id: 4, text: "", time: "Today, 8:36pm", sent: false },
    { id: 5, text: "", time: "Today, 8:58pm", sent: true },
  ];

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 flex flex-col border-r">
        {/* Logo and navigation */}
        <div className="bg-blue-200 p-4 flex flex-col items-center h-full">
          <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center mb-12">
            <span className="text-white font-bold text-xl">D.</span>
          </div>

          <div className="mt-8 w-full">
            <button className="w-full p-3 hover:bg-blue-300 rounded flex justify-center">
              <Home color="#1E40AF" />
            </button>
            <button className="w-full p-3 bg-blue-300 rounded flex justify-center mt-2">
              <MessageCircle color="#1E40AF" />
            </button>
          </div>

          <div className="flex-grow"></div>
          <button className="w-full p-3 hover:bg-blue-300 rounded flex justify-center mb-4">
            <MoreVertical color="#1E40AF" />
          </button>
        </div>
      </div>

      {/* Client list */}
      <div className="w-64 flex flex-col border-r">
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 px-4 pl-10 rounded-full border text-sm"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>

          <h2 className="font-semibold text-lg mt-4 mb-2">Clients</h2>

          <div className="overflow-y-auto max-h-[calc(100vh-130px)]">
            {clients.map((client) => (
              <div key={client.id} className="flex items-center py-3 border-b">
                <div className="mr-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center overflow-hidden">
                    <img
                      src="/api/placeholder/40/40"
                      alt="Client avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-sm truncate">
                      {client.name}
                    </h3>
                    <span className="text-xs text-gray-500">{client.time}</span>
                  </div>
                  <p className="text-xs text-gray-500 truncate">
                    {client.message}
                  </p>
                </div>
                {client.unread ? (
                  <div className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {client.unread}
                  </div>
                ) : client.read ? (
                  <div className="ml-2 text-blue-500">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-grow flex flex-col">
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center overflow-hidden mr-3">
              <img
                src="/api/placeholder/40/40"
                alt="Saudi Aramco avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-semibold">Saudi Aramco</h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-blue-500">
              <Phone size={20} />
            </button>
            <button className="text-blue-500">
              <Video size={20} />
            </button>
            <button className="text-blue-500">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-grow p-4 overflow-y-auto">
          {chatMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sent ? "justify-end" : "justify-start"
              } mb-4`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  msg.sent ? "bg-blue-200 text-right" : "bg-gray-200"
                }`}
              >
                <p className="text-sm">
                  {msg.text ||
                    (msg.sent
                      ? "This is a sample sent message"
                      : "This is a sample received message")}
                </p>
                <span className="text-xs text-gray-500 block mt-1">
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Message input */}
        <div className="p-4 border-t flex items-center">
          <button className="text-gray-500 mr-2">
            <Paperclip size={20} />
          </button>
          <input
            type="text"
            placeholder="Type your message here..."
            className="flex-grow py-2 px-4 rounded-full border text-sm mr-2"
          />
          <button className="text-gray-500 mx-2">
            <Smile size={20} />
          </button>
          <button className="text-gray-500">
            <Image size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SidebarNavigation;

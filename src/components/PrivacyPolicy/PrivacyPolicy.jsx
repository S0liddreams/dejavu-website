"use client";
import React, { useState } from "react";

const PrivacyPolicy = () => {
  const [activePage, setActivePage] = useState("acceptance");

  const menuItems = [
    { id: "acceptance", label: "Acceptance of Terms" },
    { id: "Website", label: "Use of the Website" },
    { id: "property", label: "Intellectual Property" },
    { id: "content", label: "User Content" },
    { id: "limitation", label: "Limitation of Liability" },
    { id: "other", label: "Links to Other Websites" },
    { id: "modifications", label: "Modifications to Terms of Use" },
    { id: "termination", label: "Termination" },
    { id: "governing", label: "Governing Law" },
    { id: "Contact", label: "Contact Us" },
  ];

  const renderPageContent = () => {
    switch (activePage) {
      case "acceptance":
        return (
          <div className="pt-[40px] px-[20px] pb-[80px] text-[14px]  leading-[150%] flex flex-col lg:gap-[56px] gap-[8px] text-[#737373]">
            <div className=" ">
              <p className="pb-[12px]">
                We are committed to protecting your privacy and ensuring that
                your personal information is handled safely and responsibly.
                This Privacy Policy outlines how we collect, use, disclose, and
                safeguard your information when you visit our website or use our
                services.
              </p>
              <p className="">
                By accessing our website or engaging with our services, you
                consent to the practices described in this policy.
              </p>
            </div>

            {/* 1 */}
            <div >
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                1. Information We Collect
              </h1>
              <h2 className="text-[16px]  mb-2">
                We may collect the following types of personal information:
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Contact Information: Name, email address, phone number, and
                  physical address
                </li>
                <li>
                  Booking Details: Service preferences, scheduled dates,
                  locations
                </li>
                <li>
                  Payment Information: Billing details (collected securely via
                  third-party payment processors)
                </li>
                <li>
                  Technical Information: IP address, browser type, device
                  information, and cookies
                </li>
                <li>
                  Payment Information: Billing details (collected securely via
                  third-party payment processors)
                </li>
              </ul>
              <p className="mt-3">
                We only collect information that is necessary to provide you
                with our services and improve your experience.
              </p>
            </div>

            {/* 2 */}
            <div >
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                2. How We Use Your Information
              </h1>
              <h2 className="text-[16px]  mb-2">
                We use your personal information to:
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Schedule and deliver the services you request</li>
                <li>Process payments and send booking confirmations</li>
                <li>Respond to inquiries or customer support requests</li>
                <li>Improve our website functionality and service offerings</li>
                <li>
                  Communicate updates, promotions, or changes to services (with
                  your consent)
                </li>
              </ul>
              <p className="mt-3">
                We do not sell or rent your personal information to third
                parties.
              </p>
            </div>

            {/* 3 */}
            <div >
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                3. How We Share Your Information
              </h1>
              <h2 className="text-[16px]  mb-2">
                We may share your information with:
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Trusted third-party service providers who help us operate our
                  business (e.g., payment processors, email platforms)
                </li>
                <li>
                  Law enforcement or government authorities if required by law
                  or in response to legal requests
                </li>
                <li>
                  Partners or contractors assisting in the delivery of our
                  services (with confidentiality agreements in place)
                </li>
              </ul>
              <p className="mt-3">
                All third parties are required to respect the privacy and
                security of your data.
              </p>
            </div>

            {/* 4 */}
            <div >
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                4. Cookies and Tracking Technologies
              </h1>
              <p>
                We use cookies and similar technologies to enhance your browsing
                experience, analyze website traffic, and understand how users
                interact with our content. You can manage your cookie
                preferences through your browser settings.
              </p>
            </div>

            {/* 5 */}
            <div >
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                5. Data Security
              </h1>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal information from unauthorized access,
                disclosure, alteration, or destruction. While no method of
                transmission over the internet is 100% secure, we strive to use
                commercially acceptable means to protect your data.
              </p>
            </div>

            {/* 6 */}
            <div >
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                6. Children’s Privacy
              </h1>
              <p>
                Our services are not intended for individuals under the age of
                18. We do not knowingly collect or store personal information
                from children.
              </p>
            </div>

            {/* 7 */}
            <div >
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                7. Your Rights and Choices
              </h1>
              <h2 className="text-[16px] mb-2">
                Depending on your location, you may have the right to:
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Access or update your personal information</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Request a copy of the data we hold about you</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us using the
                information below.
              </p>
            </div>

            {/* 8 */}
            <div >
              <h1 className="lg:text-[24px] pb-[12px] text-[20px] text-[#171717] font-medium">
                8. Changes to This Policy
              </h1>
              <p>
                We may update this Privacy Policy from time to time. All updates
                will be posted on this page with the revised effective date.
                Continued use of our website and services constitutes your
                acceptance of the changes.
              </p>
            </div>

            {/* 9 */}
            <div >
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                11. Contact Us
              </h1>
              <p>
                If you have any questions about these Terms, please contact us
                at:{" "}
                <a
                  href="mailto:hello@dejavumoveinout.ca"
                  className="text-blue-600 underline"
                >
                  hello@dejavumoveinout.ca
                </a>
              </p>
            </div>
          </div>
        );

        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              User Profile
            </h1>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  JD
                </div>
                <div className="ml-6">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    John Doe
                  </h2>
                  <p className="text-gray-600">Senior Developer</p>
                  <p className="text-sm text-gray-500">john.doe@example.com</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Department
                  </label>
                  <p className="text-gray-900">Engineering</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <p className="text-gray-900">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        );

        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Documents</h1>
            <div className="space-y-4">
              {[
                {
                  name: "Project Proposal.pdf",
                  size: "2.4 MB",
                  date: "2 days ago",
                },
                {
                  name: "Meeting Notes.docx",
                  size: "156 KB",
                  date: "1 week ago",
                },
                {
                  name: "Budget Report.xlsx",
                  size: "892 KB",
                  date: "2 weeks ago",
                },
                {
                  name: "Design Assets.zip",
                  size: "15.2 MB",
                  date: "3 weeks ago",
                },
              ].map((doc, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center">
                    <FileText className="w-8 h-8 text-blue-500 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-800">{doc.name}</h3>
                      <p className="text-sm text-gray-500">
                        {doc.size} • {doc.date}
                      </p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Analytics Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Page Views
                </h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  12,847
                </div>
                <p className="text-sm text-green-600">↑ 23% from last month</p>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  User Engagement
                </h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  89.2%
                </div>
                <p className="text-sm text-green-600">↑ 5.3% from last month</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Performance Metrics
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Load Time</span>
                    <span className="text-sm text-gray-800">1.2s</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">
                      Conversion Rate
                    </span>
                    <span className="text-sm text-gray-800">3.4%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "68%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "messages":
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Messages</h1>
            <div className="space-y-4">
              {[
                {
                  sender: "Sarah Wilson",
                  subject: "Project Update",
                  time: "2 hours ago",
                  unread: true,
                },
                {
                  sender: "Mike Johnson",
                  subject: "Meeting Reschedule",
                  time: "5 hours ago",
                  unread: true,
                },
                {
                  sender: "Team Lead",
                  subject: "Weekly Report Due",
                  time: "1 day ago",
                  unread: false,
                },
                {
                  sender: "HR Department",
                  subject: "Policy Update",
                  time: "2 days ago",
                  unread: false,
                },
              ].map((message, index) => (
                <div
                  key={index}
                  className={`bg-white border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow ${
                    message.unread ? "border-l-4 border-l-blue-500" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                        {message.sender
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <h3
                          className={`font-medium ${
                            message.unread ? "text-gray-900" : "text-gray-700"
                          }`}
                        >
                          {message.sender}
                        </h3>
                        <p
                          className={`text-sm ${
                            message.unread ? "text-gray-800" : "text-gray-600"
                          }`}
                        >
                          {message.subject}
                        </p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">{message.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return <div className="p-8">Page not found</div>;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row  gap-6 lg:gap-[24px] lg:pt-[2px]  lg:pb-[64px] lg:px-[72px] xl:h-[1843px]">
      {/* Sidebar */}
      <div className="w-full lg:w-[320px] px-[20px] lg:px-0 bg-white h-fit lg:sticky lg:top-0 lg:self-start">
        <div className="p-2"></div>
        <nav className="mt-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center px-4 py-3 text-left transition-colors rounded-[100px] ${
                activePage === item.id
                  ? "bg-[#0550A1] text-white"
                  : "text-[#525252] hover:bg-[#E6EEF6] hover:text-gray-900"
              }`}
            >
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full lg:justify-between overflow-auto gap-[8px]">
        {renderPageContent()}
      </div>
    </div>
  );
};

export default PrivacyPolicy;

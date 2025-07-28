"use client";
import React, { useState } from "react";

const TermsOfUse = () => {
  const [activePage, setActivePage] = useState("acceptance");

  const menuItems = [
    { id: "acceptance", label: "Acceptance of Terms" },
    { id: "overview", label: "Services Overview" },
    { id: "bookings", label: "Bookings and Payments" },
    { id: "cancellations", label: "Cancellations and Rescheduling" },
    { id: "client", label: "Client Responsibilities" },
    { id: "liability", label: "Liability and Damages" },
    { id: "intellectual", label: "Intellectual Property" },
    { id: "privacy", label: "Privacy" },
    { id: "amendments", label: "Amendments" },
    { id: "Contact", label: "Contact Us" },
  ];

  const renderPageContent = () => {
    switch (activePage) {
      case "acceptance":
        return (
          <div className="pt-[40px] px-[20px] pb-[80px] text-[#737373] text-[14px] leading-[150%] flex flex-col lg:gap-[56px] gap-[8px]">
  <p className="">
    By accessing or using our website, services, or booking platform, you agree to be bound by the following terms and conditions (“Terms of Use”). Please read them carefully before using our services. If you do not agree to these terms, please do not use our site or services.
  </p>

  {/* 1 */}
  <div className="">
    <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
      1. Acceptance of Terms
    </h1>
    <p>
      By using this website or any Dejavu Move-In-Out service, you confirm that you are at least 18 years old and legally capable of entering into a binding contract. If you are using our services on behalf of an organization or another person, you agree that you have the authority to bind them to these terms.
    </p>
  </div>

  {/* 2 */}
  <div className="pb-[24px]">
    <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
      2. Services Overview
    </h1>
    <p>
      Dejavu Move-In-Out provides move-in concierge services, furniture assembly, move-out support, and related home setup services. All services are subject to availability, geographic coverage, and scope limitations as listed on our website or communicated during the booking process.
    </p>
  </div>

  {/* 3 */}
  <div c>
    <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
      3. Bookings and Payments
    </h1>
    <p>
      All service bookings must be made through our official website or approved communication channels. Payments are required to confirm bookings. We reserve the right to cancel or reschedule appointments due to availability or unforeseen circumstances. Customers will be notified promptly in such cases.
    </p>
  </div>

  {/* 4 */}
  <div >
    <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
      4. Cancellations and Rescheduling
    </h1>
    <p>
      Clients may cancel or reschedule a service up to 24 hours in advance without penalty. Late cancellations may be subject to a partial service charge. Full cancellation and refund policies are available on the FAQ page or upon request.
    </p>
  </div>

  {/* 5 */}
  <div>
    <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
      5. Client Responsibilities
    </h1>
    <h2 className="text-[16px]  mb-2">Clients are responsible for:</h2>
    <ul className="list-disc list-inside space-y-1">
      <li>Providing accurate booking information</li>
      <li>Ensuring safe and accessible work environments</li>
      <li>Notifying us of any building or logistical restrictions in advance</li>
    </ul>
    <p className="mt-3">
      Failure to do so may result in delays, additional charges, or cancellation of service.
    </p>
  </div>

  {/* 6 */}
  <div >
    <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
      6. Service Limitations
    </h1>
    <h2 className="text-[16px]  mb-2">Our team does not offer services that involve:</h2>
    <ul className="list-disc list-inside space-y-1">
      <li>Heavy lifting over safety-approved weight limits</li>
      <li>Hazardous material handling</li>
      <li>Complex electrical or plumbing installation</li>
    </ul>
    <p className="mt-3">
      Any request outside the scope of our services must be approved in writing.
    </p>
  </div>

  {/* 7 */}
  <div >
    <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
      7. Liability and Damages
    </h1>
    <h2 className="text-[16px]  mb-2">
      Dejavu Move-In-Out is insured and takes reasonable care with all items and property. However, we are not liable for:
    </h2>
    <ul className="list-disc list-inside space-y-1">
      <li>Pre-existing damage</li>
      <li>Items improperly packed by the client</li>
      <li>Damage resulting from unclear or incomplete instructions</li>
    </ul>
    <p className="mt-3">
      Claims for damage must be submitted in writing within 48 hours of service completion.
    </p>
  </div>

  {/* 8 */}
  <div >
    <h1 className="lg:text-[24px] pb-[12px] text-[20px] text-[#171717] font-medium">
      8. Intellectual Property
    </h1>
    <p>
      All content on this website—including logos, text, images, and software—is the property of Dejavu Move-In-Out or its licensors and may not be reproduced, distributed, or used without express permission.
    </p>
  </div>

  {/* 9 */}
  <div >
    <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
      9. Privacy
    </h1>
    <p>
      Your privacy is important to us. By using our website or services, you consent to the collection and use of information as described in our Privacy Policy.
    </p>
  </div>

  {/* 10 */}
  <div >
    <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
      10. Amendments
    </h1>
    <p>
      We may update these Terms of Use at any time. Any changes will be posted on this page, and your continued use of the website or services will constitute your acceptance of the updated terms.
    </p>
  </div>

  {/* 11 */}
  <div className="">
    <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
      11. Contact Us
    </h1>
    <p>
      If you have any questions about these Terms, please contact us at: <a href="mailto:hello@dejavumoveinout.ca" className="text-blue-600 underline">hello@dejavumoveinout.ca</a>
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
      case "documents":
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

        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>
            <div className="space-y-6">
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Account Settings
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-700">
                        Email Notifications
                      </h4>
                      <p className="text-sm text-gray-500">
                        Receive email updates about your account
                      </p>
                    </div>
                    <button className="bg-blue-500 relative inline-flex h-6 w-11 items-center rounded-full transition-colors">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-700">
                        Two-Factor Authentication
                      </h4>
                      <p className="text-sm text-gray-500">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <button className="bg-gray-300 relative inline-flex h-6 w-11 items-center rounded-full transition-colors">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Preferences
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Theme
                    </label>
                    <select className="border border-gray-300 rounded-md px-3 py-2 w-full max-w-xs">
                      <option>Light</option>
                      <option>Dark</option>
                      <option>Auto</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Language
                    </label>
                    <select className="border border-gray-300 rounded-md px-3 py-2 w-full max-w-xs">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                </div>
              </div>
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
  <div className="flex-1 w-full lg:justify-between overflow-auto gap-[8px]">{renderPageContent()}</div>
</div>

  );
};

export default TermsOfUse;

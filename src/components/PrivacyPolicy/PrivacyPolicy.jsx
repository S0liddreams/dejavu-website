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
          <div className="pt-[40px] px-[20px] pb-[80px] text-[#737373] text-[14px] leading-[150%] flex flex-col lg:gap-[30px] gap-[8px]">
            <p className="">
              By accessing or using our website, services, or booking platform,
              you agree to be bound by the following terms and conditions
              (“Terms of Use”). Please read them carefully before using our
              services. If you do not agree to these terms, please do not use
              our site or services.
            </p>

            {/* 1 */}
            <div className="">
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                1. Acceptance of Terms
              </h1>
              <p>
                By using this website or any Dejavu Move-In-Out service, you
                confirm that you are at least 18 years old and legally capable
                of entering into a binding contract. If you are using our
                services on behalf of an organization or another person, you
                agree that you have the authority to bind them to these terms.
              </p>
            </div>

            {/* 2 */}
            <div className="pb-[24px]">
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                2. Services Overview
              </h1>
              <p>
                Dejavu Move-In-Out provides move-in concierge services,
                furniture assembly, move-out support, and related home setup
                services. All services are subject to availability, geographic
                coverage, and scope limitations as listed on our website or
                communicated during the booking process.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                3. Bookings and Payments
              </h1>
              <p>
                All service bookings must be made through our official website
                or approved communication channels. Payments are required to
                confirm bookings. We reserve the right to cancel or reschedule
                appointments due to availability or unforeseen circumstances.
                Customers will be notified promptly in such cases.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                4. Cancellations and Rescheduling
              </h1>
              <p>
                Clients may cancel or reschedule a service up to 24 hours in
                advance without penalty. Late cancellations may be subject to a
                partial service charge. Full cancellation and refund policies
                are available on the FAQ page or upon request.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                5. Client Responsibilities
              </h1>
              <h2 className="text-[16px]  mb-2">
                Clients are responsible for:
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Providing accurate booking information</li>
                <li>Ensuring safe and accessible work environments</li>
                <li>
                  Notifying us of any building or logistical restrictions in
                  advance
                </li>
              </ul>
              <p className="mt-3">
                Failure to do so may result in delays, additional charges, or
                cancellation of service.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                6. Service Limitations
              </h1>
              <h2 className="text-[16px]  mb-2">
                Our team does not offer services that involve:
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Heavy lifting over safety-approved weight limits</li>
                <li>Hazardous material handling</li>
                <li>Complex electrical or plumbing installation</li>
              </ul>
              <p className="mt-3">
                Any request outside the scope of our services must be approved
                in writing.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                7. Liability and Damages
              </h1>
              <h2 className="text-[16px]  mb-2">
                Dejavu Move-In-Out is insured and takes reasonable care with all
                items and property. However, we are not liable for:
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Pre-existing damage</li>
                <li>Items improperly packed by the client</li>
                <li>
                  Damage resulting from unclear or incomplete instructions
                </li>
              </ul>
              <p className="mt-3">
                Claims for damage must be submitted in writing within 48 hours
                of service completion.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h1 className="lg:text-[24px] pb-[12px] text-[20px] text-[#171717] font-medium">
                8. Intellectual Property
              </h1>
              <p>
                All content on this website—including logos, text, images, and
                software—is the property of Dejavu Move-In-Out or its licensors
                and may not be reproduced, distributed, or used without express
                permission.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                9. Privacy
              </h1>
              <p>
                Your privacy is important to us. By using our website or
                services, you consent to the collection and use of information
                as described in our Privacy Policy.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                10. Amendments
              </h1>
              <p>
                We may update these Terms of Use at any time. Any changes will
                be posted on this page, and your continued use of the website or
                services will constitute your acceptance of the updated terms.
              </p>
            </div>

            {/* 11 */}
            <div className="">
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

      case "Website":
        return (
          <div className="pt-[40px] px-[20px] pb-[80px] text-[14px]  leading-[150%] flex flex-col lg:gap-[56px] gap-[8px] text-[#737373]">
            <div className=" ">
              <p className="pb-[12px]">
                <span className="font-bold">DEJAVU </span>(“we,” “our,” or “us”)
                is committed to safeguarding your privacy in accordance with
                ISO/IEC 29100, the General Data Protection Regulation (GDPR),
                and other applicable global privacy laws. This document
                explains:
              </p>
              <p className="">This document explains:</p>
              <ul className="">
                <li className="">
                  How we collect, use, store, and share your personal
                  information
                </li>
                <li className="">
                  Your rights and choices regarding your information
                </li>
                <li className="">
                  Conditions for using our website and services,
                  <span className="font-bold">
                    {" "}
                    including Move-In Concierge
                  </span>
                  ,<span className="font-bold"> Furniture Assembly</span>, and{" "}
                  <span className="font-bold">Move-Out Concierge </span>
                </li>
              </ul>
            </div>

            {/* 1 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                1. Definitions
              </h1>
              <h2 className="text-[16px]  mb-2">
                For the purpose of this Privacy Policy:
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <span className="font-bold">Personal Data:</span> Any
                  information relating to an identified or identifiable natural
                  person.
                </li>
                <li>
                  <span className="font-bold"> Processing:</span> Any operation
                  performed on personal data (collection, storage, use, sharing,
                  etc.).
                </li>
                <li>
                  <span className="font-bold"> Data Subject:</span> The
                  individual whose personal data is processed.
                </li>
                <li>
                  <span className="font-bold">Controller:</span> The entity
                  determining the purposes and means of processing personal data
                  (that’s us).
                </li>
                <li>
                  <span className="font-bold">Processor:</span> A third party
                  processing data on our behalf.
                </li>
                <li>
                  <span className="font-bold">Cookies:</span> Small files stored
                  on your device to enhance site functionality.
                </li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                2. Information We Collect
              </h1>
              <h2 className="text-[16px] font-medium  mb-2">
                A . Information You Provide
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Full name</li>
                <li>Contact details (email, phone)</li>
                <li>Billing and service addresses</li>
                <li>Payment details (processed securely via third parties)</li>
                <li>Special service instructions</li>
              </ul>
              <h2 className="text-[16px] font-medium  my-4">
                B. Information Collected Automatically
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>IP address</li>
                <li>Device and browser information</li>
                <li>Website usage data (via cookies and analytics tools)</li>
              </ul>
              <h2 className="text-[16px] font-medium  my-4">
                C. Service-Specific Data
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Photographs or floor plans (if voluntarily provided for
                  service delivery)
                </li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                3. Lawful Basis for Processing
              </h1>
              <h2 className="text-[16px]  mb-2">
                We process personal data only when one of the following applies:
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <span className="font-bold">Consent</span> – You have given
                  explicit permission.
                </li>
                <li>
                  <span className="font-bold"> Contract </span>– Processing is
                  necessary for service delivery.
                </li>
                <li>
                  <span className="font-bold">Legal Obligation</span> – Required
                  by applicable laws.
                </li>
                <li>
                  <span className="font-bold">Legitimate Interest</span> –
                  Necessary for operational purposes (balanced against your
                  rights).
                </li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                4. How We Use Your Data
              </h1>

              <ul className="list-disc list-inside space-y-1">
                <li>To deliver and manage your requested services</li>
                <li>To communicate updates, confirmations, and changes</li>
                <li>To process secure payments</li>
                <li>To improve our services and website experience</li>
                <li>To send marketing (only with your consent)</li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                5. Data Sharing and Disclosure
              </h1>
              <h2 className="text-[16px]  mb-2">
                We do not sell personal data. We may share information with:
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Authorized service providers (bound by confidentiality
                  agreements)
                </li>
                <li>Payment processors</li>
                <li>Legal authorities when required</li>
              </ul>
            </div>

            {/* 6 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                6. Data Retention
              </h1>
              <p>
                We retain personal data only for as long as necessary to fulfill
                the purposes stated or to comply with legal obligations. Data is
                securely deleted or anonymized after this period.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                7. Data Security
              </h1>
              <p className="text-[16px] mb-2">
                We use technical and organizational measures to protect personal
                data, including encryption, secure storage, and restricted
                access.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h1 className="lg:text-[24px] pb-[12px] text-[20px] text-[#171717] font-medium">
                8. Your Rights (under GDPR, CCPA, and other applicable laws)
              </h1>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <span className="font-medium">Right of Access</span> – Obtain
                  a copy of your personal data
                </li>
                <li>
                  <span className="font-medium">Right to Rectification</span> –
                  Correct inaccurate or incomplete data
                </li>
                <li>
                  <span className="font-medium">Right to Erasure</span> –
                  Request deletion of your data
                </li>
                <li>
                  <span className="font-medium">
                    Right to Restrict Processing
                  </span>{" "}
                  – Limit how we process your data
                </li>
                <li>
                  <span className="font-medium">Right to Data Portability</span>{" "}
                  – Receive your data in a structured, machine-readable format
                </li>
                <li>
                  <span className="font-medium">Right to Object</span> – Stop
                  certain types of processing, including marketing
                </li>
                <li>
                  <span className="font-medium">
                    Right to Withdraw Consent{" "}
                  </span>{" "}
                  – At any time without affecting prior processing
                </li>
              </ul>
            </div>

            {/* 9 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                9. Cookies and Tracking Technologies
              </h1>
              <h2 className="text-[16px]  mb-2">We use cookies to:</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Enable website functionality</li>
                <li>Analyze site usage</li>
                <li>Improve user experience</li>
              </ul>
              <p className="my-2">
                You can control cookies via browser settings, but some features
                may be limited.
              </p>
            </div>
            {/* 10 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                10. Use of Website
              </h1>
              <h2 className="text-[16px]  mb-2">
                By accessing and using our website, you agree to:
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Use it only for lawful purposes</li>
                <li>Not interfere with site security or functionality</li>
                <li>Not engage in unauthorized data collection or scraping</li>
                <li>Respect our intellectual property rights</li>
                <li>Avoid transmitting spam, malware, or harmful content</li>
              </ul>
              <p className="my-2">
                Violation of these terms may result in restricted or terminated
                access.
              </p>
            </div>
            {/* 11 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                11. Third-Party Links
              </h1>

              <p className="my-2">
                Our site may contain links to third-party websites. We are not
                responsible for their privacy practices or content.
              </p>
            </div>
            {/* 12 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                12. Children’s Privacy
              </h1>

              <p className="my-2">
                Our services are not intended for individuals under 18 years
                old, and we do not knowingly collect data from minors.
              </p>
            </div>
            {/* 13 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                13. Changes to This Policy
              </h1>

              <p className="my-2">
                We may update this document periodically. The “Last Updated”
                date will be revised accordingly.
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
      case "content":
        return (
          <div className="pt-[40px] px-[20px] pb-[80px] text-[14px]  leading-[150%] flex flex-col lg:gap-[56px] gap-[8px] text-[#737373]">
            <div className=" ">
              <p className="pb-[12px]">
                <span className="font-bold">DEJAVU </span>(“we,” “our,” or “us”)
                values and respects all content submitted by our users. This
                <span className="font-bold">
                  User Content Privacy Policy
                </span>{" "}
                explains how we collect, use, store, and protect user-generated
                content (UGC) submitted through our website, booking systems, or
                any other communication channels.
              </p>
              <p className="">
                By submitting content to us, you agree to the terms outlined in
                this policy.
              </p>
            </div>

            {/* 1 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                1. Definition of User Content
              </h1>
              <h2 className="text-[16px]  mb-2">
                For this policy, “User Content” refers to any materials, data,
                or information provided to us by you, including but not limited
                to:
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Text (e.g., reviews, comments, messages)</li>
                <li>
                  Images, photos, or videos (e.g., property layouts, furniture
                  photos)
                </li>
                <li>Service instructions or preferences</li>
                <li>
                  Documents or files uploaded during booking or communication
                </li>
                <li>Feedback and testimonials</li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                2. Ownership of User Content
              </h1>

              <ul className="list-disc list-outside space-y-1">
                <li>
                  You retain ownership of any content you create and submit.
                </li>
                <li>
                  By submitting content, you grant{" "}
                  <span className="font-bold"> DEJAVU </span> a non-exclusive,
                  royalty-free, worldwide license to use, store, reproduce, and
                  display your content solely for:
                  <ol className="list-decimal list-inside space-y-1">
                    <li className="">Providing and improving our services</li>
                    <li className="">
                      Marketing or promotional purposes (only with your explicit
                      consent)
                    </li>
                  </ol>
                </li>
                <li>
                  We will <span className="font-bold"> not </span> sell your
                  content or use it for unrelated purposes without your consent.
                </li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                3. Use of User Content
              </h1>
              <h2 className="text-[16px]  mb-2">
                We may use user-submitted content for:
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Service delivery and customization</li>
                <li>Internal training and quality control</li>
                <li>Troubleshooting and dispute resolution</li>
                <li>
                  Customer reviews and testimonials (with your permission)
                </li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                4. Confidentiality of Sensitive Content
              </h1>
              <h2>
                Some user content may include personal or proprietary
                information (e.g., home access codes, private layouts). We
                commit to:
              </h2>

              <ul className="list-disc list-inside space-y-1">
                <li>Storing such content securely</li>
                <li>Restricting access to authorized personnel only</li>
                <li>
                  Not sharing it with third parties except where necessary to
                  complete the service or comply with the law
                </li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                5. Prohibited User Content
              </h1>
              <h2 className="text-[16px]  mb-2">
                You may not submit content that:
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Is illegal, defamatory, or infringing on the rights of others
                </li>
                <li>Contains viruses, malware, or malicious code</li>
                <li>Violates any applicable laws or regulations</li>
                <li>Is sexually explicit, discriminatory, or offensive</li>
              </ul>
              <p className="mt-2">
                We reserve the right to remove such content without notice.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                6. Retention of User Content
              </h1>
              <h2 className="mb-2">
                We retain user-submitted content only as long as necessary for
                the purposes described in this policy. Upon request, we will
                delete your content unless required by law to retain it.
              </h2>
            </div>

            {/* 7 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                7. Sharing of User Content
              </h1>
              <p className="text-[16px] mb-2">
                We may share your content with:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li className="">
                  Service providers or contractors involved in fulfilling your
                  request
                </li>
                <li className="">
                  Legal authorities if required to comply with laws or respond
                  to legal claims
                </li>
              </ul>
            </div>

            {/* 8 */}
            <div>
              <h1 className="lg:text-[24px] pb-[12px] text-[20px] text-[#171717] font-medium">
                8. Security of User Content
              </h1>
              <p>
                We implement technical and organizational measures to protect
                user content, including:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li className="">Encryption during transmission and storage</li>
                <li className="">
                  Access controls and authentication procedures
                </li>
                <li className="">Regular security monitoring</li>
              </ul>
            </div>

            {/* 9 */}
            <div>
              <h1 className="lg:text-[24px] pb-[12px] text-[20px] text-[#171717] font-medium">
                9. Your Rights Regarding User Content
              </h1>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc list-inside space-y-1">
                <li className="">Request a copy of your submitted content</li>
                <li className="">Request corrections to inaccurate content</li>
                <li className="">
                  Request deletion of your content (subject to legal and
                  operational requirements)
                </li>
                <li className="">
                  Withdraw consent for public display of content at any time
                </li>
              </ul>
              <p className="mt-2">
                To exercise these rights, contact us at [your email address].
              </p>
            </div>
            {/* 10 */}
            <div>
              <h1 className="lg:text-[24px] pb-[12px] text-[20px] text-[#171717] font-medium">
                10. Changes to This Policy
              </h1>
              <p>
                We may update this policy from time to time. Any changes will be
                posted on our website with the updated “Last Updated” date.
              </p>
            </div>
          </div>
        );

      case "property":
        return (
          <div className="pt-[40px] px-[20px] pb-[80px] text-[14px]  leading-[150%] flex flex-col lg:gap-[56px] gap-[8px] text-[#737373]">
            <div className=" ">
              <p className="pb-[12px]">
                <span className="font-bold">DEJAVU </span>(“we,” “our,” or “us”)
                values and protects intellectual property (IP) in accordance
                with international standards, including the{" "}
                <span className="font-bold">
                  {" "}
                  World Intellectual Property Organization (WIPO)
                </span>{" "}
                framework, applicable copyright, trademark, and patent laws, and
                relevant information security standards (ISO/IEC 27001).
              </p>
              <p className="">
                This Intellectual Property Privacy Policy outlines how we
                protect our own IP and respect the IP rights of others,
                including the confidentiality of proprietary information and
                creative content.
              </p>
            </div>

            {/* 1 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                1. Scope
              </h1>
              <h2 className="text-[16px]  mb-2">This policy applies to:</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  All materials created, published, or distributed by us,
                  including{" "}
                  <span className="font-bold">
                    text, graphics, images, designs, branding, service concepts,
                    and software.
                  </span>
                </li>
                <li>
                  All proprietary information shared with us by clients,
                  contractors, or partners during the provision of services such
                  as{" "}
                  <span className="font-bold">
                    {" "}
                    Move-In Concierge, Furniture Assembly, and Move-Out
                    Concierge.
                  </span>
                </li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                2. Ownership of Intellectual Property
              </h1>

              <ul className="list-disc list-inside space-y-1">
                <li>
                  All content on our website, marketing materials, service
                  descriptions, processes, and branding elements are the sole
                  property of <span className="font-bold"> DEJAVU</span> unless
                  otherwise stated.
                </li>
                <li>
                  Any IP developed by us during service provision remains our
                  property unless a written agreement assigns ownership to a
                  client.
                </li>
                <li>
                  Client-provided materials (e.g., logos, designs, floor plans)
                  remain the property of the client.
                </li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                3. Confidentiality of Proprietary Information
              </h1>
              <h2 className="text-[16px]  mb-2">
                We may collect and handle IP-related data, such as:
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Project specifications</li>
                <li>Confidential designs</li>
                <li>Custom service layouts</li>
                <li>Internal operational methods</li>
              </ul>
              <h2 className="text-[16px]  my-2">We commit to:</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Storing such information securely</li>
                <li>
                  Using it solely for the purpose of providing agreed services
                </li>
                <li>Restricting access to authorized personnel only</li>
                <li>
                  Not disclosing it to third parties without prior written
                  consent
                </li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                4. Use of Our Intellectual Property
              </h1>
              <h2>You may not:</h2>

              <ul className="list-disc list-inside space-y-1">
                <li>
                  Copy, reproduce, or distribute our materials without prior
                  written consent
                </li>
                <li>
                  Use our trademarks, service names, or logos without
                  authorization
                </li>
                <li>
                  Modify or adapt our original works for commercial use without
                  permission
                </li>
              </ul>

              <p className="mt-2">
                Limited use of our materials is permitted for personal,
                non-commercial purposes, provided that credit is given and
                copyright notices remain intact.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                5. Protection Measures
              </h1>
              <h2 className="text-[16px]  mb-2">
                We implement the following measures to safeguard IP-related
                data:
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <span className="font-bold">Access Control </span> – Only
                  authorized staff have access to sensitive files
                </li>
                <li>
                  <span className="font-bold">Encryption </span>– Secure
                  transmission and storage of digital assets
                </li>
                <li>
                  <span className="font-bold">
                    Non-Disclosure Agreements (NDAs){" "}
                  </span>
                  – Required for contractors and partners handling sensitive IP
                </li>
                <li>
                  <span className="font-bold">Monitoring & Enforcement </span>–
                  Actively monitoring for unauthorized use and enforcing our
                  rights
                </li>
              </ul>
            </div>

            {/* 6 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                6. Reporting IP Infringement
              </h1>
              <h2 className="mb-2">
                If you believe your IP has been used on our website or in our
                services without authorization, please contact us at
                dejavu.moveinout@example.com with:
              </h2>

              <ul className="list-disc list-inside space-y-1">
                <li className="">Description of the IP work in question</li>
                <li className="">Proof of ownership</li>
                <li className="">Details of the alleged infringement</li>
              </ul>

              <p className="mt-2">
                We will investigate promptly and take necessary action, which
                may include removing the infringing material or contacting the
                responsible party.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                7. Legal Compliance
              </h1>
              <p className="text-[16px] mb-2">
                We comply with applicable IP laws in all jurisdictions where we
                operate, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li className="">
                  <span className="font-bold">Copyright Acts</span> of relevant
                  countries
                </li>
                <li className="">
                  <span className="font-bold">Trademark Acts </span> of relevant
                  countries
                </li>
                <li className="">
                  <span className="font-bold">
                    Digital Millennium Copyright Act (DMCA)
                  </span>{" "}
                  for U.S.-related services
                </li>
                <li className="">
                  <span className="font-bold">WIPO treaties</span> for
                  cross-border IP protection
                </li>
              </ul>
            </div>

            {/* 8 */}
            <div>
              <h1 className="lg:text-[24px] pb-[12px] text-[20px] text-[#171717] font-medium">
                8. Changes to This Policy
              </h1>
              <p>
                We may update this policy from time to time. Any changes will be
                posted on our website with the updated “Last Updated” date.
              </p>
            </div>
          </div>
        );

      case "limitation":
        return (
          <div className="pt-[40px] px-[20px] pb-[80px] text-[14px]  leading-[150%] flex flex-col lg:gap-[56px] gap-[8px] text-[#737373]">
            <div className=" ">
              <p className="pb-[12px]">
                This Limitations of Liability Policy explains the extent of {""}
                <span className="font-bold">DEJAVU’s</span> (“we,” “our,” or
                “us”) responsibility in connection with the use of our website,
                services, and any related content. By engaging with our services
                or website, you acknowledge and agree to these limitations.
              </p>
            </div>

            {/* 1 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                1. General Limitation
              </h1>
              <h2 className="text-[16px]  mb-2">
                To the fullest extent permitted by applicable law:
              </h2>
              <ul className="list-disc list-outside space-y-1">
                <li>
                  We are not liable for any indirect, incidental, special,
                  consequential, or punitive damages, including but not limited
                  to:
                  <ol className="list-disc list-inside">
                    <li className="">Loss of income or revenue</li>
                    <li className="">Loss of business opportunities</li>
                    <li className="">Loss of data</li>
                    <li className="">Emotional distress</li>
                    <li className="">
                      Property damage not directly caused by our negligence
                    </li>
                  </ol>
                </li>
                <li>
                  Our total liability, whether in contract, tort (including
                  negligence), or otherwise, will{" "}
                  <span className="font-bold">
                    {" "}
                    not exceed the total amount you paid for the service in
                    question.
                  </span>
                </li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                2. Service-Specific Limitations
              </h1>
              <h2 className="font-bold">
                A. Move-In Concierge & Move-Out Concierge
              </h2>
              <p className="my-2">We are not responsible for:</p>

              <ul className="list-disc list-inside space-y-1">
                <li>
                  Defects in the original product or manufacturer’s design
                </li>
                <li>
                  Improper use or installation contrary to manufacturer
                  guidelines after service completion
                </li>
                <li>
                  Wear and tear, accidental damage, or misuse occurring after
                  assembly
                </li>
              </ul>
              <h2 className="font-bold mt-2">B. Furniture Assembly</h2>
              <p className="my-2">We are not liable for:</p>

              <ul className="list-disc list-inside space-y-1">
                <li>
                  Defects in the original product or manufacturer’s design
                </li>
                <li>
                  Improper use or installation contrary to manufacturer
                  guidelines after service completion
                </li>
                <li>
                  Wear and tear, accidental damage, or misuse occurring after
                  assembly
                </li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                3. Website Use
              </h1>
              <h2 className="text-[16px]  mb-2">
                We make reasonable efforts to maintain an accurate and secure
                website, but we do not guarantee:
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Uninterrupted or error-free access</li>
                <li>
                  That the website is free from viruses or harmful components
                </li>
                <li>
                  That all content is complete, accurate, or current at all
                  times
                </li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                4. Third-Party Services
              </h1>
              <h2>
                Where our services rely on or include work by third-party
                contractors, suppliers, or platforms:
              </h2>

              <ul className="list-disc list-inside space-y-1">
                <li>
                  We are <span className="font-bold">not </span> responsible for
                  any damages or failures caused by such third parties.
                </li>
                <li>
                  Any disputes must be resolved directly with the third party
                  unless otherwise stated in a written agreement with us.
                </li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                5. Force Majeure
              </h1>
              <h2 className="text-[16px]  mb-2">
                We are not liable for delays, failures, or damages caused by
                events beyond our reasonable control, including but not limited
                to:
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Natural disasters
                </li>
                <li>
                  Strikes or labor disputes
                </li>
                <li>
                  Transportation interruptions
                </li>
                <li>
                  Government actions
                </li>
                <li>
                  Internet outages or cyberattacks
                </li>
              </ul>
            </div>

            {/* 6 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                6. Your Responsibilities
              </h1>
              <h2 className="mb-2">
                You are responsible for:
              </h2>

              <ul className="list-disc list-inside space-y-1">
                <li className="">Providing accurate and complete information for service delivery</li>
                <li className="">Ensuring that the service area is safe and accessible</li>
                <li className="">Inspecting completed work and promptly notifying us of any concerns</li>
              </ul>

              
            </div>

            {/* 7 */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] pb-[12px] text-[#171717] font-medium">
                7. No Waiver of Consumer Rights
              </h1>
              <p className="text-[16px] mb-2">
                Nothing in this policy is intended to exclude or limit any legal rights you have under applicable consumer protection laws.
              </p>
              
            </div>

            {/* 8 */}
            <div>
              <h1 className="lg:text-[24px] pb-[12px] text-[20px] text-[#171717] font-medium">
                8. Governing Law
              </h1>
              <p>
                This policy is governed by the laws of Canada and the province of  Ontario.
Any disputes shall be subject to the exclusive jurisdiction of the courts in the province where our principal place of business is located.
              </p>
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

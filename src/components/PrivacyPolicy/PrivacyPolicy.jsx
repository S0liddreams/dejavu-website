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
          <div style={{ paddingTop: '40px', paddingRight: '20px', paddingLeft: '20px', paddingBottom: '80px', color: '#4B5563', fontSize: '16px', lineHeight: '1.625', display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <p>
        By accessing or using our website, services, or booking platform, you agree to be bound by the following terms and conditions (“Terms of Use”). Please read them carefully before using our services. If you do not agree to these terms, please do not use our site or services.
    </p>
    
    {/* 1 */}
    <div>
        <h1 style={{ fontSize: '24px', paddingBottom: '12px', color: '#111827', fontWeight: '500' }}>
            1. Acceptance of Terms
        </h1>
        <p>
            By using this website or any Dejavu Move-In-Out service, you confirm that you are at least 18 years old and legally capable of entering into a binding contract. If you are using our services on behalf of an organization or another person, you agree that you have the authority to bind them to these terms.
        </p>
    </div>
    
    {/* 2 */}
    <div>
        <h1 style={{ fontSize: '24px', paddingBottom: '12px', color: '#111827', fontWeight: '500' }}>
            2. Services Overview
        </h1>
        <p>
            Dejavu Move-In-Out provides move-in concierge services, furniture assembly, move-out support, and related home setup services. All services are subject to availability, geographic coverage, and scope limitations as listed on our website or communicated during the booking process.
        </p>
    </div>
    
    {/* 3 */}
    <div>
        <h1 style={{ fontSize: '24px', paddingBottom: '12px', color: '#111827', fontWeight: '500' }}>
            3. Bookings and Payments
        </h1>
        <p>
            All service bookings must be made through our official website or approved communication channels. Payments are required to confirm bookings. We reserve the right to cancel or reschedule appointments due to availability or unforeseen circumstances. Customers will be notified promptly in such cases.
        </p>
    </div>
    
    {/* 4 */}
    <div>
        <h1 style={{ fontSize: '24px', paddingBottom: '12px', color: '#111827', fontWeight: '500' }}>
            4. Cancellations and Rescheduling
        </h1>
        <p>
            Clients may cancel or reschedule a service up to 24 hours in advance without penalty. Late cancellations may be subject to a partial service charge. Full cancellation and refund policies are available on the FAQ page or upon request.
        </p>
    </div>
    
    {/* 5 */}
    <div>
        <h1 style={{ fontSize: '24px', paddingBottom: '12px', color: '#111827', fontWeight: '500' }}>
            5. Client Responsibilities
        </h1>
        <h2 style={{ fontSize: '18px', marginBottom: '8px' }}>
            Clients are responsible for:
        </h2>
        <ul style={{ listStyleType: 'disc', listStylePosition: 'inside', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <li>Providing accurate booking information</li>
            <li>Ensuring safe and accessible work environments</li>
            <li>Notifying us of any building or logistical restrictions in advance</li>
        </ul>
        <p style={{ marginTop: '12px' }}>
            Failure to do so may result in delays, additional charges, or cancellation of service.
        </p>
    </div>
    
    {/* 6 */}
    <div>
        <h1 style={{ fontSize: '24px', paddingBottom: '12px', color: '#111827', fontWeight: '500' }}>
            6. Service Limitations
        </h1>
        <h2 style={{ fontSize: '18px', marginBottom: '8px' }}>
            Our team does not offer services that involve:
        </h2>
        <ul style={{ listStyleType: 'disc', listStylePosition: 'inside', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <li>Heavy lifting over safety-approved weight limits</li>
            <li>Hazardous material handling</li>
            <li>Complex electrical or plumbing installation</li>
        </ul>
        <p style={{ marginTop: '12px' }}>
            Any request outside the scope of our services must be approved in writing.
        </p>
    </div>
    
    {/* 7 */}
    <div>
        <h1 style={{ fontSize: '24px', paddingBottom: '12px', color: '#111827', fontWeight: '500' }}>
            7. Liability and Damages
        </h1>
        <h2 style={{ fontSize: '18px', marginBottom: '8px' }}>
            Dejavu Move-In-Out is insured and takes reasonable care with all items and property. However, we are not liable for:
        </h2>
        <ul style={{ listStyleType: 'disc', listStylePosition: 'inside', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <li>Pre-existing damage</li>
            <li>Items improperly packed by the client</li>
            <li>Damage resulting from unclear or incomplete instructions</li>
        </ul>
        <p style={{ marginTop: '12px' }}>
            Claims for damage must be submitted in writing within 48 hours of service completion.
        </p>
    </div>
    
    {/* 8 */}
    <div>
        <h1 style={{ fontSize: '24px', paddingBottom: '12px', color: '#111827', fontWeight: '500' }}>
            8. Intellectual Property
        </h1>
        <p>
            All content on this website—including logos, text, images, and software—is the property of Dejavu Move-In-Out or its licensors and may not be reproduced, distributed, or used without express permission.
        </p>
    </div>
    
    {/* 9 */}
    <div>
        <h1 style={{ fontSize: '24px', paddingBottom: '12px', color: '#111827', fontWeight: '500' }}>
            9. Privacy
        </h1>
        <p>
            Your privacy is important to us. By using our website or services, you consent to the collection and use of information as described in our Privacy Policy.
        </p>
    </div>
    
    {/* 10 */}
    <div>
        <h1 style={{ fontSize: '24px', paddingBottom: '12px', color: '#111827', fontWeight: '500' }}>
            10. Amendments
        </h1>
        <p>
            We may update these Terms of Use at any time. Any changes will be posted on this page, and your continued use of the website or services will constitute your acceptance of the updated terms.
        </p>
    </div>
    
    {/* 11 */}
    <div>
        <h1 style={{ fontSize: '24px', paddingBottom: '12px', color: '#111827', fontWeight: '500' }}>
            11. Contact Us
        </h1>
        <p>
            If you have any questions about these Terms, please contact us at: <a href="mailto:hello@dejavumoveinout.ca" style={{ color: '#2563EB', textDecoration: 'underline' }}>hello@dejavumoveinout.ca</a>
        </p>
    </div>
</div>
        );

      case "Website":
        return (
          <div
            style={{
              padding: "40px 20px 80px",
              fontSize: "16px",
              lineHeight: "1.5",
              color: "#737373",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              textAlign: "left",
            }}
          >
            <div>
              <p style={{ paddingBottom: "12px" }}>
                <span style={{ fontWeight: "bold" }}>DEJAVU </span>(“we,” “our,”
                or “us”) is committed to safeguarding your privacy in accordance
                with ISO/IEC 29100, the General Data Protection Regulation
                (GDPR), and other applicable global privacy laws.
              </p>
              <p>This document explains:</p>
              <ul>
                <li>
                  How we collect, use, store, and share your personal
                  information
                </li>
                <li>Your rights and choices regarding your information</li>
                <li>
                  Conditions for using our website and services,{" "}
                  <span style={{ fontWeight: "bold" }}>
                    including Move-In Concierge
                  </span>
                  ,{" "}
                  <span style={{ fontWeight: "bold" }}>Furniture Assembly</span>
                  , and{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Move-Out Concierge{" "}
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                1. Definitions
              </h1>
              <h2
                style={{
                  fontSize: "16px",
                  marginBottom: "8px",
                  fontWeight: "normal",
                }}
              >
                For the purpose of this Privacy Policy:
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>
                  <span style={{ fontWeight: "bold" }}>Personal Data:</span> Any
                  information relating to an identified or identifiable natural
                  person.
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Processing:</span> Any
                  operation performed on personal data (collection, storage,
                  use, sharing, etc.).
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Data Subject:</span> The
                  individual whose personal data is processed.
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Controller:</span> The
                  entity determining the purposes and means of processing
                  personal data (that’s us).
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Processor:</span> A third
                  party processing data on our behalf.
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Cookies:</span> Small
                  files stored on your device to enhance site functionality.
                </li>
              </ul>
            </div>
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                2. Information We Collect
              </h1>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                A. Information You Provide
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>Full name</li>
                <li>Contact details (email, phone)</li>
                <li>Billing and service addresses</li>
                <li>Payment details (processed securely via third parties)</li>
                <li>Special service instructions</li>
              </ul>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginTop: "16px",
                  marginBottom: "8px",
                }}
              >
                B. Information Collected Automatically
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>IP address</li>
                <li>Device and browser information</li>
                <li>Website usage data (via cookies and analytics tools)</li>
              </ul>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginTop: "16px",
                  marginBottom: "8px",
                }}
              >
                C. Service-Specific Data
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>
                  Photographs or floor plans (if voluntarily provided for
                  service delivery)
                </li>
              </ul>
            </div>
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                3. Lawful Basis for Processing
              </h1>
              <h2
                style={{
                  fontSize: "16px",
                  marginBottom: "8px",
                  fontWeight: "normal",
                }}
              >
                We process personal data only when one of the following applies:
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>
                  <span style={{ fontWeight: "bold" }}>Consent</span> – You have
                  given explicit permission.
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Contract</span> –
                  Processing is necessary for service delivery.
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Legal Obligation</span> –
                  Required by applicable laws.
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>
                    Legitimate Interest
                  </span>{" "}
                  – Necessary for operational purposes (balanced against your
                  rights).
                </li>
              </ul>
            </div>
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                4. How We Use Your Data
              </h1>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>To deliver and manage your requested services</li>
                <li>To communicate updates, confirmations, and changes</li>
                <li>To process secure payments</li>
                <li>To improve our services and website experience</li>
                <li>To send marketing (only with your consent)</li>
              </ul>
            </div>
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                5. Data Sharing and Disclosure
              </h1>
              <h2
                style={{
                  fontSize: "16px",
                  marginBottom: "8px",
                  fontWeight: "normal",
                }}
              >
                We do not sell personal data. We may share information with:
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>
                  Authorized service providers (bound by confidentiality
                  agreements)
                </li>
                <li>Payment processors</li>
                <li>Legal authorities when required</li>
              </ul>
            </div>
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                6. Data Retention
              </h1>
              <p>
                We retain personal data only for as long as necessary to fulfill
                the purposes stated or to comply with legal obligations. Data is
                securely deleted or anonymized after this period.
              </p>
            </div>
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                7. Data Security
              </h1>
              <p style={{ fontSize: "16px", marginBottom: "8px" }}>
                We use technical and organizational measures to protect personal
                data, including encryption, secure storage, and restricted
                access.
              </p>
            </div>
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                8. Your Rights (under GDPR, CCPA, and other applicable laws)
              </h1>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>
                  <span style={{ fontWeight: "medium" }}>Right of Access</span>{" "}
                  – Obtain a copy of your personal data
                </li>
                <li>
                  <span style={{ fontWeight: "medium" }}>
                    Right to Rectification
                  </span>{" "}
                  – Correct inaccurate or incomplete data
                </li>
                <li>
                  <span style={{ fontWeight: "medium" }}>Right to Erasure</span>{" "}
                  – Request deletion of your data
                </li>
                <li>
                  <span style={{ fontWeight: "medium" }}>
                    Right to Restrict Processing
                  </span>{" "}
                  – Limit how we process your data
                </li>
                <li>
                  <span style={{ fontWeight: "medium" }}>
                    Right to Data Portability
                  </span>{" "}
                  – Receive your data in a structured, machine-readable format
                </li>
                <li>
                  <span style={{ fontWeight: "medium" }}>Right to Object</span>{" "}
                  – Stop certain types of processing, including marketing
                </li>
                <li>
                  <span style={{ fontWeight: "medium" }}>
                    Right to Withdraw Consent
                  </span>{" "}
                  – At any time without affecting prior processing
                </li>
              </ul>
            </div>
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                9. Cookies and Tracking Technologies
              </h1>
              <h2
                style={{
                  fontSize: "16px",
                  marginBottom: "8px",
                  fontWeight: "normal",
                }}
              >
                We use cookies to:
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>Enable website functionality</li>
                <li>Analyze site usage</li>
                <li>Improve user experience</li>
              </ul>
              <p style={{ marginTop: "8px" }}>
                You can control cookies via browser settings, but some features
                may be limited.
              </p>
            </div>
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                10. Use of Website
              </h1>
              <h2
                style={{
                  fontSize: "16px",
                  marginBottom: "8px",
                  fontWeight: "normal",
                }}
              >
                By accessing and using our website, you agree to:
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>Use it only for lawful purposes</li>
                <li>Not interfere with site security or functionality</li>
                <li>Not engage in unauthorized data collection or scraping</li>
                <li>Respect our intellectual property rights</li>
                <li>Avoid transmitting spam, malware, or harmful content</li>
              </ul>
              <p style={{ marginTop: "8px" }}>
                Violation of these terms may result in restricted or terminated
                access.
              </p>
            </div>
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                11. Third-Party Links
              </h1>
              <p style={{ marginTop: "8px" }}>
                Our site may contain links to third-party websites. We are not
                responsible for their privacy practices or content.
              </p>
            </div>
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                12. Children’s Privacy
              </h1>
              <p style={{ marginTop: "8px" }}>
                Our services are not intended for individuals under 18 years
                old, and we do not knowingly collect data from minors.
              </p>
            </div>
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                13. Changes to This Policy
              </h1>
              <p style={{ marginTop: "8px" }}>
                We may update this document periodically. The “Last Updated”
                date will be revised accordingly.
              </p>
            </div>
          </div>
        );

      case "content":
        return (
          <div
            style={{
              padding: "40px 20px 80px",
              fontSize: "16px",
              lineHeight: "1.5",
              color: "#737373",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              textAlign: "left",
            }}
          >
            <div>
              <p style={{ paddingBottom: "12px" }}>
                <span style={{ fontWeight: "bold" }}>DEJAVU </span>(“we,” “our,”
                or “us”) values and respects all content submitted by our users.
                This{" "}
                <span style={{ fontWeight: "bold" }}>
                  User Content Privacy Policy
                </span>{" "}
                explains how we collect, use, store, and protect user-generated
                content (UGC) submitted through our website, booking systems, or
                any other communication channels.
              </p>
              <p>
                By submitting content to us, you agree to the terms outlined in
                this policy.
              </p>
            </div>

            {/* 1 */}
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                1. Definition of User Content
              </h1>
              <h2 style={{ fontSize: "16px", marginBottom: "8px" }}>
                For this policy, “User Content” refers to any materials, data,
                or information provided to us by you, including but not limited
                to:
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
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
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                2. Ownership of User Content
              </h1>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "outside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>
                  You retain ownership of any content you create and submit.
                </li>
                <li>
                  By submitting content, you grant{" "}
                  <span style={{ fontWeight: "bold" }}>DEJAVU</span> a
                  non-exclusive, royalty-free, worldwide license to use, store,
                  reproduce, and display your content solely for:
                  <ol
                    style={{
                      listStyleType: "decimal",
                      listStylePosition: "inside",
                      marginTop: "4px",
                      lineHeight: "1.5",
                    }}
                  >
                    <li>Providing and improving our services</li>
                    <li>
                      Marketing or promotional purposes (only with your explicit
                      consent)
                    </li>
                  </ol>
                </li>
                <li>
                  We will <span style={{ fontWeight: "bold" }}>not</span> sell
                  your content or use it for unrelated purposes without your
                  consent.
                </li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                3. Use of User Content
              </h1>
              <h2 style={{ fontSize: "16px", marginBottom: "8px" }}>
                We may use user-submitted content for:
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
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
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                4. Confidentiality of Sensitive Content
              </h1>
              <h2 style={{ fontSize: "16px", marginBottom: "8px" }}>
                Some user content may include personal or proprietary
                information (e.g., home access codes, private layouts). We
                commit to:
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
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
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                5. Prohibited User Content
              </h1>
              <h2 style={{ fontSize: "16px", marginBottom: "8px" }}>
                You may not submit content that:
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>
                  Is illegal, defamatory, or infringing on the rights of others
                </li>
                <li>Contains viruses, malware, or malicious code</li>
                <li>Violates any applicable laws or regulations</li>
                <li>Is sexually explicit, discriminatory, or offensive</li>
              </ul>
              <p style={{ marginTop: "8px" }}>
                We reserve the right to remove such content without notice.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                6. Retention of User Content
              </h1>
              <h2 style={{ fontSize: "16px", marginBottom: "8px" }}>
                We retain user-submitted content only as long as necessary for
                the purposes described in this policy. Upon request, we will
                delete your content unless required by law to retain it.
              </h2>
            </div>

            {/* 7 */}
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                7. Sharing of User Content
              </h1>
              <p style={{ fontSize: "16px", marginBottom: "8px" }}>
                We may share your content with:
              </p>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>
                  Service providers or contractors involved in fulfilling your
                  request
                </li>
                <li>
                  Legal authorities if required to comply with laws or respond
                  to legal claims
                </li>
              </ul>
            </div>

            {/* 8 */}
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                8. Security of User Content
              </h1>
              <p>
                We implement technical and organizational measures to protect
                user content, including:
              </p>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>Encryption during transmission and storage</li>
                <li>Access controls and authentication procedures</li>
                <li>Regular security monitoring</li>
              </ul>
            </div>

            {/* 9 */}
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                9. Your Rights Regarding User Content
              </h1>
              <p style={{ marginBottom: "8px" }}>You have the right to:</p>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>Request a copy of your submitted content</li>
                <li>Request corrections to inaccurate content</li>
                <li>
                  Request deletion of your content (subject to legal and
                  operational requirements)
                </li>
                <li>
                  Withdraw consent for public display of content at any time
                </li>
              </ul>
              <p style={{ marginTop: "8px" }}>
                To exercise these rights, contact us at [your email address].
              </p>
            </div>

            {/* 10 */}
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
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
          <div
            style={{
              padding: "40px 20px 80px",
              fontSize: "16px",
              lineHeight: "1.5",
              color: "#737373",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              textAlign: "left",
            }}
          >
            <div>
              <p style={{ paddingBottom: "12px" }}>
                <span style={{ fontWeight: "bold" }}>DEJAVU </span>(“we,” “our,”
                or “us”) values and protects intellectual property (IP) in
                accordance with international standards, including the{" "}
                <span style={{ fontWeight: "bold" }}>
                  World Intellectual Property Organization (WIPO)
                </span>{" "}
                framework, applicable copyright, trademark, and patent laws, and
                relevant information security standards (ISO/IEC 27001).
              </p>
              <p>
                This Intellectual Property Privacy Policy outlines how we
                protect our own IP and respect the IP rights of others,
                including the confidentiality of proprietary information and
                creative content.
              </p>
            </div>

            {/* 1 */}
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                1. Scope
              </h1>
              <h2 style={{ fontSize: "16px", marginBottom: "8px" }}>
                This policy applies to:
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>
                  All materials created, published, or distributed by us,
                  including{" "}
                  <span style={{ fontWeight: "bold" }}>
                    text, graphics, images, designs, branding, service concepts,
                    and software.
                  </span>
                </li>
                <li>
                  All proprietary information shared with us by clients,
                  contractors, or partners during the provision of services such
                  as{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Move-In Concierge, Furniture Assembly, and Move-Out
                    Concierge.
                  </span>
                </li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                2. Ownership of Intellectual Property
              </h1>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>
                  All content on our website, marketing materials, service
                  descriptions, processes, and branding elements are the sole
                  property of <span style={{ fontWeight: "bold" }}>DEJAVU</span>{" "}
                  unless otherwise stated.
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
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                3. Confidentiality of Proprietary Information
              </h1>
              <h2 style={{ fontSize: "16px", marginBottom: "8px" }}>
                We may collect and handle IP-related data, such as:
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>Project specifications</li>
                <li>Confidential designs</li>
                <li>Custom service layouts</li>
                <li>Internal operational methods</li>
              </ul>
              <h2
                style={{
                  fontSize: "16px",
                  marginTop: "16px",
                  marginBottom: "8px",
                }}
              >
                We commit to:
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
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
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                4. Use of Our Intellectual Property
              </h1>
              <h2 style={{ fontSize: "16px", marginBottom: "8px" }}>
                You may not:
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
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
              <p style={{ marginTop: "8px" }}>
                Limited use of our materials is permitted for personal,
                non-commercial purposes, provided that credit is given and
                copyright notices remain intact.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                5. Protection Measures
              </h1>
              <h2 style={{ fontSize: "16px", marginBottom: "8px" }}>
                We implement the following measures to safeguard IP-related
                data:
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>
                  <span style={{ fontWeight: "bold" }}>Access Control </span> –
                  Only authorized staff have access to sensitive files
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Encryption </span>–
                  Secure transmission and storage of digital assets
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>
                    Non-Disclosure Agreements (NDAs){" "}
                  </span>
                  – Required for contractors and partners handling sensitive IP
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>
                    Monitoring & Enforcement{" "}
                  </span>
                  – Actively monitoring for unauthorized use and enforcing our
                  rights
                </li>
              </ul>
            </div>

            {/* 6 */}
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                6. Reporting IP Infringement
              </h1>
              <h2 style={{ fontSize: "16px", marginBottom: "8px" }}>
                If you believe your IP has been used on our website or in our
                services without authorization, please contact us at
                dejavu.moveinout@example.com with:
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>Description of the IP work in question</li>
                <li>Proof of ownership</li>
                <li>Details of the alleged infringement</li>
              </ul>
              <p style={{ marginTop: "8px" }}>
                We will investigate promptly and take necessary action, which
                may include removing the infringing material or contacting the
                responsible party.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                7. Legal Compliance
              </h1>
              <p style={{ fontSize: "16px", marginBottom: "8px" }}>
                We comply with applicable IP laws in all jurisdictions where we
                operate, including but not limited to:
              </p>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>
                  <span style={{ fontWeight: "bold" }}>Copyright Acts</span> of
                  relevant countries
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Trademark Acts </span> of
                  relevant countries
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>
                    Digital Millennium Copyright Act (DMCA)
                  </span>{" "}
                  for U.S.-related services
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>WIPO treaties</span> for
                  cross-border IP protection
                </li>
              </ul>
            </div>

            {/* 8 */}
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
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
          <div
            style={{
              padding: "40px 20px 80px",
              fontSize: "16px",
              lineHeight: "1.5",
              color: "#737373",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              textAlign: "left",
            }}
          >
            <div>
              <p style={{ paddingBottom: "12px" }}>
                This Limitations of Liability Policy explains the extent of{" "}
                <span style={{ fontWeight: "bold" }}>DEJAVU’s</span> (“we,”
                “our,” or “us”) responsibility in connection with the use of our
                website, services, and any related content. By engaging with our
                services or website, you acknowledge and agree to these
                limitations.
              </p>
            </div>

            {/* 1 */}
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                1. General Limitation
              </h1>
              <h2 style={{ fontSize: "16px", marginBottom: "8px" }}>
                To the fullest extent permitted by applicable law:
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "outside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>
                  We are not liable for any indirect, incidental, special,
                  consequential, or punitive damages, including but not limited
                  to:
                  <ol
                    style={{
                      listStyleType: "disc",
                      listStylePosition: "inside",
                      marginTop: "4px",
                      lineHeight: "1.5",
                    }}
                  >
                    <li>Loss of income or revenue</li>
                    <li>Loss of business opportunities</li>
                    <li>Loss of data</li>
                    <li>Emotional distress</li>
                    <li>
                      Property damage not directly caused by our negligence
                    </li>
                  </ol>
                </li>
                <li>
                  Our total liability, whether in contract, tort (including
                  negligence), or otherwise, will{" "}
                  <span style={{ fontWeight: "bold" }}>
                    not exceed the total amount you paid for the service in
                    question.
                  </span>
                </li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                2. Service-Specific Limitations
              </h1>
              <h2 style={{ fontSize: "16px", fontWeight: "bold" }}>
                A. Move-In Concierge & Move-Out Concierge
              </h2>
              <p style={{ marginTop: "8px", marginBottom: "8px" }}>
                We are not responsible for:
              </p>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
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
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginTop: "16px",
                }}
              >
                B. Furniture Assembly
              </h2>
              <p style={{ marginTop: "8px", marginBottom: "8px" }}>
                We are not liable for:
              </p>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
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
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                3. Website Use
              </h1>
              <h2 style={{ fontSize: "16px", marginBottom: "8px" }}>
                We make reasonable efforts to maintain an accurate and secure
                website, but we do not guarantee:
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
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
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                4. Third-Party Services
              </h1>
              <h2 style={{ fontSize: "16px", marginBottom: "8px" }}>
                Where our services rely on or include work by third-party
                contractors, suppliers, or platforms:
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>
                  We are <span style={{ fontWeight: "bold" }}>not </span>{" "}
                  responsible for any damages or failures caused by such third
                  parties.
                </li>
                <li>
                  Any disputes must be resolved directly with the third party
                  unless otherwise stated in a written agreement with us.
                </li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                5. Force Majeure
              </h1>
              <h2 style={{ fontSize: "16px", marginBottom: "8px" }}>
                We are not liable for delays, failures, or damages caused by
                events beyond our reasonable control, including but not limited
                to:
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>Natural disasters</li>
                <li>Strikes or labor disputes</li>
                <li>Transportation interruptions</li>
                <li>Government actions</li>
                <li>Internet outages or cyberattacks</li>
              </ul>
            </div>

            {/* 6 */}
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                6. Your Responsibilities
              </h1>
              <h2 style={{ fontSize: "16px", marginBottom: "8px" }}>
                You are responsible for:
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  marginTop: "4px",
                  lineHeight: "1.5",
                }}
              >
                <li>
                  Providing accurate and complete information for service
                  delivery
                </li>
                <li>Ensuring that the service area is safe and accessible</li>
                <li>
                  Inspecting completed work and promptly notifying us of any
                  concerns
                </li>
              </ul>
            </div>

            {/* 7 */}
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                7. No Waiver of Consumer Rights
              </h1>
              <p style={{ fontSize: "16px", marginBottom: "8px" }}>
                Nothing in this policy is intended to exclude or limit any legal
                rights you have under applicable consumer protection laws.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  paddingBottom: "12px",
                  color: "#171717",
                  fontWeight: "bold",
                }}
              >
                8. Governing Law
              </h1>
              <p>
                This policy is governed by the laws of Canada and the province
                of Ontario. Any disputes shall be subject to the exclusive
                jurisdiction of the courts in the province where our principal
                place of business is located.
              </p>
            </div>
          </div>
        );

      case "other":
        return (
          <div
            style={{
              padding: "40px 20px 80px",
              fontSize: "16px",
              lineHeight: "1.5",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              color: "#737373",
            }}
          >
            <div>
              <h1
                style={{
                  paddingBottom: "12px",
                  color: "#171717",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                Links to Other Websites
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  margin: "16px 0",
                  lineHeight: "1.5",
                }}
              >
                Our Services may contain links to third-party websites,
                applications, or services (“Third-Party Sites”) that are not
                operated or controlled by{" "}
                <span style={{ fontWeight: "bold" }}>DEJAVU</span>. These links
                are provided for your convenience and informational purposes
                only.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  margin: "16px 0",
                  lineHeight: "1.5",
                }}
              >
                When you click on a link to a Third-Party Site, you will be
                directed to that site and will be subject to its own privacy
                policy, terms of service, and practices.{" "}
                <span style={{ fontWeight: "bold" }}>
                  We are not responsible for, and do not endorse, the privacy
                  practices, security standards, content, or operations
                </span>{" "}
                of any Third-Party Site.
              </p>
              <h2
                style={{
                  fontSize: "16px",
                  margin: "16px 0",
                  lineHeight: "1.5",
                }}
              >
                We strongly encourage you to:
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  margin: "16px 0",
                  lineHeight: "1.5",
                }}
              >
                <ul
                  style={{
                    listStyleType: "disc",
                    listStylePosition: "outside",
                    marginTop: "4px",
                    lineHeight: "1.5",
                  }}
                >
                  <li>
                    Review the privacy policy of every site you visit before
                    providing any personal information.
                  </li>
                  <li>
                    Be aware that third parties may collect, use, and share your
                    data in ways different from our practices.
                  </li>
                  <li>
                    Understand that any personal information you provide to a
                    Third-Party Site is not covered by this Privacy Policy.
                  </li>
                </ul>
              </p>
              <p
                style={{
                  fontSize: "16px",
                  margin: "16px 0",
                  lineHeight: "1.5",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Disclaimer</span>: Your
                interactions with any Third-Party Site, including any purchases,
                service arrangements, or communications, are solely between you
                and the third party. We disclaim any liability for loss, damage,
                or issues arising from your use of such sites.
              </p>
            </div>
          </div>
        );

      case "modifications":
        return (
          <div
            style={{
              padding: "40px 20px 80px",
              fontSize: "16px",
              lineHeight: "1.5",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              color: "#737373",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                <span style={{ fontWeight: "bold" }}>DEJAVU</span> reserves the
                right, at our sole discretion, to modify, update, or replace any
                part of these Terms of Use at any time. Changes may be made to
                reflect:
              </p>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  paddingLeft: "16px",
                  lineHeight: "1.5",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <li>Updates to our services, features, or operations.</li>
                <li>
                  Compliance with changes in laws, regulations, or industry
                  standards.
                </li>
                <li>
                  Adjustments for security, functionality, or business needs.
                </li>
              </ul>
              <p>
                When we make material changes to these Terms of Use, we will:
              </p>
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  paddingLeft: "16px",
                  lineHeight: "1.5",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <li>
                  Post the updated Terms on our website with a revised
                  “Effective Date” at the top of the page.
                </li>
                <li>
                  Provide notice by email or through our Services (where legally
                  required) before the changes take effect.
                </li>
              </ul>
              <p>
                Your continued access to or use of our Services after the
                updated Terms are posted constitutes your acceptance of those
                changes. If you do not agree to the updated Terms, you must
                discontinue using our Services immediately.
              </p>
              <p>
                We encourage you to review these Terms periodically to stay
                informed about our current policies and practices.
              </p>
            </div>
          </div>
        );

      case "termination":
        return (
          <div className="pt-[40px]  px-[20px] pb-[80px] text-[14px]  leading-[150%] flex flex-col lg:gap-[56px] gap-[8px] text-[#737373]">
            <div className="px-4 py-6 md:px-8 md:py-10 text-gray-800">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Termination
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-4">
                We may, at our sole discretion and without prior notice, suspend
                or terminate your access to our Services, in whole or in part,
                for any reason, including but not limited to:
              </p>

              <ul className="list-disc pl-6 text-sm md:text-base space-y-2 mb-4">
                <li>
                  Violation of these Terms of Use or other applicable policies.
                </li>
                <li>Fraudulent, abusive, or unlawful activity.</li>
                <li>
                  Conduct that, in our judgment, harms or may harm [Your Company
                  Name], our customers, or the public.
                </li>
                <li>Non-payment of fees (if applicable).</li>
              </ul>

              <p className="text-sm md:text-base leading-relaxed mb-4">
                Upon termination:
              </p>
              <ul className="list-disc pl-6 text-sm md:text-base space-y-2 mb-4">
                <li>Your right to use the Services will immediately cease.</li>
                <li>
                  Any outstanding obligations or liabilities you have to us will
                  survive termination.
                </li>
                <li>
                  We may delete or restrict access to any information or content
                  associated with your account, subject to applicable laws
                  regarding data retention.
                </li>
              </ul>

              <p className="text-sm md:text-base leading-relaxed mb-4">
                You may also terminate your account and discontinue use of our
                Services at any time by contacting us at [Insert Contact Email].
              </p>

              <p className="text-sm md:text-base leading-relaxed">
                <strong>Survival of Terms:</strong> All provisions of these
                Terms which by their nature should survive termination —
                including ownership provisions, warranty disclaimers, indemnity,
                and limitations of liability — shall survive and remain in full
                force and effect.
              </p>
            </div>
          </div>
        );
      case "governing":
        return (
          <div className="pt-[40px]  px-[20px] pb-[80px] text-[14px]  leading-[150%] flex flex-col lg:gap-[56px] gap-[8px] text-[#737373]">
            <div className="px-4 py-6 md:px-8 md:py-10 text-gray-800">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Governing Law
              </h2>

              <p className="text-sm md:text-base leading-relaxed mb-4">
                These Terms of Use and any dispute, claim, or controversy
                arising out of or relating to your use of our Services shall be
                governed by and construed in accordance with the laws of{" "}
                <span className="font-medium">
                  the Province of Ontario, Canada
                </span>
                , and the applicable federal laws of Canada, without regard to
                its conflict of law provisions.
              </p>

              <p className="text-sm md:text-base leading-relaxed mb-4">
                Where applicable, you agree to submit to the
                <span className="font-medium">
                  {" "}
                  exclusive jurisdiction of the courts located in Toronto,
                  Ontario, Canada
                </span>
                for the resolution of any legal matter arising under or in
                connection with these Terms.
              </p>

              <p className="text-sm md:text-base leading-relaxed">
                If you access our Services from outside Canada, you are
                responsible for complying with all local laws applicable to you.
                The use of our Services in jurisdictions where such use is
                unlawful is strictly prohibited.
              </p>
            </div>
          </div>
        );

      default:
        return <div className="p-8">Page not found</div>;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row  gap-6 lg:gap-[24px] lg:pt-[2px]  lg:pb-[64px] lg:px-[72px] xl:h-full">
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

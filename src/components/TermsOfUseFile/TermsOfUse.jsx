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
    { id: "amendments", label: "Amendments" },
  ];

  const renderPageContent = () => {
    switch (activePage) {
      case "acceptance":
        return (
          <div className="w-full px-4 sm:px-6 lg:px-8 py-8 text-gray-800">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
                Acceptance of Terms
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed">
                By accessing, booking, or using any of the services offered by
                <span className="font-semibold"> DEJAVU </span>, including but not
                limited to Move-In Concierge, Move-Out Concierge, Furniture
                Assembly, and Add-on Services (collectively, the “Services”),
                you (“you,” “your,” or “Client”) agree to be bound by these
                Terms and Conditions (“Terms”).
              </p>

              <p className="mt-4 text-sm sm:text-base leading-relaxed">
                These Terms constitute a legally binding agreement between you
                and
                <span className="font-semibold"> DEJAVU </span> (“Company,” “we,”
                “our,” or “us”). If you do not agree with any part of these
                Terms, you should not proceed with booking or using our
                Services.
              </p>

              <p className="mt-6 text-sm sm:text-base leading-relaxed font-semibold">
                By engaging our Services, you acknowledge and agree that:
              </p>

              <ul className="mt-3 space-y-4 text-sm sm:text-base leading-relaxed list-disc pl-5">
                <li>
                  <span className="font-semibold">Eligibility –</span>
                  You are at least 18 years of age, or the legal age of majority
                  in your jurisdiction, and have the legal authority to enter
                  into this agreement.
                </li>
                <li>
                  <span className="font-semibold">Service Scope –</span>
                  The Services provided will be limited to those expressly
                  listed in your booking confirmation, contract, or service
                  agreement. Any additional requests or modifications may incur
                  extra charges and require written confirmation from the
                  Company.
                </li>
                <li>
                  <span className="font-semibold">
                    Acceptance of Modifications –
                  </span>
                  We reserve the right to update, amend, or modify these Terms
                  at any time to reflect changes in our business operations,
                  industry standards, or applicable laws. The updated Terms will
                  take effect immediately upon being posted on our website or
                  communicated to you. Continued use of our Services constitutes
                  your acceptance of any such changes.
                </li>
                <li>
                  <span className="font-semibold">
                    Compliance with Policies –
                  </span>
                  You agree to comply with all Company policies, guidelines, and
                  instructions provided before, during, and after the
                  performance of Services, including but not limited to safety
                  requirements, scheduling, and access provisions.
                </li>
                <li>
                  <span className="font-semibold">
                    Third-Party Cooperation –
                  </span>
                  Where our Services require coordination with landlords,
                  building management, or other third parties, you agree to
                  provide all necessary approvals, consents, or documentation in
                  advance.
                </li>
                <li>
                  <span className="font-semibold">Binding Agreement –</span>
                  Your acceptance of these Terms, whether electronically,
                  verbally, or in writing, establishes a binding contractual
                  relationship with the Company, enforceable under applicable
                  laws in your jurisdiction.
                </li>
              </ul>
            </div>
          </div>
        );

      case "overview":
        return (
          <div className="w-full px-4 sm:px-6 lg:px-8 py-8 text-gray-800">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
                Service Overview
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed">
                <span className="font-semibold">DEJAVU</span> provides premium
                concierge and support services designed to simplify and enhance
                your moving experience. Our services are tailored to meet the
                diverse needs of individuals, families, and businesses seeking
                professional assistance before, during, and after relocation.
              </p>

              <p className="mt-4 text-sm sm:text-base leading-relaxed">
                The scope of our services includes, but is not limited to, the
                following:
              </p>

              {/**  Move-In Concierge **/}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Move-In Concierge
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>Full unpacking of belongings.</li>
                <li>Kitchen, wardrobe, and living space organization.</li>
                <li>Furniture placement and room setup.</li>
                <li>Removal of packing materials, trash, and excess items.</li>
                <li>
                  Coordination with building management and service providers,
                  if applicable.
                </li>
              </ul>

              {/**  Move-Out Concierge **/}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Move-Out Concierge
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>Packing and preparation of items for relocation.</li>
                <li>
                  Disassembly of furniture, fixtures, and appliances as
                  required.
                </li>
                <li>
                  Space cleaning assistance and organization for turnover.
                </li>
                <li>Disposal or donation coordination of unwanted items.</li>
                <li>
                  Ensuring the property is left in move-out ready condition.
                </li>
              </ul>

              {/** Furniture Assembly*/}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Furniture Assembly
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>
                  Professional assembly of new or existing furniture items.
                </li>
                <li>
                  Secure installation of components per manufacturer’s
                  guidelines.
                </li>
                <li>
                  Disassembly and reassembly for relocation or reconfiguration
                  purposes.
                </li>
                <li>Optional alignment with interior layout preferences.</li>
              </ul>

              {/**  Add-On Services */}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Add-On Services
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>
                  Customized support beyond standard packages (e.g., décor
                  placement, small appliance setup, specialty handling).
                </li>
                <li>
                  Tailored solutions to address unique relocation requirements.
                </li>
                <li>Additional manpower or time allocation upon request.</li>
              </ul>

              <p className="mt-6 text-sm sm:text-base leading-relaxed">
                We deliver our Services with a commitment to efficiency,
                professionalism, safety, and customer satisfaction. Each
                engagement is guided by the scope agreed upon at the time of
                booking, and clients may request additional services subject to
                availability and applicable fees.
              </p>
            </div>
          </div>
        );

      case "bookings":
        return (
          <div className="w-full px-4 sm:px-6 lg:px-8 py-8 text-gray-800">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
                Bookings and Payments
              </h2>

              {/**Booking Process */}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Booking Process
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>
                  All service requests must be scheduled through our official
                  booking channels, including our website, mobile application,
                  or authorized representatives.
                </li>
                <li>
                  A booking is considered confirmed only after the Company has
                  issued a confirmation notice via email, SMS, or other written
                  communication.
                </li>
                <li>
                  Clients are responsible for providing accurate information
                  regarding location, access, special requirements, and any
                  restrictions that may affect the Service.
                </li>
              </ul>

              {/** Service Fees */}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Service Fees
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>
                  Fees for Services, including Move-In Concierge, Move-Out
                  Concierge, Furniture Assembly, and Add-Ons, are based on the
                  scope of work, duration, and location, as outlined in the
                  service confirmation or invoice.
                </li>
                <li>
                  Prices are subject to change at the Company’s discretion;
                  however, once a booking is confirmed, the quoted price will
                  remain valid unless the scope of Services is modified by the
                  Client.
                </li>
              </ul>

              {/**  Payment Terms */}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Payment Terms
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>
                  Payment is due in accordance with the terms specified in the
                  booking confirmation or invoice.
                </li>
                <li>
                  The Company accepts payments through approved methods, which
                  may include credit/debit cards, bank transfers, mobile payment
                  platforms, or other designated channels.
                </li>
                <li>
                  Where a deposit is required, the deposit must be paid to
                  secure the booking. Failure to provide timely payment may
                  result in cancellation of the booking.
                </li>
              </ul>

              {/**  Deposits and Balances */}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Deposits and Balances
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>
                  A non-refundable deposit (as specified during booking) may be
                  required to confirm reservations.
                </li>
                <li>
                  The remaining balance must be settled before or upon
                  completion of the Service, unless otherwise agreed in writing.
                </li>
              </ul>

              {/**  Cancellations and Rescheduling */}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Cancellations and Rescheduling
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>
                  Clients may cancel or reschedule a booking subject to the
                  Company’s cancellation policy, which will be communicated at
                  the time of booking.
                </li>
                <li>
                  Late cancellations, no-shows, or rescheduling requests made
                  within the restricted time frame may result in forfeiture of
                  deposits or incur additional fees.
                </li>
              </ul>

              {/**  Refunds */}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Refunds
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>
                  Refund eligibility will be determined in accordance with the
                  Company’s cancellation and refund policy.
                </li>
                <li>
                  Service fees already rendered are non-refundable. Any approved
                  refunds will be processed through the original method of
                  payment within a reasonable period.
                </li>
              </ul>

              {/**  Additional Charges */}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Additional Charges
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed">
                Additional fees may apply for:
              </p>
              <ul className="mt-2 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>Extended service hours beyond the agreed time.</li>
                <li>Requests for services outside the confirmed scope.</li>
                <li>
                  Parking, tolls, permits, or special access requirements
                  incurred during the performance of Services.
                </li>
              </ul>
              <p className="mt-3 text-sm sm:text-base leading-relaxed">
                Such charges will be communicated to the Client and must be
                settled promptly.
              </p>
            </div>
          </div>
        );

      case "cancellations":
        return (
          <div className="w-full px-4 sm:px-6 lg:px-8 py-8 text-gray-800">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
                Cancellations and Rescheduling
              </h2>

              {/* Client-Initiated Cancellations */}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Client-Initiated Cancellations
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>
                  Clients may cancel a booking by providing written notice
                  (email or other approved communication channels) within the
                  time frame specified in the booking confirmation.
                </li>
                <li>
                  Cancellations made within{" "}
                  <span className="italic">48 business hours</span> prior to the
                  scheduled service* may result in forfeiture of the deposit or
                  incur a cancellation fee, as determined by the Company’s
                  policy.
                </li>
                <li>
                  Failure to provide timely notice of cancellation (a “no-show”)
                  will be treated as a completed service, and the full service
                  fee will be charged.
                </li>
              </ul>

              {/* Client-Initiated Rescheduling */}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Client-Initiated Rescheduling
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>
                  Clients may request to reschedule a confirmed booking, subject
                  to availability and the Company’s approval.
                </li>
                <li>
                  Rescheduling requests must be submitted at least
                  <span className="italic"> 72 business hours</span> prior to
                  the scheduled service*. Requests made after this period may
                  incur additional fees or result in loss of deposit.
                </li>
                <li>
                  Rescheduled services must be completed within
                  <span className="italic">60 days</span> of the original
                  booking date, unless otherwise agreed in writing.
                </li>
              </ul>

              {/* Company-Initiated Changes */}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Company-Initiated Changes
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed">
                The Company reserves the right to reschedule or cancel a booking
                due to unforeseen circumstances, including but not limited to
                safety concerns, staff unavailability, equipment issues, or
                events beyond our reasonable control.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed">
                In such cases, Clients will be promptly notified, and the
                Company will offer:
              </p>
              <ul className="mt-2 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>
                  A rescheduled service at a mutually convenient date and time,
                  or
                </li>
                <li>
                  A full refund of any deposit or prepaid amount, where
                  applicable.
                </li>
              </ul>

              {/* Force Majeure Events */}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Force Majeure Events
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed">
                Neither party shall be held liable for cancellations or
                rescheduling caused by events beyond reasonable control,
                including natural disasters, severe weather, accidents, strikes,
                government regulations, public health emergencies, or other
                force majeure events.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed">
                In such cases, the Company will work with the Client to arrange
                a suitable rescheduled date without penalty.
              </p>

              {/* Refund Eligibility */}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Refund Eligibility
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>
                  Any refund requests will be processed in accordance with the
                  Company’s refund policy.
                </li>
                <li>
                  Refunds will be issued through the original payment method
                  within a reasonable timeframe, less any applicable
                  cancellation or administrative fees.
                </li>
              </ul>
            </div>
          </div>
        );

      case "client":
        return (
          <div className="w-full px-4 sm:px-6 lg:px-8 py-8 text-gray-800">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
                Client Responsibilities
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed">
                To ensure smooth delivery of Services, Clients agree to the
                following responsibilities:
              </p>

              {/**  Accurate Information */}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Accurate Information
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>
                  Provide complete and accurate details at the time of booking,
                  including service location, access requirements, parking
                  availability, and any special instructions.
                </li>
                <li>
                  Notify the Company promptly of any changes that may affect
                  service performance.
                </li>
              </ul>

              {/* Access to Premises */}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Access to Premises
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>
                  Ensure that the Company’s personnel have safe and timely
                  access to the premises at the scheduled time.
                </li>
                <li>
                  Secure any required permissions, building passes, or approvals
                  from landlords, property managers, or relevant third parties.
                </li>
              </ul>

              {/* Preparation of Space and Items */}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Preparation of Space and Items
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>
                  Prepare the property and items for the scheduled service
                  (e.g., packed belongings for move-out, cleared pathways for
                  furniture assembly).
                </li>
                <li>
                  Safeguard fragile, valuable, or sensitive items not covered
                  under the agreed service scope.
                </li>
              </ul>

              {/* Safety and Working Conditions*/}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Safety and Working Conditions
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>
                  Provide a safe working environment, free from hazards, to
                  enable the Company’s personnel to carry out services
                  efficiently.
                </li>
                <li>
                  Ensure utilities (e.g., electricity, lighting, elevators) are
                  available where required.
                </li>
              </ul>

              {/* Cooperation and Communication */}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Cooperation and Communication
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>
                  Cooperate with the Company’s staff by providing instructions,
                  clarifications, and approvals when necessary.
                </li>
                <li>
                  Respond to calls, messages, or emails related to the service
                  in a timely manner.
                </li>
              </ul>

              {/* Compliance with Policies */}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Compliance with Policies
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>
                  Follow the Company’s guidelines and instructions before,
                  during, and after the service.
                </li>
                <li>
                  Refrain from directing Company personnel to perform tasks
                  outside the agreed scope unless approved in writing and
                  subject to additional charges.
                </li>
              </ul>

              {/* Payment Obligations */}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Payment Obligations
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>
                  Fulfill all payment obligations in accordance with the
                  Company’s Bookings and Payments terms.
                </li>
                <li>
                  Settle any additional charges incurred due to extended service
                  time, access restrictions, or modifications to the service
                  scope.
                </li>
              </ul>

              {/* Supervision of Minors and Pets */}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Supervision of Minors and Pets
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>
                  Ensure that children and pets are appropriately supervised and
                  do not interfere with service delivery or create unsafe
                  conditions.
                </li>
              </ul>

              {/* Insurance and Liability */}
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                Insurance and Liability
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>
                  Maintain appropriate insurance coverage for personal
                  belongings, property, or premises, as the Company shall not be
                  liable for items not expressly covered under the service
                  agreement.
                </li>
              </ul>
            </div>
          </div>
        );

      case "liability":
        return (
          <div className="w-full px-4 sm:px-6 lg:px-8 py-4 text-gray-800">
            <div className="mx-auto max-w-3xl">
              {/* Section Title */}
              <div>
                <h2 className="text-black text-2xl sm:text-3xl font-semibold py-4">
                  Liability and Damages
                </h2>
              </div>

              {/* Limited Liability */}
              <div className="mb-6">
                <h3 className="font-semibold text-black pb-[8px]">
                  Limited Liability
                </h3>
                <p className="pb-[12px]">
                  The Company shall perform all Services with reasonable care,
                  skill, and professionalism.
                </p>
                <p>
                  To the fullest extent permitted by law, the Company shall not
                  be held liable for any indirect, incidental, consequential, or
                  punitive damages, including but not limited to loss of income,
                  business interruption, emotional distress, or loss of use of
                  property.
                </p>
              </div>

              {/* Damages to Property or Items */}
              <div className="mb-6">
                <h3 className="font-semibold text-black pb-[8px]">
                  Damages to Property or Items
                </h3>
                <p className="pb-[12px]">
                  While every effort is made to handle Clients’ property with
                  care, the Company shall not be liable for:
                </p>
                <ul className="list-disc pl-[20px] space-y-2">
                  <li>
                    Pre-existing damage, defects, or wear and tear to furniture,
                    appliances, fixtures, or premises.
                  </li>
                  <li>
                    Damage resulting from improper packaging, faulty assembly
                    instructions, or defective materials provided by the Client.
                  </li>
                  <li>
                    Items of extraordinary value (e.g., jewelry, collectibles,
                    cash, heirlooms) unless expressly disclosed, documented, and
                    accepted under a written agreement.
                  </li>
                </ul>
              </div>

              {/* Client’s Duty to Inspect */}
              <div className="mb-6">
                <h3 className="font-semibold text-black pb-[8px]">
                  Client’s Duty to Inspect
                </h3>
                <p className="pb-[12px]">
                  Clients are required to inspect the Services upon completion
                  and immediately report any concerns or damages before Company
                  staff depart the premises.
                </p>
                <p>
                  Failure to raise an immediate claim may limit or void the
                  Company’s liability.
                </p>
              </div>

              {/* Maximum Liability Cap */}
              <div className="mb-6">
                <h3 className="font-semibold text-black pb-[8px]">
                  Maximum Liability Cap
                </h3>
                <p className="pb-[12px]">
                  In the event the Company is found liable for damages, the
                  Company’s total liability shall not exceed the lesser of:
                </p>
                <ul className="list-disc pl-[20px] space-y-2">
                  <li>
                    The total amount paid by the Client for the specific Service
                    giving rise to the claim, or
                  </li>
                  <li>
                    The fair market value of the damaged item(s), as reasonably
                    determined.
                  </li>
                </ul>
              </div>

              {/* Exclusions of Liability */}
              <div className="mb-6">
                <h3 className="font-semibold text-black pb-[8px]">
                  Exclusions of Liability
                </h3>
                <p className="pb-[12px]">
                  The Company shall not be liable for damages or delays caused
                  by:
                </p>
                <ul className="list-disc pl-[20px] space-y-2">
                  <li>
                    Circumstances beyond reasonable control, including weather,
                    accidents, strikes, or force majeure events.
                  </li>
                  <li>
                    Failure of the Client to comply with their responsibilities,
                    including preparation of the premises, disclosure of
                    relevant information, or provision of safe access.
                  </li>
                  <li>
                    Instructions provided by the Client that conflict with
                    manufacturer’s guidelines, building regulations, or safety
                    standards.
                  </li>
                </ul>
              </div>

              {/* Indemnification */}
              <div>
                <h3 className="font-semibold text-black pb-[8px]">
                  Indemnification
                </h3>
                <p className="pb-[12px]">
                  The Client agrees to indemnify and hold the Company, its
                  employees, contractors, and affiliates harmless against any
                  claims, losses, damages, or expenses (including reasonable
                  legal fees) arising from:
                </p>
                <ul className="list-disc pl-[20px] space-y-2">
                  <li>Breach of these Terms by the Client,</li>
                  <li>
                    Client negligence, misconduct, or failure to provide a safe
                    working environment,
                  </li>
                  <li>
                    Claims made by third parties relating to the Services
                    performed at the Client’s request.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "intellectual":
        return (
          <div className="px-6 py-4 text-gray-700 text-sm md:text-base leading-relaxed space-y-10">
            <div className="mx-auto max-w-3xl">
              {/* Section Title */}
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 py-4">
                Intellectual Property
              </h2>

              {/* Ownership of Materials */}
              <section className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 pt-4">
                  Ownership of Materials
                </h3>
                <p>
                  All content, materials, and intellectual property associated
                  with
                  <span className="font-semibold"> DEJAVU </span>,
                  including but not limited to logos, trademarks, service marks,
                  trade names, designs, graphics, images, videos, software,
                  written content, and promotional materials (collectively,
                  “Company Content”), are the exclusive property of the Company
                  or its licensors.
                </p>
                <p>
                  Nothing in these Terms shall be construed as granting any
                  license or right to use the Company Content without prior
                  written consent.
                </p>
              </section>

              {/* Use of Services and Materials */}
              <section className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 pt-4">
                  Use of Services and Materials
                </h3>
                <p>
                  Clients may access and use Company Content solely for the
                  purpose of engaging with the Company’s Services, in accordance
                  with these Terms.
                </p>
                <p>
                  Reproduction, modification, distribution, republication,
                  display, or transmission of Company Content, whether for
                  commercial or non-commercial purposes, is strictly prohibited
                  without the Company’s prior written permission.
                </p>
              </section>

              {/* Client-Provided Content */}
              <section className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 pt-4">
                  Client-Provided Content
                </h3>
                <p>
                  By providing any materials, information, or content (such as
                  property photos, floor plans, or personal details) to the
                  Company for the purpose of facilitating Services, the Client
                  grants the Company a limited, non-exclusive, royalty-free
                  license to use such content strictly for the provision of
                  Services.
                </p>
                <p>
                  The Client represents and warrants that they own or have
                  lawful rights to any content they provide and that such
                  content does not infringe on the intellectual property rights
                  of third parties.
                </p>
              </section>

              {/* Trademarks and Branding */}
              <section className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 pt-4">
                  Trademarks and Branding
                </h3>
                <p>
                  The Company’s name, logos, slogans, and brand identity are
                  protected under applicable trademark and copyright laws.
                </p>
                <p>
                  Unauthorized use, imitation, or misrepresentation of the
                  Company’s brand in any form is strictly prohibited.
                </p>
              </section>

              {/* Third-Party Intellectual Property */}
              <section className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 pt-4">
                  Third-Party Intellectual Property
                </h3>
                <p>
                  Any third-party trademarks, content, or intellectual property
                  referenced in connection with the Services remain the property
                  of their respective owners.
                </p>
                <p>
                  The Company makes no claim of ownership over such third-party
                  intellectual property and uses it solely as permitted under
                  applicable law.
                </p>
              </section>

              {/* Reservation of Rights */}
              <section className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 pt-4">
                  Reservation of Rights
                </h3>
                <p>
                  The Company reserves all rights not expressly granted under
                  these Terms.
                </p>
                <p>
                  Any unauthorized use of Company Content may result in legal
                  action, including claims for damages and injunctive relief.
                </p>
              </section>
            </div>
          </div>
        );

      case "amendments":
        return (
          <div className="px-6 py-4 text-gray-700 text-sm md:text-base leading-relaxed space-y-10">
            <div className="mx-auto max-w-3xl">
            {/* Section Title */}
            <h2 className="text-2xl sm:text-3xl font-semibold py-4 text-gray-900">
              Amendments
            </h2>

            {/* Right to Amend */}
            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">
                Right to Amend
              </h3>
              <p>
                The Company reserves the right, at its sole discretion, to
                modify, update, or amend these Terms, as well as any policies or
                guidelines referenced herein, at any time and for any reason,
                including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Updates to our Services, features, or operations.</li>
                <li>
                  Compliance with changes in laws, regulations, or industry
                  standards.
                </li>
                <li>
                  Adjustments for safety, security, functionality, or business
                  needs.
                </li>
              </ul>
            </section>

            {/* Notice of Amendments */}
            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 pt-4">
                Notice of Amendments
              </h3>
              <p>
                Material amendments will be communicated to Clients by one or
                more of the following methods:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Posting the updated Terms on the Company’s official website.
                </li>
                <li>
                  Sending notice via email or other communication channels
                  provided by the Client.
                </li>
                <li>
                  Providing notice through service confirmations or invoices.
                </li>
              </ul>
            </section>

            {/* Effective Date */}
            <section className="space-y-3 ">
              <h3 className="text-lg font-semibold text-gray-900 pt-4">
                Effective Date
              </h3>
              <p>
                Unless otherwise stated, all amendments take effect immediately
                upon publication or notification.
              </p>
              <p>
                Continued use of the Services after such amendments constitutes
                the Client’s acceptance of the updated Terms.
              </p>
            </section>

            {/* Client’s Responsibility */}
            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 pt-4">
                Client’s Responsibility
              </h3>
              <p>
                Clients are responsible for reviewing the Terms periodically to
                stay informed of any updates.
              </p>
              <p>
                If a Client does not agree with the amended Terms, they must
                discontinue use of the Services and may request cancellation of
                any pending bookings in accordance with the Company’s
                cancellation policy.
              </p>
            </section>
            </div>
          </div>
        );

      default:
        return <div className="p-8">Page not found</div>;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row  gap-6 lg:gap-[24px] lg:pt-[2px]  lg:pb-[64px] lg:px-[72px] xl:h-[1000px]">
      {/* Sidebar */}
      <div className="w-full lg:w-[320px] px-[20px] lg:px-0 bg-white h-fit lg:sticky lg:top-0 lg:self-start ">
        <div className="p-2"></div>
        <nav className="mt-4 space-y-2 ">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center px-4 py-3 cursor-pointer text-left transition-colors rounded-[100px] ${
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
      <div className="flex-1 w-full h-full lg:justify-between overflow-auto gap-[8px]">
        {renderPageContent()}
      </div>
    </div>
  );
};

export default TermsOfUse;

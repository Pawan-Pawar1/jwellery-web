import React from "react";
import "./About.css"

export default function PrivacyPolicy() {
  return (
    <div className="p-6 max-w-4xl mx-auto privacy-container">
      <h1 className="text-3xl font-bold mb-4 main-heading">Privacy Policy</h1>
      <p>Last updated: January 2026</p>

      <h3 className="text-xl font-semibold mt-6 ">1. Introduction</h3>
      <p>
        We respect your privacy and are committed to protecting your personal
        data. This Privacy Policy explains how we collect, use, and safeguard
        your information when you visit our website.
      </p>

      <h3 className="text-xl font-semibold mt-6">2. Information We Collect</h3>
      <ul className="list-disc ml-6">
        <li>Personal details (name, email, phone) if you submit forms</li>
        <li>Usage data such as pages visited and time spent</li>
        <li>Cookies to enhance user experience</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">3. How We Use Your Information</h3>
      <ul className="list-disc ml-6">
        <li>To improve website functionality</li>
        <li>To respond to your messages or support requests</li>
        <li>To personalize your experience</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">4. Sharing of Information</h3>
      <p>
        We do <b>not</b> sell or trade your information. We may share data only
        with trusted service providers who assist in website operations.
      </p>

      <h3 className="text-xl font-semibold mt-6">5. Cookies</h3>
      <p>We use cookies to analyze website traffic and improve performance.</p>

      <h3 className="text-xl font-semibold mt-6">6. Security</h3>
      <p>
        We use industry-standard methods to protect your data, but no system is
        100% secure.
      </p>

      <h3 className="text-xl font-semibold mt-6">7. Your Rights</h3>
      <ul className="list-disc ml-6">
        <li>Request access to your stored data</li>
        <li>Request deletion of your data</li>
        <li>Opt out of cookies</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">8. Contact Us</h3>
      <p>
        If you have any questions, contact us at:  
        <b>support@example.com</b>
      </p>
    </div>
  );
}

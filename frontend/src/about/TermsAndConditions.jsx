import React from "react";
import './About.css'
export default function TermsAndConditions() {
  return (
    <div className="p-6 max-w-4xl mx-auto privacy-container">
      <h1 className="text-3xl font-bold mb-4 main-heading">Terms and Conditions</h1>
      <p>Last updated: January 2025</p>

      <h3 className="text-xl font-semibold mt-6">1. Acceptance of Terms</h3>
      <p>
        By accessing or using this website, you agree to be bound by these Terms
        and Conditions.
      </p>

      <h3 className="text-xl font-semibold mt-6">2. Use of Website</h3>
      <ul className="list-disc ml-6">
        <li>You must use the website lawfully.</li>
        <li>Do not attempt to hack, modify, or disrupt services.</li>
        <li>Content on this site is for personal and non-commercial use.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">3. Intellectual Property</h3>
      <p>
        All content including text, images, logos, and design are the property
        of the website owner and cannot be copied without permission.
      </p>

      <h3 className="text-xl font-semibold mt-6">4. User Accounts</h3>
      <ul className="list-disc ml-6">
        <li>You are responsible for maintaining your account confidentiality.</li>
        <li>We may terminate accounts for misuse or violations.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">5. Limitation of Liability</h3>
      <p>
        We are not responsible for losses arising from the use of this website,
        including technical errors or downtime.
      </p>

      <h3 className="text-xl font-semibold mt-6">6. External Links</h3>
      <p>
        We may provide links to other websites, but we are not responsible for
        their content or practices.
      </p>

      <h3 className="text-xl font-semibold mt-6">7. Changes to Terms</h3>
      <p>
        We may update these Terms at any time. Continued use of the site
        indicates acceptance of updated Terms.
      </p>

      <h3 className="text-xl font-semibold mt-6">8. Contact Us</h3>
      <p>
        For questions about these Terms, contact us at:  
        <b>support@example.com</b>
      </p>
    </div>
  );
}

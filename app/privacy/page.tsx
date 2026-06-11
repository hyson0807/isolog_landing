import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { SUPPORT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="December 2024">
      <h2>Introduction</h2>
      <p>
        IsoLog (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
        committed to protecting your privacy. This Privacy Policy explains how
        we handle information when you use our mobile application.
      </p>

      <h2>Information We Collect</h2>
      <p>IsoLog is designed with privacy in mind. We collect minimal information:</p>
      <ul>
        <li>
          <strong>Medication Records:</strong> Your daily medication check-ins,
          dosage frequency settings, and skin condition logs are stored locally
          on your device only.
        </li>
        <li>
          <strong>Device Identifier:</strong> A randomly generated anonymous ID
          is created for premium feature management. This ID cannot be used to
          identify you personally.
        </li>
      </ul>

      <h2>Information We Do NOT Collect</h2>
      <ul>
        <li>Personal identification information (name, email, phone number)</li>
        <li>Location data</li>
        <li>Health records beyond what you enter in the app</li>
        <li>Contacts or photos</li>
        <li>Browsing history</li>
      </ul>

      <h2>Data Storage</h2>
      <p>
        All your medication tracking data is stored locally on your device
        using secure storage mechanisms. We do not have access to your data,
        and it is not transmitted to any external servers.
      </p>

      <h2>Third-Party Services</h2>
      <p>Our app may use the following third-party services:</p>
      <ul>
        <li>
          <strong>Google AdMob:</strong> For displaying advertisements to free
          users. AdMob may collect device information for ad personalization.
          You can opt out of personalized ads in your device settings.
        </li>
      </ul>

      <h2>Data Security</h2>
      <p>
        Since all data is stored locally on your device, the security of your
        data depends on your device&apos;s security settings. We recommend
        using device passcode or biometric authentication to protect your data.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Our app is not intended for children under 13 years of age. We do not
        knowingly collect information from children under 13.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page and
        updating the &quot;Last updated&quot; date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at:
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </p>
    </LegalLayout>
  );
}

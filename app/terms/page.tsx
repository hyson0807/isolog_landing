import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { SUPPORT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="July 2026">
      <h2>1. Acceptance of Terms</h2>
      <p>
        By downloading, installing, or using IsoLog (&quot;the App&quot;), you
        agree to be bound by these Terms of Service. If you do not agree to
        these terms, please do not use the App.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        IsoLog is a medication tracking application designed to help users
        monitor their Isotretinoin treatment. The App allows you to:
      </p>
      <ul>
        <li>Track daily medication intake</li>
        <li>Record skin condition changes</li>
        <li>Set medication reminders</li>
        <li>View medication history on a calendar</li>
        <li>
          Back up and sync your records across devices (IsoLog Pro, signed in)
        </li>
        <li>Play mini-games and view global leaderboards</li>
      </ul>

      <h2>3. Medical Disclaimer</h2>
      <div className="mb-4 rounded-r-lg border-l-4 border-brand bg-brand-tint p-4">
        <p className="!mb-0">
          <strong>Important:</strong> IsoLog is NOT a medical device and does
          NOT provide medical advice. The App is intended for informational and
          tracking purposes only. Always consult with your healthcare provider
          for medical advice, diagnosis, or treatment. Never disregard
          professional medical advice or delay seeking it because of something
          you have read or tracked in this App.
        </p>
      </div>

      <h2>4. User Responsibilities</h2>
      <p>By using the App, you agree to:</p>
      <ul>
        <li>Provide accurate information when tracking your medication</li>
        <li>Not rely solely on the App for medical decisions</li>
        <li>
          Keep your device and sign-in credentials secure to protect your data
        </li>
        <li>Use the App in compliance with all applicable laws</li>
      </ul>

      <h2>5. Accounts &amp; Sync</h2>
      <p>
        You can create an account by signing in with Google or Apple. Account
        sign-in and cross-device sync are exclusive to IsoLog Pro subscribers.
        While signed in, your records are backed up to servers managed by
        IsoLog and can be restored on other devices. You can delete your
        account at any time in <strong>Settings &gt; Account</strong> inside
        the App, which permanently deletes all data stored on our servers.
      </p>

      <h2>6. Nicknames &amp; Leaderboards</h2>
      <p>
        The App includes mini-games with global leaderboards. If you are an
        IsoLog Pro subscriber and signed in, your best scores are stored on our
        servers and displayed on the leaderboard together with your nickname,
        which you can set or change inside the App. You agree not to use a
        nickname that is offensive, misleading, impersonates another person, or
        otherwise violates applicable laws. We reserve the right to change or
        remove inappropriate nicknames and to remove leaderboard entries that
        we reasonably believe result from cheating or abuse.
      </p>

      <h2>7. Premium Features</h2>
      <p>
        Some features of the App require a one-time purchase (IsoLog Pro).
        Premium features include:
      </p>
      <ul>
        <li>Tracking tab with dosage and skin trend charts</li>
        <li>Home dosage summary</li>
        <li>Backup and cross-device sync</li>
        <li>Saving game scores to the global leaderboard</li>
        <li>Ad-free experience</li>
      </ul>
      <p>
        All purchases are final and non-refundable, except as required by
        applicable law or app store policies.
      </p>

      <h2>8. Intellectual Property</h2>
      <p>
        All content, features, and functionality of the App are owned by
        IsoLog and are protected by international copyright, trademark, and
        other intellectual property laws.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, IsoLog shall not be liable for
        any indirect, incidental, special, consequential, or punitive damages
        resulting from your use of or inability to use the App.
      </p>

      <h2>10. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms of Service at any time. We
        will notify users of any material changes by updating the &quot;Last
        updated&quot; date. Your continued use of the App after such changes
        constitutes acceptance of the new terms.
      </p>

      <h2>11. Termination</h2>
      <p>
        You may stop using the App at any time by uninstalling it from your
        device. Locally stored data is deleted when you uninstall the App. If
        you used sync while signed in, data backed up on our servers is
        retained until you delete your account in{" "}
        <strong>Settings &gt; Account &gt; Delete Account</strong>.
      </p>

      <h2>12. Contact Information</h2>
      <p>
        For any questions regarding these Terms of Service, please contact us
        at:
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </p>
    </LegalLayout>
  );
}

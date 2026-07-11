import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { SUPPORT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="July 2026">
      <h2>Introduction</h2>
      <p>
        IsoLog (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
        committed to protecting your privacy. This Privacy Policy explains how
        we handle information when you use our mobile application.
      </p>

      <h2>Information We Collect</h2>
      <p>IsoLog is designed with privacy in mind. We collect:</p>
      <ul>
        <li>
          <strong>Medication Records:</strong> Your daily medication check-ins,
          dosage settings, and skin condition logs. This data is stored locally
          on your device by default.
        </li>
        <li>
          <strong>Account Information (only if you sign in):</strong> If you
          are an IsoLog Pro subscriber and sign in with Google or Apple to use
          the sync feature, we collect your email address, name (nickname), and
          a social account identifier used to operate your account. You can set
          or change your nickname inside the app; if you appear on a game
          leaderboard, your nickname is visible to other users.
        </li>
        <li>
          <strong>Game Scores:</strong> Your best scores in the in-app
          mini-games. If you are an IsoLog Pro subscriber and signed in, your
          best scores are stored on our servers and displayed on the global
          leaderboard together with your nickname. For all other users, game
          scores are stored only on your device.
        </li>
        <li>
          <strong>Community Content:</strong> If you sign in and use the
          community boards, we collect the content you create — posts, comments,
          likes, and any photos you choose to attach to a post (up to 5 per
          post) — along with your nickname. This content is stored on our
          servers and is publicly visible to other users of the app. Reading the
          community does not require an account, but posting, commenting, and
          liking do. If you report or block another user, we store that action
          to operate our moderation tools.
        </li>
        <li>
          <strong>Device Identifier:</strong> A randomly generated ID is
          created for premium feature management. This ID cannot be used to
          identify you personally.
        </li>
      </ul>

      <h2>Information We Do NOT Collect</h2>
      <ul>
        <li>Location data</li>
        <li>Health records beyond what you enter in the app</li>
        <li>Contacts</li>
        <li>
          Your photo library — we only access the specific photos you choose to
          attach to a community post
        </li>
        <li>Browsing history</li>
      </ul>

      <h2>Data Storage &amp; Sync</h2>
      <p>
        Your medication tracking data is stored locally on your device by
        default. Only when an IsoLog Pro subscriber signs in and uses the sync
        feature, your medication and skin condition records are transmitted
        over encrypted connections (HTTPS) and stored on servers managed by
        IsoLog, so that your records can be backed up and restored on other
        devices. Game best scores of signed-in IsoLog Pro subscribers are also
        stored on our servers to operate the leaderboard. Community posts,
        comments, and attached photos are stored on our servers (including image
        hosting on Cloudflare R2) so they can be shown to other users. If you
        never sign in, your medication data never leaves your device.
      </p>

      <h2>Leaderboards</h2>
      <p>
        Game leaderboards are visible to all users of the app. A leaderboard
        entry shows only your nickname and best score — never your email,
        health records, or any other personal information. Your health and
        medication data is never shown to other users. You can change your
        nickname at any time inside the app, and deleting your account removes
        your leaderboard entries.
      </p>

      <h2>Community &amp; User-Generated Content</h2>
      <p>
        Anything you post to the community — text, photos, comments, and your
        nickname — is public and can be seen by other users of the app. Please
        do not include sensitive personal information (such as your full name,
        contact details, or identifiable health information) in community posts.
        Your private medication and skin records are never shared with the
        community.
      </p>
      <p>
        We do not tolerate objectionable content or abusive behavior. You can
        report a post or comment, or block another user, directly inside the
        app. We review reports and remove content or restrict accounts that
        violate our{" "}
        <a href="/terms">Terms of Service</a>. You can delete your own posts and
        comments at any time; deleting your account also removes the community
        content and photos you created.
      </p>

      <h2>Third-Party Services</h2>
      <p>Our app uses the following third-party services:</p>
      <ul>
        <li>
          <strong>RevenueCat:</strong> For payment and subscription
          management. It uses a device identifier, or your account identifier
          when you are signed in.
        </li>
        <li>
          <strong>Google / Apple Sign-In:</strong> For account authentication.
          Their use of your information is governed by their respective
          privacy policies.
        </li>
        <li>
          <strong>Google AdMob:</strong> For displaying advertisements to free
          users. AdMob may collect device information for ad personalization.
          You can opt out of personalized ads in your device settings.
        </li>
      </ul>
      <p>
        Your health records are never sold or shared with third parties for
        marketing purposes.
      </p>

      <h2>Data Security</h2>
      <p>
        Locally stored data is protected by your device&apos;s security
        settings; we recommend using a device passcode or biometric
        authentication. Synced data is transmitted over encrypted connections
        (HTTPS), and authentication tokens are stored in your device&apos;s
        secure storage.
      </p>

      <h2>Data Deletion</h2>
      <p>
        Uninstalling the app deletes the data stored on your device. If you
        used sync while signed in, data backed up on our servers is retained so
        you can restore it by signing in again. You can permanently delete your
        account and all server data, including synced records, game scores, and
        community posts, comments, and photos, at any time in{" "}
        <strong>Settings &gt; Account &gt; Delete Account</strong> inside the
        app. Deletion is immediate and cannot be recovered.
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

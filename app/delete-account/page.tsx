import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { SUPPORT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Delete Your Account",
  alternates: { canonical: "/delete-account" },
};

// Google Play 데이터 보안 정책상 계정 삭제 요청 웹 URL이 필수라서 존재하는
// 페이지 — 실제 삭제는 앱 내에서 즉시 처리된다.
export default function DeleteAccountPage() {
  return (
    <LegalLayout title="Delete Your Account" lastUpdated="July 2026">
      <h2>Delete Directly in the App (Recommended)</h2>
      <p>
        You can permanently delete your IsoLog account and all associated data
        at any time, directly in the app:
      </p>
      <ul>
        <li>
          Open IsoLog and go to <strong>Settings &gt; Account</strong>
        </li>
        <li>
          Tap <strong>Delete Account</strong> and confirm
        </li>
      </ul>
      <p>
        Deletion takes effect <strong>immediately</strong> and cannot be
        undone.
      </p>

      <h2>What Gets Deleted</h2>
      <ul>
        <li>
          Your account (email address, name, and social sign-in identifier)
        </li>
        <li>
          All medication and skin condition records backed up on our servers
        </li>
        <li>All active sign-in sessions</li>
      </ul>
      <p>
        During deletion, you can choose whether to also remove the records
        stored locally on your device, or keep them on the device for offline
        use.
      </p>

      <h2>Can&apos;t Access the App?</h2>
      <p>
        If you no longer have access to the app (for example, the device was
        lost), email us from the address associated with your account and we
        will delete your account and all server data for you:
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href={`mailto:${SUPPORT_EMAIL}?subject=Account%20Deletion%20Request`}>
          {SUPPORT_EMAIL}
        </a>
      </p>
      <p>
        Please include the email address you used to sign in (Google or Apple).
        Requests are processed within 7 days.
      </p>

      <h2>Related</h2>
      <p>
        For details on how we handle your data, see our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>
    </LegalLayout>
  );
}

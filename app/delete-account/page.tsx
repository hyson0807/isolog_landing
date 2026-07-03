import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { SUPPORT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Delete Your Account or Data",
  alternates: { canonical: "/delete-account" },
};

// Google Play 데이터 보안 정책 대응 페이지 — 계정 삭제 URL과 데이터 삭제
// 요청 URL 두 입력란에 모두 이 페이지를 사용한다. 실제 삭제는 앱 내에서
// 즉시 처리된다.
export default function DeleteAccountPage() {
  return (
    <LegalLayout title="Delete Your Account or Data" lastUpdated="July 2026">
      <p>
        This page explains how to delete your <strong>IsoLog</strong> account,
        or delete some or all of your data without deleting your account.
      </p>

      <h2>Delete Your Account (in the App)</h2>
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

      <h2>What Gets Deleted with Your Account</h2>
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

      <h2>Delete Data Without Deleting Your Account</h2>
      <p>
        You can delete some or all of your data while keeping your IsoLog
        account:
      </p>
      <ul>
        <li>
          <strong>Individual records:</strong> In the app, open the{" "}
          <strong>Calendar</strong> tab, tap a date, and uncheck the medication
          record or clear the skin record. If you are signed in, the deletion
          is applied to our servers automatically within seconds.
        </li>
        <li>
          <strong>All records at once:</strong> Email us (see below) and we
          will erase all medication and skin condition records from our
          servers while keeping your account and subscription intact.
        </li>
      </ul>

      <h2>Data Types &amp; Retention</h2>
      <ul>
        <li>
          <strong>Account information</strong> (email, name, sign-in
          identifier): kept while your account exists; deleted immediately when
          the account is deleted.
        </li>
        <li>
          <strong>Medication &amp; skin condition records:</strong> kept while
          your account exists; individual deletions are applied immediately.
          After a record is deleted, only a minimal sync marker (the record
          date) is temporarily retained so your other devices stay consistent
          — the record contents are erased. All markers are permanently
          removed when the account is deleted.
        </li>
        <li>
          We do not retain backups of deleted accounts. No additional
          retention period applies beyond the above.
        </li>
      </ul>

      <h2>Request by Email</h2>
      <p>
        For a full-data erasure without deleting your account, or if you no
        longer have access to the app (for example, the device was lost),
        email us and we will process the deletion for you:
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href={`mailto:${SUPPORT_EMAIL}?subject=IsoLog%20Data%20Deletion%20Request`}>
          {SUPPORT_EMAIL}
        </a>
      </p>
      <p>
        Please include the email address you used to sign in (Google or Apple)
        and specify whether you want your data, your account, or both deleted.
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

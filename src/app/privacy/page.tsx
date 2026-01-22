import type { Metadata } from "next";

/*
 * Privacy Page
 *
 * Written in plain English, not legalese.
 * Trust is critical for an app dealing with sensitive goals.
 * Users need to feel safe before they will engage honestly.
 *
 * Structure:
 * - What we collect (minimal)
 * - What we do NOT collect (important to state explicitly)
 * - How data is stored
 * - User control
 * - Third parties
 */

export const metadata: Metadata = {
  title: "Privacy - Promise Buddy",
  description:
    "Our privacy policy in plain English. Learn what data we collect, what we do not collect, and how we keep your information safe.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full px-6 md:px-8 py-16 md:py-24">
      <article className="max-w-2xl mx-auto">
        {/* Page header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-text-secondary">
            In plain English. No legalese.
          </p>
        </header>

        {/* Main content */}
        <div className="space-y-10 text-text-secondary leading-relaxed">
          {/* Overview */}
          <section>
            <h2 className="text-xl font-medium text-text-primary mb-4">
              The short version
            </h2>
            <p>
              Your data belongs to you. We collect only what is necessary to
              make the app work. We do not sell your information. We do not
              share it with advertisers. We do not track you across the web.
            </p>
          </section>

          {/* What we collect */}
          <section>
            <h2 className="text-xl font-medium text-text-primary mb-4">
              What we collect
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2.5 flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">Your promise.</strong>{" "}
                  The goal you set in the app is stored locally on your device.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2.5 flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">Daily check-ins.</strong>{" "}
                  Your check-in history is stored locally so you can see your
                  progress over time.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2.5 flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">App preferences.</strong>{" "}
                  Settings like notification times are stored on your device.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2.5 flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">
                    Anonymous usage data.
                  </strong>{" "}
                  Basic analytics like app opens help us understand if the app
                  is working. This data cannot be tied to you personally.
                </span>
              </li>
            </ul>
          </section>

          {/* What we do NOT collect */}
          <section>
            <h2 className="text-xl font-medium text-text-primary mb-4">
              What we do NOT collect
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-stone mt-2.5 flex-shrink-0" />
                <span>Your name or contact information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-stone mt-2.5 flex-shrink-0" />
                <span>Your location</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-stone mt-2.5 flex-shrink-0" />
                <span>Your health data from other apps</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-stone mt-2.5 flex-shrink-0" />
                <span>Your browsing history</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-stone mt-2.5 flex-shrink-0" />
                <span>Your contacts or photos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-stone mt-2.5 flex-shrink-0" />
                <span>Any data for advertising purposes</span>
              </li>
            </ul>
          </section>

          {/* Data storage */}
          <section>
            <h2 className="text-xl font-medium text-text-primary mb-4">
              Where your data lives
            </h2>
            <p className="mb-4">
              Most of your data stays on your device. Your promise, check-in
              history, and preferences are stored locally using your phone's
              built-in storage.
            </p>
            <p>
              If you choose to enable cloud backup, your data is encrypted and
              stored securely. Only you can access it. We cannot read your
              check-in history or see what promise you have set.
            </p>
          </section>

          {/* Third parties */}
          <section>
            <h2 className="text-xl font-medium text-text-primary mb-4">
              Third parties
            </h2>
            <p className="mb-4">We do not sell your data. Ever.</p>
            <p className="mb-4">
              We use a small number of services to help the app function:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2.5 flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">
                    Anonymous analytics.
                  </strong>{" "}
                  Helps us understand basic usage patterns. Cannot identify
                  individual users.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2.5 flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">Crash reporting.</strong>{" "}
                  Helps us fix bugs. Does not include personal data.
                </span>
              </li>
            </ul>
          </section>

          {/* User control */}
          <section>
            <h2 className="text-xl font-medium text-text-primary mb-4">
              Your control
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2.5 flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">Delete your data.</strong>{" "}
                  You can delete all your data from within the app at any time.
                  It is gone immediately.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2.5 flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">
                    Disable analytics.
                  </strong>{" "}
                  You can opt out of anonymous analytics in the app settings.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2.5 flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">Export your data.</strong>{" "}
                  Your check-in history is yours. You can export it anytime.
                </span>
              </li>
            </ul>
          </section>

          {/* Children */}
          <section>
            <h2 className="text-xl font-medium text-text-primary mb-4">
              Children
            </h2>
            <p>
              Promise Buddy is designed for adults. We do not knowingly collect
              data from children under 13.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-xl font-medium text-text-primary mb-4">
              Changes to this policy
            </h2>
            <p>
              If we make significant changes to how we handle your data, we will
              notify you in the app before those changes take effect.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-medium text-text-primary mb-4">
              Questions
            </h2>
            <p>
              If you have questions about your privacy or how your data is
              handled, please reach out. We are happy to explain anything in
              more detail.
            </p>
            <p className="mt-4">
              <a
                href="/support"
                className="text-sage-dark hover:text-sage transition-colors"
              >
                Contact us
              </a>
            </p>
          </section>
        </div>

        {/* Last updated */}
        <footer className="mt-16 pt-8 border-t border-stone">
          <p className="text-sm text-text-muted">
            Last updated: January 2026
          </p>
        </footer>
      </article>
    </div>
  );
}

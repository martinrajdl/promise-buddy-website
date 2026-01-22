import type { Metadata } from "next";

/*
 * Support Page
 *
 * Structure:
 * - FAQ section with common questions
 * - Contact information
 * - Reassuring tone throughout
 *
 * The FAQ answers should match the calm, honest tone
 * of the rest of the site. No marketing speak.
 */

export const metadata: Metadata = {
  title: "Support - Promise Buddy",
  description:
    "Get help with Promise Buddy. Find answers to common questions or reach out directly.",
};

export default function SupportPage() {
  return (
    <div className="w-full px-6 md:px-8 py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        {/* Page header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-text-primary mb-4">
            Support
          </h1>
          <p className="text-lg text-text-secondary">
            Questions, feedback, or just want to say hello. We are here.
          </p>
        </header>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-xl font-medium text-text-primary mb-8">
            Common questions
          </h2>

          <div className="space-y-8">
            <FAQItem
              question="What is Promise Buddy?"
              answer="Promise Buddy is a mobile app that helps you keep personal promises by caring for a virtual companion. You pick a goal, check in once a day, and your buddy responds to your honesty. It is designed to be gentle and supportive, not pushy or guilt-inducing."
            />

            <FAQItem
              question="Is it free?"
              answer="Yes. Promise Buddy is free to download and use. There are no ads. We may offer optional premium features in the future, but the core experience will always be free."
            />

            <FAQItem
              question="Is my data private?"
              answer="Yes. Your promise, check-in history, and preferences are stored locally on your device. We do not collect personal information. We do not sell data. We do not share your information with advertisers. You can read our full privacy policy for details."
            />

            <FAQItem
              question="What kinds of promises can I track?"
              answer="You can track any personal promise that matters to you. Common examples include sobriety, quitting smoking, fasting windows, daily protein intake, step goals, or any custom commitment. The app is designed to focus on one promise at a time."
            />

            <FAQItem
              question="What happens if I miss a day?"
              answer="Nothing bad. Your buddy does not punish you. There are no streaks to break or points to lose. When you come back, you simply check in again. The app is designed to support you through setbacks, not shame you for them."
            />

            <FAQItem
              question="Is this a medical app?"
              answer="No. Promise Buddy is a personal companion app. It is not a substitute for medical advice, therapy, or professional treatment. If you are dealing with addiction, mental health challenges, or other serious issues, please seek appropriate professional support."
            />

            <FAQItem
              question="Do I need to create an account?"
              answer="No. You can start using the app immediately without creating an account. If you want to back up your data across devices, you can optionally sign in, but it is not required."
            />

            <FAQItem
              question="Is there a social or community feature?"
              answer="No. Promise Buddy is intentionally private. There is no social feed, no profiles, no way for others to see your goals or progress. Your journey is yours alone."
            />

            <FAQItem
              question="What devices is it available on?"
              answer="Promise Buddy is currently available for iOS. We are considering Android support based on user interest."
            />
          </div>
        </section>

        {/* Contact Section */}
        <section className="p-8 bg-warm-white rounded-2xl">
          <h2 className="text-xl font-medium text-text-primary mb-4">
            Get in touch
          </h2>
          <p className="text-text-secondary mb-6">
            Have a question not answered here? Found a bug? Want to share
            feedback? We would genuinely like to hear from you.
          </p>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-text-muted mb-1">Email</p>
              <a
                href="mailto:hello@promisebuddy.app"
                className="text-text-primary hover:text-sage-dark transition-colors"
              >
                hello@promisebuddy.app
              </a>
            </div>
          </div>

          <p className="mt-6 text-sm text-text-muted">
            We read every message. Responses may take a few days, but we will
            get back to you.
          </p>
        </section>

        {/* Closing note */}
        <section className="mt-12 pt-8 border-t border-stone">
          <p className="text-sm text-text-muted leading-relaxed">
            If you are going through a difficult time, please know that support
            is available. In the US, you can call or text 988 to reach the
            Suicide and Crisis Lifeline. In other countries, please reach out to
            local crisis services. You are not alone.
          </p>
        </section>
      </div>
    </div>
  );
}

/* ================================
   FAQ Item Component

   Simple, accessible expandable item.
   For this static site, we keep it simple
   and show all answers expanded by default.
   ================================ */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="pb-6 border-b border-stone last:border-0 last:pb-0">
      <h3 className="font-medium text-text-primary mb-2">{question}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{answer}</p>
    </div>
  );
}

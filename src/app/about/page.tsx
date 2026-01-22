import type { Metadata } from "next";

/*
 * About Page
 *
 * This page explains the philosophy behind Promise Buddy.
 * The tone is reflective, human, and sincere.
 * No corporate speak, no marketing fluff.
 *
 * Key themes:
 * - Care over discipline
 * - Gentle accountability vs pressure
 * - Why this approach works
 */

export const metadata: Metadata = {
  title: "About - Promise Buddy",
  description:
    "Learn why Promise Buddy exists and how gentle accountability works better than pressure.",
};

export default function AboutPage() {
  return (
    <div className="w-full px-6 md:px-8 py-16 md:py-24">
      <article className="max-w-2xl mx-auto">
        {/* Page header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-text-primary mb-4">
            About Promise Buddy
          </h1>
          <p className="text-lg text-text-secondary">
            A personal reflection on why we built this app.
          </p>
        </header>

        {/* Main content - written in a human, reflective tone */}
        <div className="space-y-8 text-text-secondary leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-text-primary mb-4">
              Why Promise Buddy exists
            </h2>
            <p className="mb-4">
              Most habit apps feel like productivity tools. They track streaks,
              count points, and send notifications that feel more like demands
              than support. If you miss a day, they show you broken chains and
              reset counters. The message is clear: you failed.
            </p>
            <p>
              We wanted something different. Something that feels less like a
              drill sergeant and more like a quiet friend who understands that
              change is hard.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-text-primary mb-4">
              Care over discipline
            </h2>
            <p className="mb-4">
              Promise Buddy is built on a simple idea: caring for something
              outside yourself can help you care for yourself. When you take
              care of your virtual buddy, you are really taking care of you.
            </p>
            <p className="mb-4">
              Your buddy does not punish you for bad days. They do not
              guilt-trip you for missed check-ins. They just stay with you,
              responding to your honesty with understanding.
            </p>
            <p>
              This is not a trick or a gimmick. It is a gentle reframing. The
              promise you make is still yours. The buddy just makes the journey
              feel less lonely.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-text-primary mb-4">
              Why gentle accountability works
            </h2>
            <p className="mb-4">
              Research on behavior change suggests that shame is not an
              effective motivator. When we feel bad about ourselves, we are more
              likely to give up than to try harder. Guilt creates a cycle of
              avoidance.
            </p>
            <p className="mb-4">
              Gentle accountability takes a different approach. Instead of
              punishment for failure, there is simply acknowledgment. Instead of
              pressure to be perfect, there is space to be honest. Instead of
              external rewards, there is the quiet satisfaction of showing up
              for yourself.
            </p>
            <p>
              Your buddy thrives when you check in honestly, not when you have a
              perfect record. That difference matters more than it might seem.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-text-primary mb-4">
              For the hard promises
            </h2>
            <p className="mb-4">
              Some of the goals people bring to Promise Buddy are deeply
              personal. Sobriety. Recovery. Starting over. These are not casual
              commitments that fit neatly into a productivity framework.
            </p>
            <p className="mb-4">
              We designed the app with these users in mind. No social features
              that invite comparison. No public profiles that create pressure.
              No streaks that make a hard day feel like a catastrophe.
            </p>
            <p>
              Just you, your buddy, and the promise you are trying to keep. One
              day at a time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-text-primary mb-4">
              A note on what we are not
            </h2>
            <p className="mb-4">
              Promise Buddy is not a medical app. It is not therapy. It is not a
              replacement for professional help if you need it.
            </p>
            <p>
              It is simply a companion. A small tool that might make the daily
              work of keeping promises a little easier. We hope it helps.
            </p>
          </section>
        </div>

        {/* Closing */}
        <footer className="mt-16 pt-8 border-t border-stone">
          <p className="text-sm text-text-muted">
            Thank you for taking the time to learn about Promise Buddy. If you
            have questions or thoughts, we would love to hear from you.
          </p>
          <p className="text-sm text-text-muted mt-2">
            <a
              href="/support"
              className="text-sage-dark hover:text-sage transition-colors"
            >
              Get in touch
            </a>
          </p>
        </footer>
      </article>
    </div>
  );
}

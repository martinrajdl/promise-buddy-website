import Link from "next/link";

/*
 * Footer Component
 *
 * Simple, informative footer. No social media links since
 * we don't want to encourage comparison or social pressure.
 * The disclaimer about not being a medical app is important
 * for users dealing with health-related promises.
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-6 md:px-8 mt-16 border-t border-stone">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand and disclaimer */}
          <div className="max-w-sm">
            <p className="text-sm font-medium text-text-primary mb-2">
              Promise Buddy
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              A personal companion for keeping the promises that matter to you.
              Not a medical app. Not a replacement for professional support.
            </p>
          </div>

          {/* Navigation links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-secondary">
              <li>
                <Link
                  href="/"
                  className="hover:text-text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="hover:text-text-primary transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-text-primary transition-colors"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-stone">
          <p className="text-xs text-text-muted">
            {currentYear} Promise Buddy. Made with care.
          </p>
        </div>
      </div>
    </footer>
  );
}

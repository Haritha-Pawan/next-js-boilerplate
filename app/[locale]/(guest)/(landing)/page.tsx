import Service from "@/components/landing/features/grid/grid-1";
import Hero from "@/components/landing/hero/hero-1";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 md:px-6 lg:px-8">
        {/* Hero Section */}
        <Hero/>
       

        {/* Features Section */}
        <Service/>
        <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-xl w-full">
          <div className="flex flex-col items-center text-center p-6">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Ready-to-use Components
            </h3>
            <p className="text-muted-foreground">
              Beautiful and responsive UI components built with Tailwind CSS
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">i18n Support</h3>
            <p className="text-muted-foreground">
              Built-in internationalization support for multiple languages
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Authentication & More
            </h3>
            <p className="text-muted-foreground">
              Complete authentication flow and subscription management
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

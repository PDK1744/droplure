import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-20 px-6 text-center ">
      <h2 className="text-4xl md:text-5x font-bold mb-4">
        Effortless File Transfers Between Your Devices
      </h2>
      <p className="text-lg md:text-xl mb-8 text-gray-600">
        No cables. Just a link.
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          href="/sign-up"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-amber-700"
        >
          Sign Up
        </Link>
        <Link
          href="/#pricing"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-amber-700 hover:text-white"
        >
          View Pricing
        </Link>
      </div>
      <div className="bg-white py-16 px-6 m-8">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              End-to-End Encryption
            </h3>
            <p className="text-gray-600">
              Your files are encrypted before they leave your device.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              No Login Required (Free Tier)
            </h3>
            <p className="text-gray-600">
              Just upload, copy the link, and you are done!
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Pro Features</h3>
            <p className="text-gray-600">
              Password protection, long-term storage, and more.
            </p>
          </div>
        </div>
      </div>
      <div id="pricing" className="bg-gray-100 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Simple Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Free</h3>
              <p className="text-gray-600 mb-4">Great for light users</p>
              <ul className="text-left mb-6 space-y-2 text-gray-700">
                <li>✔️ 5 transfers/month</li>
                <li>✔️ Up to 1GB total</li>
                <li>❌ No password protection</li>
              </ul>
              <Link
                href="/upload"
                className="block px-4 py-2 text-center bg-blue-600 text-white rounded hover:bg-amber-700"
              >
                Get Started
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border border-blue-600">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Pro - $8/month
              </h3>
              <p className="text-gray-600 mb-4">For power users and pros.</p>
              <ul className="text-left mb-6 space-y-2 text-gray-700">
                <li>✔️ Unlimited transfers</li>
                <li>✔️ Up to 1 year expiration</li>
                <li>✔️ Password protection</li>
              </ul>
              <Link
                href="/dashboard"
                className="block px-4 py-2 text-center bg-blue-600 text-white rounded hover:bg-amber-700"
              >
                Upgrade Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Route } from "./+types/home";
import bookSingle from "../assets/whitetails-book-single.png";
import bookDouble from "../assets/whitetails-book-double.png";
import ProductCard from '../components/ProductCard';
import { Link } from "react-router";

import woodyAssetUrl from "../assets/woody-nawt.jpg"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Whitetails, Etc. - Gene Wensel's New Book" },
    { name: "description", content: "Gene Wensel's new book on traditional bowhunting and the authentic whitetail experience. 300+ pages of timeless wisdom from a legendary bowhunter." },
  ];
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 tracking-tight">Whitetails, Etc.</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            The latest masterpiece from legendary bowhunter Gene Wensel, featuring 300+ pages of timeless wisdom on traditional bowhunting and the authentic whitetail experience.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What's Inside</h2>
            <ul className="text-left space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Advanced whitetail hunting strategies from 60+ years of experience
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                In-depth chapters on scouting, stand placement, and reading deer sign
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Personal stories and lessons from countless trophy bucks
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Philosophical insights on the deeper meaning of hunting
              </li>
            </ul>
          </div>
        </section>

        {/* Featured Image Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder for featured hunting image */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                [Featured Hunting Image]
              </div>
            </div>
          </div>
        </section>
        
        {/* Product Cards */}
        <section className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto mb-16">
          <ProductCard 
            title="1 Copy"
            price="60.00"
            shipping="11.00"
            link="https://www.paypal.com/ncp/payment/3A634YDANFPXY"
            description="Purchase one copy of this full-color, hard cover book."
            image={bookSingle}
          />
          <ProductCard 
            title="2 Copies - Save on Shipping"
            price="120.00"
            shipping="11.00"
            link="https://www.paypal.com/ncp/payment/GYZ484GD75B2J"
            description="Purchase two copies and pay the same flat shipping rate."
            image={bookDouble}
          />
        </section>

        {/* Book Preview Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">A Glimpse Inside</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-lg mb-4">
                {/* Placeholder for book sample page */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  [Book Sample Page]
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Chapter Preview</h3>
              <p className="text-gray-600">
                Get a taste of Gene's writing style and the depth of knowledge you'll find in every chapter.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-lg mb-4">
                {/* Placeholder for book sample page */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  [Book Sample Page]
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Photography</h3>
              <p className="text-gray-600">
                Stunning full-color photographs that bring the stories and lessons to life.
              </p>
            </div>
          </div>
        </section>

        {/* About the Author */}
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">About Gene Wensel</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 mb-4">
                  Gene Wensel is a legendary traditional bowhunter with over six decades of experience pursuing whitetail deer. Along with his twin brother Barry, Gene has built an unparalleled reputation for consistently taking record-class bucks with traditional gear.
                </p>
                <p className="text-gray-700 mb-6">
                  Their expertise has been featured in numerous publications and they've produced groundbreaking hunting videos that have inspired generations of bowhunters.
                </p>
                <div className="text-center md:text-left">
                  <Link 
                    to="/about" 
                    className="inline-block text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                  >
                    Learn more about Gene and Barry Wensel →
                  </Link>
                </div>
              </div>
              <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg">
                {/* Placeholder for Gene Wensel portrait */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <img src={woodyAssetUrl} alt="Gene Wensel Portrait" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What Others Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-full mb-4">
                {/* Placeholder for testimonial author photo */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  [Author Photo]
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Gene's insights into whitetail behavior are unmatched. This book is a must-read for any serious bowhunter."
              </p>
              <p className="text-gray-900 font-semibold">- John Doe</p>
              <p className="text-gray-600 text-sm">Traditional Bowhunter Magazine</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-full mb-4">
                {/* Placeholder for testimonial author photo */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  [Author Photo]
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "The depth of knowledge in this book is incredible. Every page offers valuable insights."
              </p>
              <p className="text-gray-900 font-semibold">- Jane Smith</p>
              <p className="text-gray-600 text-sm">Bowhunting Enthusiast</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-full mb-4">
                {/* Placeholder for testimonial author photo */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  [Author Photo]
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "A masterpiece that combines practical advice with the deeper meaning of the hunt."
              </p>
              <p className="text-gray-900 font-semibold">- Mike Johnson</p>
              <p className="text-gray-600 text-sm">Professional Guide</p>
            </div>
          </div>
        </section>

        {/* Order Information */}
        <section className="max-w-3xl mx-auto text-center bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Order Information</h3>
          <div className="space-y-6 text-gray-700">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Order Online</h4>
              <p className="mb-4">Click on the "Order Now" buttons above to purchase through PayPal.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Order by Mail</h4>
              <p className="mb-2">To order by mail, send a check made out to <strong className="text-gray-900">Wensel Publications</strong> to:</p>
              <p className="font-semibold text-gray-900">PO Box 1383, Hamilton, MT 59840</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Questions?</h4>
              <p>
                Email us at <a 
                  href="mailto:wenselpublications@gmail.com" 
                  className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                >
                  wenselpublications@gmail.com
                </a>
              </p>
            </div>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Wensel Publications. All Rights Reserved.
          </p>
        </section>
      </main>
    </div>
  );
}
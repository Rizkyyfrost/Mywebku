import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-semibold text-xl">BrandName</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-sm font-medium hover:text-amber-600 transition-colors">
              Home
            </a>
            <a href="#" className="text-sm font-medium hover:text-amber-600 transition-colors">
              Features
            </a>
            <a href="#" className="text-sm font-medium hover:text-amber-600 transition-colors">
              Pricing
            </a>
            <a href="#" className="text-sm font-medium hover:text-amber-600 transition-colors">
              Contact
            </a>
          </nav>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Introducing Our <span className="text-amber-600">Premium</span> Product
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              A revolutionary solution designed to transform your experience with unparalleled quality and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="inline-flex h-12 items-center justify-center rounded-md bg-black px-6 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
                Get Started
              </button>
              <button className="inline-flex h-12 items-center justify-center rounded-md border border-gray-200 bg-white px-6 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Product Image"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold">Elegance Meets Functionality</h2>
          <p className="text-gray-600 text-lg">
            Our product combines sleek design with powerful performance. Crafted with precision and attention to detail,
            it delivers an exceptional experience that exceeds expectations.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 border rounded-lg space-y-3 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Feature {i}</h3>
                <p className="text-gray-600">
                  Experience the perfect blend of form and function with our innovative design and cutting-edge
                  technology.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Experience Excellence?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their lives with our premium product.
          </p>
          <button className="inline-flex h-12 items-center justify-center rounded-md bg-amber-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500">
            Order Now <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-semibold mb-4 md:mb-0">BrandName</div>
            <div className="text-sm text-gray-500">© {new Date().getFullYear()} BrandName. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}


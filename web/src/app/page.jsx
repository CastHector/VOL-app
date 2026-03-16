import {
  Phone,
  FileText,
  Calendar,
  Users,
  Building,
  Briefcase,
  User,
  Bell,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="bg-gray-100 py-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end items-center text-sm text-gray-600">
              <span className="mr-4">Village of Lyons</span>
              <div className="flex space-x-2">
                <a href="#" className="hover:text-blue-600">
                  Facebook
                </a>
                <span>|</span>
                <button className="hover:text-blue-600">
                  <Bell className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">VL</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-800">VILLAGE OF</h1>
                <h2 className="text-3xl font-bold text-blue-800">LYONS</h2>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="bg-green-700 text-white px-6 py-2 rounded font-medium hover:bg-green-800">
                CONTACT US
              </button>
              <button className="bg-green-600 text-white px-6 py-2 rounded font-medium hover:bg-green-700">
                REPORT A CONCERN
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 py-3">
              <a href="#" className="hover:text-gray-300 font-medium">
                HOME
              </a>
              <a href="#" className="hover:text-gray-300">
                ABOUT
              </a>
              <a href="#" className="hover:text-gray-300">
                DEPARTMENTS
              </a>
              <a href="#" className="hover:text-gray-300">
                RESIDENTS
              </a>
              <a href="#" className="hover:text-gray-300">
                GOVERNMENT
              </a>
              <a href="#" className="hover:text-gray-300">
                VISITORS
              </a>
              <a href="#" className="hover:text-gray-300">
                NEWS
              </a>
            </div>
          </div>
        </nav>

        {/* Events Bar */}
        <div className="bg-green-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm">EVENTS</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h2 className="text-sm font-medium mb-2 tracking-wide">
              WELCOME TO THE
            </h2>
            <h1 className="text-5xl font-bold mb-4">VILLAGE OF LYONS</h1>
            <p className="text-xl">GATEWAY TO THE WEST</p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Main Sections */}
          <div className="lg:col-span-3">
            {/* Four Main Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-blue-800 text-white p-6 rounded-lg text-center hover:bg-blue-900 transition-colors cursor-pointer">
                <Building className="w-12 h-12 mx-auto mb-3" />
                <h3 className="font-bold text-lg">GOVERNMENT</h3>
              </div>
              <div className="bg-blue-700 text-white p-6 rounded-lg text-center hover:bg-blue-800 transition-colors cursor-pointer">
                <Users className="w-12 h-12 mx-auto mb-3" />
                <h3 className="font-bold text-lg">RESIDENTS</h3>
              </div>
              <div className="bg-blue-600 text-white p-6 rounded-lg text-center hover:bg-blue-700 transition-colors cursor-pointer">
                <Briefcase className="w-12 h-12 mx-auto mb-3" />
                <h3 className="font-bold text-lg">BUSINESS</h3>
              </div>
              <div className="bg-blue-500 text-white p-6 rounded-lg text-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Calendar className="w-12 h-12 mx-auto mb-3" />
                <h3 className="font-bold text-lg">EVENTS</h3>
              </div>
            </div>

            {/* Mayor Message */}
            <div className="bg-gray-800 text-white rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-gray-600 rounded-lg flex items-center justify-center">
                  <User className="w-12 h-12" />
                </div>
                <div className="flex-1">
                  <h3 className="text-green-400 text-xl font-bold mb-2">
                    MESSAGE FROM THE MAYOR
                  </h3>
                  <p className="italic text-lg mb-2">
                    "Resident Driven, Business Friendly, Moving Lyons Forward."
                  </p>
                  <p className="text-gray-300">
                    Welcome to our community website. Here you'll find important
                    information about village services, upcoming events, and
                    ways to get involved in making Lyons an even better place to
                    live and work.
                  </p>
                </div>
              </div>
            </div>

            {/* Community News */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                COMMUNITY NEWS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="font-bold text-lg mb-2 text-green-600">
                    FARMERS MARKET
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Fresh local produce and vendors every Wednesday
                  </p>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Read more →
                  </button>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="font-bold text-lg mb-2 text-green-600">
                    MONSTERS IN SMITH PARK
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Get ready for a spooky good time at our annual Halloween
                    event
                  </p>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Read more →
                  </button>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="font-bold text-lg mb-2 text-green-600">
                    SPOOKY SHUFFLE 2025
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Walk, jog, run, and shuffle your way too...
                  </p>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Read more →
                  </button>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="font-bold text-lg mb-2 text-green-600">
                    FALL CLEANUP
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Village leaf pickup begins the third week of October
                    through...
                  </p>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Read more →
                  </button>
                </div>
              </div>
            </div>

            {/* Connect Section */}
            <div className="bg-gray-800 text-white rounded-lg p-8 mt-8">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    CONNECT WITH YOUR COMMUNITY
                  </h3>
                  <p className="text-gray-300">
                    News, Events, and the Information you care about
                  </p>
                </div>
                <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded hover:bg-white hover:text-gray-800 transition-colors">
                  GET CONNECTED
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Government Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">
                GOVERNMENT
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    - Elected Officials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    - Boards & Commissions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    - Services & Regulations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    - Village Code
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    - Government Links
                  </a>
                </li>
              </ul>
            </div>

            {/* Pay Bills */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">
                PAY BILLS
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    - Water Bill
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    - Parking Ticket/Village Ordinance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    - Vehicle Sticker
                  </a>
                </li>
              </ul>
            </div>

            {/* Popular */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">POPULAR</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium">Farmers Market</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium">
                      Monsters in Smith Park
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium">Spooky Shuffle 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Files & Forms */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">
                FILES & FORMS
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    - Schedule of Meetings
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    - Meeting Agendas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    - Meeting Minutes
                  </a>
                </li>
              </ul>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">
                UPCOMING EVENTS
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium">VILLAGE HALL CLOSED</p>
                  <p className="text-gray-600">VETERANS DAY</p>
                  <p className="text-gray-500">
                    November 11 @ 8:00 am - 5:00 pm
                  </p>
                </div>
                <div>
                  <p className="font-medium">VETERANS DAY CEREMONY</p>
                  <p className="text-gray-600">HISTORICAL COMMITTEE MEETING</p>
                  <p className="text-gray-500">November 11 @ 11:00 am</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-4">
                View All Events →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-800 font-bold">VL</span>
                </div>
                <div className="text-white">
                  <div className="font-bold">VILLAGE OF LYONS</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Lyons is a historic community with a gateway to southwestern
                Cook County and is always seeking to improve the quality of life
                for its residents.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">GET IN TOUCH</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <p>7750 W. Wilson Avenue</p>
                <p>Lyons, IL 60534</p>
                <p>(708) 442-4554</p>
                <div className="mt-3">
                  <p className="font-medium">Office Hours: Mon-Thu,</p>
                  <p>Thu 8 am to 5 pm and</p>
                  <p>Wednesday 8 am to 7pm</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">RECENT POSTS</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    • Farmers Market
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    • Monsters in Smith Park
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    • Spooky Shuffle 2025
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    • Fall Cleanup
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-4 text-center">
            <p className="text-sm text-gray-400">© 2017 | Village of Lyons</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

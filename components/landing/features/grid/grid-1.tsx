import Link from 'next/link'
import Image from 'next/image'
import { Clock, MapPin, Star, ArrowRight, Tag } from 'lucide-react'

// Import your images
import img1 from '../../../../public/oil.jpeg'
import img2 from '../../../../public/health.jpeg'
import img3 from '../../../../public/saloon.jpeg'
import img4 from '../../../../public/carwash.jpeg'

const Service = () => {
  
  // Data Array: Makes it easy to add/edit offers without copying code
  const offers = [
    {
      id: 1,
      title: "Women's Haircut",
      provider: "Elite Hair Salon",
      price: "1,200.00",
      image: img1,
      tag: "First Visit",
      tagColor: "bg-purple-100 text-purple-700",
      rating: 4.8,
      location: "Colombo 03"
    },
    {
      id: 2,
      title: "General Checkup",
      provider: "Hemas Hospitals",
      price: "3,200.00",
      image: img2,
      tag: "New Patient",
      tagColor: "bg-blue-100 text-blue-700",
      rating: 4.9,
      location: "Wattala"
    },
    {
      id: 3,
      title: "Luxury Facial",
      provider: "Elite Hair Salon",
      price: "1,200.00",
      image: img3,
      tag: "Limited Time",
      tagColor: "bg-amber-100 text-amber-700",
      rating: 4.7,
      location: "Colombo 07"
    },
    {
      id: 4,
      title: "Premium Car Wash",
      provider: "David Car Center",
      price: "5,200.00",
      image: img4,
      tag: "Hot Deal",
      tagColor: "bg-red-100 text-red-700",
      rating: 4.6,
      location: "Nugegoda"
    }
  ];

  return (
    <div className="w-full py-20 bg-slate-50">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white text-sm font-bold shadow-lg shadow-orange-500/20 mb-6">
            <Clock className="w-4 h-4" /> Limited time Offers
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Exclusive Deals & Discounts
          </h2>
          <p className="text-lg text-slate-600">
            Save big on your next appointment. Book these special offers from our top-rated providers before they expire.
          </p>
        </div>

        {/* 2. CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {offers.map((offer) => (
            <div key={offer.id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 flex flex-col">
              
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={offer.image} 
                  alt={offer.title} 
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                {/* Badge */}
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1 ${offer.tagColor}`}>
                  <Tag className="w-3 h-3" /> {offer.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                
                {/* Provider Info */}
                <div className="flex justify-between items-start mb-2">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{offer.provider}</div>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-50 px-1.5 py-0.5 rounded">
                    <Star className="w-3 h-3 fill-current" /> {offer.rating}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {offer.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-1 text-xs text-slate-400 mb-4">
                  <MapPin className="w-3 h-3" /> {offer.location}
                </div>

                {/* Price & Action - Pushed to bottom */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">Price</span>
                    <span className="text-lg font-bold text-slate-900">Rs {offer.price}</span>
                  </div>
                  
                  <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
        
        {/* 3. Bottom CTA */}
        <div className="mt-16 text-center">
           <Link href="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all">
             View All Offers <ArrowRight className="w-4 h-4" />
           </Link>
        </div>

      </div>
    </div>
  )
}

export default Service
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    review: "Exceptional service! The team was professional, careful with our belongings, and made our move stress-free. Highly recommend JBT Packers and Movers!",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi, NCR",
    rating: 5,
    review: "Best moving experience I've ever had. They arrived on time, packed everything perfectly, and delivered without a single damaged item. Outstanding!",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Anita Patel",
    location: "Bangalore, Karnataka",
    rating: 5,
    review: "Professional team that went above and beyond. They handled our fragile items with extreme care and the pricing was very reasonable. Will use again!",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Vikram Singh",
    location: "Pune, Maharashtra",
    rating: 5,
    review: "Smooth and efficient move from start to finish. The crew was friendly, hardworking, and made sure everything was placed exactly where we wanted it.",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Meera Gupta",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    review: "Incredible attention to detail and customer service. They made our long-distance move seamless and kept us updated throughout the entire process.",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Arjun Reddy",
    location: "Hyderabad, Telangana",
    rating: 5,
    review: "Top-notch service! The team was punctual, organized, and handled our office relocation with minimal disruption to our business operations.",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Kavya Nair",
    location: "Kochi, Kerala",
    rating: 5,
    review: "Amazing experience! They took care of everything from packing to unpacking. Very professional and trustworthy team. Highly satisfied!",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Rohit Agarwal",
    location: "Jaipur, Rajasthan",
    rating: 5,
    review: "Excellent service at reasonable prices. The team was very careful with our furniture and electronics. Would definitely recommend to others!",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Amit Verma",
    location: "Lucknow, Uttar Pradesh",
    rating: 5,
    review: "Outstanding service! They handled our household move with great care and professionalism. Everything arrived safely and on time.",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Sunita Mishra",
    location: "Kanpur, Uttar Pradesh",
    rating: 5,
    review: "Very impressed with their packing quality and timely delivery. The team was courteous and handled all our belongings with utmost care.",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Deepak Yadav",
    location: "Agra, Uttar Pradesh",
    rating: 5,
    review: "Fantastic experience! They made our interstate move hassle-free. Professional team with excellent customer service throughout the process.",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Ravi Pandey",
    location: "Varanasi, Uttar Pradesh",
    rating: 5,
    review: "Exceptional office relocation service! They shifted our entire office setup efficiently with zero downtime. Highly professional and reliable team.",
    image: "/placeholder-user.jpg"
  }
]

export default function Reviews() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What Our Customers Say</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our satisfied customers who trusted us with their moves
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 w-max">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 w-80 flex-shrink-0">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-6 italic">
                  "{review.review}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{review.name}</h4>
                    <p className="text-slate-500 text-sm">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-8 py-4 rounded-2xl border border-blue-200">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-slate-700 font-semibold text-lg">4.9/5 from 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
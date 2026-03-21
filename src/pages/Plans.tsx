import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Plans() {
  const plans = [
    {
      title: "Static Pages",
      price: "Starting at ₹999",
      desc: "Fast, SEO-optimized static websites perfect for portfolios, landing pages, and local businesses.",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Custom Design",
        "Mobile Responsive",
        "Basic SEO Setup",
        "Contact Form Integration",
        "Fast Performance",
        "Updation Charges minimam ₹500"
      ]
    },
    {
      title: "E-Commerce",
      price: "Starting at ₹2,999",
      desc: "Setup your online store with secure payments, inventory management, and a beautiful storefront.",
      color: "from-purple-500 to-pink-500",
      features: [
        "Payment Gateway Integration",
        "Product Management",
        "Shopping Cart & Checkout",
        "Order Tracking",
        "Admin Dashboard",
        "Updation Charges Apply"
      ],
      popular: true
    },
    // {
    //   title: "Application",
    //   price: "Custom Quote",
    //   desc: "Scalable web and mobile applications with complex business logic and database integration.",
    //   color: "from-indigo-500 to-purple-500",
    //   features: [
    //     "Custom Business Logic",
    //     "Database Architecture",
    //     "User Content Management",
    //     "API Integration & Development",
    //     "Scalable Infrastructure",
    //     "Updation Charges Apply"
    //   ]
    // },
    {
      title: "Custom",
      price: "Custom Quote",
      desc: "Tailor-made web solutions designed exactly to your business specifications with advanced features.",
      color: "from-rose-500 to-orange-500",
      features: [
        "Fully Custom Architecture",
        "Advanced Integrations",
        "Dedicated Support",
        "Custom Feature Development",
        "Performance Optimization",
        "Updation Charges Apply"
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Service Plans</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Choose the perfect plan for your project. From simple static pages to complex applications, we have you covered.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`group flex flex-col p-8 rounded-[2rem] bg-white/5 border ${plan.popular ? 'border-purple-500' : 'border-white/10'} hover:bg-white/10 transition-all duration-500 overflow-hidden relative`}
          >
            {/* Ambient Background Glow */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-linear-to-br ${plan.color} rounded-full mix-blend-screen filter blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none`}></div>
            
            {plan.popular && (
              <div className="absolute top-0 right-8 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-b-lg">
                Most Popular
              </div>
            )}

            <div className="grow z-10 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                {plan.title}
              </h3>
              <div className="text-xl font-semibold mb-4 text-gray-300">
                {plan.price}
              </div>
              <p className="text-gray-400 leading-relaxed mb-8 grow">
                {plan.desc}
              </p>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`mt-1 bg-linear-to-br ${plan.color} rounded-full p-1`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 px-6 rounded-xl font-bold text-white bg-linear-to-r ${plan.color} hover:shadow-lg hover:shadow-white/10 transition-all active:scale-95 z-20`}>
                Get Started
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

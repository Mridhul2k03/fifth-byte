import { Mail, Loader2, CheckCircle, XCircle, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [phoneValue, setPhoneValue] = useState<string>();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Replace these with your actual EmailJS credentials
    const serviceId = "service_06g4n4f";
    const templateId = "template_4rqa38d";
    const publicKey = "HdTheVS_3_sRjW7Lq";

    emailjs
      .sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus("success");
          formRef.current?.reset();
          
          // Reset success message after 5 seconds
          setTimeout(() => setSubmitStatus("idle"), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setIsSubmitting(false);
          setSubmitStatus("error");
          
          // Reset error message after 5 seconds
          setTimeout(() => setSubmitStatus("idle"), 5000);
        }
      );
  };
  return (
    <>
      <style>{`
        .phone-input-override .PhoneInputInput {
          background: transparent;
          color: white;
          border: none;
          outline: none;
          width: 100%;
          padding-left: 0.5rem;
        }
        .phone-input-override .PhoneInputCountry {
          margin-right: 0.5rem;
        }
        .phone-input-override .PhoneInputCountrySelect {
          background: #000;
          color: white;
        }
        .phone-input-override .PhoneInputCountryIcon--square {
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: none;
        }
        .phone-input-override .PhoneInputCountrySelectArrow {
          opacity: 0.5;
          margin-left: 0.3rem;
        }
      `}</style>
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-600/10 blur-[120px] rounded-full pointer-events-none" />
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white">Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Connect</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">Have an idea? Let's build it together. Reach out to start your digital journey with The Fifth Byte.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        
        {/* Contact Info (Left Side) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 space-y-8"
        >
          <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] shadow-2xl relative overflow-hidden backdrop-blur-2xl">
             {/* Decorative blob */}
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full"></div>
             
             <h3 className="text-3xl font-black text-white mb-10 tracking-tight relative z-10">Contact Information</h3>
             
             <div className="space-y-8 relative z-10">
               <div className="flex items-start gap-5">
                 <div className="w-14 h-14 rounded-2xl bg-black/50 border border-white/[0.05] flex items-center justify-center shrink-0 shadow-inner">
                   <Mail className="w-6 h-6 text-indigo-400" />
                 </div>
                 <div>
                   <p className="text-sm font-medium text-gray-400 mb-1 uppercase tracking-wider">Email Us</p>
                   <p className="text-xl font-medium text-white tracking-wide">thefifthbyte@gmail.com</p>
                 </div>
               </div>
               
               <div className="pt-8 border-t border-white/[0.05]">
                 <p className="text-sm font-medium text-gray-400 mb-6 uppercase tracking-wider">Connect With Us</p>
                 <div className="flex gap-4">
                   <a href="#" className="w-14 h-14 rounded-2xl bg-black/50 border border-white/[0.05] flex items-center justify-center hover:bg-white/[0.05] hover:border-white/[0.1] hover:text-indigo-400 transition-all duration-300 group hover:scale-105 shadow-inner">
                     <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-indigo-400 transition-colors" />
                   </a>
                   <a href="#" className="w-14 h-14 rounded-2xl bg-black/50 border border-white/[0.05] flex items-center justify-center hover:bg-white/[0.05] hover:border-white/[0.1] hover:text-pink-400 transition-all duration-300 group hover:scale-105 shadow-inner">
                     <Instagram className="w-6 h-6 text-gray-400 group-hover:text-pink-400 transition-colors" />
                   </a>
                   <a href="#" className="w-14 h-14 rounded-2xl bg-black/50 border border-white/[0.05] flex items-center justify-center hover:bg-white/[0.05] hover:border-white/[0.1] hover:text-emerald-400 transition-all duration-300 group hover:scale-105 shadow-inner">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-emerald-400 transition-colors">
                       <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                       <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1" />
                     </svg>
                   </a>
                 </div>
               </div>
             </div>
          </div>
        </motion.div>

        {/* Contact Form (Right Side) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-3"
        >
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[2.5rem] p-8 md:p-12 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
            <h2 className="text-3xl font-black text-white mb-8 tracking-tight relative z-10">Send a Message</h2>
            <form ref={formRef} className="space-y-6 relative z-10" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 tracking-wide uppercase">First Name</label>
                  <input type="text" name="first_name" required className="w-full bg-black/50 border border-white/[0.05] rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-transparent transition-all placeholder-gray-600 font-light" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 tracking-wide uppercase">Last Name</label>
                  <input type="text" name="last_name" required className="w-full bg-black/50 border border-white/[0.05] rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-transparent transition-all placeholder-gray-600 font-light" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 tracking-wide uppercase">Email Address</label>
                  <input type="email" name="user_email" required className="w-full bg-black/50 border border-white/[0.05] rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-transparent transition-all placeholder-gray-600 font-light" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 tracking-wide uppercase">Phone Number</label>
                  <div className="flex bg-black/50 border border-white/[0.05] rounded-xl focus-within:ring-1 focus-within:ring-white/20 focus-within:border-transparent transition-all overflow-hidden items-center px-5 py-[0.8rem]">
                    <PhoneInput
                      international
                      defaultCountry="IN"
                      value={phoneValue}
                      onChange={setPhoneValue}
                      className="w-full text-white bg-transparent outline-none phone-input-override font-light"
                      placeholder="98765 43210"
                    />
                    <input type="hidden" name="phone" value={phoneValue || ""} />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2 tracking-wide uppercase">Project Subject</label>
                <select name="subject" required className="w-full bg-black/50 border border-white/[0.05] rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-transparent transition-all appearance-none cursor-pointer font-light">
                  <option value="Web Application Development" className="bg-black">Web Application Development</option>
                  <option value="Mobile App Development" className="bg-black">Mobile App Development</option>
                  <option value="UI/UX Design" className="bg-black">UI/UX Design</option>
                  <option value="AI / Machine Learning Integration" className="bg-black">AI / Machine Learning Integration</option>
                  <option value="Other" className="bg-black">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2 tracking-wide uppercase">Message</label>
                <textarea name="message" required rows={5} className="w-full bg-black/50 border border-white/[0.05] rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-transparent transition-all resize-none placeholder-gray-600 font-light" placeholder="Tell us about your project requirements and timeline..."></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full rounded-xl bg-white text-black font-bold text-lg py-5 hover:bg-gray-200 transition-all active:scale-95 group flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
              
              {/* Status Messages */}
              <div className={`overflow-hidden transition-all duration-300 ${submitStatus !== 'idle' ? 'max-h-16 opacity-100 mt-4' : 'max-h-0 opacity-0 m-0'}`}>
                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20 backdrop-blur-md">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm font-medium tracking-wide">Message sent successfully! We'll be in touch soon.</p>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-500/10 p-4 rounded-xl border border-red-500/20 backdrop-blur-md">
                    <XCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm font-medium tracking-wide">Failed to send message. Please try again later.</p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}

import { Mail, Phone, Loader2, CheckCircle, XCircle, Instagram, Linkedin } from "lucide-react";
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
          background: #0f172a;
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
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Let's Connect</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Have an idea? Let's build it together. Reach out to start your digital journey with The Fifth Byte.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
        
        {/* Contact Info (Left Side) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-8"
        >
          <div className="p-8 rounded-[2rem] bg-linear-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 shadow-lg relative overflow-hidden">
             {/* Decorative blob */}
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full"></div>
             
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Contact Information</h3>
             
             <div className="space-y-6 relative z-10">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                   <Mail className="w-5 h-5 text-indigo-400" />
                 </div>
                 <div>
                   <p className="text-sm font-medium text-gray-400 mb-1">Email Us</p>
                   <p className="text-lg font-semibold text-white">thefifthbyte@gmail.com</p>
                 </div>
               </div>
               
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                   <Phone className="w-5 h-5 text-purple-400" />
                 </div>
                 <div>
                   <p className="text-sm font-medium text-gray-400 mb-1">Call Us</p>
                   <p className="text-lg font-semibold text-white">+91 9567252212</p>
                 </div>
               </div>
               
               <div className="pt-6 border-t border-white/5">
                 <p className="text-sm font-medium text-gray-400 mb-4">Connect With Us</p>
                 <div className="flex gap-4">
                   <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-indigo-400 transition-all group">
                     <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 transition-colors" />
                   </a>
                   <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-pink-400 transition-all group">
                     <Instagram className="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors" />
                   </a>
                   <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-emerald-400 transition-all group">
                     {/* Using an inline SVG for WhatsApp */}
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-emerald-400 transition-colors">
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
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 backdrop-blur-xl shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            <form ref={formRef} className="space-y-6" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input type="text" name="first_name" required className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-500" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input type="text" name="last_name" required className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-500" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input type="email" name="user_email" required className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-500" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <div className="flex bg-slate-900/50 border border-white/10 rounded-xl focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-transparent transition-all overflow-hidden items-center px-4 py-[0.6rem]">
                    <PhoneInput
                      international
                      defaultCountry="IN"
                      value={phoneValue}
                      onChange={setPhoneValue}
                      className="w-full text-white bg-transparent outline-none phone-input-override"
                      placeholder="98765 43210"
                    />
                    <input type="hidden" name="phone" value={phoneValue || ""} />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Subject</label>
                <select name="subject" required className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none cursor-pointer">
                  <option value="Web Application Development" className="bg-slate-900">Web Application Development</option>
                  <option value="Mobile App Development" className="bg-slate-900">Mobile App Development</option>
                  <option value="UI/UX Design" className="bg-slate-900">UI/UX Design</option>
                  <option value="AI / Machine Learning Integration" className="bg-slate-900">AI / Machine Learning Integration</option>
                  <option value="Other" className="bg-slate-900">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea name="message" required rows={5} className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none placeholder-gray-500" placeholder="Tell us about your project requirements and timeline..."></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full rounded-xl bg-linear-to-r from-indigo-500 via-purple-600 to-pink-500 text-white font-bold text-lg py-4 hover:shadow-lg hover:shadow-purple-500/25 transition-all active:scale-95 group flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
                  <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm font-medium">Message sent successfully! We'll be in touch soon.</p>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                    <XCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm font-medium">Failed to send message. Please try again later.</p>
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

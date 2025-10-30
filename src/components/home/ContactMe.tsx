"use client";

import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsappSquare,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import SectionHeading from "../shared/SectionHeading";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const formSchema = z.object({
  username: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address").min(2).max(50),
  subject: z
    .string()
    .min(2, "Subject must be at least 2 characters")
    .max(200, "Subject must be less than 200 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters"),
});

const ContactMe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleFormSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // console.log(values);
      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      setSubmitStatus("error");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[80vh] container mx-auto py-16 px-4 ">
      <SectionHeading title="CONTACT" />

      {/* Main content */}
      <div className="flex flex-col  lg:flex-row w-full lg:justify-between  ">
        {/* Left Section - Contact Form */}
        <div className="w-full h-full lg:w-3/5 ">
          <div className="bg-cardBg/60 backdrop-blur-none  p-8 border border-mutedGrey/50 shadow-2xl rounded-t-2xl lg:rounded-l-2xl lg:rounded-r-none">
            <h3 className="text-2xl font-bold text-offWhite mb-6 flex items-center">
              <FaEnvelope className="mr-3 text-classicGold" />
              Get In Touch
            </h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleFormSubmit)}
                className="space-y-6"
              >
                {/* Name */}
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-lightGrey font-medium">
                        Your Name *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your full name"
                          {...field}
                          disabled={isSubmitting}
                          className="bg-mutedGrey/50 border-none  rounded-lg text-offWhite  h-11 px-4 transition-all duration-300 focus:border-classicGold  focus-visible:ring-2 focus-visible:ring-classicGold/20"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-lightGrey font-medium">
                        Your Email *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          {...field}
                          disabled={isSubmitting}
                          className="bg-mutedGrey/50 border-none  rounded-lg text-offWhite  h-11 px-4 transition-all duration-300 focus:border-classicGold  focus-visible:ring-2 focus-visible:ring-classicGold/20"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />

                {/* Subject */}
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-lightGrey font-medium">
                        Subject *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="What's this about?"
                          {...field}
                          disabled={isSubmitting}
                          className="bg-mutedGrey/50 border-none  rounded-lg text-offWhite  h-11 px-4 transition-all duration-300 focus:border-classicGold  focus-visible:ring-2 focus-visible:ring-classicGold/20"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-lightGrey font-medium">
                        Your Message *
                      </FormLabel>
                      <FormControl>
                        <textarea
                          placeholder="Tell me about your project or inquiry..."
                          rows={3}
                          {...field}
                          disabled={isSubmitting}
                          className="w-full bg-mutedGrey/50 border border-darkGrey rounded-lg text-offWhite placeholder-lightGrey/60 p-4 resize-none transition-all duration-300 focus:border-classicGold focus:bg-mutedGrey hover:border-lightGrey/40 focus-visible:ring-2 focus-visible:ring-classicGold/20"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-classicGold to-yellow-600 hover:from-yellow-600 hover:to-classicGold text-richBlack px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl hover:shadow-classicGold/20"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-richBlack mr-3"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <FaPaperPlane className="mr-3" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Right Section - Contact Info */}
        <div className="w-full   lg:w-2/5 ">
          <div className="bg-cardBg h-full  p-8 border border-mutedGrey/30 lg:rounded-r-2xl lg:rounded-l-none rounded-b-2xl">
            <h3 className="text-2xl font-bold text-offWhite mb-8 text-center">
              Let&apos;s Connect
            </h3>

            <div className="space-y-8">
              {/* Email */}
              <div className="group">
                <div className="flex items-center text-lightGrey mb-2">
                  <FaEnvelope className="text-classicGold mr-3 text-xl" />
                  <span className="font-medium">Email</span>
                </div>
                <a
                  href="mailto:jobayerahm7@gmail.com"
                  className="text-offWhite text-lg duration-300 ml-8 block group-hover:translate-x-2 transform transition-transform"
                >
                  jobayerahm7@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="group">
                <div className="flex items-center text-lightGrey mb-2">
                  <FaPhoneAlt className="text-classicGold mr-3 text-xl" />
                  <span className="font-medium">Phone & WhatsApp</span>
                </div>
                <a
                  href="https://wa.me/8801580320721?text=I%20was%20curious%20about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-offWhite text-lg  duration-300 ml-8 block group-hover:translate-x-2 transform transition-transform"
                >
                  +8801580320721
                </a>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-mutedGrey/50">
                <div className="text-lightGrey mb-4 text-center">
                  <span className="font-medium">Follow Me</span>
                </div>
                <div className="flex justify-center gap-6">
                  <a
                    className="text-lightGrey/70 hover:text-offWhite hover:scale-110 transition-all duration-300 p-3 bg-mutedGrey/50 rounded-full hover:bg-classicGold/20 hover:shadow-lg hover:shadow-classicGold/10"
                    href="https://github.com/jobayer-ahmed7"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    className="text-lightGrey/70 hover:text-offWhite hover:scale-110 transition-all duration-300 p-3 bg-mutedGrey/50 rounded-full hover:bg-classicGold/20 hover:shadow-lg hover:shadow-classicGold/10"
                    href="https://www.linkedin.com/in/jobayerahmmed7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a
                    className="text-lightGrey/70 hover:text-offWhite hover:scale-110 transition-all duration-300 p-3 bg-mutedGrey/50 rounded-full hover:bg-classicGold/20 hover:shadow-lg hover:shadow-classicGold/10"
                    href="https://x.com/jobayer_ahmed07"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter Profile"
                  >
                    <FaSquareXTwitter className="text-2xl" />
                  </a>
                  <a
                    className="text-lightGrey/70 hover:text-offWhite hover:scale-110 transition-all duration-300 p-3 bg-mutedGrey/50 rounded-full hover:bg-classicGold/20 hover:shadow-lg hover:shadow-classicGold/10"
                    href="https://wa.me/8801580320721"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Contact"
                  >
                    <FaWhatsappSquare className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="mt-8 p-4 bg-classicGold/20 border border-classicGold rounded-lg text-classicGold text-center animate-fade-in">
          <FaPaperPlane className="inline mr-2" />
          Thank you! Your message has been sent successfully.
        </div>
      )}
      {submitStatus === "error" && (
        <div className="mt-8 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center animate-fade-in">
          Sorry, there was an error sending your message. Please try again.
        </div>
      )}
    </div>
  );
};

export default ContactMe;

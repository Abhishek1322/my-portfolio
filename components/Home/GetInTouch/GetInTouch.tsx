import React, { useEffect, useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import { motion } from "framer-motion";

export default function GetInTouch() {
  const [isAndroidWebView, setIsAndroidWebView] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    // Check for Android WebView by inspecting the user agent
    if (/android/i.test(userAgent) && /wv/.test(userAgent)) {
      setIsAndroidWebView(true);
    }
  }, []);
  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col space-y-4 w-full h-96 items-center bg-AAprimary"
    >
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary" />
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-AAsecondary font-sans text-sm  sm:text-base">
            {" "}
            04.
          </span>
          <span className=" font-sans text-AAsecondary text-base">
            What&apos;s Next?
          </span>
        </div>
      </div>
      {/* // ? Get In Touch */}
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">
        Get In Touch
      </span>
      <p className="flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
        Although I&apos;m Always open for any new opportunities, my inbox is
        open. Whether you have a question or just want to say hi, I&apos;ll try
        my best to get back to you!
      </p>
      <div className="pt-4">
        {isAndroidWebView ? (
          <button
            className="font-mono text-sm text-AAsecondary border-AAsecondary 
                            px-8 py-4 border-[1.5px] rounded "
          >
            abdellatif@anaflous.com
          </button>
        ) : (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="mt-12"
          >
            <a
              href="mailto:abhishekbalongi@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="
          relative overflow-hidden
          border border-AAsecondary
          text-AAsecondary
          px-6 sm:px-10 py-3 sm:py-4
          rounded-md
          font-medium tracking-wide
          transition-all duration-300 ease-out
          hover:text-[#0b2f1d]
          hover:shadow-[0_0_20px_rgba(79,209,165,0.4)]
          group
        "
              >
                <span
                  className="
            absolute inset-0
            bg-AAsecondary
            translate-y-full
            group-hover:translate-y-0
            transition-transform duration-300 ease-out
          "
                />
                <span className="relative z-10 capitalize">Say Hello</span>
              </button>
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
}

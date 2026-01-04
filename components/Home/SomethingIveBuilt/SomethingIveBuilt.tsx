import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title   */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // TODO : to here  */}
        {/* // ?  Project  1 Ens Vision */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://app.honor.pet/"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/img/honor-pet.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/honor-pet.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Honor Pet</span>
                <a
                  href="https://app.honor.pet/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Cremation Platform
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left">
                  I built a{" "}
                  <span className="text-AAsecondary">
                    role-based pet cremation management system &nbsp;
                  </span>
                  featuring two core user roles:{" "}
                  <span className="text-AAsecondary">Clinic Owners</span> and
                  <span className="text-AAsecondary"> Admins</span> (Pet
                  Cremation Department). Clinic owners submit pet and pet-parent
                  details, while admins efficiently manage, track, and process
                  cremation requests through a{" "}
                  <span className="text-AAsecondary">
                    centralized dashboard
                  </span>
                  . The platform integrates{" "}
                  <span className="text-AAsecondary">Supabase</span> for
                  authentication, database management, and secure data handling.
                  I also designed fully
                  <span className="text-AAsecondary">
                    {" "}
                    responsive layouts
                  </span>{" "}
                  using Tailwind CSS and enhanced the user experience with
                  smooth UI animations powered by Motion.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">Supabase</span>
                <span className="pr-4 z-10">Tailwind CSS</span>
                <span className="pr-4 z-10">TypeScript</span>
                <span className="pr-4 z-10">Vercel</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                {/* <GithubIcon link="https://github.com/hktitof/Ypredict" /> */}
                <a
                  href="https://app.honor.pet/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 - YpredictAI */}

        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              {/* <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

              <a
                href="https://app.honor.pet/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/img/honor-pet.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/honor-pet.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Jobizz</span>
                <a
                  href="https://jobizz.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Service Booking Platform
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  I developed a{" "}
                  <span className="text-AAsecondary">
                    service booking platform
                  </span>{" "}
                  that connects customers with{" "}
                  <span className="text-AAsecondary">
                    verified professionals
                  </span>{" "}
                  offering services such as home repairs, tutoring, and beauty
                  treatments. Professionals can create and manage
                  <span className="text-AAsecondary"> service profiles</span>,
                  handle bookings, and communicate directly with customers,
                  while users can easily browse services and
                  <span className="text-AAsecondary">
                    {" "}
                    schedule appointments
                  </span>
                  . The project emphasized
                  <span className="text-AAsecondary"> intuitive UI design</span>
                  ,
                  <span className="text-AAsecondary">
                    {" "}
                    performance optimization
                  </span>
                  , and a
                  <span className="text-AAsecondary">
                    {" "}
                    scalable frontend architecture
                  </span>{" "}
                  to support future growth.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">Node.js</span>
                <span className="pr-4 z-10">Stripe</span>
                <span className="pr-4 z-10">Tailwind CSS</span>
                <span className="pr-4 z-10">OneSignal</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://jobizz.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={"https://jobizz.com/"} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 3 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href="https://www.lynnetteskitchenapp.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/img/lynett-kitchen.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAprimary opacity-50 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/lynett-kitchen.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  sm:space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Lynnette's Kitchen App
                </span>
                <a
                  href="https://www.lynnetteskitchenapp.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Recipe Sharing Platform
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  I created an{" "}
                  <span className="text-AAsecondary">
                    interactive culinary platform
                  </span>{" "}
                  where chefs can upload{" "}
                  <span className="text-AAsecondary">recipe videos</span> and
                  host
                  <span className="text-AAsecondary">
                    {" "}
                    online cooking classes
                  </span>
                  . Users can explore curated recipes, watch step-by-step
                  cooking content, and
                  <span className="text-AAsecondary">
                    {" "}
                    book live sessions
                  </span>{" "}
                  to improve their culinary skills. The platform emphasizes{" "}
                  <span className="text-AAsecondary"> clean UI design</span>,
                  <span className="text-AAsecondary"> smooth user flows</span>,
                  and
                  <span className="text-AAsecondary">
                    {" "}
                    engaging content presentation
                  </span>
                  , fostering a
                  <span className="text-AAsecondary">
                    {" "}
                    community-driven learning experience
                  </span>
                  .
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">React JS</span>
                <span className="pr-4 z-10">Bootstrap</span>
                <span className="pr-4 z-10">Socket.io</span>
                <span className="pr-4 z-10">Node.js</span>
                <span className="pr-4 z-10">Agora</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <a
                  href="https://www.lynnetteskitchenapp.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink
                    url={"https://www.lynnetteskitchenapp.com/"}
                    router={router}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

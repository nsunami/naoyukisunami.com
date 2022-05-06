import Head from "next/head";
import Image from "next/image";
import {
  AiFillGithub,
  AiFillUnlock,
  AiOutlineMail,
  AiOutlineTwitter,
  AiFillCloseSquare,
} from "react-icons/ai";
import {
  SiRstudio,
  SiPython,
  SiReact,
  SiJavascript,
  SiNextdotjs,
} from "react-icons/si";
import {
  FaDatabase,
  FaCogs,
  FaCreativeCommonsBy,
  FaCreativeCommons,
} from "react-icons/fa";
import WorldMapCropped from "../public/world-map-flags-cropped.png";
import ProfilePic from "../public/profile-hex.png";
import Frame from "../public/frame.gif";
import Wave2 from "../public/wave2.svg";
import Wave3 from "../public/wave3.svg";
import Logo from "../public/logo.png";
import PostReviewLogo from "../public/postreview-logo.png";
import { useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import Houses from "../public/houses.png";
import Screen from "../public/screen.png";
import { Project } from "../components/Project";
import ResearchEquals from "../public/research-equals.png";
import { useRouter } from "next/router";
import Pointer from "../public/pointer.png";
import Podcast from "../public/podcast.png";
import Petitions from "../public/petitions.png";
import StateOfMind from "../public/state-of-mind.png";
import Coffee from "../public/coffee.png";
import HeadImage from "../public/head.PNG";
import Trail from "../public/trail.PNG";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const datetime = new Date();
  const projectsRef = useRef(null);
  const aboutMeRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToProjects = () => projectsRef.current.scrollIntoView();
  const scrollToAboutMe = () => aboutMeRef.current.scrollIntoView();
  const scrollToContact = () => contactRef.current.scrollIntoView();

  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white">
      <Head>
        <title>Naoyuki Sunami</title>
        <meta name="description" content="Nami Sunami's website" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <main className="flex flex-col flex-grow items-center relative overflow-hidden max-w-7xl">
        <div
          id="navbar"
          className="flex flex-row justify-between w-full px-12 pt-6"
        >
          <div className="w-8 h-8">
            <Image src={Logo} alt="logo" />
          </div>
          <div>
            <ul className="space-x-5">
              <li className="float-left hover:text-peach hover:cursor-pointer underline decoration-dotted">
                <a onClick={scrollToAboutMe}>About</a>
              </li>
              <li className="float-left hover:text-peach hover:cursor-pointer underline decoration-dotted">
                <a onClick={scrollToProjects}>Projects</a>
              </li>
              <li className="float-left hover:text-peach hover:cursor-pointer underline decoration-dotted">
                <a onClick={scrollToContact}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="hero"
          className="flex flex-col mt-32 whitespace-nowrap relative h-96 w-2/3"
        >
          <div id="name" className="">
            <div className="text-7xl font-shippori text-gray-100">角南直幸</div>
            <div
              className="mt-4 text-2xl sm:text-4xl 
            font-notoserif text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-50"
            >
              Naoyuki Sunami, Ph.D.
            </div>
            <div className="text-md text-3xl sm:text-5xl font-grotesque">
              Behavioral Data Scientist
            </div>
            <button
              className="mt-20 border-2 pt-2 pb-3 px-6 rounded-full font-grotesque text-2xl hover:bg-gradient-to-r
             hover:from-orange-500 hover:to-peach"
              onClick={scrollToProjects}
            >
              Latest Projects <span className="font-serif">&rarr;</span>
            </button>
          </div>
          <div className="absolute h-96 w-3/4 -right-1/4 -top-20 -rotate-6 z-auto">
            <Image src="/wave.svg" alt="wave" layout="fill" />
          </div>
        </div>
        <div className="flex flex-col items-center w-2/3">
          <div id="about-me" className="mt-24">
            <h1
              className="font-grotesque text-4xl text-peach my-6"
              ref={aboutMeRef}
            >
              About me
            </h1>
            <div className="text-2xl font-luthier z-10 sm:bg-head-pattern md:bg-cover bg-contain bg-center bg-no-repeat md:bg-right-bottom h-[25rem]">
              <div className="sm:h-96 w-full md:w-4/6">
                <div>
                  I am a behavioral data scientist with 8+ years of experience
                  with data about{" "}
                  <span className="text-orange-500">
                    people&apos;s behavior
                  </span>
                  .
                </div>
                <div className="mt-8">
                  I believe in the power of{" "}
                  <span className="text-orange-500">openness</span> and{" "}
                  <span className="text-orange-500">transparency</span> in
                  driving collaboration and equitable innovation.
                </div>
              </div>
              <div className="visible sm:hidden">
                <Image src={HeadImage} alt="A picture of a head" />
              </div>
            </div>
          </div>
        </div>
        <div id="locations" className="w-2/3 sm:mt-24 mt-44">
          <h1 className="font-grotesque text-4xl text-peach mt-6">
            I&apos;ve studied at
          </h1>
          <div
            id="world-map"
            className="hidden md:flex justify-center font-luthier"
          >
            <div className="flex justify-center h-[30rem] mb-24 bg-world-map bg-[length:1400px] bg-no-repeat bg-center items-center">
              <div id="fake-space-1" className="w-[8rem]"></div>
              <div className="has-tooltip flex flex-col items-center">
                <div className="text-orange-400 tooltip bg-black bg-opacity-80 p-4 -mt-20 drop-shadow-xl">
                  <div>Western Illinois University</div>
                  <div>M.S. Experimental Psychology</div>
                </div>
                <div className="cursor-pointer bg-slate-400 opacity-0 h-8 w-8 "></div>
                <div className="h-24"></div>
              </div>
              <div id="fake-space-2" className="w-[0.0rem]"></div>
              <div className="has-tooltip">
                <div className="text-orange-600 tooltip bg-black bg-opacity-80 p-4 -mt-5 ml-10">
                  <div>University of Delaware</div>
                  <div>Ph.D. Psychology</div>
                </div>
                <div className="cursor-pointer bg-slate-400 opacity-0 h-8 w-8">
                  Y
                </div>
                <div className="h-8"></div>
              </div>
              <div id="fake2" className="w-[32rem]"></div>
              <div className="has-tooltip">
                <div className="h-16"></div>
                <div className="text-peach tooltip bg-black bg-opacity-80 p-4 -mt-5 ml-10">
                  <div>Saint Louis University</div>
                  <div>B.S. Psychology</div>
                </div>
                <div className="cursor-pointer bg-slate-400 opacity-0 h-8 w-8">
                  Z
                </div>
              </div>
              <div id="fake-space-3" className="w-[4rem]">
                {" "}
              </div>
            </div>
          </div>
          <div id="mobile" className="md:hidden flex flex-col font-luthier">
            <div className="h-[12rem] w-full relative">
              <Image
                src={WorldMapCropped}
                alt="world map"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-orange-400 bg-black bg-opacity-80 p-4 drop-shadow-xl">
              <div>Western Illinois University</div>
              <div>M.S. Experimental Psychology</div>
            </div>
            <div className="text-orange-600 bg-black bg-opacity-80 p-4 -mt-5 ml-10">
              <div>University of Delaware</div>
              <div>Ph.D. Psychology</div>
            </div>
            <div className="text-peach bg-black bg-opacity-80 p-4 -mt-5 self-end">
              <div>Saint Louis University</div>
              <div>B.S. Psychology</div>
            </div>
          </div>
        </div>
        <div id="interests" className="w-2/3 mx-12 sm:mt-12 mt-24">
          <h1 className="font-grotesque text-4xl text-peach my-6">
            I&apos;m interested in
          </h1>
          <div className="flex flex-row font-luthier items-center">
            <div className="hidden md:block rotate-120 my-12 mr-10">
              <Image src={Wave2} alt="wave2" />
            </div>
            <div className="flex flex-col space-y-9 text-xl">
              <div id="data" className="flex flex-row">
                <FaDatabase className="text-orange-600 text-6xl" />
                <div className="mx-4">
                  Responsible use of data: How we can use them to create an
                  equitable and sustainable future
                </div>
              </div>
              <div id="data" className="flex flex-row">
                <FaCogs className="text-orange-500 text-6xl" />
                <div className="mx-4">
                  Humane software engineering: How we can develop technology to
                  drive social impact for all
                </div>
              </div>
              <div id="data" className="flex flex-row">
                <AiFillUnlock className="text-peach text-7xl" />
                <div className="mx-4">
                  Openness and transparency: How we can learn from each other
                  and advance knowledge and solutions
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="projects"
          ref={projectsRef}
          className="w-2/3 flex flex-col mx-12 sm:mt-24 mt-32 mb-44"
        >
          <h1 className="font-grotesque text-4xl text-peach my-6">
            I&apos;ve worked on
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-end place-self-center max-w-4xl flex-wrap gap-10 font-luthier">
            <Project
              title={"PostReview"}
              href="https://github.com/nsunami/postreview-app"
              imageSrc={PostReviewLogo}
            >
              An app to help searching and posting reviews of published
              scientific articles
              <div className="text-right flex flex-row justify-end gap-2">
                <SiNextdotjs className="inline" />
                <SiReact className="inline" />
                <SiJavascript className="inline" />
              </div>
            </Project>
            <Project
              title={"ResearchEquals"}
              href="https://github.com/libscie/ResearchEquals.com"
              imageSrc={ResearchEquals}
              fromOrange={"from-orange-300"}
            >
              I help maintain ResearchEquals, a platform that helps researches
              publish building blocks of research
              <div className="text-right flex flex-row justify-end gap-2">
                <SiNextdotjs className="inline" />
                <SiReact className="inline" />
                <SiJavascript className="inline" />
              </div>
            </Project>
            <Project
              title={"People's Experience in the Trails"}
              href="https://de-data-lab.github.io/deldot-survey/"
              imageSrc={Trail}
              fromOrange={"from-orange-600"}
            >
              I conducted an intercept survey to understand people&apos;
              experience in the public trail
              <div className="text-right flex flex-row justify-end gap-2">
                <SiRstudio className="inline mx-1" />
              </div>
            </Project>
            <Project
              title={"Housing Voucher App"}
              href="https://github.com/de-data-lab/voucher-eligibility"
              imageSrc={Houses}
              fromOrange={"from-orange-400"}
            >
              An R Shiny app showing how housing assistance in Delaware is
              helping families in a housing crisis{" "}
              <div className="text-right flex flex-row justify-end gap-2">
                <SiRstudio className="inline mx-1" />{" "}
                <SiPython className="inline" />
              </div>
            </Project>
            <Project
              title={"Belonging in Video Games"}
              href="https://github.com/nsunami/dissertation"
              imageSrc={Screen}
              fromOrange={"from-orange-600"}
            >
              A series of scientific studies examining how we feel connected
              with characters in video games
              <div className="text-right flex flex-row justify-end gap-2">
                <SiRstudio className="inline mx-1" />
              </div>
            </Project>
            <div className="place-self-center w-64">
              <a
                className=""
                href="https://github.com/nsunami"
                rel="noreferrer"
                target="_blank"
              >
                <button
                  className="mt-20 border-2 pt-2 pb-3 px-6 rounded-full font-grotesque text-2xl hover:bg-gradient-to-r
             hover:from-orange-500 hover:to-peach "
                >
                  More on GitHub <span className="font-serif">&rarr;</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          id="projects"
          className="relative w-2/3 flex flex-col mx-12 sm:mt-24 mt-12 mb-44"
          ref={contactRef}
        >
          <h1 className="font-grotesque text-4xl text-peach my-6">
            Work with me
          </h1>
          <div className="flex flex-col md:flex-row justify-between gap-11 relative z-30">
            <div className="max-w-xl font-luthier text-3xl flex flex-col">
              <div>
                I love <span className="text-orange-500">writing codes</span>{" "}
                and{" "}
                <span className="text-orange-500">
                  solving technical problems
                </span>
                .
              </div>
              <div className="my-4">
                I&apos;m always open to new opportunities and collaborations.
              </div>
              <div>
                Send me an email or schedule a chat on{" "}
                <a
                  href="https://savvycal.com/nsunami/webchat"
                  rel="noreferrer"
                  target="_blank"
                  className="hover:text-peach underline decoration-dotted"
                >
                  SavvyCal
                </a>
                .
              </div>
              <div
                className="w-10 h-10 hover:cursor-pointer grayscale hover:grayscale-0 mt-24 md:self-auto sm:flex hidden"
                onClick={() => setIsOpen(true)}
              >
                <Image src={Pointer} alt="A finger pressing a button" />
              </div>
            </div>
            <div className="relative flex flex-col items-center gap-5 z-30">
              <div className="absolute w-[21rem] md:-left-4 -top-4">
                <Image
                  src={Frame}
                  alt={"Frame"}
                  style={{ transform: "scaleX(-1)" }}
                />
              </div>
              <div className="w-[19rem]">
                <Image src={ProfilePic} alt={"Nami Sunami's Profile Picture"} />
              </div>
              <div
                className="text-4xl font-luthier text-transparent
              bg-gradient-to-r bg-clip-text from-orange-700 
              to-peach"
              >
                <a href="mailto:nsunami@pm.me">nsunami@pm.me</a>
              </div>
              <div
                id="social"
                className="text-4xl flex flex-row items-center gap-5"
              >
                <a href="mailto:nsunami@pm.me">
                  <AiOutlineMail />
                </a>
                <a
                  href="https://github.com/nsunami"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </a>
                <a
                  href="https://twitter.com/n_sunami"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute -right-36 top-10 z-auto -rotate-[100deg]">
            <Image src={Wave3} alt="wave" style={{ transform: "scaleX(-1)" }} />
          </div>
        </div>
        <div
          className="w-10 h-10 hover:cursor-pointer grayscale hover:grayscale-0 absolute -bottom-0 right-12 sm:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Image src={Pointer} alt="A finger pressing a button" />
        </div>
      </main>
      <footer className="flex flex-row justify-between items-center w-full font-luthier bg-zinc-900 text-orange-400 text-sm text-right flex-shrink py-1 px-4">
        <div className="flex flex-row gap-1 flex-shrink-0">
          Naoyuki Sunami {datetime.getFullYear()}
          <div className="">
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              rel="noreferrer"
              target={"_blank"}
            >
              <FaCreativeCommons className="inline" />
              <FaCreativeCommonsBy className="inline" />
            </a>
          </div>
        </div>
        <div className="">
          Website designed by Jazelle Maira R. Carillo, engineered by Nami
          Sunami
        </div>
      </footer>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-black text-white border-gray-500 border-2 p-12 rounded-md">
            <div className="relative flex flex-col gap-6 text-3xl font-luthier md:w-[40rem] max-w-lg">
              <div
                className="absolute -top-9 -right-8 hover:cursor-pointer text-zinc-500 hover:text-zinc-700"
                onClick={() => setIsOpen(false)}
              >
                <AiFillCloseSquare />
              </div>
              <div className="flex flex-row ">
                <div className="w-10 mx-7">
                  <Image src={Podcast} alt={"An icon of Podcast"} />
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="font-grotesque w-full">
                    Currently listening to:
                  </h1>
                  <div className="focus-visible:outline-none text-center mt-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-50">
                    <a
                      href="https://www.earwolf.com/show/factually-with-adam-conover/"
                      rel="noreferrer"
                      target={"_blank"}
                      className=" hover:text-gray-400 focus-visible:outline-none"
                    >
                      Factually! with Adam Conover
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-12 mx-7">
                  <Image src={Petitions} alt={"An icon of Podcast"} />
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="font-grotesque">Recently signed petition:</h1>
                  <div className="focus-visible:outline-none text-center mt-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-50">
                    <a
                      href="https://act.colorofchange.org/sign/clemency_for_4000_elders/"
                      rel="noreferrer"
                      target={"_blank"}
                      className="focus-visible:outline-none hover:text-gray-400"
                    >
                      Clemency for Elders
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row relative">
                <div className="w-12 mx-7">
                  <Image src={StateOfMind} alt={"An icon of Podcast"} />
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="font-grotesque">State of mind:</h1>
                  <div className="focus-visible:outline-none has-tooltip text-center mt-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-50 ">
                    <a
                      href="https://ko-fi.com/nsunami"
                      rel="noreferrer"
                      target={"_blank"}
                      className="focus-visible:outline-none hover:text-gray-400"
                    >
                      Always caffeinated
                    </a>
                    <a
                      href="https://ko-fi.com/nsunami"
                      rel="noreferrer"
                      target={"_blank"}
                    >
                      <div className="flex flex-row items-center w-64 text-xl py-4 px-6 absolute tooltip bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white rounded-md -top-9 right-0">
                        <div>You can buy me a cup at Kofi</div>
                        <div className="w-12 h-12">
                          <Image src={Coffee} alt="A cup of coffee" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}

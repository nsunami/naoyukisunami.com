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
  SiQualtrics,
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
import Wave1 from "../public/wave.svg";
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
import Trail from "../public/trail.png";
import { SocialMetadata } from "../components/SocialMetadata";

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
    <div className="flex min-h-screen flex-col items-center bg-black text-white">
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
        <SocialMetadata />
      </Head>
      <main className="relative flex max-w-7xl flex-grow flex-col items-center overflow-hidden">
        <div
          id="navbar"
          className="flex w-full flex-row justify-between px-12 pt-6"
        >
          <div className="h-8 w-8">
            <Image src={Logo} alt="logo" />
          </div>
          <div className="font-grotesque text-xl">
            <ul className="space-x-5">
              <li className="float-left underline decoration-dotted hover:cursor-pointer hover:text-peach">
                <a onClick={scrollToAboutMe}>About</a>
              </li>
              <li className="float-left underline decoration-dotted hover:cursor-pointer hover:text-peach">
                <a onClick={scrollToProjects}>Projects</a>
              </li>
              <li className="float-left underline decoration-dotted hover:cursor-pointer hover:text-peach">
                <a onClick={scrollToContact}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="hero"
          className="relative mt-32 flex h-96 w-2/3 flex-col whitespace-nowrap"
        >
          <div id="name" className="">
            <div className="font-shippori text-7xl text-gray-100">角南直幸</div>
            <div
              className="mt-4 bg-gradient-to-r from-orange-700 
            to-orange-50 bg-clip-text font-notoserif text-2xl text-transparent sm:text-4xl"
            >
              Naoyuki Sunami, PhD
            </div>
            <div className="text-md relative font-grotesque text-xl sm:text-5xl">
              Data Steward / Software Developer
            </div>
            <button
              className="mt-20 rounded-full border-2 px-6 pt-2 pb-3 font-grotesque text-2xl hover:bg-gradient-to-r
             hover:from-orange-500 hover:to-peach"
              onClick={scrollToProjects}
            >
              Latest Projects <span className="font-serif">&rarr;</span>
            </button>
          </div>
          <div className="absolute -right-1/4 -top-20 h-96 w-3/4 -rotate-6">
            <Image src={Wave1} alt="wave" layout="fill" />
          </div>
        </div>
        <div className="flex w-2/3 flex-col items-center">
          <div id="about-me" className="mt-24">
            <h1
              className="my-6 font-grotesque text-4xl text-peach"
              ref={aboutMeRef}
            >
              About me
            </h1>
            <div className="z-10 bg-contain bg-center bg-no-repeat font-luthier text-2xl sm:bg-head-pattern md:bg-cover md:bg-right-bottom">
              <div className="w-full sm:h-96 md:w-4/6">
                <div>
                  I&apos;m currently working as a Research Data Steward at
                  Eindhoven University of Technology.
                </div>
                <div className="mt-8">
                  I&apos;m passionate about improving research infrastructure,
                  and how I can use humane technology to help researchers and
                  research support professionals.
                </div>
                <div className="mt-8">
                  I believe in the power of openness, transparency, and
                  cooperation to create an equitable society.
                </div>
              </div>
              <div className="visible sm:hidden">
                <Image src={HeadImage} alt="A picture of a head" />
              </div>
            </div>
          </div>
        </div>
        <div id="locations" className="mt-28 w-2/3 sm:mt-24">
          <h1 className="my-6 font-grotesque text-4xl text-peach">
            I&apos;ve studied at
          </h1>
          <div
            id="world-map"
            className="hidden justify-center font-luthier md:flex"
          >
            <div className="mb-24 flex h-[30rem] items-center justify-center bg-world-map bg-[length:1400px] bg-center bg-no-repeat">
              <div id="fake-space-1" className="w-[8rem]"></div>
              <div className="has-tooltip flex flex-col items-center">
                <div className="tooltip -mt-20 bg-black bg-opacity-80 p-4 text-orange-400 drop-shadow-xl">
                  <div>Western Illinois University</div>
                  <div>M.S. Experimental Psychology</div>
                </div>
                <div className="h-8 w-8 cursor-pointer bg-slate-400 opacity-0 "></div>
                <div className="h-24"></div>
              </div>
              <div id="fake-space-2" className="w-[0.0rem]"></div>
              <div className="has-tooltip">
                <div className="tooltip -mt-5 ml-10 bg-black bg-opacity-80 p-4 text-orange-600">
                  <div>University of Delaware</div>
                  <div>Ph.D. Psychology</div>
                </div>
                <div className="h-8 w-8 cursor-pointer bg-slate-400 opacity-0">
                  Y
                </div>
                <div className="h-8"></div>
              </div>
              <div id="fake2" className="w-[32rem]"></div>
              <div className="has-tooltip">
                <div className="h-16"></div>
                <div className="tooltip -mt-5 ml-10 bg-black bg-opacity-80 p-4 text-peach">
                  <div>Saint Louis University</div>
                  <div>B.S. Psychology</div>
                </div>
                <div className="h-8 w-8 cursor-pointer bg-slate-400 opacity-0">
                  Z
                </div>
              </div>
              <div id="fake-space-3" className="w-[4rem]">
                {" "}
              </div>
            </div>
          </div>
          <div id="mobile" className="flex flex-col font-luthier md:hidden">
            <div className="relative h-[12rem] w-full">
              <Image
                src={WorldMapCropped}
                alt="world map"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="bg-black bg-opacity-80 p-4 text-orange-400 drop-shadow-xl">
              <div>Western Illinois University</div>
              <div>M.S. Experimental Psychology</div>
            </div>
            <div className="-mt-5 ml-10 bg-black bg-opacity-80 p-4 text-orange-600">
              <div>University of Delaware</div>
              <div>Ph.D. Psychology</div>
            </div>
            <div className="-mt-5 self-end bg-black bg-opacity-80 p-4 text-peach">
              <div>Saint Louis University</div>
              <div>B.S. Psychology</div>
            </div>
          </div>
        </div>
        <div id="interests" className="mx-12 mt-24 w-2/3 sm:mt-12">
          <h1 className="my-8 font-grotesque text-4xl text-peach">
            I&apos;m interested in
          </h1>
          <div className="flex flex-row items-center font-luthier">
            <div className="my-12 mr-10 hidden rotate-120 md:block">
              <Image src={Wave2} alt="wave2" />
            </div>
            <div className="flex flex-col space-y-9 text-xl">
              <div id="data" className="flex flex-row">
                <FaDatabase className="text-6xl text-orange-600" />
                <div className="mx-4">
                  Improving Research infrastructure: How we can create
                  sustainable research environments and processes for
                  researchers and research support professionals
                </div>
              </div>
              <div id="data" className="flex flex-row">
                <FaCogs className="text-6xl text-orange-500" />
                <div className="mx-4">
                  Humane software engineering: How we can develop technology to
                  drive social impact for all
                </div>
              </div>
              <div id="data" className="flex flex-row">
                <AiFillUnlock className="text-7xl text-peach" />
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
          className="mx-12 mt-32 mb-44 flex w-2/3 flex-col sm:mt-24"
        >
          <h1 className="my-6 font-grotesque text-4xl text-peach">
            I&apos;ve worked on
          </h1>
          <div className="flex max-w-4xl flex-col flex-wrap items-end justify-center gap-10 place-self-center font-luthier md:flex-row">
            <Project
              title={"PostReview"}
              href="https://github.com/nsunami/postreview-app"
              imageSrc={PostReviewLogo}
            >
              An app to help searching and posting reviews of published
              scientific articles
              <div className="flex flex-row justify-end gap-2 text-right">
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
              <div className="flex flex-row justify-end gap-2 text-right">
                <SiNextdotjs className="inline" />
                <SiReact className="inline" />
                <SiJavascript className="inline" />
              </div>
            </Project>
            <Project
              title={"People's Experience in a Local Trail"}
              href="https://de-data-lab.github.io/deldot-survey/"
              imageSrc={Trail}
              fromOrange={"from-orange-600"}
            >
              I conducted an intercept survey to understand people&apos;
              experience in a public trail
              <div className="flex flex-row justify-end gap-2 text-right">
                <SiRstudio className="mx-1 inline" />
                <SiQualtrics className="inline" />
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
              <div className="flex flex-row justify-end gap-2 text-right">
                <SiRstudio className="mx-1 inline" />{" "}
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
              <div className="flex flex-row justify-end gap-2 text-right">
                <SiRstudio className="mx-1 inline" />
                <SiQualtrics className="inline" />
              </div>
            </Project>
            <div className="w-64 place-self-center">
              <a
                className=""
                href="https://github.com/nsunami"
                rel="noreferrer"
                target="_blank"
              >
                <button
                  className="mt-20 rounded-full border-2 px-6 pt-2 pb-3 font-grotesque text-2xl hover:bg-gradient-to-r
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
          className="relative mx-12 mt-12 mb-44 flex w-2/3 flex-col sm:mt-24"
          ref={contactRef}
        >
          <h1 className="my-6 font-grotesque text-4xl text-peach">
            Work with me
          </h1>
          <div className="relative z-30 flex flex-col justify-between gap-11 md:flex-row">
            <div className="flex max-w-xl flex-col font-luthier text-3xl">
              <div>
                I love <span className="text-orange-500">writing codes</span>{" "}
                and{" "}
                <span className="text-orange-500">
                  solving technical problems
                </span>
                .
              </div>
              <div className="my-4">
                I&apos;m always open to new opportunities and collaborations—get
                in touch if you are interested.
              </div>
              <div
                className="mt-24 hidden h-10 w-10 grayscale hover:cursor-pointer hover:grayscale-0 sm:flex md:self-auto"
                onClick={() => setIsOpen(true)}
              >
                <Image src={Pointer} alt="A finger pressing a button" />
              </div>
            </div>
            <div className="relative z-30 flex flex-col items-center gap-5">
              <div className="absolute -top-4 w-[21rem] md:-left-4">
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
                className="bg-gradient-to-r from-orange-700 to-peach
              bg-clip-text font-luthier text-4xl 
              text-transparent"
              >
                <a href="mailto:nsunami@pm.me">nsunami@pm.me</a>
              </div>
              <div
                id="social"
                className="flex flex-row items-center gap-5 text-4xl"
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
          className="absolute -bottom-0 right-12 h-10 w-10 grayscale hover:cursor-pointer hover:grayscale-0 sm:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Image src={Pointer} alt="A finger pressing a button" />
        </div>
      </main>
      <footer className="flex w-full flex-shrink flex-row items-center justify-between bg-zinc-900 py-3 px-4 text-right font-luthier text-sm text-orange-400">
        <div className="flex flex-row gap-1">
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
        <div>
          <div>Design: Jazelle Maira R. Carillo</div>
          <div>Engineering: Nami Sunami</div>
        </div>
      </footer>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="rounded-md border-2 border-gray-500 bg-black p-12 text-white">
            <div className="relative flex max-w-lg flex-col gap-6 font-luthier text-3xl md:w-[40rem]">
              <div
                className="absolute -top-9 -right-8 text-zinc-500 hover:cursor-pointer hover:text-zinc-700"
                onClick={() => setIsOpen(false)}
              >
                <AiFillCloseSquare />
              </div>
              <div className="flex flex-row ">
                <div className="mx-7 w-10">
                  <Image src={Podcast} alt={"An icon of Podcast"} />
                </div>
                <div className="flex w-full flex-col">
                  <h1 className="w-full font-grotesque">
                    Currently listening to:
                  </h1>
                  <div className="mt-4 bg-gradient-to-r from-orange-700 to-orange-50 bg-clip-text text-center text-transparent focus-visible:outline-none">
                    <a
                      href="https://podcasts.apple.com/us/podcast/factually-with-adam-conover/id1463460577"
                      rel="noreferrer"
                      target={"_blank"}
                      className=" hover:text-gray-400 focus-visible:outline-none"
                    >
                      Factually! with Adam Conover
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-row">
                <div className="mx-7 w-12">
                  <Image src={StateOfMind} alt={"An icon of Podcast"} />
                </div>
                <div className="flex w-full flex-col">
                  <h1 className="font-grotesque">State of mind:</h1>
                  <div className="has-tooltip mt-4 bg-gradient-to-r from-orange-700 to-orange-50 bg-clip-text text-center text-transparent focus-visible:outline-none ">
                    <a
                      href="https://ko-fi.com/nsunami"
                      rel="noreferrer"
                      target={"_blank"}
                      className="hover:text-gray-400 focus-visible:outline-none"
                    >
                      Always caffeinated
                    </a>
                    <a
                      href="https://ko-fi.com/nsunami"
                      rel="noreferrer"
                      target={"_blank"}
                    >
                      <div className="tooltip absolute -top-9 right-0 flex w-64 flex-row items-center rounded-md bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 py-4 px-6 text-xl text-white">
                        <div>You can buy me a cup at Kofi</div>
                        <div className="h-12 w-12">
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

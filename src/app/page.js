"use client";
import Image from "next/image";
import styles from "./globals.css";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillAccountBook,
} from "react-icons/ai";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

import deved from "../../public/dev-ed-wave.png";
import { useState } from "react";
import MyProjects from "./projectCollection";
import BigCardColl from "@/Projects/bigCardColl";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>My-Portfolio</title>
        <meta rel="icon" href="favicon.ico" />
      </Head>

      <main className="bg-yellow-80 px-10 mb-12 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-12 flex justify-between">
            <h1 className="text-xl font-extralight">
              Developed By Ruturaj with NextJS
            </h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="text-lg font-burtons px-5 rounded-lg ml-8 dark:text-white"
                  href="#project"
                >
                  Projects
                </a>
              </li>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-slate-50 text-white px-5 rounded-lg ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-3xl py-2 text-teal-700 font-mono">
              Ruturaj Dhakane
            </h2>
            <h3 className="text-2xl py-2">Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-500">
              I am a passionate and results-driven Full-Stack Engineer with a
              focus on backend development. <br></br>My tech stack includes
              Node.js for robust server-side logic, React for creating seamless
              user interfaces,
              <br></br> and I am well-versed in C++ and Go for versatile
              programming solutions.<br></br>
              Explore my portfolio to discover the exciting projects I have been a
              part of, and feel free to reach out for collaboration or further
              discussions.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-500">
            <AiFillAccountBook />
            <AiFillLinkedin />
            <AiFillTwitterCircle />
          </div>

          <div className="relative mx-auto bg-gradient-to-t from from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h1 className="text-4xl py-5 text-center">My Tech Stack</h1>
          </div>
          <div className="">
            <div className="text-8xl flex items-center justify-center gap-10">
              <FaNode />
              <FaReact />
              <TbBrandCpp />
              <FaPython />
            </div>
            <div className="text-4xl py-7 text-center">
              <span className="pr-5">Node.js</span>
              <span className=" px-5">React</span>
              <span className=" px-5">C++</span>
              <span className=" px-5">Python</span>
            </div>
          </div>

          {/* <div className="flex flex-col items-center py-5">
            <div className="text-8xl flex items-center justify-center gap-10">
              <FaNode />
              <FaReact />
              <TbBrandCpp />
              <FaPython />
            </div>
            <div className="text-4xl flex text-center gap-9 py-7">
              <span className=" mr-6">Node.js</span>
              <span className="mr-30">React</span>
              <span>C++</span>
              <span>Python</span>
            </div>
          </div> */}
          <div>
          <div className="text-8xl flex items-center justify-center gap-10">
              <FaGolang className=""/>
              <SiMysql />
              <SiRedis />
              <BiLogoPostgresql />
            </div>
            <div className="text-4xl py-7 text-center">
              <span className="pr-5">GoLang</span>
              <span className=" px-5">MySQL</span>
              <span className=" px-5">Redis</span>
              <span className=" px-5">Postgres</span>
            </div>
          </div>
        </section>

        {/* <div className='project'>
        <section className='Projects p-20'>
        <div className='text-center p-10'>
          <h2 className='text-3xl py-2 text-teal-700 font-mono'>Projects</h2>
          </div> 
          <MyProjects />
        </section>
        </div> */}

        <div className="text-center p-20">
          <h2 className="text-3xl py-5 text-teal-700 font-mono">Projects</h2>
        </div>
        <MyProjects />

        {/* <BigCardColl /> */}
      </main>
    </div>
  );
}

"use client"

import cardEffect from "./utils/cardEffect";
import copyEmailToClipboardEffect from "./utils/copyEmailToClipboardEffect"
import LibCard from "./components/LibCard";
import ProjectCard from "./components/ProjectCard";
import projects from './projects.json'
import githubLogo from './assets/logos/github.svg'
import leetcodeLogo from './assets/logos/leetcode.svg'
import monkeytypeLogo from './assets/logos/monkeytype.svg'
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    cardEffect();
    copyEmailToClipboardEffect();
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16sm:items-start">
        <div className="p-2 outline-1 outline-solid transition-all duration-100 ease-linear" id="main-card">
          <h1 className='text-5xl'>Max</h1>
          <p className='text-xl'>HS junior passionate about computer science.</p>
          <p className='text-normal cursor-pointer hover:text-blue-500 hover:underline inline' id='email-text' title='Copy to clipboard'>Email: max [at] example [dot] com</p>
          <div className="flex flex-row items-start gap-2">
            <a href="https://github.com/cistuff/" target="_blank">
              <img className="logo-img" src={githubLogo.src} alt="GitHub"/>
            </a>
            <a href="https://leetcode.com/u/anatomical" target="_blank">
              <img className="logo-img" src={leetcodeLogo.src} alt="LeetCode"/>
            </a>
            <a href="https://monkeytype.com/profile/mxa" target="_blank">
              <img className="logo-img" src={monkeytypeLogo.src} alt="Monkeytype"/>
            </a>
          </div>
        </div>

        <p className="text-3xl mt-16 mb-16">Projects</p>

        <div className="grid grid-cols-3 gap-6 p-2">
          {Object.entries(projects).map(([key, data]) => (
            <ProjectCard
              title={data.title}
              subtitle={data.subtitle}
              description={data.description}
              sourceUrl={data.sourceUrl}
              isOpenSource={data.isOpenSource}
            >
              {Object.entries(data.projectCards).map(([key, data]) => (
                <LibCard color={data.color} text={data.name}></LibCard>
              ))}
            </ProjectCard>
          ))}
        </div>
      </main>
    </div>
  );
}

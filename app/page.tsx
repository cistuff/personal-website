"use client"

import cardEffect from "./utils/cardEffect";
// import copyEmailToClipboardEffect from "./utils/copyEmailToClipboardEffect"
import LibCard from "./components/LibCard";
import ProjectCard from "./components/ProjectCard";
import projects from './projects.json'
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    cardEffect();
    // copyEmailToClipboardEffect();
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16sm:items-start">
        <div className="p-2 outline-1 outline-solid transition-all duration-150 ease-linear" id="main-card">
          <p className='text-xl whitespace-pre font-mono'>{`   ▄▄▄▄███▄▄▄▄      ▄████████ ▀████    ▐████▀ 
 ▄██▀▀▀███▀▀▀██▄   ███    ███   ███▌   ████▀  
 ███   ███   ███   ███    ███    ███  ▐███    
 ███   ███   ███   ███    ███    ▀███▄███▀    
 ███   ███   ███ ▀███████████    ████▀██▄     
 ███   ███   ███   ███    ███   ▐███  ▀███    
 ███   ███   ███   ███    ███  ▄███     ███▄  
  ▀█   ███   █▀    ███    █▀  ████       ███▄ `}</p>
          <p className='text-xl'>HS junior passionate about computer science.</p>
          {/* <p className='text-normal cursor-pointer hover:text-blue-500 hover:underline inline' id='email-text' title='Copy to clipboard'>Email: max [at] example [dot] com</p> */}
          <div className="flex flex-row justify-center gap-2 w-1/1">
            <a href="https://github.com/cistuff/" target="_blank">[github]</a>
            <a href="https://leetcode.com/u/anatomical" target="_blank">[leetcode]</a>
            <a href="https://monkeytype.com/profile/mxa" target="_blank">[monkeytype]</a>
          </div>
        </div>

        <p className="text-3xl mt-16 mb-16">Projects</p>

        <div className="grid grid-cols-3 gap-6 p-2">
          {Object.entries(projects).map(([key, data]) => (
            <ProjectCard
              key={key}
              title={data.title}
              subtitle={data.subtitle}
              description={data.description}
              sourceUrl={data.sourceUrl}
              isOpenSource={data.isOpenSource}
            >
              {Object.entries(data.projectCards).map(([key, data]) => (
                <LibCard color={data.color} text={data.name} key={key}></LibCard>
              ))}
            </ProjectCard>
          ))}
        </div>
      </main>
    </div>
  );
}

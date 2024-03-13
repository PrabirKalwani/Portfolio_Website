import Image from 'next/future/image'
import Link from 'next/link'
import clsx from 'clsx'
import Head from 'next/head'
import conclave from '@/images/logos/logo/conclave.jpg'
import delego from '@/images/logos/logo/delego.jpg'
import gemini from '@/images/logos/logo/gemini.jpg'
import palm from '@/images/logos/logo/palm.png'
import munsoc from '@/images/logos/logo/munsoc.png'
import sattva from '@/images/logos/logo/sattva.jpg'
import tq from '@/images/logos/logo/tq.jpg'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import trc from '@/images/logos/logo/trc.png'
import prabir from '@/images/prabir.jpg'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  MediumIcon,
  GitHubIcon,
  LinkedInIcon,

} from '@/components/SocialIcons'

import ncair from '@/images/logos/logo/ncair.jpg'
import p from '@/images/logos/logo/p.png'
import { Section } from '@/components/Section'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}


function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function HandLogo(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 4.5V10.5M12 10.5V16.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <path
        d="M6 12a4 4 0 0 1 8 0 4 4 0 0 1-8 0z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M9 8.5h6M10.75 6.75a2 2 0 0 1 2 0 2 2 0 0 1 0 4 2 2 0 0 1-2 0"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}



  //  TODO: ADD Companies
function Resume() {
  let resume = [
   
    {
      company: 'NCAIR (National Centre for Aerospace Innovation and Research), IIT Bombay',
      title: 'AI/ML Research Intern',
      logo: ncair,
      start: 'Present',
      end: 'May 2024',
    },
    
  ]
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-7 w-7 rounded-full"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    
    </div>
  )
}


function Vol() {
  let vol = [
   
    {
      company: 'MUN SOCIETY ',
      title: 'Head of Tech Development',
      logo: munsoc,
      start: 'Present',
      end: 'May 2024',
    },
    {
      company: 'Taqneeq Fest',
      title: 'Head of Tech Development',
      logo: tq,
      start: 'Present',
      end: 'May 2024',
    },
    {
      company: 'Social Conclave ',
      title: 'Head of Tech Development',
      logo: conclave,
      start: 'Present',
      end: 'May 2024',
    },
    {
      company: 'Sattva Fest ',
      title: 'Head of Tech Development',
      logo: sattva,
      start: 'Present',
      end: 'May 2024',
    },
    {
      company: 'Tech And Research Cell ',
      title: 'Joint Secretary',
      logo: trc,
      start: 'Present',
      end: 'May 2024',
    },
    {
      company: 'LAHS GREEN (NGO)',
      title: 'Web Dev Intern (Volunteer)',
      logo: p,
      start: 'Present',
      end: 'May 2024',
    },
    
  ]
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <HandLogo className="h-6 w-6 flex-none" />
        <span className="ml-3">Volunteering</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {vol.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-7 w-7 rounded-full"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    
    </div>
  )
}














// TODO : Add Project Logos
const projects = [
  {
    name: 'ChatGemini',
    description:
      "A Flutter-based cross-platform mobile application with Firebase Authentication and Text Generation by the Gemini API.  ",
    link: {
      href: 'https://chatgemini.prabir.in',
      label: 'Medium',
    },
    logo: gemini,
  },
  {
    name: 'ChatPaLM',
    description:
      "A Flutter-based cross-platform mobile application with Firebase Authentication and Text Generation by the PaLM LLM.",
    link: {
      href: 'https://medium.com/google-cloud/introducing-chatpalm-b11ed75f083f',
      label: 'Medium',
    },
    logo: palm,
  },
  {
    name: 'Delego',
    description:
      "The official app used for Mumbai MUN Society's MUN Conference.",
    link: {
      href: 'https://apps.apple.com/in/app/delego-mumbai-mun-2023/id1661612842',
      label: 'App Store',
    },
    logo: delego,
  },
  {
    name: 'Social Conclave Website',
    description:
      "Social Conclave Website for a fest held at MPSTME Mumbai",
    link: {
      href: 'https://socialconclave.in/',
      label: 'Website',
    },
    logo: conclave,
  },
  
 
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}






function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}



export default function About() {
  return (
    <>
      <Head>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<title>Prabir Kalwani </title>
		<meta name="title" content="Prabir Kalwani " />
		<meta name="description" content="Prabir Kalwani | Full stack App & Web Developer based out of Mumbai ,India " />

		<meta property="og:type" content="website" />
		<meta property="og:url" content="https://prabir.in/" />
		<meta property="og:title" content="Prabir Kalwani " />
		<meta property="og:description" content="Prabir Kalwani | Full stack App & Web Developer based out of Mumbai ,India " />
		<meta property="og:image" content="https://metadatawebsite.s3.eu-north-1.amazonaws.com/Meta-Banner.png" />

		<meta property="twitter:card" content="summary_large_image" />
		<meta property="twitter:url" content="https://prabir.in/" />
		<meta property="twitter:title" content="Prabir Kalwani " />
		<meta property="twitter:description" content="Prabir Kalwani | Full stack App & Web Developer based out of Mumbai ,India " />
		<meta property="twitter:image" content="https://metadatawebsite.s3.eu-north-1.amazonaws.com/Meta-Banner.png" />
      
      </Head>
      <Container className="mt-16 sm:mt-32" id='about-section'>
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={prabir}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Prabir Kalwani. A engineer , programmer and full stack developer based in Mumbai, In.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>Hey there, I&apos;m Prabir Kalwani, a freelance web and app developer specializing in the MERN Stack and Flutter. I&apos;m not just your typical coder—I bring a mix of technical expertise and creative thinking to the table. Crafting seamless digital experiences is my forte and I&apos;m always eager to dive into the latest technologies to stay ahead of the curve.</p>
 <p>
But let me share a bit about the person behind the code. When I&apos;m not immersed in lines of code you&apos;ll find me lost in the world of music or fueling my creative bursts with a healthy dose of coffee Oh and hitting the gym is not just a hobby for me—it&apos;s a regular part of my routine  Join me on this journey where technology meets personality and lets create something amazing together!</p>    

            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {/* // TODO : Add social Links  */}
              <SocialLink
                href="https://github.com/prabirkalwani/"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/prabirkalwani/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on medium
              </SocialLink>
              <SocialLink
                href="https://medium.com/@prabir.kalwani"
                icon={MediumIcon}
                className="mt-4"
              >
                Follow on medium
              </SocialLink>
              <SocialLink
                href="mailto:prabir.kalwani@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
prabir kalwani            
  </SocialLink>
            </ul>
          </div>
        </div>
      </Container>

{/* projects */}
<div id='proj-section'></div>
      <SimpleLayout
        title="A couple of my favorite personal projects."
        intro="I am Computer Science engineering aspirant with a background in building Front end web developnment and API developnment , possesing strong skills in problem solving and Machine Learning ."
        
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8 rounded-full"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
      
{/* speaking */}
      <SimpleLayout
        title="Some insights into my journey."
        intro="I express gratitude for the valuable exposure and experience I have gained in the realms of STEM."
      >
 <div className="space-y-20" id='speaking-section'>
          <SpeakingSection title="Tech Tippni">
            <Appearance
              href="#"
              title="Tech Tippni 2023"
              description="Tech Tippni is a tech conference held at MPSTME Mumbai where i had the opportunity to educated / guide students in the field of MERN Stack and web hosting using AWS "
              event="Educational Talk "
              cta="August 18th, 2023"
            />
            
          </SpeakingSection>
          
        </div>

        
      </SimpleLayout>
    


      {/* jobs */}

      <Container className="mt-24 md:mt-28">
      <div className="space-y-20  mb-10" id='speaking-section'>
            <Resume/>
        </div>
        
      <div className="space-y-20" id='speaking-section'>
      <Vol/>
        </div>
      </Container>
    </>
  )
}

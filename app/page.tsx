/**
 * v0 by Vercel.
 * @see https://v0.dev/t/U8yEWsMG95L
 */
import Link from "next/link"
/* import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CardHeader, CardContent, Card } from "@/components/ui/card" */

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-[#121212] text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <UserIcon className="h-6 w-6" />
          <span className="ml-2 font-bold">Murapa96</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-6">
        <section className="w-full pt-24 md:pt-48 lg:pt-64 bg-gradient-to-r from-green-400 to-blue-500" id="home">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-[#ffffff]">
                  Welcome to my Portfolio
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  I'm Murapa96, a full-stack developer with a passion for creating web applications.
                </p>
                <Button className="bg-white text-black">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary">My Projects</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out some of my work.</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  I've worked on a variety of projects, from simple websites to complex web applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <Card className="bg-[#232323] text-white rounded-lg shadow-lg overflow-hidden">
                <CardHeader>
                  <h3 className="text-lg font-bold">Project 1</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">A brief description of the project.</p>
                  <Button>View Project</Button>
                </CardContent>
              </Card>
              <Card className="bg-[#232323] text-white rounded-lg shadow-lg overflow-hidden">
                <CardHeader>
                  <h3 className="text-lg font-bold">Project 2</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">A brief description of the project.</p>
                  <Button>View Project</Button>
                </CardContent>
              </Card>
              <Card className="bg-[#232323] text-white rounded-lg shadow-lg overflow-hidden">
                <CardHeader>
                  <h3 className="text-lg font-bold">Project 3</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">A brief description of the project.</p>
                  <Button>View Project</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary">Contact Me</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in touch</h2>
              </div>
            </div>
            <div className="mx-auto max-w-4xl">
              <form>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400" htmlFor="name">
                  Full Name
                </label>
                <input
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#232323] text-white"
                  id="name"
                  name="name"
                  required
                  type="text"
                />
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mt-4" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#232323] text-white"
                  id="email"
                  name="email"
                  required
                  type="email"
                />
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mt-4" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#232323] text-white"
                  id="message"
                  name="message"
                  required
                  rows="4"
                />
                <Button className="mt-4">Submit</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="h-20 flex items-center justify-center border-t">
        <p className="text-gray-500 dark:text-gray-400">© Murapa96. All rights reserved.</p>
      </footer>
    </div>
  )
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

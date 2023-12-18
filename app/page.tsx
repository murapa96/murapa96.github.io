/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wLT8DuUcaZj
 */
import dynamic from "next/dynamic"
import Link from "next/link";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Component() {

	const Typing = dynamic(() => import('@/components/custom/typing'), { ssr: false });
	return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Avatar>
            <AvatarImage src="/avatar.jpg" alt="Avatar" />
          </Avatar>
          <span className="sr-only">My Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Projects
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="relative h-[70vh]">
          <img
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
            height="800"
            src="/avatar.jpg"
            style={{
              aspectRatio: "1920/800",
              objectFit: "cover",
            }}
            width="1920"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <Typing strings={[
							  "Hello, World!",
			  "I'm a Web Developer.",
			  "I'm a Designer.",
			  "I'm a Student.",
			  "I'm Murapa"
			]} delay={300} loop={false} />
            <p className="mt-4 max-w-lg mx-auto">
              Showcasing my best work in web development and design.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">
              My Projects
            </h2>
            <div className="mx-auto grid items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Project 1</CardTitle>
                  <Badge>Web Development</Badge>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Project 1"
                    className="w-full h-48 object-cover"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "350/200",
                      objectFit: "cover",
                    }}
                    width="350"
                  />
                  <p className="mt-4 text-gray-500">
                    A brief description of the project...
                  </p>
                </CardContent>
                <CardFooter>
                  <Link className="text-sm font-medium underline" href="#">
                    View Project
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Contact Me
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              If you have any questions or want to discuss a project or job
              opportunity, feel free to send me a message.
            </p>
            <form className="w-full max-w-md mx-auto space-y-4">
              <Input className="w-full" placeholder="Name" type="text" />
              <Input className="w-full" placeholder="Email" type="email" />
              <textarea
                className="w-full h-32 resize-none"
                placeholder="Message"
              />
              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © My Portfolio. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  );
}

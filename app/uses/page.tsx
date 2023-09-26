import type { Metadata } from 'next';
import Image from 'next/image';
import resume from '../public/static/Resume.png'
import avatar from '../public/static/avatar.png'

export const metadata: Metadata = {
  title: 'Uses',
  description:
    "Here's everything im using for tech and coding.",
};

export default function UsesPage() {
  return (
		<section>
			<div className="mx-auto mt-16 mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
				<Image
					className="rounded-3xl"
					src={resume}
					alt="/"
					width={2164 / 2}
					height={1546 / 2}
					priority
				/>
			</div>
			<h1 className="font-bold text-2xl mb-4 tracking-tighter">
				here's my setup
			</h1>
			<h3 className="font-bold text-xl mb-8 tracking-tighter">
				Here&apos;s what tech I&apos;m currently using for coding, work, and
				life in general. It changes and adapts widely based on learning new tech
				and my love for learning new things to maximize quality of life and
				productivity.
			</h3>
			<div className="prose prose-neutral dark:prose-invert">
				<h3 id="computer-office">Computer / Office</h3>
				<ul>
					<li>16&quot; Macbook Pro M1-pro</li>
					<li>13.6&quot; Macbook air M2</li>
					<li>12.9&quot; iPad Pro M1</li>
					<li>32&quot; Dell 4k HDR Curved Monitor</li>
					<li>Vertical Asus Gaming Monitor</li>
					<li>Logitech MX Master 3 Mouse</li>
					<li>NuPhy Air 75 Mechanical Keyboard **</li>
					<li>Apple Magic Trackpad</li>
				</ul>
				<h3 id="coding">Coding</h3>
				<ul>
					<li>
						Editor: VSCode 
						{/* (
						<a href="/">
							Settings / Extensions
						</a>
						) */}
					</li>
					<li>Editor: VSCode</li>
					<li>Gitkraken or GH Client</li>
					<li>Theme: My Modded Andromeda</li>
					<li>Terminal: Warp / zsh **Highly Recommend</li>
				</ul>
				<h3 id="software">Software</h3>
				<ul>
					<li>BitWarden</li>
					<li>Proton **Highly Recommend</li>
					<li>Arc Browser **Highly Recommend</li>
					<li>Workana</li>
					<li>Raycast **Highly Recommend</li>
					<li>Notion</li>
				</ul>
				<h3 id="software">Other Tech</h3>
				<ul>
					<li>Apple Airpods Pro</li>
					<li>Apple Watch</li>
					<li>Apple iPhone</li>
					<li>Lacie USB-C External HDD</li>
				</ul>
			</div>
		</section>
	)
}

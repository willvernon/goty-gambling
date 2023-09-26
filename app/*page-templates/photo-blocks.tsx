import Image from 'next/image'

import avatar from '../public/static/avatar.png'
import dc from '../public/static/dc-logo.png'
import Badge from '@components/badge'
import ArrowIcon from '@components/icons/ArrowIcon'
import CardLink from '@components/CardLink'

import { Suspense } from 'react'

export default async function Page() {
	return (
		<section>
			<h1 className="font-bold text-2xl mb-8 tracking-tighter flex border-solid border-blue-500 border">
				<Image
					alt="DC Logo"
					src={avatar}
					height={24}
					width={32}
					sizes="100"
					className="border border-neutral-200 dark:border-neutral-700 rounded-full mr-5"
				/>{' '}
				hey, I'm Will 👋
			</h1>
			<p className="prose prose-neutral dark:prose-invert border-solid border-blue-500 border">
				{`I'm a frontend developer, i enjoy solving problems and building things. I currently
        work with web sites and desktop and mobile applications. `}
				<span className="not-prose">
					<Badge href="https://vercel.com">
						<svg
							width="13"
							height="11"
							viewBox="0 0 13 11"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="inline-flex mr-1"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M6.5 0L13 11H0L6.5 0Z"
								fill="currentColor"
							/>
						</svg>
						Vercel
					</Badge>
				</span>
				{`, is where I live demo most of my projects.  `}
				<Badge href="https://digitalcraftsmen.dev">
					<Image
						alt="DC Logo"
						src={dc}
						height={24}
						width={24}
						sizes="100"
						className="border border-neutral-200 dark:border-neutral-700 rounded-full"
					/>
					Digital Craftsmen
				</Badge>
				{`  Is my side project llc, where I build and maintain websites and applications for small businesses and personal projects.`}
			</p>
			<div className="columns-2 sm:columns-3 gap-4 my-8">
				<div className="relative h-40 mb-4 border-solid border-blue-500 border">
					Test 1
				</div>
				<div className="relative h-80 mb-4 sm:mb-0 border-solid border-blue-500 border">
					Test 2
				</div>
				<div className="relative h-40 sm:h-80 sm:mb-4 border-solid border-blue-500 border">
					Test 3
				</div>
				<div className="relative h-40 mb-4 sm:mb-0 border-solid border-blue-500 border">
					test 4
				</div>
				<div className="relative h-40 mb-4 border-solid border-blue-500 border">
					test 5
				</div>
				<div className="relative h-80 border-solid border-blue-500 border">
					test 6
				</div>
			</div>
			<div className="prose prose-neutral dark:prose-invert border-solid border-blue-500 border">
				<p>Text BLock</p>
			</div>
			<div className="border-solid border-blue-500 border my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full"></div>
			<div className="prose prose-neutral dark:prose-invert border-solid border-blue-500 border">
				<p>Text Block 2</p>
			</div>
			<div className="my-8 flex flex-col space-y-4 w-full">
				<Suspense>
					<CardLink name="CardLink One" href="/" />
					<CardLink name="CardLink Two" href="/" />
					<CardLink name="CardLink Three" href="/" />
				</Suspense>
			</div>

			<div className="prose prose-neutral dark:prose-invert border-solid border-blue-500 border">
				<p>Footer Text Here</p>
			</div>
			<ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
				<li>
					<a
						className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
						rel="noopener noreferrer"
						target="_blank"
						href="/"
					>
						<ArrowIcon />
						<p className="h-7 ml-2">follow me on twitter</p>
					</a>
				</li>
				<li>
					<a
						className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
						rel="noopener noreferrer"
						target="_blank"
						href="/"
					>
						<ArrowIcon />
						<p className="h-7 ml-2">get email updates</p>
					</a>
				</li>
			</ul>
		</section>
	)
}

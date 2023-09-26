import React from 'react'
import ArrowIcon from './icons/ArrowIcon'

function CardLink({ href, name }) {
  return (
    <>
    <a
			href={href}
			className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50  dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
		>
			<div className="flex flex-col">
				<p className="font-bold text-neutral-900 dark:text-neutral-100">
					{name}
				</p>
			</div>
			<div className="text-neutral-700 dark:text-neutral-300">
				<ArrowIcon />
			</div>
		  </a>
	  </>
      //For Blog href={`/blog/${slug}`}
  )
}

export default CardLink

import Navbar from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import GlowBar from '@/components/dashboard/glowbar'

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {

	return (
		<div className='h-full relative'>
			{/* <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        <Sidebar
          isPro={isPro}
          apiLimitCount={apiLimitCount}
        />
      </div> */}
			<main className=' pb-10'>
				{/* <Navbar /> */}
				<Navbar />
				{children}
				<GlowBar />
			</main>
		</div>
	)
}

export default DashboardLayout

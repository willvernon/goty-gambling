import {
  getSession,
  getUserDetails,
  getSubscription
} from '@/app/supabase-server';
import BetCard from '@/components/Dashboard/BetCard';

import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

export default async function DashboardPage() {
  const [session, userDetails, subscription] = await Promise.all([
    getSession(),
    getUserDetails(),
    getSubscription()
  ]);

  const user = session?.user;

  if (!session) {
    return redirect('/signin');
  }

  return (
    <section className="mb-32 bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-24 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-xl font-extrabold text-white sm:text-center sm:text-3xl">
            Dashboard
          </h1>
          <p className="max-w-2xl m-auto mt-5 text-md text-zinc-200 sm:text-center sm:text-xl">
            We partnered with Stripe for a simplified billing.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="md:col-start-2 md:col-span-4 bg-blue-400">01</div>
        <div className="ml-5 md:col-start-1 md:col-end-5 ">
          <Card title="Live Play's">
            <div className="flex flex-row space-x-5">
              <Card
                title="Cowboys -12"
                description=""
                footer={
                  <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                    <p className="pb-4 sm:pb-0">
                      <span className="">Payout:</span> 7 units
                    </p>
                  </div>
                }
              >
                <div className="mt-1 text-lg text-zinc-400">Line: -183</div>
                <div className="mt-1 text-lg text-zinc-400">Opp: 49ers</div>
                <div className="mt-1 text-lg text-zinc-400">Unit Size: 3u</div>
                <div className="mt-1 text-lg text-zinc-400"></div>
              </Card>
              <Card
                title="Your Name"
                description="Please enter your full name, or a display name you are comfortable with."
                footer={
                  <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                    <p className="pb-4 sm:pb-0">
                      <span>Payout:</span> 7 units
                    </p>
                  </div>
                }
              >
                <div className="mt-8 mb-4 text-xl font-semibold"></div>
              </Card>
            </div>
            <div className="mt-8 mb-4 text-xl font-">Good Luck Have Fun</div>
          </Card>
          <Card
            title="Your Name"
            description="Please enter your full name, or a display name you are comfortable with."
            footer={
              <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                <p className="pb-4 sm:pb-0">64 characters maximum</p>
              </div>
            }
          >
            <div className="mt-8 mb-4 text-xl font-semibold"></div>
          </Card>
          <Card
            title="View Betting History"
            description="Please enter the email address you want to use to login."
            footer={
              <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                <p className="pb-4 sm:pb-0">Here will be card history.</p>
              </div>
            }
          >
            <div className="mt-8 mb-4 text-xl font-semibold"></div>
          </Card>
        </div>

        <div className="md:col-end-7 md:col-span-2 ">
          <BetCard />
        </div>
        <div className="md:col-start-1 md:col-end-7 p-5 mt-[-30px]">
          <Card
            title="View Betting History"
            description="Please enter the email address you want to use to login."
            footer={
              <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                <p className="pb-4 sm:pb-0">Here will be card history.</p>
              </div>
            }
          >
            <div className="flex flex-row space-x-5 mt-8 mb-4 text-xl font-semibold ">
              <Card title="Your Play ">
                <div className="mt-8 mb-4 text-xl font-semibold"></div>
              </Card>

              <Card title="Your Play ">
                <div className="mt-8 mb-4 text-xl font-semibold"></div>
              </Card>
            </div>
          </Card>
        </div>
      </div>
      <div className="flex flex-col p-4">
        <div></div>
        <div></div>
      </div>
    </section>
  );
}

interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
}

function Card({ title, description, footer, children }: Props) {
  return (
    <div className="w-full max-w-3xl m-auto my-8 border rounded-md p border-zinc-700">
      <div className="px-5 py-4">
        <h3 className="mb-1 text-2xl font-medium">{title}</h3>
        <p className="text-zinc-300">{description}</p>
        {children}
      </div>
      <div className="p-4 border-t rounded-b-md border-zinc-700 bg-zinc-900 text-zinc-500">
        {footer}
      </div>
    </div>
  );
}

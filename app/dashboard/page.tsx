"use client";

import { ArrowRight } from "lucide-react";

import ParlayCard from "@/components/ParylayCard";
import AddBetCard from "@/components/AddBet";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl text-slate-200 md:text-4xl font-bold text-center">
          Explore Game Of The Year Sports
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Build the best card - Get all Scores live
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        <Card className="p-4 border-slate-200  flex items-center justify-between hover:shadow-md transition cursor-pointer">
          <div className="flex items-center gap-x-4">
            <div className={"p-2 w-fit rounded-md"}></div>
            <div className="font-semibold">{}</div>
          </div>
          <ArrowRight className="w-5 h-5" />
        </Card>
      </div>
      <div className="">
        <div className="flex justify-center my-4 space-x-4 items-center">
          <ParlayCard />
          <AddBetCard />
        </div>
      </div>
    </>
  );
}

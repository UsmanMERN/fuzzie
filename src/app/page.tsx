import { CardBody, CardItem, ThreeDCard } from "@/components/global/3d-card";
import Navbar from "@/components/global/Navbar";
import { HeroParallax } from "@/components/global/connect-parallex";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { LampComponent } from "@/components/global/lamp";
import { Button } from "@/components/ui/button";
import { clients, products } from "@/lib/constant";
import { CheckIcon, MoveRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-screen w-full bg-neutral-950 rounded-md !overflow-visible relative flex flex-col items-center antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]">
        </div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll titleComponent={
            <div className="flex flex-col items-center justify-center">
              <Button size={'lg'} className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 font-sans font-bold md:text-center group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
                  Start For Free Today
                </span>
              </Button>
              <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                Automate your work with Fuzzie
              </h1>
            </div>
          } />
        </div>
      </section>
      <div className="flex items-center justify-center">
        <InfiniteMovingCards
          className="md:mt-[18rem] mt-[-100px]"
          items={clients}
          direction="right"
          speed="slow"
        />
      </div>
      <section>
        <HeroParallax products={products} />
      </section>
      <section className="mt-[-500px]">
        <LampComponent />
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72 ">
          <ThreeDCard className="inter-var flex flex-col">
            <CardBody className=" bg-gray-50 relative py-6 group/card h-auto md:h-128 dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] rounded-xl p-6 border">
              <CardItem className="text-xl font-bold text-neutral-600 dark:text-white" translateZ={"50"}>
                Hobby <h2 className="text-6xl">$0</h2>
              </CardItem>
              <CardItem className="text-sm text-neutral-500 max-w-sm mt-2 dark:text-neutral-300" translateZ={"60"}>
                Get Glimpse of what our software is capable of. just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Free Automation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon /> 100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Two-step Action
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem translateZ={20} as={'button'} className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                  <span>Try now <MoveRight className=" inline" /></span>
                </CardItem>
                <CardItem translateZ={20} as={'button'} className="px-4 py-2 rounded-xl text-xs font-bold bg-black dark:bg-white dark:text-black text-white">
                  Get Statrted Now
                </CardItem>
              </div>
            </CardBody>
          </ThreeDCard>
          <ThreeDCard className="inter-var flex flex-col">
            <CardBody className="bg-gray-50 relative py-6 group/card h-auto md:h-128 dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] rounded-xl p-6 border">
              <CardItem className="text-xl font-bold text-neutral-600 dark:text-white" translateZ={"50"}>
                Pro Plan <h2 className="text-6xl">$9.99</h2>
              </CardItem>
              <CardItem className="text-sm text-neutral-500 max-w-sm mt-2 dark:text-neutral-300" translateZ={"60"}>
                Get access to advanced features and priority support. Upgrade now to unlock everything!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Free Automation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Unlimited tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Multi-step Action
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem translateZ={20} as={'button'} className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                  <span>Try now <MoveRight className="inline" /></span>
                </CardItem>
                <CardItem translateZ={20} as={'button'} className="px-4 py-2 rounded-xl text-xs font-bold bg-black dark:bg-white dark:text-black text-white">
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </ThreeDCard>
          <ThreeDCard className="inter-var flex flex-col">
            <CardBody className="bg-gray-50 relative py-6 group/card h-auto md:h-128 dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] rounded-xl p-6 border">
              <CardItem className="text-xl font-bold text-neutral-600 dark:text-white" translateZ={"50"}>
                Unlimited <h2 className="text-6xl">$19.99</h2>
              </CardItem>
              <CardItem className="text-sm text-neutral-500 max-w-sm mt-2 dark:text-neutral-300" translateZ={"60"}>
                The ultimate plan for power users who need unlimited access to all features and premium support.
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Free Automation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Unlimited tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Multi-step Action
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Priority Support
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem translateZ={20} as={'button'} className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                  <span>Try now <MoveRight className="inline" /></span>
                </CardItem>
                <CardItem translateZ={20} as={'button'} className="px-4 py-2 rounded-xl text-xs font-bold bg-black dark:bg-white dark:text-black text-white">
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </ThreeDCard>
        </div>
      </section>
    </main>
  );
}

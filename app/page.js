import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">

        <div className=" flex flex-col gap-4 items-center justify-center ">
          <p className="font-bold text-3xl ">
            The best URL shortner in the Market
          </p>
          <p className="px-36 text-center">
            We are the most straightforward URL shortner in the world.Most of the url shortners will track or ask you to give your details for login. we understand your privacy concerns and hence we do not track or ask for any details.
          </p>
          <div className='flex gap-3 text-white  '>
            <Link href="/shorten"><button className='bg-purple-500 cursor-pointer rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
            <Link  target="_blank" href="https://github.com/AnkurTechWiz/BitLink"><button className= '  bg-purple-500 rounded-lg cursor-pointer shadow-lg p-3 py-1 font-bold'>Github</button></Link>

          </div>
        </div>
        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" alt="an image of a vector" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
    </main>

  );
}

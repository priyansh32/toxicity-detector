import { Inter } from "next/font/google";
import Main from "./components/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-evenly max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen h-min-min'>
      <Main />
    </main>
  );
}

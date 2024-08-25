import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";

export default function Landing() {
  const images = ["/Home.png", "/Home2.png", "/Home3.png"];

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <div className="h-screen flex flex-col justify-center items-center">
        <ImagesSlider className="h-full w-11/12" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              Your Ultimate <br /> Fashion Store
            </motion.p>
            <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <a href="/store">Shop now →</a>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </motion.div>
        </ImagesSlider>
      </div>
      <div className="flex flex-col justify-center mt-4 items-center">
        <div className="w-11/12">
          <a href="/store">
            <img className="rounded-t-lg" src="/Sweatshirt.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

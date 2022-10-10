import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sudhanshu</title>
        <meta name="description" content="I am sudhanshu" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <motion.div
        drag
        transition={{ type: "spring", stiffness: 100, delay: 2 }}
        animate={{ y: -50, rotate: 360}}
      >
        <motion.div
          whileHover={{ scale: 1.1, color: "#ffae00" }}
          className="text-xl text-center  sm:text-3xl mt-[80%] sm:mt-[25%] hover:cursor-pointer"
        >
          Hey !, I am Sudhanshu ☕️
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;

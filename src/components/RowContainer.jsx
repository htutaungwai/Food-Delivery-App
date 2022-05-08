import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const RowContainer = () => {
  const flag = true;
  return (
    <div
      className={`w-full  ${
        flag ? "overflow-x-scroll" : "overflow-x-hidden "
      } bg-rowBg mt-10`}
    >
      <div className="w-300 md:w-340  h-auto backdrop-filter my-12 hover:drop-shadow-lg pr-2">
        <div className="w-full flex items-center justify-center">
          <motion.img
            whileHover={{
              scale: 1.1,
            }}
            src="https://firebasestorage.googleapis.com/v0/b/code-commerce-774df.appspot.com/o/images%2F1651910284973-cu4.png?alt=media&token=f1c63017-9505-4611-9aba-50fa7b0779e4"
            alt="momo"
            className="w-40 -mt-8 drop-shadow-2xl"
          />
          <motion.div
            whileTap={{ scale: 0.6 }}
            className="w-8 h-8 rounded-full bg-red-500 flex justify-center items-center hover:shadow-md "
          >
            <MdShoppingBasket className="text-white" />
          </motion.div>
        </div>

        <div className="w-full flex flex-col items-end justify-end ">
          <p className="text-textColor font-semibold text-base md:text-lg">
            Hirai Momo
          </p>
          <p className="mt-1 text-sm text-gray-500">45 Calories</p>
          <div className="flex items-center gap-2">
            <p className="text-lg text-headingColor font-semibold">
              <span className="text-sm text-red-600">$</span>5.26
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowContainer;

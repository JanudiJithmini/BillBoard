import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-DM Sans">
      <div className="bg-green-950 text-white  p-6 rounded-lg w-80 shadow-lg font-normal">
        <div className="flex items-center mb-4">
          <Image
            src="/images/billboard.jpg"
            alt="Billboard at Kurunegala"
            width={70}
            height={200}
            className="rounded-md"
          />
          <div className="ml-4">
            <h3 className="text-lg font-DM Sans whitespace-nowrap font-normal">
              Billboard at Kurunegala
            </h3>
            <p className="text-xs">Kurunegala</p>
            <p className="text-xs flex items-center">
              <span className="mr-1">
                <IoStarSharp />
              </span>
              5.0
            </p>
            <p className="text-xs">Rs.2000.00</p>
          </div>
        </div>

        <div className="flex items-center text-sm mb-4">
          <span className="flex items-center mr-2">
            <Image
              src="/images/greenBulb.png"
              alt="green bulb"
              width={20}
              height={20}
              className="rounded-md"
            />
            <span className="ml-2">Illumination:</span>
          </span>
          <span>No</span>
        </div>
        <div className="flex items-center text-sm mb-4">
          <span className="flex items-center mr-2">
            <Image
              src="/images/carimage2.png"
              alt="green bulb"
              width={20}
              height={20}
              className="rounded-md"
            />
            <span className="ml-2 font-DM Sans">Traffic count :</span>
          </span>
          <span className="font-DM Sans">3246 /per day</span>
        </div>

        <div className="text-2xl  mb-4">
          Rs.5000.00 <span className="text-base font-DM Sans">/per week</span>
        </div>
        <hr className="border-gray-600 my-4" />
        <div className="text-xs space-y-2">
          <div className="flex justify-between font-DM Sans">
            <span>Adspace fee:</span>
            <span>Rs.5000.00</span>
          </div>
          <div className="flex justify-between font-DM Sans">
            <span>Service fee:</span>
            <span>Rs.580.00</span>
          </div>
          <div className="flex justify-between font-DM Sans">
            <span>Tax fee:</span>
            <span>Rs.0.00</span>
          </div>
        </div>
        <div className="flex justify-between items-center font-DM Sans text-xs mt-4">
          <span>Total:</span>
          <span>Rs.5580.00</span>
        </div>
        <button
          className="w-full bg-green-500 text-white  text-sm font-
DM Sans py-2 mt-4 rounded-3xl	"
        >
          Confirm & request
        </button>
      </div>
    </div>
  );
}

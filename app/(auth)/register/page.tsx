// import Button from "@/app/components/Button";
import Button from "@/app/component/Button";
import { data } from "@/utils/data";
import Link from "next/link";
import React from "react";
import { MdBeachAccess, MdStadium, MdStars } from "react-icons/md";

const page = () => {
  return (
    <div className="flex justify-center w-full items-center h-screen ">
      <div className="flex gap-5 ">
        {data?.map((props: any, i: number) => (
          <div
            key={props.id}
            className="w-[300px] bg-gray-200 flex flex-col min-h-[500px] border rounded-[15px]"
          >
            <div className="flex-1 ">
              <div className="flex w-full  text-[17px] mt-5 font-bold uppercase flex-col">
                <div className="flex justify-start ml-3">{props.name}</div>
                <hr className="bg-black h-[3px] w-full mt-2 items-center justify-center" />
                <div className="items-center flex ml-3 text-[30px] ">
                  {props.name !== "Free" && "₦"}
                  {props.price}
                  <div className="ml-3">
                    <p className="text-[9px] lowercase">/month</p>
                    <p className="text-[12px] lowercase">
                      {props.name === "Free"
                        ? "For Up To Five Staffs"
                        : props.name === "Upgrade"
                        ? "For Up To Ten Staffs"
                        : props.name === "Premium"
                        ? "Unlimited"
                        : null}
                    </p>
                  </div>
                </div>
                <hr className="bg-black h-[3px] w-full items-center justify-center" />
              </div>

              <div className="mt-10 px-5">
                <div>
                  {props.name === "Free"
                    ? "Best Way To try paste "
                    : props.name === "Upgrade"
                    ? "Best Way For professionals"
                    : props.name === "Premium"
                    ? "Best Way For Teams"
                    : null}
                </div>
                {props.benefits.map((props: string, i: number) => (
                  <p key={i} className="my-5">
                    &middot; {props}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[14px]  flex capitalize text-bold justify-center items-center">
                {props.name === "Upgrade"
                  ? "Billed as ₦6000 yearly"
                  : props.name === "Premium"
                  ? "Billed as ₦12000 yearly"
                  : null}
              </p>
            </div>
            <Link href={props.URL} className="flex w-full justify-center mb-6">
              <Button
                className={`font-normal ${
                  props.name === "Free"
                    ? "bg-blue-950"
                    : props.name === "Upgrade"
                    ? "bg-red-500"
                    : props.name === "Premium"
                    ? "bg-green-500"
                    : null
                }  px-[100px] py-1`}
              >
                {props.name}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

// import { APP_URL } from "@/utils/constanst";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";
import Image from "next/image";
import React from "react";
import { options } from "./api/auth/[...nextauth]/options";
import AuthScroll from "./component/AuthScroll"



const page = async () => {
  const session = await getServerSession(options);

  console.log(session);

  const res = await fetch("https://localhost:3000/api/product", {
    method: "GET",
    cache: "no-cache",
    next: {
      tags: ["product"],
    },
  });

  const data = await res.json();

  revalidateTag("product");
  return (
    <div>
      <div className="p-4 flex gap-4">
        {data?.data?.map((props: any) => (
          <div
            key={props?._id}
            className="overflow-hidden border rounded-md h-[400px] w-[300px]"
          >
            <Image
              alt={props?.title}
              src={props?.image}
              width={1000}
              height={1000}
              className="w-full h-[90%] border-b object-cover"
            />

            <p className="mt-1 ml-3 capitalize font-semibold">{props?.title}</p>
          </div>
        ))}
      </div>

      <br />
      <br />
      <br />
      <div className="w-[98%]">
        <AuthScroll />
      </div>

      <br />
    </div>
  );
};

export default page;
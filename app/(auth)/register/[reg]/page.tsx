 import { LOCAL_API } from "@/utils/constant";
import { data } from "@/utils/data";
import Link from "next/link";
import React from "react";
 import { FaGithub, FaGoogle } from "react-icons/fa";


const page = async ( params : any) => {
  const { reg } = params.params;
  const readData = data;

  console.log(`reading reg: ${reg}`);
  console.log(`reading data: ${readData}`);

  const plan: string = reg.toString().charAt(0).toUpperCase().concat(reg.substring(1));

  console.log(plan);
  console.log(
    "data: ",
    readData.filter((el) => {
      return el.name !== plan;
    })
  );

  let cost: any = readData.find((el) => {
    return el.name === plan;
  });

  const createAccount = async (data: FormData) => {
    "use server";
    const companyName = data.get("companyName") as string;
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    await fetch(`${LOCAL_API}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companyName,
        email,
        password,
        plan,
        planCost: cost?.price === "Free" ? 0 : parseInt(cost?.price),
      }),
    });
  };
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="border rounded-md w-[500px] min-h-[300px] p-4 ">
        <div>Register Screen for {plan}</div>

        <div className="my-10">
          <hr />
        </div>

        <form action={createAccount}>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[12px]">Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Display Name"
              className="border outline-none h-[45px] rounded-md pl-2"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[12px]">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="border outline-none h-[45px] rounded-md pl-2"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[12px]">Password</label>
            <input
              type="text"
              name="password"
              placeholder="Password"
              className="border outline-none h-[45px] rounded-md pl-2"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-8 h-[55px] flex items-center justify-center text-white bg-neutral-800 rounded-md"
          >
            Register
          </button>
        </form>

        <div className="text-[12px] my-4 text-center  ">
          Already have an Account{" "}
          <Link href="/signin" className="italic font-semibold ">
            Sign in Here
          </Link>
        </div>

        <div className="my-3">
          <hr />
        </div>

        <div>
          <p className="text-[12px] font-bold">
            Register through your Social Account
          </p>

          <div className="flex items-center gap-2">
            <button className="w-full mt-2 h-[55px] flex items-center justify-center text-white bg-red-600 hover:bg-red-500 duration-300  rounded-md text-[35px]">
              <FaGoogle />
            </button>
            <button className="w-full mt-2 h-[55px] flex items-center justify-center text-white bg-neutral-800 hover:bg-neutral-900 rounded-md text-[35px]">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;














// "use client";

// import { LOCAL_API } from "@/utils/constant";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React from "react";
// // import { FaGoogle } from "react-icons/fa";

// const page = ({params}: any) => {
//     const {regID} = params
//   const router = useRouter();
//   const mainAction = async (formData: FormData) => {
//     // "use server";
//     const companyName = formData.get("companyName");
//     const email = formData.get("email");
//     const password = formData.get("password");

//     const URL: string = `${LOCAL_API}/api/auth/register`;

//     // console.log(name, email, password, { });
//     await fetch(URL, {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({ companyName, email, password }),
//     }).then(() => {
//       router.push("/signin");
//     });
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="border w-[400px] rounded-md p-4">
//         <p className="uppercase font-semibold mb-5 ">Registration Screen {regID}</p>
//         <hr />
//         <br />
//         <br />
//         <form className="mb-4" action={mainAction}>
//           <div className="flex flex-col mb-2">
//             <label className="text-[12px] mb-1 font-semibold">Comapny Name</label>
//             <input
//               className="border rounded-md h-[45px] text-[14px] pl-2"
//               placeholder="Enter your companyName"
//               name="companyName"
//             />
//           </div>
//           <div className="flex flex-col mb-2">
//             <label className="text-[12px] mb-1 font-semibold">Email</label>
//             <input
//               className="border rounded-md h-[45px] text-[14px] pl-2"
//               placeholder="Enter your Email"
//               name="email"
//             />
//           </div>
//           <div className="flex flex-col mb-2">
//             <label className="text-[12px] mb-1 font-semibold">Password</label>
//             <input
//               className="border rounded-md h-[45px] text-[14px] pl-2"
//               placeholder="Enter your Password"
//               name="password"
//             />
//           </div>

//           <button
//             type="submit"
//             className="border rounded-md mt-4 flex w-full h-[55px] justify-center items-center text-white bg-neutral-900"
//           >
//             Register
//           </button>

//           <p className="mt-2 text-[12px] text-center">
//             Aleady have an Account{" "}
//             <Link href="/signin" className="font-semibold italic">
//               Sign in Here
//             </Link>
//           </p>
//         </form>

//         <hr />

//         <div>
//           {/* <p className="mt-2 text-[12px] font-semibold uppercase">
//             social sign up
//           </p> */}

//           <button className="border rounded-md mt-4 flex w-full h-[55px] justify-center items-center text-white bg-red-600 text-[30px]">
//             {/* <FaGoogle /> */}
//             GOOGLE
//             {/* <span className="ml-3">Google</span> */}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

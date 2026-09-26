'use client'
import { useRouter } from "next/navigation"

export default function Navbar() {
    const router = useRouter()
    return (  
        <section className="absolute top-0 left-0 z-50 h-auto flex  items-center p-[20px] sm:p-[50px]">
            <div className="rounded-xl bg-black/30 backdrop-blur-md">
                <p className=" px-[16px] py-[2px] h-[40px] items-center flex cursor-pointer !text-white" onClick={() => router.push("/")}> ← Back</p>
            </div>
        </section>
    )
}
  
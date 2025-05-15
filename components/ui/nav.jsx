'use client'
import { useRouter } from "next/navigation"

export function Navbar() {
    const router = useRouter()
    return (
        
        <section className="h-auto items-center justify-center w-full inline-flex top-0 bg-black" id='top'>
            <p className=" px-[16px] py[2px] hover:!text-white hover:border-b h-[40px] items-center flex" onClick={() => router.push("/")}>Home</p>
            <p className=" px-[16px] py[2px] hover:!text-white hover:border-b h-[40px] items-center flex" onClick={() => router.push("about")}>About</p>
        </section>
    )
}
  
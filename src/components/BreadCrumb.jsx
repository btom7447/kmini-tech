import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function BreadCrumb({ label, subLabel}) {
    return (
        <section className="mt-30 lg:mt-10 lg:pt-0 w-screen h-[50dvh] relative bg-black text-white overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-center bg-fixed bg-cover opacity-20 z-0"
                style={{ backgroundImage: "url('/images/bg.png')" }}
            />

            {/* Breadcrumb Caption */}
            <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-xl lg:text-3xl text-gray-300">Home</h4>
                <ChevronRightIcon  size={20} strokeWidth={1} />
                <h5 className={`text-xl lg:text-3xl  ${subLabel ? "font-light text-gray-300" : "font-semibold text-white" }`} >
                    {label}
                </h5>
                {subLabel && (
                    <>
                        <ChevronRightIcon size={20} strokeWidth={1} />
                        <h5 className="text-xl lg:text-3xl font-semibold text-white">{subLabel}</h5>
                    </>
                )}
            </div> 
        </section>
    )
}
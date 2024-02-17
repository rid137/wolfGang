export const CustomTableSkeleton = () => {
    return(
        <section>
            <div className="bg-greyBg text-black text-center py-6 mt-5 rounded-md">
                <div className="animate-pulse flex justify-between items-center gap-[.4rem] md:gap-0  font-bold mb-3  mx-5 lg:mx-16 text-[.7rem] lg:text-[.9rem] mt- bg-[#bbbaba]">
                   
                </div>

                {Array(10)
                        .fill(10)
                        .map((_, index) => (
                    <div key={index} className="bg-[#bbbaba] mx-1 sm:mx-4 rounded-lg animate-pulse" >
                        <div className="flex  w-full  mb-2 py-6">
                            
                        </div>

                    </div>
                    ))
                }

                <div className="flex justify-end mx-4 bg-[#bbbaba] animate-pulse h-4">

                </div>

                <div className="flex justify-end mx-4 bg-[#bbbaba] animate-pulse h-4">

                </div>

            </div>
        </section>
    )
}

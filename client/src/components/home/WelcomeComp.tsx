export default function WelcomeComp(){
    return (
        <div
            className="
                text-center
                md:text-start md:max-w-[60%] lg:max-w-[50%]
                flex flex-col gap-4
            "
        >
            <strong
                className="
                    text-[clamp(1.875rem,_1.048rem_+_4.412vw,_2.813rem)]
                    dark:text-yume-neutral
                    
                    "
            >
                Welcome!
            </strong>
            <p
                className="
                    text-[clamp(2.5rem,_1.673rem_+_4.412vw,_3.438rem)] font-semibold leading-none text-pretty dark:text-yume-neutral-bold
                
                "
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit!
            </p>
            <button
                className="
                    w-max px-4 py-1 mx-auto mt-4 font-semibold text-2xl active:scale-95
                    md:mx-0 outline outline-2 outline-yume-primary
                    hover:bg-yume-primary hover:text-yume-neutral-bold
                    text-yume-primary
                    dark:outline-yume-secondary hover:dark:bg-yume-secondary dark:text-yume-secondary hover:dark:text-yume-neutral
                "
            >
                Conocer
            </button>
        </div>
    )
}
import { BenefitProps } from "../../interfaces/home/BenefitPropsInterface";
// py-1 px-4
export default function BenefitComp({
    ico, title, description, styles
}: BenefitProps){
    return (
        <li className={`${styles} text-center flex flex-wrap py-10 px-4 gap-1 outline outline-2 rounded-md outline-yume-primary dark:outline-yume-secondary`} >
            <div className="w-[clamp(3.125rem,_2.188rem_+_3.333vw,_4.688rem)] aspect-square relative mx-auto" >
                {ico}
            </div>
            <div className="min-w-[220px] mx-auto" >
                <h3 className=" text-[clamp(0.875rem,_0.575rem_+_1.067vw,_1.375rem)] font-semibold">
                    {title}
                </h3>
                <p className=" text-[clamp(0.75rem,_0.525rem_+_0.8vw,_1.125rem)]" >
                    {description}
                </p>
            </div>
        </li>
    )
}
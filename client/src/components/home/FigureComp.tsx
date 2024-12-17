import { Link } from "react-router-dom";

export default function FigureComp(){
    return (
        <figure
            className="
                w-[75%] md:max-w-[50%] relative
                aspect-square
            "
        >
            <img 
                src="/images/lisa-header.png" 
                alt="Lisa Lalisa" 
                className="mask-gradient absolute w-full h-full block object-cover object-top "
            />
            <Link to={''}></Link>
        </figure>
    )
}

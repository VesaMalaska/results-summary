import { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { RxCaretUp } from 'react-icons/rx';

export default function Attribution() {

    const [showTopBar, setShowTopBar] = useState(false);

    const toggleTopBar = () => {
        setShowTopBar(!showTopBar);
    };

    return (
        <div className={`
             shadow-md
            sm:text-center 
            bg-slate-50 
            border-b-2 
            border-slate-400 
            font-primary 
            flex 
            justify-around
            sm:justify-center
            items-center
            sm:gap-14
            w-full
            h-20
            absolute
            -top-20
            transition-all
            ease-in
            delay-150
            duration-300
            ${ showTopBar ? ' translate-y-20' : '' }
            ${ showTopBar ? ' pb-10' : '' }
            ${ showTopBar ? ' h-28' : '' }
        `}>
            <div className='flex flex-col sm:flex-row sm:gap-1 text-bodytext'>
                <div>
                    Challenge by 
                    <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank" 
                        className=" text-black hover:text-indigo-600 transition-colors"
                    > Frontend Mentor</a>. 
                </div>
                <div>
                    Coded by 
                    <a 
                        href="https://www.linkedin.com/in/vesamalaska/" 
                        target="_blank" 
                        className=" text-black hover:text-indigo-600 transition-colors"
                    > Vesa Malaska</a>.
                </div>
            </div>
            <div className='flex gap-1 text-xl'>
                <a 
                    href="https://github.com/VesaMalaska" 
                    target="_blank"
                >
                    <AiFillGithub className='hover:text-indigo-600 transition-colors' />
                </a>
                <a 
                    href="https://www.linkedin.com/in/vesamalaska/" 
                    target="_blank"
                >
                    <AiFillLinkedin className='hover:text-indigo-600 transition-colors' />
                </a>
            </div>
            <div className={`
                absolute
                -bottom-10
                sm:-bottom-12
                text-3xl 
                text-white
                sm:text-slate-700 
                transition-all
                ease-in
                delay-150
                duration-300
                ${ showTopBar ? ' -translate-y-14' : '' }
                ${ showTopBar ? ' rotate-180' : '' }                
            `}>
                <button className={ showTopBar ? ' text-slate-700 ' : '' } onClick={ toggleTopBar }>
                    <RxCaretUp />
                </button>
            </div>
        </div>
    );
}
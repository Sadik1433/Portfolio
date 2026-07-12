
const ProjectImage = ({ projectId }) => {
    switch (projectId) {
        case 1: 
            return (
                <div className="relative aspect-[4/3] w-full bg-[#070814] rounded-xl border border-[#1a1b38] overflow-hidden flex flex-col justify-between p-3 shadow-inner select-none">
                   
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-600/10 rounded-full blur-xl pointer-events-none"></div>
                    <div className="absolute bottom-2 right-2 w-16 h-16 bg-blue-600/15 rounded-full blur-lg pointer-events-none"></div>
                    <img src=" " alt='portfolio' />
                </div>
            );

        case 2: 
            return (
                <div className="relative aspect-[4/3] w-full bg-[#090a16] rounded-xl border border-[#1a1b38] overflow-hidden flex flex-col p-3 shadow-inner select-none">

                </div>
            );

        case 3: 
            return (
                <div className="relative aspect-[4/3] w-full bg-[#080916] rounded-xl border border-[#1a1b38] overflow-hidden flex flex-col justify-between p-3 shadow-inner select-none">
                   
                </div>
            );

        case 4:
            return (
                <div className="relative aspect-[4/3] w-full bg-[#0a0f26] rounded-xl border border-[#1b2247] overflow-hidden flex flex-col justify-between p-3 shadow-inner select-none bg-gradient-to-b from-[#0b0c24] to-[#12173f]">
                  
                </div>
            );

        case 5:
            return (
                <div className="relative aspect-[4/3] w-full bg-[#070814] rounded-xl border border-[#1a1b38] overflow-hidden flex flex-col justify-between p-3 shadow-inner select-none">
                   
                </div>
            );

        case 6:
            return (
                <div className="relative aspect-[4/3] w-full bg-[#080812] rounded-xl border border-[#181935] overflow-hidden flex flex-col p-3 shadow-inner select-none">
                   
                </div>
            );

        case 7:
            return (
                <div className="relative aspect-[4/3] w-full bg-[#080916] rounded-xl border border-[#191a38] overflow-hidden flex flex-col justify-between p-3 shadow-inner select-none">
                  
                </div>
            );

        case 8: 
            return (
                <div className="relative aspect-[4/3] w-full bg-[#070814] rounded-xl border border-[#1a1b38] overflow-hidden flex flex-col p-3 shadow-inner select-none">
       
                </div>
            );

        default:
            return null;
    }
};

export default ProjectImage
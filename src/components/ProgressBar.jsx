
const ProgressBar = ({name,value}) => {

    return (
        <div className="flex flex-col items-center gap-5">
            <div className="relative w-[60px] h-[60px] md:w-[80px] h-[80px]">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        className="text-gray-200"
                        strokeWidth="10"
                        fill="none"
                    />

                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        className="dark:stroke-[#334155]"
                        stroke="#e2e2e2"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray="282.6"
                        strokeDashoffset={value}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                    />

                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        className="text-gray-200"
                        strokeWidth="10"
                        fill="none"
                    />

                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="#3B9DF8"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray="282.6"
                        strokeDashoffset={(1 - value / 100) * 282.6}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                    />
                </svg>

                <p className="absolute top-[18px] right-[30px] md:top-[20px] md:right-[40px] translate-x-1/2 transform translate-y-1/2">{value}%</p>
            </div>

            <button
                    className={`bg-transparent border border-[var(--color-info)] w-full rounded-md font-bold  text-[0.8rem] px-2 py-1 mx-auto`}>{name}
            </button>
        </div>
    );
};

export default ProgressBar;
                                
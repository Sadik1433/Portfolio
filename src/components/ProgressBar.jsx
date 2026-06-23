
const ProgressBar = ({name,value}) => {

    return (
        <div className="flex flex-col items-center gap-5">
            <div className="relative w-[100px] h-[100px]">
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

                <p className="absolute top-[35px] right-[50px] translate-x-1/2 transform translate-y-1/2">{value}%</p>
            </div>

            <button
                    className={`bg-blue-500 w-full rounded-md  text-[0.8rem] px-2 py-1 mx-auto`}>{name}
            </button>
        </div>
    );
};

export default ProgressBar;
                                
import { useRef } from 'react';
import portfolio from './assets/portflolio.png';
import student from './assets/Student.png';
import jobby from './assets/jobby.png';
import shopee from './assets/Shopee.png';
import emoji from './assets/emoji.png';
import todo from './assets/todo.png';
import tic from './assets/tic.png';


const ProjectImage = ({ projectId, images }) => {
    const imageModal = useRef(null);

    switch (projectId) {
        case 1:
            return (
                <div className="px-2 flex flex-col">
                    <img
                        src={portfolio}
                        alt="Portfolio"
                        className="w-[300px] h-auto cursor-pointer rounded-lg shadow-lg"
                        onClick={() => imageModal.current.showModal()}
                    />

                    <dialog
                        ref={imageModal}
                        className="backdrop:bg-black/70 bg-transparent p-0 border-0 rounded-lg"
                    >
                        <div className="fixed inset-0 flex items-center justify-center">
                            <div className="relative">
                                <button
                                    onClick={() => imageModal.current.close()}
                                    className="absolute -top-10 right-0 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                                >
                                    ✕
                                </button>
                                <img
                                    src={portfolio}
                                    alt="Portfolio"
                                    className="max-w-[80vw] max-h-[80vh] rounded-lg shadow-2xl"
                                />
                            </div>
                        </div>
                    </dialog>

                    <button
                        onClick={() => imageModal.current.showModal()}
                        className="mt-4 py-1 bg-transparent border-1 shadow-lg text-white rounded-lg hover:bg-blue-700"
                    >
                        View
                    </button>
                </div>
            );

        case 2:
            return (
                <div className="px-2 flex flex-col">
                    <img
                        src={student}
                        alt="Student"
                        className="w-[300px] h-auto cursor-pointer rounded-lg shadow-lg"
                        onClick={() => imageModal.current.showModal()}
                    />

                    <dialog
                        ref={imageModal}
                        className="backdrop:bg-black/70 bg-transparent p-0 border-0 rounded-lg"
                    >
                        <div className="fixed inset-0 flex items-center justify-center">
                            <div className="relative">
                                <button
                                    onClick={() => imageModal.current.close()}
                                    className="absolute -top-10 right-0 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                                >
                                    ✕
                                </button>
                                <img
                                    src={student}
                                    alt="Student"
                                    className="max-w-[80vw] max-h-[80vh] rounded-lg shadow-2xl"
                                />
                            </div>
                        </div>
                    </dialog>

                    <button
                        onClick={() => imageModal.current.showModal()}
                        className="mt-4 py-1 bg-transparent border-1 shadow-lg text-white rounded-lg hover:bg-blue-700"
                    >
                        View
                    </button>
                </div>
            );

        case 3:
            return (
                 <div className="px-2 flex flex-col">
                    <img
                        src={jobby}
                        alt="jobby"
                        className="w-[300px] h-auto cursor-pointer rounded-lg shadow-lg"
                        onClick={() => imageModal.current.showModal()}
                    />

                    <dialog
                        ref={imageModal}
                        className="backdrop:bg-black/70 bg-transparent p-0 border-0 rounded-lg"
                    >
                        <div className="fixed inset-0 flex items-center justify-center">
                            <div className="relative">
                                <button
                                    onClick={() => imageModal.current.close()}
                                    className="absolute -top-10 right-0 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                                >
                                    ✕
                                </button>
                                <img
                                    src={jobby}
                                    alt="jobby"
                                    className="max-w-[80vw] max-h-[80vh] rounded-lg shadow-2xl"
                                />
                            </div>
                        </div>
                    </dialog>

                    <button
                        onClick={() => imageModal.current.showModal()}
                        className="mt-4 py-1 bg-transparent border-1 shadow-lg text-white rounded-lg hover:bg-blue-700"
                    >
                        View
                    </button>
                </div>
            );

        case 4:
            return (
                 <div className="px-2 flex flex-col">
                    <img
                        src={shopee}
                        alt="Shopee"
                        className="w-[300px] h-auto cursor-pointer rounded-lg shadow-lg"
                        onClick={() => imageModal.current.showModal()}
                    />

                    <dialog
                        ref={imageModal}
                        className="backdrop:bg-black/70 bg-transparent p-0 border-0 rounded-lg"
                    >
                        <div className="fixed inset-0 flex items-center justify-center">
                            <div className="relative">
                                <button
                                    onClick={() => imageModal.current.close()}
                                    className="absolute -top-10 right-0 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                                >
                                    ✕
                                </button>
                                <img
                                    src={shopee}
                                    alt="Shopee"
                                    className="max-w-[80vw] max-h-[80vh] rounded-lg shadow-2xl"
                                />
                            </div>
                        </div>
                    </dialog>

                    <button
                        onClick={() => imageModal.current.showModal()}
                        className="mt-4 py-1 bg-transparent border-1 shadow-lg text-white rounded-lg hover:bg-blue-700"
                    >
                        View
                    </button>
                </div>
            );

        case 5:
            return (
                 <div className="px-2 flex flex-col">
                    <img
                        src={tic}
                        alt="tic-tac-toe"
                        className="w-[300px] h-auto cursor-pointer rounded-lg shadow-lg"
                        onClick={() => imageModal.current.showModal()}
                    />

                    <dialog
                        ref={imageModal}
                        className="backdrop:bg-black/70 bg-transparent p-0 border-0 rounded-lg"
                    >
                        <div className="fixed inset-0 flex items-center justify-center">
                            <div className="relative">
                                <button
                                    onClick={() => imageModal.current.close()}
                                    className="absolute -top-10 right-0 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                                >
                                    ✕
                                </button>
                                <img
                                    src={tic}
                                    alt="tic-tac-toe"
                                    className="max-w-[80vw] max-h-[80vh] rounded-lg shadow-2xl"
                                />
                            </div>
                        </div>
                    </dialog>

                    <button
                        onClick={() => imageModal.current.showModal()}
                        className="mt-4 py-1 bg-transparent border-1 shadow-lg text-white rounded-lg hover:bg-blue-700"
                    >
                        View
                    </button>
                </div>
            );

        case 6:
            return (
                 <div className="px-2 flex flex-col">
                    <img
                        src={emoji}
                        alt="Emoji Game"
                        className="w-[300px] h-auto cursor-pointer rounded-lg shadow-lg"
                        onClick={() => imageModal.current.showModal()}
                    />

                    <dialog
                        ref={imageModal}
                        className="backdrop:bg-black/70 bg-transparent p-0 border-0 rounded-lg"
                    >
                        <div className="fixed inset-0 flex items-center justify-center">
                            <div className="relative">
                                <button
                                    onClick={() => imageModal.current.close()}
                                    className="absolute -top-10 right-0 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                                >
                                    ✕
                                </button>
                                <img
                                    src={emoji}
                                    alt="Emoji Game"
                                    className="max-w-[80vw] max-h-[80vh] rounded-lg shadow-2xl"
                                />
                            </div>
                        </div>
                    </dialog>

                    <button
                        onClick={() => imageModal.current.showModal()}
                        className="mt-4 py-1 bg-transparent border-1 shadow-lg text-white rounded-lg hover:bg-blue-700"
                    >
                        View
                    </button>
                </div>
            );

        case 7:
            return (
                 <div className="px-2 flex flex-col">
                    <img
                        src={todo}
                        alt="todo-list"
                        className="w-[300px] h-auto cursor-pointer rounded-lg shadow-lg"
                        onClick={() => imageModal.current.showModal()}
                    />

                    <dialog
                        ref={imageModal}
                        className="backdrop:bg-black/70 bg-transparent p-0 border-0 rounded-lg"
                    >
                        <div className="fixed inset-0 flex items-center justify-center">
                            <div className="relative">
                                <button
                                    onClick={() => imageModal.current.close()}
                                    className="absolute -top-10 right-0 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                                >
                                    ✕
                                </button>
                                <img
                                    src={todo}
                                    alt="todo-list"
                                    className="max-w-[80vw] max-h-[80vh] rounded-lg shadow-2xl"
                                />
                            </div>
                        </div>
                    </dialog>

                    <button
                        onClick={() => imageModal.current.showModal()}
                        className="mt-4 py-1 bg-transparent border-1 shadow-lg text-white rounded-lg hover:bg-blue-700"
                    >
                        View
                    </button>
                </div>
            );

        default:
            return null;
    }
};

export default ProjectImage;
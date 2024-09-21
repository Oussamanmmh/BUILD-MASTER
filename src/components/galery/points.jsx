export default function Points({ currentPage, setCurrentPage }) {
    return (
        <div className="flex items-center gap-2 absolute z-40 right-1/2 bottom-3 cursor-pointer">
            {[0, 1, 2].map((page) => (
                <div
                    key={page}
                    className={`rounded-full h-3 w-3 ${currentPage === page ? 'bg-blue-600' : 'bg-white'}`}
                    onClick={() => setCurrentPage(page)}
                ></div>
            ))}
        </div>
    );
}
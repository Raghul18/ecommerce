import React from 'react'

function Pagination({ page, handleNextPage, handlePrevPage, totalPages }) {
    return (
        <div className="flex justify-between my-4 px-3 md:px-8">
            <button
                onClick={handlePrevPage}
                disabled={page === 1}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Previous
            </button>

            <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                    <div
                        key={index}
                        className={`${index + 1 === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                            } px-4 py-2 rounded`}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>

            <button
                onClick={handleNextPage}
                disabled={page === totalPages}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Next
            </button>
        </div>
    )
}

export default Pagination

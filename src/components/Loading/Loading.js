import React from 'react';

const Loading = () => {
    return (
        <div className='h-72 flex justify-center items-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-600"></div>
        </div>
    );
};

export default Loading;
import React from 'react';

function SingleCard({ imageUrl, headline }) {
    return (
        <div className="max-w-sm flex flex-col">
            <img
                alt={headline}
                width="200"
                src={imageUrl}
                className="w-fit rounded-sm"
            />
            <div className="px-1 py-2">
                <div className="text-zinc-950 mb-2">{headline}</div>
            </div>
        </div>
    );
}

export default SingleCard;

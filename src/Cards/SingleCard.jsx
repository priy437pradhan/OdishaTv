import React from 'react';
import { Link } from 'react-router-dom';

function SingleCard({ imageSrc, headline, isLast, id }) {
    return (
        <div className="max-w-sm  pb-2 flex flex-col">
            <div className={`flex w-full h-full pb-2 p-1 ${isLast ? '' : 'border-b-2'}`}>
                <div className="w-4/6 flex items-start overflow-hidden max-h-[50px] justify-start mb-0">
                    <Link to={`/story/${headline}`} className="text-zinc-950">
                        <h2>{headline}</h2>
                    </Link>
                </div>
                <div className="w-2/6">
                    <Link to={`/story/${headline}`}>
                        <img
                            alt={headline}
                            src={imageSrc}
                            className="w-full h-14 object-cover rounded-sm"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SingleCard;

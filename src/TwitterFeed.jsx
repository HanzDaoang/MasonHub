import React from 'react';
import { useEffect } from 'react';

const TwitterFeed = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="twitter">
            <a className="twitter-timeline" data-width="250" data-height="350" data-theme="dark" href="https://twitter.com/GeorgeMasonU?ref_src=twsrc%5Etfw">
                Tweets by GeorgeMasonU
            </a>
        </div>
    );
}

export default TwitterFeed;

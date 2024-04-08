import React, { useState, useEffect } from 'react';

const Banner = () => { const [currentImage, setCurrentImage] = useState(1);

useEffect(() => { const intervalId = setInterval(() => { setCurrentImage((prevImage) => (prevImage % 3) + 1); }, 4000);

return () => clearInterval(intervalId); 
}, []);

return (
    <div className="banner">
        <img src={`/img/banner${currentImage}.jpg`} alt={`Banner ${currentImage}`} />
    </div>
);
}

export default Banner;
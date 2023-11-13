import React from 'react';
import bannerImage from '../assets/banner.png'; // Replace with the actual path to your image

const Banner = ({buildingId}) => {
    const bannerStyle = {
        position: 'relative',
        height: '50vh',
        width: '100%',
        objectFit: 'cover',
    };

    const textContainerStyle = {
        position: 'absolute',
        top: '70%',
        left: '20%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'left',
        color: '#E5E6E5'
    };

    return (
        <div style={{ position: 'relative' }}>
            <img src={bannerImage} alt="Building image" style={bannerStyle} />
            <div style={textContainerStyle}>
                <h2>{buildingId}</h2>
                <p>Text displays information of {buildingId}, as you'd expect it to</p>
            </div>
        </div>
    );
};

export default Banner;

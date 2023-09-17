import React, { useState } from 'react';

const Animation = () => {
  return (
    <div className="animation">
      <img
        src="https://st5.depositphotos.com/13803186/63888/v/600/depositphotos_638884576-stock-illustration-fat-boss-celebrating-successful-sale.jpg"
        alt="Анімація"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
      <p>Дякую Друже</p>
    </div>
  );
};

export const App = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isThankYouVisible, setIsThankYouVisible] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? 'green' : 'red',
    color: isHovered ? 'red' : 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
  };

  const handleButtonClick = () => {
    setIsThankYouVisible(true);

    //  Після 3 секунд знову приховуємо анімацію і напис "Дякую"
    setTimeout(() => {
      setIsThankYouVisible(false);
    }, 3000);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
      }}
    >
      <div
        style={{
          width: 'calc(100% - 100px)',
          fontSize: 40,
          color: '#010101',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            border: '2px solid blue',
            padding: '50px',
            textAlign: 'center',
          }}
        >
          {isThankYouVisible ? (
            <Animation />
          ) : (
            <>
              <h1>Привіт Друже</h1>
              <p>
                Микола любить пити багато водки і пива, взагалі він алкоголік!
                Якщо хочете йому допомогти, натисніть нище.
              </p>
              <button
                style={buttonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleButtonClick}
              >
                НАЛИТЬ 100 ГРАМ
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

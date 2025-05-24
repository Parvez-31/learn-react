const Entry = ({ img, title, country, googleMapsLink, dates, text }) => {
  return (
    <>
      <section>
        {/* main div */}
        <div className="">
          <img src={img?.src} alt={img?.alt} className="japan-image" />
        </div>

        {/* main div */}
        <div className="location-section">
          <div className="location-details">
            <div className="location">
              <img
                src="location.png"
                alt="location"
                className="location-image"
              />
              <span className="country">{country}</span>
              <span>
                <a href={googleMapsLink}>view on Google Maps</a>
              </span>
            </div>
            <div className="">
              <h1 className="place-name">{title}</h1>
            </div>
          </div>

          {/* ------ */}

          <div className="last-section">
            <div className="date">{dates}</div>
            <div className="description">{text}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Entry;

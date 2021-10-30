import "./tile.css";

const Lodging = () => {
  return (
    <>
      <div className="tile-container tile-2">
        <h1>Lodging</h1>
        <p>
          There are more than enough camp spots at our venue for everyone.
          Trailers, tents, and vans are all welcome. You will have access to a
          large kitchen and showers in the main lodge.
        </p>
        <p>
          If you are looking for accommodations in town, here are some options
          we recommend:
        </p>
        <div className="lodging-options">
          <a className="lodging-button" href="http://www.twispriversuites.com/">
            Twisp River Suites
          </a>
          <a className="lodging-button" href="http://www.methowvalleyinn.com/">
            Methow Valley Inn
          </a>
          <a className="lodging-button" href="https://www.hotelriovista.com/">
            Rio Vista
          </a>
          <a className="lodging-button" href="https://riverrun-inn.com/">
            River Run Inn
          </a>
        </div>
      </div>
    </>
  );
};

export default Lodging;

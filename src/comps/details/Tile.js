import "./tile.css";

const Tile = () => {
  return (
    <>
      <div className="tile-container">
        <div className="day-tile">
          <div className="date-time">
            <p>Wed | 22nd</p>
          </div>
          <div className="tile-details">
            <p>Wedding party arrives.</p>
          </div>
        </div>
        <div className="day-tile">
          <div className="date-time">
            <p>Thurs | 23rd</p>
          </div>
          <div className="tile-details">
            <p>Set up, rehearsal dinner.</p>
          </div>
        </div>
        <div className="day-tile">
          <div className="date-time">
            <p>
              <span>Fri | 24th</span>
            </p>
          </div>
          <div className="tile-details">
            <p>
              <span>Everyone arrives, evening ceremony.</span>
            </p>
          </div>
        </div>
        <div className="day-tile">
          <div className="date-time">
            <p>Sat | 25th</p>
          </div>
          <div className="tile-details">
            <p>The party continues!</p>
          </div>
        </div>
        <div className="day-tile">
          <div className="date-time">
            <p>Sun | 26th</p>
          </div>
          <div className="tile-details">
            <p>Clean up and goodbyes.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tile;

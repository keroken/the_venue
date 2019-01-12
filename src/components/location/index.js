import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe 
        title="location_map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40468.92577920275!2d-96.82133799929785!3d32.776140653888866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9918e993c711%3A0xa9073cfe6d9a606a!2z44Oe44Kw44OO44Oq44Ki44Ob44OG44Or!5e0!3m2!1sja!2sjp!4v1547268025810" 
        width="100%" 
        height="500px" 
        frameBorder="0" 
        allowFullScreen>
      </iframe>
        <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
import React, { useState ,useEffect } from 'react';
import Alert from "./Alert"
 

const Box = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [attachedAlert, setAttachedAlert] = useState(false);
  useEffect(() => {
    setAttachedAlert(true);
    if (showAlert) {
      setTimeout(() => {
        setAttachedAlert(false);
        setTimeout(() => {
          setShowAlert(false);
        }, 1000);
      }, 3000);
    }
  }, [showAlert]);
  return (
    <div>
      <button onClick={(e) => setShowAlert(true)} className="btn btn-primary w-25 rounded-pill">Make alert</button>
      {showAlert && <Alert justAttached={attachedAlert} />}
    </div>
  )
}

export default Box
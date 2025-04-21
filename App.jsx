import React, { useState } from "react";

function App() {
  const [value, setvalue] = useState('');
  return (
    <>
      <div style={{ backgroundColor: "black", width: "310px", margin: "1px 10px" }} className="container">
        <div style={{ margin: "1px 10px" }} className="top">
          <input style={{ borderRadius: "6px", fontSize: "24px", width: "270px", margin: "5px 1px" }} type="text" value={value} />
        </div>
        <div className="display" style={{ margin: "1px 15px" }}>
          <input style={{ fontSize: "24px", width: "86px", margin: "5px 1px" }} type="button" value="AC" name="" id="" onClick={e => setvalue('')} />
          <input style={{ fontSize: "24px", width: "86px", margin: "5px 1px" }} type="button" value="DC" name="" id="" onClick={e => setvalue(value.slice(0, -1))} />
          <input style={{ fontSize: "24px", width: "86px", margin: "5px 1px" }} type="button" value="." name="" id="" />

        </div>

        <div className="secound" style={{ margin: "1px 15px" }}>
          <input style={{ fontSize: "24px", width: "65px", margin: "5px 1px" }} type="button" value="1" name="" id="" onClick={e => setvalue(value + e.target.value)} />
          <input style={{ fontSize: "24px", width: "65px", margin: "5px 1px" }} type="button" value="2" name="" id="" onClick={e => setvalue(value + e.target.value)} />
          <input style={{ fontSize: "24px", width: "65px", margin: "5px 1px" }} type="button" value="3" name="" id="" onClick={e => setvalue(value + e.target.value)} />
          <input style={{ fontSize: "24px", width: "65px", margin: "5px 1px" }} type="button" value="4" name="" id="" onClick={e => setvalue(value + e.target.value)} />
        </div>

        <div className="secound" style={{ margin: "1px 15px" }}>
          <input style={{ fontSize: "24px", width: "65px", margin: "5px 1px" }} type="button" value="5" name="" id="" onClick={e => setvalue(value + e.target.value)} />
          <input style={{ fontSize: "24px", width: "65px", margin: "5px 1px" }} type="button" value="6" name="" id="" onClick={e => setvalue(value + e.target.value)} />
          <input style={{ fontSize: "24px", width: "65px", margin: "5px 1px" }} type="button" value="7" name="" id="" onClick={e => setvalue(value + e.target.value)} />
          <input style={{ fontSize: "24px", width: "65px", margin: "5px 1px" }} type="button" value="8" name="" id="" onClick={e => setvalue(value + e.target.value)} />
        </div>

        <div className="secound" style={{ margin: "1px 15px" }}>
          <input style={{ fontSize: "24px", width: "65px", margin: "5px 1px" }} type="button" value="9" name="" id="" onClick={e => setvalue(value + e.target.value)} />
          <input style={{ fontSize: "24px", width: "65px", margin: "5px 1px" }} type="button" value="0" name="" id="" onClick={e => setvalue(value + e.target.value)} />
          <input style={{ fontSize: "24px", width: "65px", margin: "5px 1px" }} type="button" value="+" name="" id="" onClick={e => setvalue(value + e.target.value)} />
          <input style={{ fontSize: "24px", width: "65px", margin: "5px 1px" }} type="button" value="/" name="" id="" onClick={e => setvalue(value + e.target.value)} />
        </div>

        <div className="secound" style={{ Color: "black", margin: "1px 15px" }}>
          <input style={{ fontSize: "24px", width: "80px", margin: "5px 1px" }} type="button" value="-" name="" id="" onClick={e => setvalue(value + e.target.value)} />
          <input style={{ fontSize: "24px", width: "80px", margin: "5px 1px" }} type="button" value="*" name="" id="" onClick={e => setvalue(value + e.target.value)} />
          <input style={{ fontSize: "24px", width: "103px", margin: "5px 3px" }} type="button" value="=" name="" id="" onClick={e => setvalue(eval(value))} />
        </div>
      </div>
    </>
  )
}

export default App;
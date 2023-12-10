import React, { useState } from "react";

export default function Temperature(){
    // temperature is set for input control in celsius and fahrenheit
    const [temperature, setTemperature] = useState({cel: '', fah: ''});

    // this function is for conversion from celsius to fahrenheit
    function celToFah(e){
        setTemperature({cel: e.target.value, fah: ((e.target.value*9/5)+32).toFixed(2)})
    }

    // this function is for conversion from fahrenheit to celsius
    function fahToCel(e){
        setTemperature({cel: ((e.target.value-32)*5/9).toFixed(2), fah: e.target.value})
    }
    return (
        <form className="temperature form">
            <h2><span><i class="fa-solid fa-temperature-quarter"></i></span>Temperature Converter</h2>
            <div>
                <label>Degree Celsius</label>
                <input type="number" id="cel" name="cel" value={temperature.cel} onChange={celToFah}/>
            </div>
            <div>
                <label>Degree Fahrenheit</label>
                <input type="number" id="fah" name="fah" value={temperature.fah} onChange={fahToCel}/>
            </div>
        </form>
    )
}
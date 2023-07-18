import './app.css';
import { useState } from 'react';
import { Container } from '@material-ui/core';


const Calc = () => {
    const [cal, setcal] = useState("");


    const HnadleClick = (evt) => {

        setcal(cal.concat(evt.target.value))
    }
    const cliCKRes = () => {
        setcal("");
        // console.log(cal);

    }
    const HnadleDelete = () => {
        const deleteValue = cal.slice(0, -1)
        setcal(deleteValue)






    }
    const cliCKResult = () => {
        setcal(eval(cal).toString());
    }


    return (
       
           
            <Container>
                <div className='calculator'>
            <h1 >Component calculetor</h1>

                <div className='Input'>
                    <input type="text" className='EnterValue' value={cal} readOnly />

                </div>

                <div className='digiNum'>
                <input type='button' name='RESET' value="CE" className='btn ' onClick={cliCKRes} />
                <input type='button' name='percentge' value="%" className='btn' onClick={HnadleClick} />
                <input type='button' name='delete' value="DEL" className='btn ' onClick={HnadleDelete} />
                <input type='button' name='divide' value="/" className='btn ' onClick={HnadleClick} />
                    
                    <input type='button' name='7' value="7" className='btn' onClick={HnadleClick} />
                    <input type='button' name='8' value="8" className='btn' onClick={HnadleClick} />
                    <input type='button' name='9' value="9" className='btn' onClick={HnadleClick} />
                    <input type='button' name='multiply' value="*" className='btn' onClick={HnadleClick} />
                    <input type='button' name='4' value="4" className='btn' onClick={HnadleClick} />
                    <input type='button' name='5' value="5" className='btn' onClick={HnadleClick} />
                    <input type='button' name='6' value="6" className='btn' onClick={HnadleClick} />
                    <input type='button' name='subtract' value="-" className='btn' onClick={HnadleClick} />
                    <input type='button' name='1' value="1" className='btn' onClick={HnadleClick} />
                    <input type='button' name='2' value="2" className='btn' onClick={HnadleClick} />
                    <input type='button' name='3' value="3" className='btn' onClick={HnadleClick} />
                    <input type='button' name='add' value="+" className='btn' onClick={HnadleClick} />
                    
                    <input type='button' name='0' value="0" className='btn' onClick={HnadleClick} />
                    <input type='button' name='0' value="00" className='btn' onClick={HnadleClick} />
                    <input type='button' name='dot' value="." className='btn' onClick={HnadleClick} />
                    
                   



                    {/* Operators */}

                    
                    
                   
                   
                    
                    
                    <input type='button' name='Equal' value="=" className='btn' onClick={cliCKResult} />



                </div>
            </div>


            </Container>
       
    );
}
export default Calc;
import React from 'react';
import ReactDOM from 'react-dom';
import { AddressAutofill } from '@mapbox/search-js-react';
import searchBar from './searchBar';
 
function App() {
    return (
        <form>
            <AddressAutofill accessToken="pk.eyJ1IjoianVsZWlhbnJlbnRlcmlhIiwiYSI6ImNsZTBmZnd6aDFhc28zb29sZXJkZm1obGoifQ.7hhYxIiM4pgIU3iswqAG0g">
            
            <input
                name="address" placeholder="Address" type="text"
                autoComplete="address-line1"
/>
            
            </AddressAutofill>
            <input name="address" placeholder="Address" type="text" 
                autoComplete="address-line1" />
            <input name="unit" placeholder="Unit number" type="text" 
                autoComplete='address-line2' />
            <input name="city" placeholder="City" type="text" 
                autoComplete="address-level2" />
            <input name="state" placeholder="State" type="text" 
                autoComplete="address-level1" />
            <input name="country" placeholder="Country" type="text" 
               autoComplete="country" />
            <input name="postcode" placeholder="Postcode" type="text" 
                autoComplete="postal-code" />
        </form>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
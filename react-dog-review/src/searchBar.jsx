import React from "react";

export function searchBar () {
    const [value, setValue] = React.useState('');
    return (
    <form>
    <SearchBox accessToken={"pk.eyJ1IjoianVsZWlhbnJlbnRlcmlhIiwiYSI6ImNsZTBmZnd6aDFhc28zb29sZXJkZm1obGoifQ.7hhYxIiM4pgIU3iswqAG0g"} />
    </form>
    );
    }

export default searchBar
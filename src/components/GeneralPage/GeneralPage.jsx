import React from 'react';
import Description from "../Description/Description";
import PopularBook from "../PopularBook/PopularBook";
import NewsBook from "../NewsBook/NewsBook";

const GeneralPage = () => {
    return (
        <>
            <Description/>
            <PopularBook/>
            <NewsBook/>
        </>
    );
};

export default GeneralPage;

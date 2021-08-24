import React from 'react';
import Company from './Company';


const Companies = ({ data }) => {
    return (
        <div className="companies">
            {data.map((d) => {
                return <Company
                            key={d.id}
                            data={d}
                        />;
            })}
        </div>
    );
}

export default Companies;

// setkeywords={setKeywords}

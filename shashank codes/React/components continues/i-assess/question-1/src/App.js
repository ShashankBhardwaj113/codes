import React from 'react';
import Header from './Header';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const App = () => {
    const [selectedFilter, setSelectedFilter] = React.useState([]);
    const [uncheckedFilter, setUncheckedFilter] = React.useState();

    const getUncheckedFilters = (uncheckedFilters) => {
        console.log(uncheckedFilter);
        setUncheckedFilter(uncheckedFilters);

        if(uncheckedFilter !== undefined){
            // let array = [...selectedFilter];
            var index = selectedFilter.indexOf(uncheckedFilter);
            if(index !== -1){
                // 
                const newFilters = selectedFilter.filter((item) => {
                    return item !== uncheckedFilter;
                })
                console.log(newFilters);
                setSelectedFilter(newFilters);
            }
            setUncheckedFilter();
        }
    }

    const getFilter = (filter) => {
        console.log(filter);
        var filterIndex = selectedFilter.indexOf(filter);
        if(filterIndex === -1)
        {
            setSelectedFilter((prevState)=>{
                return [...prevState, filter];
            });
        }
    }

    React.useEffect(()=>{
        console.log('selectedFilter are ' + selectedFilter);
    }, [selectedFilter, uncheckedFilter]);

    return (
        <>
            <Header />
            <table style={{display: 'grid', gridTemplateColumns: '25% 75%'}}>
                <LeftPanel getFilter={getFilter} getUncheckedFilters={getUncheckedFilters}/>
                <RightPanel selectedFilter={selectedFilter} />
            </table>
        </>
    )
}

export default App;

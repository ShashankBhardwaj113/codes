import React from 'react';
import Header from './Header';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import { nowShowing } from './MovieListJson';
import MovieDetails from './MovieDetails';

const App = () => {
    const [selectedFilterLang, setSelectedFilterLang] = React.useState([]);
    const [uncheckedFilterLang, setUncheckedFilterLang] = React.useState();

    const [selectedFilterGener, setSelectedFilterGener] = React.useState([]);
    const [uncheckedFilterGener, setUncheckedFilterGener] = React.useState();

    const [selectedFilterFormat, setSelectedFilterFormat] = React.useState([]);
    const [uncheckedFilterFormat, setUncheckedFilterFormat] = React.useState();

    const [movieSelect, setMovieSelect] = React.useState(null);

    const getMovieHandler = (movieID) => {
        setMovieSelect(movieID);
    }

    const goBackHandler = (state) => {
        setMovieSelect(state);
    }

    const getUncheckedFiltersLang = (uncheckedLangFilters) => {
        // console.log(uncheckedFilters);
        setUncheckedFilterLang(uncheckedLangFilters);

        if (uncheckedLangFilters !== undefined) {
            // let array = [...selectedFilter];
            var index = selectedFilterLang.indexOf(uncheckedLangFilters);
            if (index !== -1) {
                // 
                const newFilters = selectedFilterLang.filter((item) => {
                    return item !== uncheckedLangFilters;
                })
                // console.log('newFilters ' + newFilters);
                setSelectedFilterLang(newFilters);
            }
            setUncheckedFilterLang();
        }
    }

    const getUncheckedFiltersGener = (uncheckedGenerFilters) => {
        // console.log(uncheckedFilters);
        setUncheckedFilterGener(uncheckedGenerFilters);

        if (uncheckedGenerFilters !== undefined) {
            // let array = [...selectedFilter];
            var index = selectedFilterGener.indexOf(uncheckedGenerFilters);
            if (index !== -1) {
                // 
                const newFilters = selectedFilterGener.filter((item) => {
                    return item !== uncheckedGenerFilters;
                })
                // console.log('newFilters ' + newFilters);
                setSelectedFilterGener(newFilters);
            }
            setUncheckedFilterGener();
        }
    }

    const getUncheckedFiltersFormat = (uncheckedFormatFilters) => {
        // console.log(uncheckedFilters);
        setUncheckedFilterFormat(uncheckedFormatFilters);

        if (uncheckedFormatFilters !== undefined) {
            // let array = [...selectedFilter];
            var index = selectedFilterFormat.indexOf(uncheckedFormatFilters);
            if (index !== -1) {
                // 
                const newFilters = selectedFilterFormat.filter((item) => {
                    return item !== uncheckedFormatFilters;
                })
                // console.log('newFilters ' + newFilters);
                setSelectedFilterFormat(newFilters);
            }
            setUncheckedFilterFormat();
        }
    }

    const getFilterLang = (filter) => {
        // console.log(filter);
        var filterIndex = selectedFilterLang.indexOf(filter);
        if (filterIndex === -1) {
            setSelectedFilterLang((prevState) => {
                return [...prevState, filter];
            });
        }
    }

    const getFilterGener = (filter) => {
        // console.log(filter);
        var filterIndex = selectedFilterGener.indexOf(filter);
        if (filterIndex === -1) {
            setSelectedFilterGener((prevState) => {
                return [...prevState, filter];
            });
        }
    }

    const getFilterFormat = (filter) => {
        // console.log(filter);
        var filterIndex = selectedFilterFormat.indexOf(filter);
        if (filterIndex === -1) {
            setSelectedFilterFormat((prevState) => {
                return [...prevState, filter];
            });
        }
    }

    React.useEffect(() => {
        // console.log('selectedFilterLang are ' + selectedFilterLang);
        // console.log('selectedFilterGener are ' + selectedFilterGener);
        // console.log('selectedFilterFormat are ' + selectedFilterFormat);
    }, [selectedFilterLang, uncheckedFilterLang, selectedFilterFormat, uncheckedFilterFormat, selectedFilterGener, uncheckedFilterGener]);

    return (
        <>
            {movieSelect === null && <>
                <Header />
                <div style={{ display: 'grid', gridTemplateColumns: '25% 75%' }}>
                    <LeftPanel getFilterLang={getFilterLang}
                        getFilterGener={getFilterGener}
                        getFilterFormat={getFilterFormat}
                        getUncheckedFiltersLang={getUncheckedFiltersLang}
                        getUncheckedFiltersGener={getUncheckedFiltersGener}
                        getUncheckedFiltersFormat={getUncheckedFiltersFormat} />
                    <RightPanel selectedFilterLang={selectedFilterLang}
                        selectedFilterGener={selectedFilterGener}
                        selectedFilterFormat={selectedFilterFormat}
                        getMovieHandler={getMovieHandler}
                    />
                </div>
            </>}
            {
                movieSelect !== null &&
                <>
                    {nowShowing.map((movie) => {
                        return <>
                            {movie.id === movieSelect &&
                                <MovieDetails movie={movie} goBackHandler={goBackHandler} />
                            }
                        </>
                    })}
                </>
            }
        </>
    )
}

export default App;

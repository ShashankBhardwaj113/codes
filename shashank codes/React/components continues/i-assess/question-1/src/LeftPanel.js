import React from 'react';
import { language, gener, format } from './MovieListJson';

const LeftPanel = (props) => {
    const [clickOnLanguageFilter, setLanguageFilter] = React.useState(false);
    const [clickOnGenreFilter, setGenreFilter] = React.useState(false);
    const [clickOnFormatFilter, setFormatFilter] = React.useState(false);

    const [checkedLangFilter, setCheckedLangFilter] = React.useState(null);
    const [uncheckedLangFilter, setUncheckedLangFilter] = React.useState(null);
    const [checkedGenerFilter, setCheckedGenerFilter] = React.useState(null);
    const [uncheckedGenerFilter, setUncheckedGenerFilter] = React.useState(null);
    const [checkedFormatFilter, setCheckedFormatFilter] = React.useState(null);
    const [uncheckedFormatFilter, setUncheckedFormatFilter] = React.useState(null);

    const [initialRender, setInitialRender] = React.useState(true);

    const selectLanguageHandler = () => {
        if (!clickOnLanguageFilter) {
            setLanguageFilter(true);
        } else {
            setLanguageFilter(false);
        }
    }

    const selectGenreHandler = () => {
        if (!clickOnGenreFilter) {
            setGenreFilter(true);
        } else {
            setGenreFilter(false);
        }
    }

    const selectFormatHandler = () => {
        if (!clickOnFormatFilter) {
            setFormatFilter(true);
        } else {
            setFormatFilter(false);
        }
    }

    const checkboxOnChangeHandlerLang = (event) => {
        if (event.target.checked) {
            setCheckedLangFilter(event.target.value);
        }
        else {
            setUncheckedLangFilter(event.target.value);
        }
    }

    const checkboxOnChangeHandlerGener = (event) => {
        if (event.target.checked) {
            setCheckedGenerFilter(event.target.value);
        }
        else {
            setUncheckedGenerFilter(event.target.value);
        }
    }

    const checkboxOnChangeHandlerFormat = (event) => {
        if (event.target.checked) {
            setCheckedFormatFilter(event.target.value);
        }
        else {
            setUncheckedFormatFilter(event.target.value);
        }
    }

    React.useEffect(() => {
        if (initialRender) {
            setInitialRender(false);
        }
        else {
            if (checkedLangFilter !== null) {
                props.getFilterLang(checkedLangFilter);
                setCheckedLangFilter(null);
            } if (uncheckedLangFilter !== null) {
                props.getUncheckedFiltersLang(uncheckedLangFilter);
                setUncheckedLangFilter(null);
            }

            if (checkedGenerFilter !== null) {
                props.getFilterGener(checkedGenerFilter);
                setCheckedGenerFilter(null);
            } if (uncheckedGenerFilter !== null) {
                props.getUncheckedFiltersGener(uncheckedGenerFilter);
                setUncheckedGenerFilter(null);
            }

            if (checkedFormatFilter !== null) {
                props.getFilterFormat(checkedFormatFilter);
                setCheckedFormatFilter(null);
            } if (uncheckedFormatFilter !== null) {
                props.getUncheckedFiltersFormat(uncheckedFormatFilter);
                setUncheckedFormatFilter(null);
            }
        }
    }, [checkedLangFilter, uncheckedLangFilter, checkedGenerFilter, uncheckedGenerFilter, checkedFormatFilter, uncheckedFormatFilter])

    React.useEffect(() => {
        return;
    }, [clickOnLanguageFilter, clickOnGenreFilter, clickOnFormatFilter]);

    return (
        <>
            <td style={{ textAlign: 'center' }}>
                <p onClick={selectLanguageHandler}>Select language</p>
                {
                    clickOnLanguageFilter && language.map((lang) => {
                        return <div key={lang.id}>
                            <input type='checkbox' onChange={checkboxOnChangeHandlerLang} name={lang.value} value={lang.value} />
                            <label htmlFor={lang.value}>{lang.value}</label>
                            <br></br>
                        </div>
                    })
                }
                <p onClick={selectGenreHandler}>Select Genre</p>
                {
                    clickOnGenreFilter && gener.map((genre) => {
                        return <div key={genre.id}>
                            <input type='checkbox' onChange={checkboxOnChangeHandlerGener} name={genre.value} value={genre.value} />
                            <label htmlFor={genre.value}>{genre.value}</label>
                            <br></br>
                        </div>
                    })
                }
                <p onClick={selectFormatHandler}>Select Format</p>
                {
                    clickOnFormatFilter && format.map((format) => {
                        return <div key={format.id}>
                            <input type='checkbox' onChange={checkboxOnChangeHandlerFormat} name={format.value} value={format.value} />
                            <label htmlFor={format.value}>{format.value}</label>
                            <br></br>
                        </div>
                    })
                }
            </td>
        </>
    );
}

export default LeftPanel;

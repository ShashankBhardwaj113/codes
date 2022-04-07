import React from 'react';
import { language, gener, format } from './MovieListJson';

const LeftPanel = (props) => {
    const [clickOnLanguageFilter, setLanguageFilter] = React.useState(false);
    const [clickOnGenreFilter, setGenreFilter] = React.useState(false);
    const [clickOnFormatFilter, setFormatFilter] = React.useState(false);

    const [checkedFilter, setCheckedFilter] = React.useState(null);
    const [uncheckedFilter, setUncheckedFilter] = React.useState(null);
    const [initialRender, setInitialRender] = React.useState(true);

    const selectLanguageHandler = () => {
        if(!clickOnLanguageFilter)
        {
            setLanguageFilter(true);
        }else{
            setLanguageFilter(false);
        }
    }

    const selectGenreHandler = () => {
        if(!clickOnGenreFilter){
            setGenreFilter(true);
        }else{
            setGenreFilter(false);
        }
    }

    const selectFormatHandler = () => {
        if(!clickOnFormatFilter){
            setFormatFilter(true);
        }else{
            setFormatFilter(false);
        }
    }

    const checkboxOnChangeHandler = (event) => {
        if(event.target.checked){
            setCheckedFilter(event.target.value);
        }
        else{
            setUncheckedFilter(event.target.value);
        }
    }

    React.useEffect(()=>{
        if(initialRender){
            setInitialRender(false);
        }
        else{
            if(checkedFilter !== null)
                props.getFilter(checkedFilter);
                setCheckedFilter(null);
            if(uncheckedFilter !== null){
                console.log(uncheckedFilter);
                props.getUncheckedFilters(uncheckedFilter);
                setUncheckedFilter(null);
            }
        }
    }, [checkedFilter, uncheckedFilter])

    React.useEffect(()=>{
        return;
    }, [clickOnLanguageFilter, clickOnGenreFilter, clickOnFormatFilter]);

    return (
        <>
            <td style={{textAlign: 'center'}}>
                <p onClick={selectLanguageHandler}>Select language</p>
                {
                    clickOnLanguageFilter && language.map((lang)=>{
                        return <>
                            <input type='checkbox' onChange={checkboxOnChangeHandler} name={lang.value} value={lang.value} />
                            <label htmlFor={lang.value}>{lang.value}</label>
                            <br></br>
                        </>
                    })
                }
                <p onClick={selectGenreHandler}>Select Genre</p>
                {
                    clickOnGenreFilter && gener.map((genre)=>{
                        return <>
                            <input type='checkbox' onChange={checkboxOnChangeHandler} name={genre.value} value={genre.value} />
                            <label htmlFor={genre.value}>{genre.value}</label>
                            <br></br>
                        </>
                    })
                }
                <p onClick={selectFormatHandler}>Select Format</p>
                {
                    clickOnFormatFilter && format.map((format)=>{
                        return <>
                            <input type='checkbox' onChange={checkboxOnChangeHandler} name={format.value} value={format.value} />
                            <label htmlFor={format.value}>{format.value}</label>
                            <br></br>
                        </>
                    })
                }
            </td>
        </>
    );
}

export default LeftPanel;

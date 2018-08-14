import React from 'react';

export default function SelectedLanguage(props) {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'],
        { selectedLanguage, onSelect } = props;
    return (
        <div className="container">
            <ul className="languages">
                {languages.map((lang) => {
                    return (
                        <li key={lang}
                            style={ selectedLanguage === lang ? {color: '#d0021b'} : null}
                            onClick={onSelect.bind(null, lang)}
                        >{lang}
                        </li>
                    )
                })}

            </ul>

        </div>


    )
}
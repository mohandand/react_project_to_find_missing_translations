import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';

const TranslationPage = () => {
    const {t, i18n} = useTranslation();
    const [language, setLanguage] = useState('en');

    const changeLanguage = (event) => {
        const newLanguage = event.target.value;
        setLanguage(newLanguage);
        i18n.changeLanguage(newLanguage);
    }

    return(
        <div styele={{padding: '20px', textAlign: 'center'}}>
            <h1>{t('welcome')}</h1>
            <p>{t('login')}</p>
            <p>{t('logout')}</p>

            <label htmlFor="language-select" style={{marginLeft:'10px'}}>
             Select Language
            </label>
            <select id="language-select" value="language" onChange={changeLanguage}>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
                <option value="de">German</option>
            </select>
        </div>
    )
}

export default TranslationPage
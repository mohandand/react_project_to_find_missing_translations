import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './TranslationPage.css'; 

const TranslationPage = () => {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState('en');

    const changeLanguage = (event) => {
        const newLanguage = event.target.value;
        setLanguage(newLanguage);
        i18n.changeLanguage(newLanguage);
    };

    return (
        <div className="container">
            <div className="box">
                <h1 className="heading">{t('welcome')}</h1>
                <p className="text">{t('login')}</p>
                <p className="text">{t('logout')}</p>

                <label htmlFor="language-select" className="label">
                    Select Language:
                </label>
                <select id="language-select" value={language} onChange={changeLanguage} className="select">
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                    <option value="de">German</option>
                </select>
            </div>
        </div>
    );
};

export default TranslationPage;

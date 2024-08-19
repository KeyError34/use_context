import styles from "./styles.module.scss"
import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
function  LanguageSwitcher(){
    const {toggleLanguage} = useContext(LanguageContext)
    return <>
    <button className={styles.switchBtn} onClick={toggleLanguage}> switch </button>
    </>
}
export default LanguageSwitcher;
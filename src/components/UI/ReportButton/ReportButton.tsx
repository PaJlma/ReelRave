import * as React from 'react';
import styles from './ReportButton.module.scss';

import reportSVG from '../../../assets/images/UI/report.svg';

interface IReportButtonProps {
}

const ReportButton: React.FC<IReportButtonProps> = (props) => {
    return (
        <div className={styles.body}>
            <img src={reportSVG} alt="report" />
            <p>Пожаловаться</p>
        </div>
    );
};

export default ReportButton;

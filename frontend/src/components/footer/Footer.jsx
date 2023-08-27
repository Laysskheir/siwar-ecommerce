import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../images/logo/logo.png';
import Buttom from '../header/Buttom';

function Footer() {
  const { t } = useTranslation();

  return (
    <div className='w-full text-sm py-8 bg-blue flex items-center justify-center gap-4 text-light relative '>
      <Buttom />
      <p>
        {t('footer.copyrightText')}{' '}
        <a
          className='underline text-indigo-400 text-sm decoration-[1px] cursor-pointer duration-300'
          href='https://www.linkedin.com/in/layss-kheir-555566249/'
          target='_blank'
          rel='noopener noreferrer'
        >
          {t('footer.poweredBy')}
        </a>
      </p>
    </div>
  );
}

export default Footer;

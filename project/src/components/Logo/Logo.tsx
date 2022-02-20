import {Fragment} from 'react';
import LogoHeader from './LogoHeader/LogoHeader';
import LogoFooter from './LogoFooter/LogoFooter';

import {LogoType} from '../../types/LogoType';

function Logo(props: LogoType) {
  return (
    <Fragment>
      {/* eslint-disable-next-line no-nested-ternary */}
      {props.isHeader ? <LogoHeader /> : props.isFooter ? <LogoFooter /> : <LogoHeader />}
    </Fragment>

  );
}

export default Logo;

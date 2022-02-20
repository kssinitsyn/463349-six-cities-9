import LogoHeader from './LogoHeader/LogoHeader';
import LogoFooter from './LogoFooter/LogoFooter';

import {LogoType} from '../../types/LogoType';

function Logo(props: LogoType) {
  if (props.isHeader) {
    return <LogoHeader />;
  }

  if (props.isFooter) {
    return <LogoFooter />;
  }

  return <LogoHeader />;
}

export default Logo;

import { string } from 'prop-types';

import style from './Unavailable.module.css';

function Unavailable({ service }) {
  return (
    <article className={style.unavailable}>
      <h3 className={style.unavailable__title}>서비스 미제공 안내</h3>
      <span className={style.unavailable__text}>
        현재 {service} 기능은 제공하고 있지 않습니다.
      </span>
    </article>
  );
}

Unavailable.propTypes = {
  service: string.isRequired,
};

export default Unavailable;

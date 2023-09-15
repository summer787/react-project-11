import ReactModal from 'react-modal';
import { bool, string } from 'prop-types';
import style from './Spinner.module.css';

function Spinner({ message = '로딩 중 입니다.', isOpen = false }) {
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel={message}
      ariaHideApp={false}
      style={{
        overlay: {
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
        content: {
          background: 'rgba(0,0,0,0.5)',
          position: 'relative',
          width: '40rem',
          height: '20rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none',
        },
      }}
    >
      <svg
        width='10rem'
        height='10rem'
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid'
      >
        <circle
          cx='50'
          cy='50'
          fill='none'
          stroke='#ff153c'
          strokeWidth='10'
          r='35'
          strokeDasharray='164.93361431346415 56.97787143782138'
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            repeatCount='indefinite'
            dur='1s'
            values='0 50 50;360 50 50'
            keyTimes='0;1'
          />
        </circle>
      </svg>
      <span className={style.spinner__message}>{message}</span>
    </ReactModal>
  );
}

Spinner.defaultProps = {
  message: '로딩중 입니다.',
};

Spinner.propTypes = {
  message: string,
  isOpen: bool.isRequired,
};

export default Spinner;

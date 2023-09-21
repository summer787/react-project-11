import ReactModal from 'react-modal';
import { bool, string } from 'prop-types';
import { useEffect } from 'react';
import style from './Spinner.module.css';

function Spinner({ message = '로딩 중입니다.', isOpen = false }) {
  useEffect(() => {
    // 컴포넌트가 마운트되면 body의 overflow를 hidden으로 설정하여 스크롤 제거
    document.body.style.overflow = 'hidden';

    return () => {
      // 컴포넌트가 언마운트되면 body의 overflow를 원래대로 되돌림(스크롤 복구)
      document.body.style.overflow = 'auto';
    };
  }, []);
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
          background: 'rgba(0, 0, 0, 1)',
          width: '40rem',
          height: '20rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none',
          position: 'relative',
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
  isOpen: false,
};

Spinner.propTypes = {
  message: string,
  isOpen: bool,
};

export default Spinner;

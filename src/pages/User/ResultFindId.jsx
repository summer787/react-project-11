import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FindUserContext } from '@/components/contexts/FindUserContext';
import UserTitle from '@/components/User/UserTitle';
import UserTitleDescription from '@/components/User/UserTitleDescription';

import style from './ResultFindId.module.css';

const description = {
  mainText: '입력하신 정보와 일치하는 결과입니다.',
  subText: '개인정보 보호를 위해 \n 아이디 또는 이메일의 일부만 제공합니다.',
};

function ResultFindId() {
  const { username } = useContext(FindUserContext);

  function convertSting(initial = '') {
    if (!initial) {
      return false;
    }

    let result;
    const { length } = initial;
    const frontPart = initial.slice(0, 4);

    if (length <= 9) {
      result = `${frontPart}***`;
    } else {
      const halfLength = Math.floor(length / 2);
      const middlePart = initial.slice(4, -halfLength);
      result = `${frontPart}${middlePart}***`;
      return result;
    }

    return result;
  }

  const convertId = convertSting(username);

  return (
    <>
      <UserTitle title='아이디 찾기 결과' a11yHidden />
      <UserTitleDescription activeImage description={description} />
      <dl className={style.result__findId__item__list}>
        <dt className='a11yHidden'>계정명</dt>
        <dd
          className={style.result__findId__item__brand}
          aria-label='티빙아이디'
        >
          TVING ID
        </dd>
        <dt className='a11yHidden'>아이디</dt>
        <dd className={style.result__findId__item__id}>{convertId}</dd>
      </dl>

      <span className={style.result__findId__info}>
        SNS 회원은 해당 SNS 아이디가 아닌 티빙 가입 시 등록한 이메일을
        알려드립니다.
      </span>

      <NavLink to='/user/tvingLogin' className={style.result__findId__link}>
        로그인 하러 가기
      </NavLink>
    </>
  );
}

export default ResultFindId;

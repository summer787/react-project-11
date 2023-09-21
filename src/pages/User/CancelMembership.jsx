/* eslint-disable jsx-a11y/anchor-is-valid */
import UserTitle from '@/components/User/UserTitle';
import UserTitleDescription from '@/components/User/UserTitleDescription';
import UserCancelDescriptionList from '@/components/User/UserCancelDescriptionList';
import UserUsingProductTable from '@/components/User/UserUsingProductTable';
import CheckboxRounded from '@/components/User/CheckboxRounded';
import UserButtonShort from '@/components/User/UserButtonShort';

import style from './CancelMembership.module.css';

const description = {
  mainText: '탈퇴를 원하시면, 아래 사항을 반드시 확인해주세요.',
  subText:
    '회원 탈퇴 시 티빙 서비스를 이용하실 수 없으며 \n 보유하신 이용권이나 캐시, 쿠폰 등 유료 서비스가 종료됩니다.',
};

function CancelMembership() {
  return (
    <>
      <UserTitle title='회원탈퇴' sidePosition />
      <section>
        <h3 className='a11yHidden'>회원 탈퇴 시 유의사항</h3>
        <UserTitleDescription description={description} />
        <UserCancelDescriptionList />
      </section>
      <section>
        <UserUsingProductTable />
        <CheckboxRounded
          label='정기 결제 해지와 이용중이던 상품 포기에 동의합니다.'
          isCenter
        />
        <div className={style.user__cancleMembership__button__wrapper}>
          <UserButtonShort text='확인' color='white' />
          <UserButtonShort text='취소' color='black' />
        </div>
      </section>
    </>
  );
}

export default CancelMembership;

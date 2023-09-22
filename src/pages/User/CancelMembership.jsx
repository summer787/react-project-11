/* eslint-disable no-restricted-globals */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserTitle from '@/components/User/UserTitle';
import UserTitleDescription from '@/components/User/UserTitleDescription';
import UserCancelDescriptionList from '@/components/User/UserCancelDescriptionList';
import UserUsingProductTable from '@/components/User/UserUsingProductTable';
import CheckboxRounded from '@/components/User/CheckboxRounded';
import UserButtonShort from '@/components/User/UserButtonShort';

import pb from '@/api/pocketbase';
import style from './CancelMembership.module.css';

const description = {
  mainText: '탈퇴를 원하시면, 아래 사항을 반드시 확인해주세요.',
  subText:
    '회원 탈퇴 시 티빙 서비스를 이용하실 수 없으며 \n 보유하신 이용권이나 캐시, 쿠폰 등 유료 서비스가 종료됩니다.',
};

function CancelMembership() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  // 이용중 상품 포기 동의 체크
  const handleIsChecked = () => setIsChecked(!isChecked);

  // 회원 탈퇴 취소
  const handleCancel = () => navigate('/home');

  // 회원 탈퇴
  const handleCancelMembership = async () => {
    const cancelConfirmMessage =
      '확인을 누르시면 회원 탈퇴가 완료됩니다. \n 정말로 탈퇴하실 건가요?';

    if (confirm(cancelConfirmMessage)) {
      if (pb.authStore.model) {
        try {
          await pb.collection('users').delete(pb.authStore.model.id);
          alert('회원 탈퇴에 성공하였습니다. 시작 화면으로 이동합니다.');
          navigate('/Account');
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

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
          checked={isChecked}
          label='정기 결제 해지와 이용중이던 상품 포기에 동의합니다.'
          onChange={handleIsChecked}
          isCenter
        />
        <div className={style.user__cancleMembership__button__wrapper}>
          <UserButtonShort
            text='확인'
            color='white'
            onChange={handleCancelMembership}
          />
          <UserButtonShort text='취소' color='black' onChange={handleCancel} />
        </div>
      </section>
    </>
  );
}

export default CancelMembership;

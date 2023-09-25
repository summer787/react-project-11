import { NavLink } from 'react-router-dom';

import style from './UserCancelDescriptionList.module.css';

function UserCancelDescriptionList() {
  return (
    <ul className={style.user__description__list}>
      <li>
        정기결제 이용권이 있는 경우, 정기결제 해지에 동의하셔야 하며, 탈퇴 완료
        시 잔여기간을 이용하실 수 없습니다.
      </li>
      <li>
        단건 이용권의 잔여 유효일자가 3일 이상인 경우, 상품 포기에 동의하셔야
        하며, 탈퇴 완료 시 캐시가 삭제됩니다.
      </li>
      <li>
        이용권이나 잔여 캐시를 보유한 경우 상품 포기에 동의하셔야 하며, 탈퇴
        완료 시 상품 및 캐시가 삭제됩니다. <br /> &#40;1,000캐시 이상의 충전
        캐시는 환불 가능합니다. 원하시는 경우 탈퇴 전에{' '}
        <NavLink to='#' className={style.user__description__list__link}>
          고객센터 &#62; &#39;고객문의 &#62; 요금/결제/환불&#39; 카테고리 선택
        </NavLink>
        에서 환불 신청해주세요.&#41;
      </li>
      <li>
        작성하신 타잉톡은 회원탈퇴 후에는 편집 및 삭제처리가 불가능합니다.
      </li>
      <li>
        삭제를 원하시는 경우, 먼저 해당 게시물을 삭제하신 후 탈퇴절차를
        진행해주시길 바랍니다.
      </li>
    </ul>
  );
}

export default UserCancelDescriptionList;

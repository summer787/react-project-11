import style from './UserUsingProductTable.module.css';

function UserUsingProductTable() {
  return (
    <>
      <h3 className={style.user__using__product__title}>현재 이용중인 상품</h3>
      <table className={style.user__using__product__table}>
        <caption className='a11yHidden'>
          현재 이용중인 이용권과 캐시 잔액
        </caption>
        <thead>
          <tr>
            <th className={style.user__using__product__th}>이용권</th>
            <th className={style.user__using__product__th}>
              캐시
              <span className={style.user__using__product__span}>
                &#40;이벤트 캐시 제외&#41;
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={style.user__using__product__td}>없음</td>
            <td className={style.user__using__product__td}>0</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default UserUsingProductTable;

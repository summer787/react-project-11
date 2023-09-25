import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { node } from 'prop-types';
import { FindUserContext } from '../contexts/FindUserContext';

function ResultFindUserRoute({ children }) {
  const { username } = useContext(FindUserContext);

  return username ? (
    children
  ) : (
    <Navigate
      to='/user/findId'
      // eslint-disable-next-line no-alert, react/jsx-props-no-spreading
      {...alert(
        '먼저 아이디 찾기를 해주세요. \n아이디찾기 페이지로 이동합니다.'
      )}
    />
  );
}

ResultFindUserRoute.propTypes = {
  children: node.isRequired,
};

export default ResultFindUserRoute;

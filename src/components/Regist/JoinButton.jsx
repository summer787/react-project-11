
import PropTypes from 'prop-types';

function JoinButton({text}) {
  return (
    <div>
      
      <button type="button" >{text}</button>
      
    </div>
  )
}

export default JoinButton;

JoinButton.propTypes = {
  text: PropTypes.string.isRequired,
};

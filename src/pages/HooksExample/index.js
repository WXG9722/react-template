import './index.less';
import update from '../../store/actions';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';

function Home() {
  const hooksExampleStore = useSelector((state) => state.hooksExample);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(update('hooksExample', {
      words: 'goodbye world',
      newWords: 'remember back in the day',
    }));
  }

  return (
    <div id="HooksExample">
      <div className="first">{hooksExampleStore.words}</div>
      <div className="second">{hooksExampleStore.newWords}</div>
      <div className="third">{moment().format('YYYY-MM-DD')}</div>
      <Button onClick={handleClick}>redux更新</Button>
    </div>
  );
}

export default Home;

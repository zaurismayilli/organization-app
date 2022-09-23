import loading from '@assets/images/loading.gif';

import './index.scss';

const Loading = () => {
  return (
    <div className="loading">
      {' '}
      <img src={loading} alt="loading-app" />{' '}
    </div>
  );
};

export default Loading;

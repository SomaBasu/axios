import { Link, Outlet } from 'react-router-dom';
const Title = () => {
  return (
    <div className='title'>
      <h1>
        <span>axios</span> tutorial 
      </h1>
      <Outlet />
    </div>
  );
};
export default Title;

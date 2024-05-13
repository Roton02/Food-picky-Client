import PropTypes from 'prop-types';
import {Navigate,useLocation} from 'react-router-dom'
import useAuth from '../Hooks/useAuth';
const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useAuth()
    if (loading) {
        return <div className="flex min-h-screen my-auto items-center justify-center">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-lg"></span>

        {/* <video src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/loading-lines-6747317-5601928.mp4" autoPlay="muted" loop="loop" playsInline type="video/mp4"></video> */}
      </div>
    }
    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};
PrivateRoute.propTypes ={
    children:PropTypes.node.isRequired
}
export default PrivateRoute;
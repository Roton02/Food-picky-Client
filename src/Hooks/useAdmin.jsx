import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";
import useAxiosSecure from './useAxiosSecure'
const useAdmin = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure()

    // Use the query with error handling and email validation
    const { data: isAdmin, isLoading: isAdminLoading, error } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading && !!user?.email, // Ensure query is only enabled when user.email is available
        queryFn: async () => {
            if (!user?.email) {
                console.error('User email is undefined');
                return false;
            }
            try {
                console.log('Checking if user is admin', user);
                const res = await axiosSecure.get(`/users/admins/${user?.email}`);
                console.log('IsAdmin:', res?.data);
    
                return res.data?.role || false;
            } catch (error) {
                console.error('Error fetching admin status:', error);
                return false; // Return false in case of error
            }
        }
    });
    
    // Return the admin status and loading state
    return [isAdmin, isAdminLoading, error];
};

export default useAdmin;

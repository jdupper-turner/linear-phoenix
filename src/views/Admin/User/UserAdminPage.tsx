import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { UserAdminTable } from "./components/UserAdminTable";
import { getAllUsers } from "./UserAdminStore";

export const UserAdminPage = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getAllUsers());
   }, [dispatch]);

   const loading = useSelector((state: RootState) => 
      state.userAdmin.loading
   );

   return (
      <div>
         <h3>User Admin. Page</h3>
         <h4>{loading ? 'Loading' : ''}</h4>
         <UserAdminTable />
      </div>
   )
};
import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation";

function RootLayout(){
    return (
      <>
        <MainNavigation />
        <main className='content'>
          <Outlet />
        </main>
      </>
    );
}

export default RootLayout;
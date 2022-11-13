import { Route, Routes } from "react-router-dom";
import Login from "../components/login";
import Sign_up from "../components/sing_up";
import Homepage_1 from "../homepage/homepage_1";


export default function AllRoutes() {
    return (
        // <>
        <Routes>
            <Route path="/" element={<Homepage_1 />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/sign_up" element={<Sign_up />} />
        </Routes>
        // </>
    )
}
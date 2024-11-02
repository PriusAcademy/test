import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

const NavBar = () => (
  <div>
    <Outlet />
  </div>
);
const Contact = () => <div>Contact</div>;
const Home = () => <div>Home</div>;

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="test/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

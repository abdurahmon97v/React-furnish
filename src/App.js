import { Route, Routes } from "react-router-dom";

import {
  Colection,
  Home,
  Layaut,
  Photo,

  PostHome,
  PostId,
  PostTv,

  ProductsCategory,
  ProductsHome,
  ProductsMiddleCategory,
  ProductsId,
  ProductsSubCategory,

  ProfiHome,
  ProfiProject,
  ProfiSubCategory,
  ProfiUser,

  Profil,
  SignAll,

} from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layaut />}>
          <Route index element={<Home />} />
          {/* PRODUCTS */}
          <Route path="products" element={<ProductsHome />} />
          <Route path="products/category" element={<ProductsCategory />} />
          <Route path="products/middleCategory" element={<ProductsMiddleCategory />} />
          <Route path="products/category/middleCategory/subcategory" element={<ProductsSubCategory />} />
          <Route path="products/productsId" element={<ProductsId />}/>
          {/* PROFI */}
          <Route path="profi" element={<ProfiHome />}/>
          <Route path="profi/subCategory" element={<ProfiSubCategory/>} />
          <Route path="profi/user" element={<ProfiUser/>}/>
          <Route path="profi/project" element={<ProfiProject/>}/>
          {/* POSTS */}
          <Route path="post" element={<PostHome />}/>
          <Route path="post/Tv" element={<PostTv/>}/>
          <Route path="post/:id"element={<PostId />}/>
          {/* SIGN */}
          <Route path="profil" element={<Profil />}/>
          <Route path="signAll" element={<SignAll />}/>
          {/* collection */}
          <Route path="colection" element={<Colection />}/>
          {/* PHOTO */}
          <Route path="photo" element={<Photo />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;

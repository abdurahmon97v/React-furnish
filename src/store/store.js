import { configureStore } from "@reduxjs/toolkit";
import profiSlice from "./profiSlice";
import productSlice from "./productSlice";
import postSlice from "./postsSlice";
import anyRedus from "./anyRedus";

export default configureStore({
  reducer:{
    anyRedus:anyRedus,
    postSlice:postSlice,
    productSlice:productSlice,
    profiSlice:profiSlice,
  }
})



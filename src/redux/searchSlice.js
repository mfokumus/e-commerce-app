import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

export const getSearchProducts = createAsyncThunk("searchproducts", async (keyword) => {
  const response = await fetch(`https://fakestoreapi.com/products`);
  const data = await response.json();
  return data;
});


const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  // Burada bir api işlemi gerçekleştiği için extraReducer kullanıyoruz
  // bu extrareducer dışarıdan bir builder alıyo ve addCase ekleyerek işlemi bitiriyoruz
  extraReducers: (builder) => {
    // pending durumunda yani sayfaya yüklenme durumunda !!!
    // fullfilled durumunda yani pending bitti yüklendi durumunda !!!
    // rejected durumunda yani dataların yüklenememesi durumunda !!!
    
    // BU KISIM PRODUCTS için
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })
  },
});

export default searchSlice.reducer;

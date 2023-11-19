import authReducer from "./reducers/authReducer"
import  categoryReducer  from "./reducers/categoryReducer"
import productReducer from "./reducers/productReducer"
import sellerReducer from "./reducers/sellerReducer"
import chatReducer from "./reducers/chatReducer"
import OrderReducer from "./reducers/OrderReducer"
import PaymentReducer from "./reducers/PaymentReducer"
import dashboardIndexReducer from "./reducers/dashboardIndexReducer"
import bannerReducer from "./reducers/bannerReducer"


const rootReducers = {
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
    seller: sellerReducer,
    chat: chatReducer,
    order: OrderReducer,
    payment: PaymentReducer,
    dashboardIndex: dashboardIndexReducer,
    banner: bannerReducer
    
}

export default rootReducers
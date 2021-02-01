import mongoose from 'mongoose'

const Schema = mongoose.Schema

const orderSchema = new Schema(
  {
    user: {
      type: String,
      required: [true, '缺少帳號']
    },
    name: {
      type: String,
      required: [true, '缺少姓名']
    },
    paymentMethod: {
      type: String,
      required: [true, '缺少付款方式']
    },
    deliveryMethod: {
      type: String,
      required: [true, '缺少寄送方式']
    },
    phone: {
      type: String,
      required: [true, '缺少電話']
    },
    address: {
      type: String,
      required: [true, '缺少地址']
    },
    date: {
      type: String,
      required: [true, '缺少購買日期']
    },
    allProductsAmount: {
      type: Number,
      required: [true, '缺少總數量']
    },
    allProductsPrice: {
      type: Number,
      required: [true, '缺少總價']
    },
    productsDetail: {
      type: Object,
      required: [true, '缺少商品細節']
    },
    cargoState: {
      type: String,
      require: [true, '缺少貨態']
    }
  },
  {
    versionKey: false
  }
)

const orders = mongoose.model('orders', orderSchema)

export default orders

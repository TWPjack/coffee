import mongoose from 'mongoose'

const Schema = mongoose.Schema

const productSchema = new Schema(
  {
    admin: {
      type: String,
      required: [true, '缺少使用者欄位']
    },
    productid: {
      type: Number,
      required: [true, '缺少商品ID']
    },
    name: {
      type: String,
      required: [true, '缺少商品名稱']
    },
    file: {
      type: String,
      required: [true, '缺少商品圖片']
    },
    price: {
      type: Number,
      required: [true, '缺少商品價格']
    },
    total: {
      type: Number,
      required: [true, '缺少商品庫存'],
      minlength: [0, '少於最少庫存量']
    },
    description: {
      type: String,
      required: [true, '缺少商品敘述']
    }
  },
  {
    versionKey: false
  }
)

const products = mongoose.model('products', productSchema)

export default products

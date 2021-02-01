import mongoose from 'mongoose'

const Schema = mongoose.Schema

const newsSchema = new Schema(
  {
    admin: {
      type: String,
      required: [true, '缺少使用者欄位']
    },
    title: {
      type: String,
      minlength: [5, '標題必須 5 字以上']
    },
    description: {
      type: String,
      maxlength: [500, '說明必須 500 字以下']
    },
    file: {
      type: String,
      required: [true, '缺少檔案名稱']
    }
  },
  {
    versionKey: false
  }
)

const news = mongoose.model('news', newsSchema)

export default news

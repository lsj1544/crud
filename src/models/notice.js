import mongoose from "mongoose";
//몽구스의 모든 것은 스키마로 시작 

const noticeSchema=new mongoose.Schema({
    title: { type: String, required: true, trim: true, maxlength: 20 },
    description: { type: String, required: true, trim: true },
    createAt: { type: String, default: Date.now, trim: true },
    meta: {
      rating: { type: Number, default: 0 },
      views: { type: Number, default: 0 },
    },
  });
  
  const Notice = mongoose.model("Notice", noticeSchema);
  
  export default Notice;
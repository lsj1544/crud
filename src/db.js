import mongoose from "mongoose"; //몽구스 객체를 불러옴

mongoose.connect("mongodb://127.0.0.1:27017/notice") // 몽고디비 url

const db = mongoose.connection; // 몽구스의 connection 메소드를 변수 db에 할당

const handlelOpen = () => {
    console.log("connect db!");
};

const handleError = () => {
    console.log(`Error : ${error}`);
};




db.once("open", handlelOpen);
//디비 연결 성공시 핸들오픈 함수 실행
db.on("error", handleError);
// 디비 연결 실패시 핸들에러 함수 실행
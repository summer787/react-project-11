import PocketBase from 'pocketbase';

const pb = new PocketBase(import.meta.env.VITE_PB_URL);
pb.autoCancellation(false);
// pb.autoCancellation(false); = 만약 데이터가 여러번 불러졌으면 그 위에 것은 무시하라는 뜻
export default pb;
// 생성자 함수로 저장
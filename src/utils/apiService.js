// axios 请求处理
import request from '.request';

export class apiService {
  constructor(url){
    this.baseURL = url;
  }
  getUrl(){
    return this.baseURL;
  }
  post(){
    return request({
      
    });
  }
}
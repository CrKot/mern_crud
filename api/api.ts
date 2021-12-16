import axios, { AxiosInstance, AxiosResponse } from "axios";
import {Post} from "../types/post";

class ApiClient {

  private readonly instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://127.0.0.1:8080',
      headers: {
        "Content-type": "application/json"
      }
    })
  };

  handleResponse (response: AxiosResponse) {
    const error = response.data?.error;
    if (!error) {
      return response.data
    }
  }

  async get () {
    return this.handleResponse(await this.instance.get(''))
  }

  async add (post: Post) {
    return this.handleResponse(await this.instance.post('', post))
  }

  async edit (id: string) {
    return this.handleResponse(await this.instance.patch(`/${id}`))
  }

  async delete (id: string) {
    return this.handleResponse(await this.instance.delete(`/${id}`))
  }
}

const $http = new ApiClient();

export default $http;

//@ts-ignore
import axios, { AxiosInstance } from 'axios';
import { apiConfig } from '../../../config/api';
import { get } from 'lodash'
import { getToken } from '../../../modules/users/services/userService';

export abstract class BaseAPI {
  protected baseUrl: string;
  private axiosInstance: AxiosInstance | any = null;

  constructor () {
    this.baseUrl = apiConfig.baseUrl
    this.axiosInstance = axios.create({})
    this.enableInterceptors();
  }

  private enableInterceptors (): void {
    this.axiosInstance.interceptors.response.use(
      this.getSuccessResponseHandler(),
      this.getErrorResponseHandler()
    )
  }

  private getSuccessResponseHandler () {
    return (response: any) => {
      debugger;
      // if (isHandlerEnabled(response.config)) {
      //   // Handle responses
      // }
      return response
    }
  }

  private didAccessTokenExpire (response: any): boolean {
    return get(response, 'data.message') === "Token signature expired.";
  }

  private getErrorResponseHandler () {
    return (error: any) => {
      if (this.didAccessTokenExpire(error.response)) {
        const refreshToken = getToken('refresh-token');
        const hasRefreshToken = !!refreshToken;

        if (hasRefreshToken) {
          debugger;
        }
        
      }
      return Promise.reject({ ...error })
    }
  }

  protected get (url: string, params?: any, headers?: any): Promise<any> {
    return this.axiosInstance({
      method: 'GET',
      url: `${this.baseUrl}${url}`,
      params: params ? params : null,
      headers: headers ? headers : null
    })
  }

  protected post (url: string, data?: any, params?: any, headers?: any): Promise<any> { 
    return this.axiosInstance({
      method: 'POST',
      url: `${this.baseUrl}${url}`,
      data: data ? data : null,
      params: params ? params : null,
      headers: headers ? headers : null
    })
  }
}

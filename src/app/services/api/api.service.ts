import { Injectable } from '@angular/core';
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://charismatic-api.niwabi.my.id/',
  timeout: 120 * 1000,
})

instance.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  error => Promise.reject(error)
)

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public axios = instance

  constructor() { }

  ngInit() {
  }
}

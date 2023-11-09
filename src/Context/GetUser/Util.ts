import { Api } from "../../service/api";

type getUserDataProps = {
  userId: string, 
}

export async function getUserData({userId}: getUserDataProps) {
  try {
    const request =  await Api.get(`users/${userId}`)
    return request.data
  } catch (error) {
    return error
  }

}
import { Api } from "../../service/api";

type getUserDataProps = {
  user: {id: string, token: string};
}

export async function getUserData({user}: getUserDataProps) {

  try {
    const request =  await Api.get(`users/${user.id}`)
    return request.data
  } catch (error) {
    return error
  }

}